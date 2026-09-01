import { Col, Row } from '@hummingbirdui/react';
import FloatingIconField from 'components/base/FloatingIconField';

/** Gold: mixin `Social` in `../phoenix-tailwind/src/pug/mixins/social/Settings.pug` */
const SettingsSocial = () => {
  return (
    <div className="mb-10">
      <h4 className="mb-6">Social</h4>
      <Row className="g-4">
        <Col xs={12} sm={6}>
          <FloatingIconField
            id="facebook"
            icon="fa-brands fa-facebook"
            type="text"
            placeholder="Facebook"
            label="Facebook"
          />
        </Col>
        <Col xs={12} sm={6}>
          <FloatingIconField
            id="twitter"
            icon="fa-brands fa-twitter"
            type="text"
            placeholder="Twitter"
            label="Twitter"
          />
        </Col>
        <Col xs={12} sm={6}>
          <FloatingIconField
            id="linkedin"
            icon="fa-brands fa-linkedin-in"
            type="text"
            placeholder="Linkedin"
            label="linkedin"
          />
        </Col>
        <Col xs={12} sm={6}>
          <FloatingIconField
            id="youtube"
            icon="fa-brands fa-youtube"
            type="text"
            placeholder="youtube"
            label="youtube"
          />
        </Col>
        <Col xs={12} sm={6}>
          <FloatingIconField
            id="artstation"
            icon="fa-brands fa-artstation"
            type="text"
            placeholder="artstation"
            label="artstation"
          />
        </Col>
        <Col xs={12} sm={6}>
          <FloatingIconField
            id="behance"
            icon="fa-brands fa-behance"
            type="text"
            placeholder="behance"
            label="behance"
          />
        </Col>
      </Row>
    </div>
  );
};

export default SettingsSocial;
