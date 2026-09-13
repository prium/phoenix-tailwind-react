import boltIlls from 'assets/img/icons/illustrations/bolt.png';
import pie from 'assets/img/icons/illustrations/pie.png';
import { defaultFeatures } from 'data/landing/default-landing-data';
import FeatureSection from './FeatureSection';

/** `+Features` in landing-1/Features.pug */
const Features = () => (
  <section className="pt-30 pb-0" id="feature">
    <div className="container-small lg:px-12 2xl:px-4">
      <div className="relative z-2">
        <div className="row">
          <div className="lg:col-6 text-center lg:text-start 2xl:pe-4">
            <h4 className="text-primary font-extrabold mb-6">Features</h4>
            <h2 className="mb-4 text-emphasis leading-normal">
              Seamless Payments: A Fully <br className="md:hidden" />
              Integrated Suite
            </h2>
            <p className="mb-8">
              With the power of Phoenix, you can now focus only on functionaries
              for your digital products, while leaving the UI design on us!With
              the power of Phoenix, you can now focus only on functionaries for
              your digital products, while leaving the UI design on us!
            </p>
            <a
              className="btn btn-lg btn-outline-primary rounded-full me-2"
              href="#!"
              role="button"
            >
              Find out more
              <i className="fa-solid fa-angle-right ms-2" />
            </a>
          </div>
          <div className="sm:col-6 lg:col-3 mt-12 text-center lg:text-start">
            <div className="h-full flex flex-col justify-between">
              <div className="lg:border-s border-subtle border-dashed ps-6">
                <img
                  className="mb-6"
                  src={boltIlls}
                  width={48}
                  height={48}
                  alt=""
                />
                <div>
                  <h5 className="font-black mb-2">Lightning Speed</h5>
                  <p className="font-semibold leading-sm">
                    Present everything you need in one place within minutes!
                    Grow with Phoenix!
                  </p>
                </div>
                <div>
                  <a
                    className="btn btn-link me-2 p-0 text-md"
                    href="#!"
                    role="button"
                  >
                    Check Demo
                    <span className="fa-solid fa-angle-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-6 lg:col-3 mt-12 text-center lg:text-start">
            <div className="h-full flex flex-col">
              <div className="lg:border-s border-subtle border-dashed ps-6">
                <img className="mb-6" src={pie} width={48} height={48} alt="" />
                <div>
                  <h5 className="font-black mb-2">All-in-one solution</h5>
                  <p className="font-semibold leading-sm">
                    Show your production and growth graph in one place with
                    Phoenix!
                  </p>
                </div>
                <div>
                  <a
                    className="btn btn-link me-2 p-0 text-md"
                    href="#!"
                    role="button"
                  >
                    Check Demo
                    <i className="fa-solid fa-angle-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {defaultFeatures.map((feature, index) => (
          <FeatureSection
            key={feature.label}
            feature={feature}
            first={index === 0}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
