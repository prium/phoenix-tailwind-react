import bgLeft from 'assets/img/bg/bg-left-25.png';
import bgRight from 'assets/img/bg/bg-right-25.png';
import classNames from 'classnames';
import { Stat, stats } from 'data/landing/alternate-landing-data';
import { Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { Ref } from 'react';

const StatItem = ({ stat }: { stat: Stat }) => {
  return (
    <CountUp
      end={stat.value}
      prefix={stat.prefix}
      suffix={stat.suffix}
      separator=","
      enableScrollSpy
    >
      {({ countUpRef }) => (
        <div>
          <h1
            className="text-4xl lg:text-6xl font-black text-info mb-4"
            ref={countUpRef as Ref<HTMLHeadingElement>}
          />
          <h4>{stat.title}</h4>
        </div>
      )}
    </CountUp>
  );
};

const Stats = () => {
  return (
    <section className="counter-container">
      <div className="absolute start-0 end-0 w-full counter-overlay" />
      <div
        className="bg-holder hidden lg:block"
        style={{
          backgroundImage: `url(${bgLeft})`,
          backgroundSize: 'auto',
          backgroundPosition: 'left center'
        }}
      />
      <div
        className="bg-holder hidden lg:block"
        style={{
          backgroundImage: `url(${bgRight})`,
          backgroundSize: 'auto',
          backgroundPosition: 'right center'
        }}
      />
      <div className="container-small relative">
        <Row className="gx-0 gy-14 justify-center">
          {stats.map((stat, index) => (
            <Col
              sm={6}
              md="auto"
              key={stat.id}
              className={classNames('text-center', {
                'order-2 md:order-0': index === 0,
                'order-1 md:order-0': index === 1,
                'md:me-8 md:pe-8 md:border-e border-dashed border-subtle':
                  index !== stats.length - 1
              })}
            >
              <StatItem stat={stat} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Stats;
