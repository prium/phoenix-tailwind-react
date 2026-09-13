import { cn } from '@hummingbirdui/react';
import CountUp from 'react-countup';

import bgLeft25 from 'assets/img/bg/bg-left-25.png';
import bgRight25 from 'assets/img/bg/bg-right-25.png';
import { stats, type Stat } from 'data/landing/alternate-landing-data';

const countupAttr = (stat: Stat) =>
  JSON.stringify({
    endValue: stat.value,
    duration: stat.duration,
    suffix: stat.countSuffix ?? ''
  });

const Counter = ({ stat }: { stat: Stat }) => (
  <CountUp
    end={stat.value}
    duration={stat.duration}
    suffix={stat.countSuffix}
  />
);

/**
 * `+Stats` in landing-2/Stats.pug. As on the default landing, the gold's
 * `[data-countup]` figures animate for 5–15s, so the visual suite masks that
 * selector — the attribute is mirrored here so one selector covers both sides.
 * The gold only wraps the counter in its own span where a static `$`/`K` sits
 * next to it; otherwise the `h1` is the countUp node.
 */
const Stats = () => (
  <section className="counter-container">
    <div className="absolute start-0 end-0 w-full counter-overlay -skew-y-8" />
    <div
      className="bg-holder bg-auto! bg-position-[left_center]! hidden lg:block"
      style={{ backgroundImage: `url(${bgLeft25})` }}
    />
    <div
      className="bg-holder bg-auto! bg-position-[right_center]! hidden lg:block"
      style={{ backgroundImage: `url(${bgRight25})` }}
    />
    <div className="container-small relative">
      <div className="row gx-0 gy-14 justify-center">
        {stats.map((stat, index) => {
          const inlineLabel = Boolean(stat.prefix || stat.suffix);
          return (
            <div
              key={stat.id}
              className={cn(
                'sm:col-6 md:col-auto text-center',
                index < stats.length - 1 &&
                  'md:me-8 md:pe-8 md:border-e border-subtle border-dashed',
                // the gold swaps the first two cards below md
                index === 0 && 'order-2 md:order-0',
                index === 1 && 'order-1 md:order-0'
              )}
            >
              <h1
                className="text-4xl lg:text-6xl font-extrabold text-info mb-4"
                data-countup={inlineLabel ? undefined : countupAttr(stat)}
              >
                {stat.prefix && <span>{stat.prefix}</span>}
                {inlineLabel ? (
                  <span data-countup={countupAttr(stat)}>
                    <Counter stat={stat} />
                  </span>
                ) : (
                  <Counter stat={stat} />
                )}
                {stat.suffix && <span>{stat.suffix}</span>}
              </h1>
              <h4>{stat.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Stats;
