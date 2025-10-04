import React from 'react';
import DOMPurify from 'dompurify';

interface ProductDescriptionProps {
  description?: string;
  descriptionHtml?: string;
  className?: string;
  title?: string;
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
  descriptionHtml,
  className = '',
  title = 'Product Details',
}) => {
  const getContent = (): string => {
    if (descriptionHtml) {
      return DOMPurify.sanitize(descriptionHtml);
    }
    
    if (description) {
      return DOMPurify.sanitize(
        description
          .replace(/\n\n/g, '</p><p>')
          .replace(/\n/g, '<br>')
          .replace(/^(.+)$/, '<p>$1</p>')
      );
    }
    
    return '<p>No description available.</p>';
  };

  if (!description && !descriptionHtml) {
    return null;
  }

  return (
    <div className={`product-description bg-gradient-to-br from-nyanza to-celadon/20 p-6 rounded-xl border border-mint/30 ${className}`}>
      {title && (
        <h3 className="text-xl font-bold text-brunswick-green mb-4">
          {title}
        </h3>
      )}
      <div 
        className="prose prose-sm max-w-none text-dartmouth-green leading-relaxed"
        dangerouslySetInnerHTML={{ __html: getContent() }}
      />
    </div>
  );
};