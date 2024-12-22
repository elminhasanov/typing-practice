import { useState, useCallback, useEffect } from 'react';
import { TypingStats, WordBank } from '../types';
import { getRandomWords } from '../utils/words';
import { calculateStats, isWordComplete } from '../utils/typing';

const WORD_COUNT = 25;
const TEST_DURATION = 60;

export const useTypingTest = () => {
  const [wordBank, setWordBank] = useState<WordBank>({
    words: getRandomWords(WORD_COUNT),
    currentIndex: 0,
  });
  
  const [typedText, setTypedText] = useState('');
  const [isTestActive, setIsTestActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION);
  const [stats, setStats] = useState<TypingStats>({
    wpm: 0,
    accuracy: 100,
    correctChars: 0,
    incorrectChars: 0,
    totalChars: 0,
  });

  const resetTest = useCallback(() => {
    setWordBank({
      words: getRandomWords(WORD_COUNT),
      currentIndex: 0,
    });
    setTypedText('');
    setTimeLeft(TEST_DURATION);
    setStats({
      wpm: 0,
      accuracy: 100,
      correctChars: 0,
      incorrectChars: 0,
      totalChars: 0,
    });
    setIsTestActive(false);
  }, []);

  useEffect(() => {
    let timer: number;
    if (isTestActive && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsTestActive(false);
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTestActive, timeLeft]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isTestActive && e.target.value.length > 0) {
      setIsTestActive(true);
    }

    const newValue = e.target.value;
    setTypedText(newValue);

    const currentWord = wordBank.words[wordBank.currentIndex];
    const elapsedTime = TEST_DURATION - timeLeft;
    
    setStats(prev => calculateStats(newValue, currentWord, prev, elapsedTime));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
      const currentWord = wordBank.words[wordBank.currentIndex];
      
      if (isWordComplete(typedText, currentWord) && wordBank.currentIndex < wordBank.words.length - 1) {
        setWordBank(prev => ({
          ...prev,
          currentIndex: prev.currentIndex + 1,
        }));
        setTypedText('');
      }
    }
  };

  return {
    wordBank,
    typedText,
    isTestActive,
    timeLeft,
    stats,
    resetTest,
    handleInputChange,
    handleKeyDown,
  };
};