import React from 'react';
import { Timer, Type, Target, Percent } from 'lucide-react';
import { StatCard } from './StatCard';
import { TypingStats } from '../../types';

interface StatsProps {
  stats: TypingStats;
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <StatCard
        icon={<Timer className="w-6 h-6" />}
        label="WPM"
        value={Math.round(stats.wpm)}
        color="indigo"
      />
      <StatCard
        icon={<Percent className="w-6 h-6" />}
        label="Accuracy"
        value={Math.round(stats.accuracy)}
        suffix="%"
        color="green"
      />
      <StatCard
        icon={<Type className="w-6 h-6" />}
        label="Correct"
        value={stats.correctChars}
        color="purple"
      />
      <StatCard
        icon={<Target className="w-6 h-6" />}
        label="Errors"
        value={stats.incorrectChars}
        color="red"
      />
    </div>
  );
};