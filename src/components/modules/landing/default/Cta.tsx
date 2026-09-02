import Button from 'components/base/Button';
import { Card, Col, Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import bg18 from 'assets/img/bg/bg-18.png';
import illustrations27 from 'assets/img/spot-illustrations/27.png';
import illustrations27dark from 'assets/img/spot-illustrations/dark_27.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Cta = () => {
  return (
    <section className="pb-0">
      <div className="container-small lg:px-12 2xl:px-4">
        <Row className="justify-center">
          <Col xs={12} className="text-center">
            <Card className="md:py-16 md:px-26 border-0 z-1 shadow-lg cta-card">
              <div
                className="bg-holder"
                style={{
                  backgroundImage: `url(${bg18})`,
                  backgroundPosition: 'right',
                  backgroundSize: 'auto'
                }}
              />

              <Card.Body className="relative">
                <img
                  className="img-fluid mb-8 dark:hidden"
                  src={illustrations27}
                  width={210}
                  alt="..."
                />
                <img
                  className="img-fluid mb-8 hidden dark:block"
                  src={illustrations27dark}
                  width={210}
                  alt="..."
                />
                <div className="flex items-center font-bold justify-center mb-4">
                  <p className="mb-0">2008 Premium Icons</p>
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-primary"
                    transform="shrink-12"
                  />
                  <p className="mb-0">Included FREE with it</p>
                </div>
                <h1 className="text-xl sm:text-3xl lg:text-5xl font-black leading-sm mb-4">
                  Join
                  <span className="gradient-text-primary mx-2">Phoenix</span>
                  Today
                </h1>
                <Form className="flex gap-4 justify-center mb-4 2xl:px-24">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    id="ctaEmail1"
                  />
                  <Button variant="primary" type="submit">
                    Subscribe
                  </Button>
                </Form>
                <p className="text-center">
                  Best support in the world, Only Phoenix can ensure
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Cta;
