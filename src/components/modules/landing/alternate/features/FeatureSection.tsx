import { cn } from '@hummingbirdui/react';
import type { Feature } from 'data/landing/alternate-landing-data';

interface FeatureSectionProps {
  feature: Feature;
  /** the gold drops the bottom margin on the last row */
  last?: boolean;
}

/** One row of `+Features` in landing-2/Features.pug */
const FeatureSection = ({ feature, last }: FeatureSectionProps) => (
  <div
    className={cn('row flex-between-center xl:px-20', {
      'mb-10 md:mb-16': !last
    })}
  >
    <div className="md:col-6 order-1 md:order-0 text-center md:text-start">
      <h4 className="mb-4">{feature.title}</h4>
      <p className="mb-8">{feature.description}</p>
      <a className="btn btn-link me-2 p-0 text-md" href="#!" role="button">
        Check Demo
        <i className="fa-solid fa-angle-right ms-2" />
      </a>
    </div>
    <div className="md:col-5 mb-8 md:mb-0 text-center">
      <img
        className="w-3/4 md:w-full dark:hidden"
        src={feature.lightImg}
        alt=""
      />
      <img
        className="w-3/4 md:w-full hidden dark:block"
        src={feature.darkImg}
        alt=""
      />
    </div>
  </div>
);

export default FeatureSection;
