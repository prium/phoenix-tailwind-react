import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from '@hummingbirdui/react';

import bg18 from 'assets/img/bg/bg-18.png';
import illustration27 from 'assets/img/spot-illustrations/27.png';
import illustration27dark from 'assets/img/spot-illustrations/dark_27.png';

/** `+Cta` in landing-1/Cta.pug */
const Cta = () => (
  <section className="bg-soft pb-0">
    <div className="container-small relative lg:px-12 2xl:px-4">
      <div className="row justify-center">
        <div className="col-12 text-center">
          <div className="card md:py-16 md:px-26 border-0 z-1 shadow-lg cta-card">
            <div
              className="bg-holder bg-right! bg-auto!"
              style={{ backgroundImage: `url(${bg18})` }}
            />
            <div className="card-body relative">
              <img
                className="mx-auto mb-8 w-52.5 dark:hidden"
                src={illustration27}
                alt="..."
              />
              <img
                className="mx-auto mb-8 w-52.5 hidden dark:block"
                src={illustration27dark}
                alt="..."
              />
              <div className="flex items-center font-bold justify-center mb-4">
                <p className="mb-0">2008 Premium Icons </p>
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-primary"
                  transform="shrink-12"
                />
                <p className="mb-0">Included FREE with it</p>
              </div>
              <h1 className="text-xl sm:text-3xl lg:text-5xl font-extrabold leading-sm mb-4">
                Join<span className="gradient-text-primary mx-2">Phoenix</span>
                <span>Today</span>
              </h1>
              <form className="flex justify-center mb-4 2xl:px-24">
                <div className="grid sm:block" />
                <Input
                  className="flex-1 me-4"
                  id="ctaEmail1"
                  type="email"
                  placeholder="Email"
                  aria-describedby="ctaEmail1"
                />
                <button className="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </form>
              <p>Best support in the world, Only Phoenix can ensure </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Cta;
