import React, { ReactNode } from 'react';
import { useDeferredRender } from '../../hooks/useDeferredRender';

interface DeferredSectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number | number[];
  className?: string;
}

export const DeferredSection: React.FC<DeferredSectionProps> = ({
  children,
  fallback = null,
  rootMargin = '200px',
  threshold = 0,
  className,
}) => {
  const [ref, shouldRender] = useDeferredRender<HTMLDivElement>({ rootMargin, threshold });

  return (
    <div ref={ref} className={className}>
      {shouldRender ? children : fallback}
    </div>
  );
};
