import { Col, Row, cn } from '@hummingbirdui/react';
import illustration31 from 'assets/img/spot-illustrations/31.png';
import { necessaryPages } from 'data/showcase';
import { Link } from 'react-router';

/** `mixins/showcase/NecessaryPages.pug` */
const NecessaryPages = () => {
  return (
    <section className="pb-26">
      <div className="container-fluid">
        <Row className="justify-center">
          <Col xs={12} lg={9} xl={8} xxl={6} className="text-center">
            <h2 className="mb-10 text-highlight font-normal">
              Smartly designed
              <span className="text-primary relative font-black ms-2">
                necessary pages
                <img
                  src={illustration31}
                  alt=""
                  className="w-full text-illustration-underline"
                />
              </span>
            </h2>
          </Col>
        </Row>
        <Row>
          {necessaryPages.map((page, index) => (
            <Col key={page.pageName} lg={6} className="relative page-container">
              <div
                className={cn(
                  'flex px-6 pt-10 justify-center',
                  index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                )}
              >
                <div className="text-center">
                  <div className="img-container w-full">
                    <img
                      src={page.thumb}
                      alt=""
                      className="page-thumb rounded-md z-2"
                    />
                  </div>
                  <h5 className="py-6 text-highlight">{page.pageName}</h5>
                </div>
              </div>
              <Link className="stretched-link" to={page.pageLink} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default NecessaryPages;
