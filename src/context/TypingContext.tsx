import React, { createContext, useContext } from 'react';
import { useTypingTest } from '../hooks/useTypingTest';

interface TypingContextType {
  timeLeft: number;
}

const TypingContext = createContext<TypingContextType | undefined>(undefined);

export const TypingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { timeLeft } = useTypingTest();

  return (
    <TypingContext.Provider value={{ timeLeft }}>
      {children}
    </TypingContext.Provider>
  );
};

export const useTypingContext = () => {
  const context = useContext(TypingContext);
  if (context === undefined) {
    throw new Error('useTypingContext must be used within a TypingProvider');
  }
  return context;
};