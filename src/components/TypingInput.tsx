import React, { ChangeEvent, KeyboardEvent } from 'react';

interface TypingInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

export const TypingInput: React.FC<TypingInputProps> = ({
  value,
  onChange,
  onKeyDown,
  disabled
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full p-5 text-lg rounded-xl border-2 border-indigo-100 focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200 shadow-sm bg-white backdrop-blur-sm bg-opacity-90 font-mono"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
        placeholder={disabled ? "Test complete!" : "Start typing..."}
        autoFocus
      />
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-400">
        Press space after each word
      </div>
    </div>
  );
};