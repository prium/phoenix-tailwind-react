import { Col, Row, cn } from '@hummingbirdui/react';
import { demos } from 'data/showcase';
import { Link } from 'react-router';

/** `mixins/showcase/Demos.pug` */
const Demos = () => {
  return (
    <section className="pt-0">
      <div className="container-fluid">
        <Row>
          {demos.map((demo, index) => (
            <Col
              key={demo.variantName}
              lg={6}
              className="relative variant-container"
            >
              <div
                className={cn(
                  'flex px-6 pt-10 justify-center',
                  index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                )}
              >
                <div className="text-center">
                  <div className="img-container w-full">
                    <img
                      src={demo.sideThumb}
                      alt=""
                      className="side-panel-thumb h-full w-full rounded-md"
                    />
                    <div className="layout-thumb">
                      <img src={demo.mainThumb} alt="" className="rounded-md" />
                    </div>
                  </div>
                  <h5 className="py-6 text-highlight">{demo.variantName}</h5>
                </div>
              </div>
              <Link to={demo.link} target="_blank" className="stretched-link" />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Demos;
