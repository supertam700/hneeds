import { useEffect, useRef, useState } from 'react';

interface DeferredRenderOptions {
  rootMargin?: string;
  threshold?: number | number[];
}

export const useDeferredRender = <T extends HTMLElement = HTMLElement>(
  { rootMargin = '0px', threshold = 0 }: DeferredRenderOptions = {}
) => {
  const [shouldRender, setShouldRender] = useState(false);
  const nodeRef = useRef<T | null>(null);

  useEffect(() => {
    const element = nodeRef.current;

    if (!element || shouldRender) {
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries.some(entry => entry.isIntersecting);

        if (isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [shouldRender, rootMargin, JSON.stringify(threshold)]);

  return [nodeRef, shouldRender] as const;
};
