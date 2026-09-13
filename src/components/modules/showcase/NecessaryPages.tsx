import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import illustration31 from 'assets/img/spot-illustrations/31.png';
import { necessaryPages } from 'data/showcase';
import { Link } from 'react-router';
import classNames from 'classnames';

const NecessaryPages = () => {
  return (
    <section className="pb-26">
      <Container fluid>
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
            <Col
              key={page.pageName}
              lg={6}
              className="relative page-container"
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
                      src={page.thumb}
                      alt=""
                      className="img-fluid page-thumb rounded-md z-2"
                    />
                  </div>
                  <h5 className="py-6 text-highlight">{page.pageName}</h5>
                </div>
              </div>
              <Link
                className="stretched-link"
                target="_blank"
                to={page.pageLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NecessaryPages;
