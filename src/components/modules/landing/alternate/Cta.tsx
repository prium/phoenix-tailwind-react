import { Input } from '@hummingbirdui/react';

import bg38 from 'assets/img/bg/bg-38.png';
import bgLeft24 from 'assets/img/bg/bg-left-24.png';
import bgRight24 from 'assets/img/bg/bg-right-24.png';
import illustration37 from 'assets/img/spot-illustrations/37.png';
import illustration37dark from 'assets/img/spot-illustrations/37_2.png';

/** `+Cta` in landing-2/Cta.pug */
const Cta = () => (
  <section className="bg-default dark:bg-subtle pb-18 overflow-hidden">
    <div className="container-small lg:px-12 2xl:px-4">
      <div className="absolute w-full h-full start-0 end-0 opacity-50 -bottom-87.5 -skew-y-8 bg-[linear-gradient(102.27deg,#38ABFF_4.69%,#3874FF_106.27%)]" />
      <div
        className="bg-holder bg-auto! bg-position-[left_center]!"
        style={{ backgroundImage: `url(${bgLeft24})` }}
      />
      <div
        className="bg-holder bg-auto! bg-position-[right_center]!"
        style={{ backgroundImage: `url(${bgRight24})` }}
      />
      <div className="row justify-center">
        <div className="col-12 text-center">
          <div className="card md:py-16 md:px-26 border-0 z-1 shadow-lg">
            <div
              className="bg-holder bg-center! bg-size-[100%]!"
              style={{ backgroundImage: `url(${bg38})` }}
            />
            <div className="card-body relative">
              <img
                className="mb-8 w-65 dark:hidden mx-auto"
                src={illustration37}
                alt="..."
              />
              <img
                className="mb-8 w-65 hidden dark:block mx-auto"
                src={illustration37dark}
                alt="..."
              />
              <p className="font-bold">
                2008 Premium Icons{' '}
                <span className="text-primary text-xl">.</span> Included FREE
                with it
              </p>
              <h1 className="text-xl sm:text-3xl lg:text-5xl font-extrabold leading-sm mb-4">
                Join<span className="gradient-text-primary mx-2">Phoenix</span>
                <span>Today</span>
              </h1>
              <form className="flex justify-center mb-4 2xl:px-30">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Cta;
