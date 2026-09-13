import { features } from 'data/landing/alternate-landing-data';
import FeatureSection from './FeatureSection';

/** `+Features` in landing-2/Features.pug */
const Features = () => (
  <section className="pt-13 pb-10" id="feature">
    <div className="container-small lg:px-12 2xl:px-4">
      <div className="text-center mb-18 md:mb-8">
        <h5 className="text-info mb-4">Features</h5>
        <h2 className="mb-4 leading-normal">
          Complete suite of <br className="sm:hidden" />
          payment products.
        </h2>
        <p className="mb-0">
          Focus only on functionalities for your digital products with Phoenix!
          Leave the UIs for us.
        </p>
        <div className="text-center mt-8">
          <a className="btn btn-outline-primary" href="#!">
            See more
            <span className="fa-solid fa-angle-right ms-2" />
          </a>
        </div>
      </div>
      {features.map((feature, index) => (
        <FeatureSection
          key={feature.id}
          feature={feature}
          last={index === features.length - 1}
        />
      ))}
    </div>
  </section>
);

export default Features;
