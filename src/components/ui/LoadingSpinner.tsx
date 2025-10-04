import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
  inline?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = '',
  text = 'Loading...',
  inline = false,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  if (inline) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <Loader2 className={`animate-spin text-green-600 ${sizeClasses[size]} mr-2`} />
        {text && <span className="text-sm text-gray-600">{text}</span>}
      </div>
    );
  }
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center">
        <Loader2 className={`animate-spin text-green-600 ${sizeClasses[size]}`} />
        {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
      </div>
    </div>
  );
};