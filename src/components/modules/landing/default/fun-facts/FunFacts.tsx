import CountUp from 'react-countup';

import bg13 from 'assets/img/bg/bg-13.png';
import bgLeft21 from 'assets/img/bg/bg-left-21.png';
import bgRight21 from 'assets/img/bg/bg-right-21.png';
import capterra from 'assets/img/generic/capterra.png';
import { funFacts } from 'data/landing/default-landing-data';

/**
 * `+FunFacts` in landing-1/FunFacts.pug. The gold's `[data-countup]` headings
 * animate from 0 over 10s, so they can never match a screenshot taken at a
 * fixed delay — the visual entry masks `[data-countup]` on both sides, which is
 * why the attribute is mirrored here.
 */
const FunFacts = () => (
  <div className="relative">
    <div
      className="bg-holder world-map-bg"
      style={{ backgroundImage: `url(${bg13})` }}
    />
    <div
      className="bg-holder z-2! bg-right! bg-auto! opacity-25"
      style={{ backgroundImage: `url(${bgRight21})` }}
    />
    <div
      className="bg-holder z-2! bg-right! bg-auto! mt-9 opacity-25"
      style={{ backgroundImage: `url(${bgLeft21})` }}
    />
    <svg
      className="w-full relative"
      preserveAspectRatio="none"
      viewBox="0 0 1920 368"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="fill-emphasis-bg" d="M1920 0.44L0 367.74V0H1920V0.44Z" />
    </svg>
    <section className="overflow-hidden z-2">
      <div className="container-small lg:px-12 2xl:px-4" data-hb-theme="light">
        <div className="relative">
          <div className="row mb-10">
            <div className="xl:col-6 text-center md:text-start">
              <h2 className="text-white mb-2">
                Being used by millions of users
              </h2>
              <h1 className="md:text-4xl xl:text-5xl font-black text-gradient-info uppercase mb-6 md:mb-0">
                WORLDWIDE
              </h1>
            </div>
            <div className="xl:col-6 text-center md:text-start">
              <p className="text-white">
                You can get all the reports, data analysis, and growth maps you
                need with the help of Phoenix&apos;s power, and you may review
                and modify them whenever you want. These features make this
                dashboard outstanding.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="xl:col-8 text-center md:text-start mb-10 xl:mb-0">
              <div className="md:flex md:justify-between">
                {funFacts.map(fact => (
                  <div className="mb-10 md:mb-0 me-6" key={fact.id}>
                    <h1
                      className="display-1 text-white font-extrabold"
                      data-countup={JSON.stringify({
                        endValue: fact.endValue,
                        duration: fact.duration,
                        ...(fact.suffix ? { suffix: fact.suffix } : {})
                      })}
                    >
                      <CountUp
                        end={fact.endValue}
                        duration={fact.duration}
                        suffix={fact.suffix}
                      />
                    </h1>
                    <p className="text-white">
                      {fact.lines[0]}
                      <br className="md:hidden lg:block" />
                      {fact.lines[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="xl:col-4 text-center md:text-start">
              <img src={capterra} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <svg
      className="w-full relative -mb-px"
      viewBox="0 0 1920 368"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-emphasis-bg"
        d="M0 368L1920 0.730011L1920 368L0 368Z"
      />
    </svg>
  </div>
);

export default FunFacts;
