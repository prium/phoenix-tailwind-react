import { Col, Row } from '@hummingbirdui/react';
import FloatingIconField from 'components/base/FloatingIconField';

/** Gold: mixin `PersonalInformation` in `../phoenix-tailwind/src/pug/mixins/social/Settings.pug` */
const SettingsPersonalInfo = () => {
  return (
    <div className="mb-10">
      <h4 className="mb-6">Personal Information</h4>
      <Row className="g-4">
        <Col xs={12} sm={6}>
          <FloatingIconField
            id="firstName"
            icon="fa-solid fa-user"
            type="text"
            placeholder="First Name"
            label="FIRST NAME"
          />
        </Col>
        <Col xs={12} sm={6}>
          <FloatingIconField
            id="lastName"
            icon="fa-solid fa-user"
            type="text"
            placeholder="Last Name"
            label="LAST NAME"
          />
        </Col>
        <Col xs={12} sm={6}>
          <FloatingIconField
            id="emailSocial"
            icon="fa-solid fa-envelope"
            type="email"
            placeholder="Email"
            label="ENTER YOUR EMAIL"
          />
        </Col>
        <Col xs={12} sm={6}>
          <FloatingIconField
            id="phone"
            icon="fa-solid fa-phone"
            type="tel"
            placeholder="Phone"
            label="ENTER YOUR PHONE"
          />
        </Col>
        <Col xs={12} sm={6}>
          <FloatingIconField
            as="textarea"
            id="info"
            icon="fa-solid fa-circle-info"
            iconClassName="top-6"
            controlClassName="h-28.75!"
            placeholder="Info"
            label="Info"
          />
        </Col>
      </Row>
    </div>
  );
};

export default SettingsPersonalInfo;
