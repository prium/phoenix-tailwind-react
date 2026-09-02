import { Row, Col } from 'react-bootstrap';
import logoWhite from 'assets/img/icons/logo-white.png';
import bg19 from 'assets/img/bg/bg-19.png';
import bgRight20 from 'assets/img/bg/bg-right-20.png';
import bgLeft20 from 'assets/img/bg/bg-left-20.png';
import { Link } from 'react-router';
import { CSSProperties } from 'react';
import classNames from 'classnames';

const FooterList = ({
  label,
  items,
  className
}: {
  label: string;
  items: string[];
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        className,
        'border-dashed border-s border-primary-light ps-6'
      )}
      style={{ '--phoenix-border-opacity': '.2' } as CSSProperties}
    >
      <h5 className="leading-lg font-black mb-2 text-light">{label}</h5>
      <ul className="list-unstyled mb-1">
        {items.map((item, index) => (
          <li className="mb-1" key={index}>
            <Link
              className="text-soft"
              data-bs-theme="light"
              to="#!"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="relative">
      <div
        className="bg-holder footer-bg"
        style={{ backgroundImage: `url(${bg19})`, backgroundSize: 'auto' }}
      />
      <div
        className="bg-holder"
        style={{
          backgroundImage: `url(${bgRight20})`,
          backgroundPosition: 'right',
          backgroundSize: 'auto'
        }}
      />
      <div
        className="bg-holder"
        style={{
          backgroundImage: `url(${bgLeft20})`,
          backgroundPosition: 'left',
          backgroundSize: 'auto'
        }}
      />

      <div className="relative">
        <svg
          className="w-full text-white dark__text-gray-1100"
          preserveAspectRatio="none"
          viewBox="0 0 1920 368"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1920 0.44L0 367.74V0H1920V0.44Z" fill="currentColor" />
        </svg>
        <section className="footer-default">
          <div className="container-small lg:px-12 2xl:px-4">
            <Row className="relative">
              <Col xs={{ span: 12, order: 0 }} lg={5} className="mb-6">
                <Link to="#!">
                  <img className="mb-4" src={logoWhite} height="48" alt="" />
                </Link>
                <h3 className="text-white">Phoenix</h3>
                <p className="text-white opacity-50">
                  All over the world. Alice in
                  <br />
                  wonderland and other places.
                </p>
              </Col>
              <Col lg={7}>
                <Row className="justify-between">
                  <Col
                    xs={{ span: 6, order: 2 }}
                    sm={{ span: 4, order: 1 }}
                    lg={3}
                    className="mb-4"
                  >
                    <FooterList
                      label="Help"
                      className="mb-6"
                      items={['About', 'Contact', 'Developers']}
                    />
                    <FooterList
                      label="Follow"
                      items={['Facebook', 'Twitter', 'Linkedin']}
                    />
                  </Col>
                  <Col
                    xs={{ span: 6, order: 3 }}
                    sm={{ span: 4, order: 2 }}
                    lg={3}
                    className="mb-4"
                  >
                    <FooterList
                      label="Support"
                      items={[
                        'Privacy',
                        'Community',
                        'Contact',
                        'Blog',
                        'FAQ',
                        'Project',
                        'Team'
                      ]}
                    />
                  </Col>
                  <Col
                    xs={{ span: 6, order: 3 }}
                    sm={{ order: 2 }}
                    md={4}
                    lg={3}
                    className="mb-4"
                  >
                    <FooterList
                      label="Info"
                      items={[
                        'Personal',
                        'NFT System',
                        'Agency',
                        'Contact',
                        'About'
                      ]}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
