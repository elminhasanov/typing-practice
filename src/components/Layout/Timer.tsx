import React from 'react';
import { useTypingContext } from '../../context/TypingContext';

export const Timer: React.FC = () => {
  const { timeLeft } = useTypingContext();
  
  return (
    <div className="inline-block px-6 py-2 bg-white rounded-full shadow-sm">
      <p className="text-gray-700 font-medium">
        Time remaining: <span className="text-indigo-600 font-bold">{timeLeft}s</span>
      </p>
    </div>
  );
};