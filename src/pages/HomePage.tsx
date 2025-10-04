import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { DeferredSection } from '../components/home/DeferredSection';
import {
  FeaturesSectionSkeleton,
  ProductSpotlightsSectionSkeleton,
  StorySectionSkeleton,
  NewsletterSectionSkeleton,
} from '../components/home/SectionSkeletons';

const FeaturesSection = lazy(() =>
  import('../components/home/FeaturesSection').then(module => ({ default: module.FeaturesSection }))
);

const ProductSpotlightsSection = lazy(() =>
  import('../components/home/ProductSpotlightsSection').then(module => ({ default: module.ProductSpotlightsSection }))
);

const StorySection = lazy(() =>
  import('../components/home/StorySection').then(module => ({ default: module.StorySection }))
);

const NewsletterSection = lazy(() =>
  import('../components/home/NewsletterSection').then(module => ({ default: module.NewsletterSection }))
);

export const HomePage: React.FC = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-mint-2 via-sea-green to-dartmouth-green text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brunswick-green/20 to-transparent" />
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-mint/10 to-transparent rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Hygiene.
              <br />
              <span className="text-celadon">Thoughtfully Designed.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-celadon leading-relaxed max-w-4xl mx-auto">
              Keep your spaces clean, safe, and fresh with our eco-friendly cleaning liquids, tissues, and dispensers trusted by homes &amp; businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/products">
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold border-2 border-celadon text-celadon hover:bg-celadon hover:text-brunswick-green shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DeferredSection
        fallback={<FeaturesSectionSkeleton />}
        rootMargin="300px"
      >
        <Suspense fallback={<FeaturesSectionSkeleton />}>
          <FeaturesSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection
        fallback={<ProductSpotlightsSectionSkeleton />}
        rootMargin="400px"
      >
        <Suspense fallback={<ProductSpotlightsSectionSkeleton />}>
          <ProductSpotlightsSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection
        fallback={<StorySectionSkeleton />}
        rootMargin="400px"
      >
        <Suspense fallback={<StorySectionSkeleton />}>
          <StorySection />
        </Suspense>
      </DeferredSection>

      <DeferredSection
        fallback={<NewsletterSectionSkeleton />}
        rootMargin="400px"
      >
        <Suspense fallback={<NewsletterSectionSkeleton />}>
          <NewsletterSection />
        </Suspense>
      </DeferredSection>
    </div>
  );
};
