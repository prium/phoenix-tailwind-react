import Lottie from 'lottie-react';

import earthDark from 'assets/img/animated-icons/rotating-earth-dark.json';
import earthLight from 'assets/img/animated-icons/rotating-earth.json';
import earthPlane from 'assets/img/spot-illustrations/earth-plane.png';
import earthPlaneDark from 'assets/img/spot-illustrations/earth-plane-dark.png';
import { services } from 'data/landing/alternate-landing-data';

/** `+FunFacts` in landing-2/FunFacts.pug — the rotating-earth "one-stop" block */
const OneStopSolution = () => (
  <section className="overflow-hidden rotating-earth-container pb-8 md:pb-0 pt-24">
    <div className="container-small lg:px-12 2xl:px-4">
      <div className="row">
        <div className="lg:col-6 text-center lg:text-start">
          <h5 className="text-info mb-4">One-stop solution</h5>
          <h2 className="mb-2 leading-normal">Used by millions of users</h2>
          <h1 className="text-3xl sm:text-5xl mb-4 text-gradient-info font-black">
            WORLDWIDE
          </h1>
          <p className="mb-18">
            Keep it simple with Phoenix and help your organization grow with the
            abundance you look for.
          </p>
          <div className="row gy-10">
            {services.map(service => (
              <div
                className="sm:col-6 text-center lg:text-start"
                key={service.id}
              >
                <img
                  className="mb-6 dark:hidden"
                  src={service.lightImg}
                  alt=""
                />
                <img
                  className="mb-6 hidden dark:block"
                  src={service.darkImg}
                  alt=""
                />
                <h4 className="mb-2">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-auto">
          <div className="relative lg:absolute rotating-earth">
            <Lottie animationData={earthLight} className="lottie dark:hidden" />
            <Lottie
              animationData={earthDark}
              className="lottie hidden dark:block"
            />
            <img className="absolute dark:hidden" src={earthPlane} alt="" />
            <img
              className="absolute hidden dark:block"
              src={earthPlaneDark}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OneStopSolution;
