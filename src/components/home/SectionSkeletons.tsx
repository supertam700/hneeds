import React from 'react';

const shimmer = 'animate-pulse';

const textPlaceholder = 'text-transparent bg-white/20 rounded select-none';

export const FeaturesSectionSkeleton: React.FC = () => (
  <section aria-hidden className="py-16 bg-gradient-to-b from-nyanza to-celadon">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {['High-Quality Products', 'Eco-Friendly Focus', 'Customer-Centric Service', 'Affordable Pricing'].map(title => (
          <div key={title} className="text-center space-y-3">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/60 ${shimmer} mb-1`}>
              <span className="sr-only">Icon placeholder</span>
            </div>
            <h3 className={`text-xl font-semibold ${textPlaceholder} px-4 py-1 mx-auto w-4/5`}>
              {title}
            </h3>
            <p className={`${textPlaceholder} px-4 py-2 mx-auto w-11/12`}>Placeholder description</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProductCardSkeleton: React.FC<{ gradient: string; badgeText: string }> = ({ gradient, badgeText }) => (
  <div className={`bg-gradient-to-br ${gradient} rounded-3xl shadow-lg p-8 lg:p-12 border border-white/30`} aria-hidden>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-brunswick-green ${textPlaceholder} px-4 py-2 w-3/4`}>
          Placeholder Title
        </h2>
        <p className={`${textPlaceholder} px-4 py-3 w-full lg:w-11/12`}>Placeholder paragraph copy</p>
        <ul className="space-y-3 mb-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={index} className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-white/40 mr-4" />
              <span className={`${textPlaceholder} px-3 py-1 w-3/4`}>Placeholder bullet</span>
            </li>
          ))}
        </ul>
        <div className={`${textPlaceholder} px-6 py-3 w-48 rounded-full mx-0 ${shimmer}`}>Button</div>
      </div>
      <div className="text-center relative">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/60 h-72 mx-auto w-full max-w-md flex items-center justify-center">
          <span className="sr-only">Image placeholder</span>
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className={`${textPlaceholder} px-6 py-2 rounded-full text-sm font-semibold shadow-lg ${shimmer}`}>
            {badgeText}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ProductSpotlightsSectionSkeleton: React.FC = () => (
  <section aria-hidden className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <ProductCardSkeleton gradient="from-nyanza to-celadon/30" badgeText="Plant-Powered Cleaning" />
      <ProductCardSkeleton gradient="from-celadon/30 to-mint/20" badgeText="Gentle on Fabrics" />
      <ProductCardSkeleton gradient="from-mint/20 to-sea-green/20" badgeText="Natural Protection" />

      <div className="relative z-10 text-center bg-gradient-to-r from-brunswick-green to-dark-green text-white rounded-2xl shadow-xl p-12 overflow-hidden" aria-hidden>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="relative z-10 space-y-8">
          <div className={`mx-auto mb-8 relative overflow-hidden rounded-lg shadow-xl cursor-default`} style={{ paddingTop: '64.28%' }}>
            <div className="absolute inset-0 bg-white/40" />
          </div>
          <h2 className={`${textPlaceholder} text-4xl md:text-5xl font-bold px-6 py-3 mx-auto w-2/3`}>Combo headline</h2>
          <p className={`${textPlaceholder} text-xl px-6 py-3 mx-auto w-3/4`}>Combo description</p>
          <div className={`${textPlaceholder} px-8 py-4 mx-auto w-56 rounded-full ${shimmer}`}>Combo CTA</div>
        </div>
      </div>
    </div>
  </section>
);

export const StorySectionSkeleton: React.FC = () => (
  <section aria-hidden className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="bg-gradient-to-br from-nyanza to-celadon/30 rounded-2xl shadow-lg p-12 border border-celadon/30 space-y-6">
        <h2 className={`${textPlaceholder} text-3xl md:text-4xl font-bold px-6 py-3 mx-auto w-3/4`}>Story headline</h2>
        <p className={`${textPlaceholder} text-xl px-6 py-3 mx-auto w-10/12`}>Story copy</p>
        <div className={`${textPlaceholder} px-8 py-4 mx-auto w-48 rounded-full ${shimmer}`}>Story CTA</div>
      </div>
    </div>
  </section>
);

export const NewsletterSectionSkeleton: React.FC = () => (
  <section aria-hidden className="bg-gradient-to-r from-brunswick-green to-dark-green text-white py-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-dark-green/50 to-transparent" />
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-mint/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-celadon/10 rounded-full blur-3xl" />
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <h2 className={`${textPlaceholder} text-3xl font-bold px-4 py-2 mx-auto w-3/5`}>Newsletter headline</h2>
      <p className={`${textPlaceholder} text-xl px-4 py-2 mx-auto w-3/4`}>Newsletter copy</p>
      <div className="mx-auto flex max-w-md flex-col sm:flex-row gap-4">
        <div className={`${textPlaceholder} h-12 flex-1 ${shimmer}`} />
        <div className={`${textPlaceholder} h-12 w-32 rounded-lg ${shimmer}`} />
      </div>
    </div>
  </section>
);
