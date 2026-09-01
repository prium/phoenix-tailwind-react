import Button from 'components/base/Button';
import SocialProfileCard from 'components/cards/SocialProfileCard';
import SettingsChangePassword from 'components/forms/SettingsChangePassword';
import SettingsCompanyInfo from 'components/forms/SettingsCompanyInfo';
import SettingsPersonalInfo from 'components/forms/SettingsPersonalInfo';
import SettingsSocial from 'components/forms/SettingsSocial';
import SocialSettingsSideBar from 'components/modules/social/SocialSettingsSideBar';
import { Col, Row } from 'react-bootstrap';
import profileImage from 'assets/img/team/20.webp';

const Settings = () => {
  return (
    <div className="mb-16">
      <Row className="g-10">
        <Col xs={12} xl={4}>
          <SocialProfileCard avatar={profileImage} className="mb-8" />
          <SocialSettingsSideBar />
        </Col>
        <Col xs={12} xl={8}>
          <div className="border-b mb-6">
            <SettingsPersonalInfo />
            <Row className="gx-4 mb-10 gy-10 sm:gy-4">
              <Col xs={12} sm={6}>
                <SettingsCompanyInfo />
              </Col>
              <Col xs={12} sm={6}>
                <SettingsChangePassword />
              </Col>
            </Row>
            <SettingsSocial />
            <div className="text-end mb-10">
              <Button variant="phoenix-secondary" className="me-2">
                Cancel Changes
              </Button>
              <Button variant="phoenix-primary">Save Information</Button>
            </div>
          </div>
          <Row className="gy-8">
            <Col xs={12} md={6}>
              <h4 className="text-emphasis">Transfer Ownership</h4>
              <p className="text-subtle">
                Transfer this account to another person or to a company
                repository.
              </p>
              <Button variant="phoenix-warning">Transfer</Button>
            </Col>
            <Col xs={12} md={6}>
              <h4 className="text-emphasis">Account Deletion</h4>
              <p className="text-subtle">
                Transfer this account to another person or to a company
                repository.
              </p>
              <Button variant="phoenix-danger">Delete account</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Settings;
