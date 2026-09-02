import classNames from 'classnames';
import { Col, Row } from 'react-bootstrap';
import netflix from 'assets/img/brands/netflix.png';
import blender from 'assets/img/brands/blender.png';
import upwork from 'assets/img/brands/upwork.png';
import facebook from 'assets/img/brands/facebook.png';
import pocket from 'assets/img/brands/pocket.png';
import mailBluster from 'assets/img/brands/mail-bluster.png';
import discord from 'assets/img/brands/discord.png';
import google from 'assets/img/brands/google.png';

const Brand = ({ image, className }: { image: string; className?: string }) => {
  return (
    <div
      className={classNames(
        className,
        'p-2 lg:p-8 flex flex-center h-full border-dashed border-subtle'
      )}
    >
      <img src={image} alt="" className="w-full" />
    </div>
  );
};

const Brands = ({ className }: { className?: string }) => {
  return (
    <section className={className}>
      <div className="container-small lg:px-12 2xl:px-4">
        <Row className="g-0">
          <Col xs={6} md={3}>
            <Brand
              image={netflix}
              className="border-b border-e border-subtle"
            />
          </Col>
          <Col xs={6} md={3}>
            <Brand
              image={blender}
              className="border-b md:border-e border-subtle"
            />
          </Col>
          <Col xs={6} md={3}>
            <Brand
              image={upwork}
              className="border-b border-e md:border-e border-subtle"
            />
          </Col>
          <Col xs={6} md={3}>
            <Brand
              image={facebook}
              className="border-b lg:border-e-0 border-subtle"
            />
          </Col>
          <Col xs={6} md={3}>
            <Brand
              image={pocket}
              className="border-e border-b md:border-b-0 border-subtle"
            />
          </Col>
          <Col xs={6} md={3}>
            <Brand
              image={mailBluster}
              className="md:border-e border-b md:border-b-0 border-subtle"
            />
          </Col>
          <Col xs={6} md={3}>
            <Brand image={discord} className="border-e border-subtle" />
          </Col>
          <Col xs={6} md={3}>
            <Brand
              image={google}
              className="lg:border-e-0 border-subtle"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Brands;
