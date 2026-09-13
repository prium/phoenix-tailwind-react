import { Row, cn } from '@hummingbirdui/react';
import illustration31 from 'assets/img/spot-illustrations/31.png';
import Button from 'components/base/Button';
import Badge from 'components/base/Badge';
import { Link } from 'react-router';
import { importantApplications } from 'data/showcase';
import bg29 from 'assets/img/bg/29.png';
import bg28 from 'assets/img/bg/28.png';
import { useRef } from 'react';
import useParallaxHooks from 'hooks/useParallaxHooks';

type Application = (typeof importantApplications)[number];

/** One tile — `mixins/showcase/ImportantApplications.pug`. */
const ApplicationItem = ({
  application,
  first
}: {
  application: Application;
  first: boolean;
}) => (
  <div className={cn('md:col-9 lg:col-6 2xl:col-4', first && 'mb-12 lg:mb-0')}>
    <div className="text-center">
      <img
        src={application.thumb}
        alt=""
        className="w-137.5 mb-8 lg:mb-12 shadow rounded-md max-w-full"
      />
      {application.badge ? (
        <div className="flex items-center justify-center mb-4">
          <h4 className="text-highlight mb-0">{application.title}</h4>
          <Badge
            variant="phoenix"
            bg={application.badge.bg}
            label={false}
            className="ms-2 text-sm"
          >
            {application.badge.label}
          </Badge>
        </div>
      ) : (
        <h4 className="text-highlight mb-4">{application.title}</h4>
      )}
      <p className="text-subtle leading-sm pb-2 lg:pb-6">
        {application.details}
      </p>
      <Button variant="primary" asChild>
        {/* the gold leaves the Email button without `text-light` */}
        <Link
          to={application.link}
          className={cn(application.title !== 'Email' && 'text-light')}
        >
          {application.btnLabel}
        </Link>
      </Button>
    </div>
  </div>
);

/** `mixins/showcase/ImportantApplications.pug` */
const ImportantApplications = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const parallaxElRef = useRef<(HTMLDivElement | null)[]>([]);

  useParallaxHooks(
    containerRef as React.MutableRefObject<HTMLDivElement | null>,
    parallaxElRef
  );

  // the gold lays the six apps out as three two-up rows
  const pairs = importantApplications.reduce<Application[][]>((acc, app, i) => {
    if (i % 2 === 0) acc.push([app]);
    else acc[acc.length - 1].push(app);
    return acc;
  }, []);

  return (
    <section className="md:py-15" ref={containerRef}>
      <div
        className="bg-holder hidden lg:block bg-position-[left_10%]! bg-size-[15%]! -z-10!"
        style={{ backgroundImage: `url(${bg29})` }}
        ref={el => {
          parallaxElRef.current?.push(el);
        }}
        data-parallax={JSON.stringify({ y: '40%' })}
      />
      <div
        className="bg-holder hidden lg:block bg-position-[right_10%]! bg-size-[15%]! -z-10!"
        style={{ backgroundImage: `url(${bg28})` }}
        ref={el => {
          parallaxElRef.current?.push(el);
        }}
        data-parallax={JSON.stringify({ y: '50%' })}
      />

      <div className="lg:container">
        <Row className="justify-center">
          <div className="col-12 md:col-9 xl:col-8 2xl:col-6 text-center">
            <h2 className="mb-8 leading-loose">
              <span className="text-primary relative">
                Important applications
                <img
                  src={illustration31}
                  alt=""
                  className="text-illustration-underline"
                />
              </span>
              <span className="text-highlight font-normal ms-2">
                you’re definitely gonna need
              </span>
            </h2>
          </div>
        </Row>
        {pairs.map(pair => (
          <Row key={pair[0].title} className="justify-center mt-12 lg:mt-20">
            {pair.map((application, i) => (
              <ApplicationItem
                key={application.title}
                application={application}
                first={i === 0}
              />
            ))}
          </Row>
        ))}
      </div>
    </section>
  );
};

export default ImportantApplications;
