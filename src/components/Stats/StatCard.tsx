import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
  color: 'indigo' | 'green' | 'purple' | 'red';
}

export const StatCard: React.FC<StatCardProps> = ({ 
  icon, 
  label, 
  value, 
  suffix = '', 
  color 
}) => {
  const colorClasses = {
    indigo: 'text-indigo-600 bg-indigo-50',
    green: 'text-green-600 bg-green-50',
    purple: 'text-purple-600 bg-purple-50',
    red: 'text-red-600 bg-red-50'
  };

  return (
    <div className="bg-white backdrop-blur-sm bg-opacity-90 p-6 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-200">
      <div className={`inline-flex items-center justify-center p-3 rounded-lg ${colorClasses[color]} mb-4`}>
        {icon}
      </div>
      <h3 className="font-semibold text-gray-600 mb-2">{label}</h3>
      <p className="text-3xl font-bold text-gray-800">
        {value}{suffix}
      </p>
    </div>
  );
};