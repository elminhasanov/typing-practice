// Utility functions for typing calculations and validations
export const calculateStats = (
  newValue: string,
  currentWord: string,
  prevStats: {
    correctChars: number;
    incorrectChars: number;
    totalChars: number;
  },
  elapsedTime: number
) => {
  if (!currentWord) return prevStats;

  const correctChars = newValue
    .split('')
    .filter((char, i) => char === currentWord[i])
    .length;
  const incorrectChars = newValue.length - correctChars;

  const totalCorrectChars = prevStats.correctChars + correctChars;
  const totalChars = prevStats.totalChars + newValue.length;

  return {
    correctChars: totalCorrectChars,
    incorrectChars: prevStats.incorrectChars + incorrectChars,
    totalChars,
    accuracy: totalChars > 0 ? Math.round((totalCorrectChars / totalChars) * 100) : 100,
    wpm: elapsedTime > 0 ? Math.round((totalCorrectChars / 5) * (60 / elapsedTime)) : 0,
  };
};

export const isWordComplete = (
  typedText: string,
  currentWord: string | undefined
): boolean => {
  if (!currentWord) return false;
  return typedText.trim() === currentWord;
};