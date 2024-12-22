import React from 'react';
import { Layout } from './components/Layout';
import { WordDisplay } from './components/WordDisplay';
import { TypingInput } from './components/TypingInput';
import { Stats } from './components/Stats';
import { useTypingTest } from './hooks/useTypingTest';

const App: React.FC = () => {
  const {
    wordBank,
    typedText,
    isTestActive,
    timeLeft,
    stats,
    resetTest,
    handleInputChange,
    handleKeyDown,
  } = useTypingTest();

  return (
    <Layout>
      <WordDisplay
        words={wordBank.words}
        currentIndex={wordBank.currentIndex}
        typedText={typedText}
      />

      <div className="mb-10">
        <TypingInput
          value={typedText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={!isTestActive && timeLeft < 60}
        />
      </div>

      <Stats stats={stats} />

      {(!isTestActive && timeLeft < 60) && (
        <div className="mt-10 text-center">
          <button
            onClick={resetTest}
            className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg shadow-lg hover:from-indigo-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Try Again
          </button>
        </div>
      )}
    </Layout>
  );
};

export default App;