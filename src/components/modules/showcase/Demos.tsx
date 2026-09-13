import classNames from 'classnames';
import { demos } from 'data/showcase';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const Demos = () => {
  return (
    <section className="pt-0">
      <Container fluid>
        <Row>
          {demos.map((demo, index) => (
            <Col
              key={demo.variantName}
              lg={6}
              className="relative variant-container"
            >
              <div
                className={classNames(
                  'flex px-6 pt-10 justify-center',
                  {
                    'lg:justify-end': (index + 1) % 2 !== 0,
                    'lg:justify-start': (index + 1) % 2 === 0
                  }
                )}
              >
                <div className="text-center">
                  <div className="img-container w-full">
                    <img
                      src={demo.sideThumb}
                      alt={demo.variantName}
                      className="side-panel-thumb h-full w-full rounded-md"
                    />
                    <div className="layout-thumb">
                      <img
                        src={demo.mainThumb}
                        alt={demo.variantName}
                        className="img-fluid rounded-md"
                      />
                    </div>
                  </div>
                  <h5 className="py-6 text-highlight">
                    {demo.variantName}
                  </h5>
                </div>
              </div>
              <Link to={demo.link} target="_blank" className="stretched-link" />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Demos;
