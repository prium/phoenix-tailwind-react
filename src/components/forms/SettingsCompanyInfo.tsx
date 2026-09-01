import { faBuilding, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form } from 'react-bootstrap';

const SettingsCompanyInfo = () => {
  return (
    <>
      <h4 className="mb-6">Company Info</h4>
      <div className="form-icon-container mb-4">
        <Form.Floating>
          <Form.Control
            id="companyName"
            type="text"
            placeholder="Company Name"
            className="form-icon-input"
          />
          <label
            htmlFor="companyName"
            className="form-icon-label text-subtle"
          >
            COMPANY NAME
          </label>
        </Form.Floating>
        <FontAwesomeIcon
          icon={faBuilding}
          className="text-default text-md form-icon"
        />
      </div>
      <div className="form-icon-container">
        <Form.Floating>
          <Form.Control
            id="website"
            type="text"
            placeholder="Website"
            className="form-icon-input"
          />
          <label
            htmlFor="website"
            className="form-icon-label text-subtle"
          >
            WEBSITE
          </label>
        </Form.Floating>
        <FontAwesomeIcon icon={faGlobe} className="text-default text-md form-icon" />
      </div>
    </>
  );
};

export default SettingsCompanyInfo;
