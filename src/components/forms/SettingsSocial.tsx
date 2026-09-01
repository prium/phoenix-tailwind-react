import {
  faArtstation,
  faBehance,
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';

const SettingsSocial = () => {
  return (
    <div className="mb-10">
      <h4 className="mb-6">Social</h4>
      <Row className="g-4">
        <Col xs={12} sm={6}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Control
                id="facebook"
                type="text"
                placeholder="Facebook"
                className="form-icon-input"
              />
              <label
                htmlFor="facebook"
                className="form-icon-label text-subtle"
              >
                FACEBOOK
              </label>
            </Form.Floating>
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-default text-md form-icon"
            />
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Control
                id="twitter"
                type="text"
                placeholder="Twitter"
                className="form-icon-input"
              />
              <label
                htmlFor="twitter"
                className="form-icon-label text-subtle"
              >
                TWITTER
              </label>
            </Form.Floating>
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-default text-md form-icon"
            />
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Control
                id="linkedin"
                type="text"
                placeholder="Linkedin"
                className="form-icon-input"
              />
              <label
                htmlFor="linkedin"
                className="form-icon-label text-subtle"
              >
                LINKEDIN
              </label>
            </Form.Floating>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-default text-md form-icon"
            />
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Control
                id="youtube"
                type="text"
                placeholder="youtube"
                className="form-icon-input"
              />
              <label
                htmlFor="youtube"
                className="form-icon-label text-subtle"
              >
                YOUTUBE
              </label>
            </Form.Floating>
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-default text-md form-icon"
            />
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Control
                id="artstation"
                type="text"
                placeholder="Artstation"
                className="form-icon-input"
              />
              <label
                htmlFor="artstation"
                className="form-icon-label text-subtle"
              >
                ARTSTATION
              </label>
            </Form.Floating>
            <FontAwesomeIcon
              icon={faArtstation}
              className="text-default text-md form-icon"
            />
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Control
                id="behance"
                type="text"
                placeholder="Behance"
                className="form-icon-input"
              />
              <label
                htmlFor="behance"
                className="form-icon-label text-subtle"
              >
                BEHANCE
              </label>
            </Form.Floating>
            <FontAwesomeIcon
              icon={faBehance}
              className="text-default text-md form-icon"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SettingsSocial;
