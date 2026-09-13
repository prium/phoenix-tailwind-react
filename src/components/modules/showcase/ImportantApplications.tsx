import { Col, Container, Row } from 'react-bootstrap';
import illustration31 from 'assets/img/spot-illustrations/31.png';
import Button from 'components/base/Button';
import { Link } from 'react-router';
import { importantApplications } from 'data/showcase';
import bg29 from 'assets/img/bg/29.png';
import bg28 from 'assets/img/bg/28.png';
import { useRef } from 'react';
import useParallaxHooks from 'hooks/useParallaxHooks';
import classNames from 'classnames';
import Badge from 'components/base/Badge';

const ImportantApplications = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parallaxElRef = useRef<(HTMLDivElement | null)[]>([]);

  useParallaxHooks(containerRef, parallaxElRef);

  return (
    <section className="md:py-18" ref={containerRef}>
      <div
        className="bg-holder hidden lg:block"
        style={{
          backgroundImage: `url(${bg29})`,
          backgroundPosition: 'left 10%',
          backgroundSize: '15%'
        }}
        ref={el => {
          parallaxElRef.current?.push(el);
        }}
        data-parallax={JSON.stringify({ y: '40%' })}
      />

      <div
        className="bg-holder hidden lg:block"
        style={{
          backgroundImage: `url(${bg28})`,
          backgroundPosition: 'right 10%',
          backgroundSize: '15%'
        }}
        ref={el => {
          parallaxElRef.current?.push(el);
        }}
        data-parallax={JSON.stringify({ y: '50%' })}
      />

      <Container fluid="lg">
        <Row className="justify-center">
          <Col xs={12} lg={9} xl={8} xxl={6} className="text-center">
            <h2 className="mb-10 leading-lg">
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
          </Col>
        </Row>
        <Row>
          <Col xxl={8} className="mx-auto">
            <Row className="justify-center mt-12 lg:mt-20">
              {importantApplications.map(application => (
                <Col
                  xs={12}
                  lg={6}
                  className="mb-12 lg:mb-18 ms-auto"
                  key={application.title}
                >
                  <div className="text-center">
                    <div
                      className="mx-auto mb-8 lg:mb-12 max-w-full"
                      style={{ width: '550px' }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={application.thumb}
                          alt=""
                          className={classNames('shadow md:rounded-md max-w-full')}
                        />
                      </div>
                    </div>
                    <div className="flex flex-center mb-4">
                      <h4 className="text-highlight mb-0">
                        {application.title}
                      </h4>
                      {application.badge && (
                        <Badge variant="phoenix" bg={application.badge.bg} className='ms-2 text-sm'>
                          {application.badge.label}
                        </Badge>
                      )}
                    </div>
                    <p className="text-subtle leading-sm pb-2 lg:pb-6">
                      {application.details}
                    </p>
                    <Button
                      as={Link}
                      target="_blank"
                      to={application.link}
                      variant="primary"
                    >
                      {application.btnLabel}
                    </Button>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ImportantApplications;
