import { cn } from '@hummingbirdui/react';
import type { Feature } from 'data/landing/default-landing-data';

interface FeatureSectionProps {
  feature: Feature;
  /** the gold's first row uses `mt-24`, the following ones `mt-2` */
  first?: boolean;
}

/** One image/copy row of `+Features` in landing-1/Features.pug */
const FeatureSection = ({ feature, first }: FeatureSectionProps) => {
  const { lightImage, darkImage, imageHeight, label, title, details, link } =
    feature;

  return (
    <div
      className={cn(
        'row items-center justify-between text-center lg:text-start mb-10 lg:mb-0',
        first ? 'mt-24' : 'mt-2'
      )}
    >
      <div
        className={cn('lg:col-5', { 'order-0 lg:order-1': feature.reverse })}
      >
        <img
          className="feature-image mb-16 lg:mb-0 dark:hidden"
          src={lightImage}
          height={imageHeight}
          alt=""
        />
        <img
          className="feature-image mb-16 lg:mb-0 hidden dark:block"
          src={darkImage}
          height={imageHeight}
          alt=""
        />
      </div>
      <div className="lg:col-6 text-center lg:text-start">
        <h6 className="text-primary mb-2 tracking-[0.165em]">{label}</h6>
        <h3 className="font-black mb-4">{title}</h3>
        <p className="mb-6 md:px-12 lg:px-0">{details}</p>
        <a className="btn btn-link me-2 p-0 text-md" href={link} role="button">
          Check Demo
          <i className="fa-solid fa-angle-right ms-2" />
        </a>
      </div>
    </div>
  );
};

export default FeatureSection;
