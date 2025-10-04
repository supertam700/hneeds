import React, { useState, useRef, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';

interface BlurhashImageProps {
  src: string;
  blurhash: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
  srcSet?: string;
  sources?: Array<{
    type?: string;
    srcSet: string;
    sizes?: string;
  }>;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync';
  fetchpriority?: 'high' | 'low' | 'auto';
}

export const LOGO_IMAGE = {
  src: '/images/logo/HNEEDS_s2utqr_c_scale,w_200.png',
  srcSet: [
    '/images/logo/HNEEDS_s2utqr_c_scale,w_200.png 1x',
    '/images/logo/HNEEDS_s2utqr_c_scale,w_604.png 2x',
    '/images/logo/HNEEDS_s2utqr_c_scale,w_862.png 3x',
  ].join(', '),
  webpSrcSet: [
    '/images/logo/HNEEDS_s2utqr_c_scale,w_200.webp 1x',
    '/images/logo/HNEEDS_s2utqr_c_scale,w_604.webp 2x',
    '/images/logo/HNEEDS_s2utqr_c_scale,w_862.webp 3x',
  ].join(', '),
  sizes: '(max-width: 640px) 150px, 200px',
  blurhash: 'LGG+db-P7Nt1cuWFR+R+?INGD%eo',
  width: 1400,
  height: 364,
  aspectRatio: '1400 / 364',
} as const;

export const BlurhashImage: React.FC<BlurhashImageProps> = ({
  src,
  blurhash,
  alt,
  width,
  height,
  className = '',
  style,
  sizes,
  srcSet,
  sources,
  loading = 'lazy',
  decoding = 'async',
  fetchpriority,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height, ...style }}
    >
      {/* Blurhash Placeholder */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0">
          <Blurhash
            hash={blurhash}
            width={width}
            height={height}
            resolutionX={32}
            resolutionY={32}
            punch={1}
            className="w-full h-full"
          />
        </div>
      )}

      {/* High-Quality Image */}
      {isInView && (
        <picture
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {sources?.map((source, index) => (
            <source
              key={`${source.srcSet}-${index}`}
              type={source.type}
              srcSet={source.srcSet}
              sizes={source.sizes}
            />
          ))}
          <img
            ref={imgRef}
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            decoding={decoding}
            fetchPriority={fetchpriority}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className="w-full h-full object-contain"
          />
        </picture>
      )}

      {/* Error Fallback */}
      {imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-celadon-2 to-mint rounded-xl flex items-center justify-center">
          <span className="text-dartmouth-green font-medium">Image unavailable</span>
        </div>
      )}

      {/* Loading Indicator */}
      {isInView && !imageLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-mint-2"></div>
        </div>
      )}
    </div>
  );
};
