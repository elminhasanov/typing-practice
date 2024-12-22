import React from 'react';
import { Keyboard } from 'lucide-react';
import { Timer } from './Timer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Keyboard className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
              Typing Practice
            </h1>
          </div>
          <Timer />
        </div>
        {children}
      </div>
    </div>
  );
};