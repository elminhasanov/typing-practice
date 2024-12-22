import React from 'react';

interface WordDisplayProps {
  words: string[];
  currentIndex: number;
  typedText: string;
}

export const WordDisplay: React.FC<WordDisplayProps> = ({
  words,
  currentIndex,
  typedText,
}) => {
  return (
    <div className="bg-white backdrop-blur-sm bg-opacity-90 p-8 rounded-2xl shadow-lg mb-8 border border-indigo-50">
      <div className="text-xl leading-relaxed font-mono max-h-[150px] overflow-y-auto custom-scrollbar">
        {words.map((word, index) => {
          const isCurrentWord = index === currentIndex;
          let wordClass = "inline-block mx-1.5 py-1 transition-all duration-200 ";
          
          if (index < currentIndex) {
            wordClass += "text-indigo-300";
          } else if (isCurrentWord) {
            wordClass += "text-indigo-900 bg-indigo-50 px-2 rounded-md border-b-2 border-indigo-400";
          } else {
            wordClass += "text-gray-600";
          }
          
          return (
            <span key={index} className={wordClass}>
              {word}
            </span>
          );
        })}
      </div>
    </div>
  );
};