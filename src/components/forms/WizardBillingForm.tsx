import { Col, Input, Row, Select } from '@hummingbirdui/react';
import { WizardFormData } from 'pages/modules/forms/WizardExample';
import { useWizardFormContext } from 'providers/WizardFormProvider';

/** gold `+BillingForm` in mixins/wizard/WizardForms.pug */
const WizardBillingForm = () => {
  const { formData, onChange, validation } =
    useWizardFormContext<WizardFormData>();

  return (
    <div>
      <Row className="gx-4 gy-2">
        <Col lg={6}>
          <label className="form-label" htmlFor="wizard-card-number">
            Card Number
          </label>
          <Input
            type="number"
            id="wizard-card-number"
            placeholder="XXXX XXXX XXXX XXXX"
            name="card"
            value={formData.card}
            onChange={onChange}
            required={validation}
          />
          <div className="invalid-feedback">This field is required.</div>
        </Col>
        <Col lg={6}>
          <label className="form-label" htmlFor="wizard-card-name">
            Name
          </label>
          <Input
            type="text"
            id="wizard-card-name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={onChange}
            required={validation}
          />
          <div className="invalid-feedback">This field is required.</div>
        </Col>
        <Col lg={6}>
          <label className="form-label" htmlFor="wizard-card-holder-country">
            Country
          </label>
          <Select
            name="country"
            id="wizard-card-holder-country"
            value={formData.country}
            onChange={onChange}
            required={validation}
          >
            <option value="">Select your country ...</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
          </Select>
          <div className="invalid-feedback">This field is required.</div>
        </Col>
        <Col lg={6}>
          <label className="form-label" htmlFor="wizard-card-holder-zip-code">
            Zip
          </label>
          <Input
            type="text"
            id="wizard-card-holder-zip-code"
            name="zip"
            placeholder="1234"
            value={formData.zip}
            onChange={onChange}
            required={validation}
          />
          <div className="invalid-feedback">This field is required.</div>
        </Col>
        <Col lg={6}>
          <label className="form-label" htmlFor="wizard-card-exp-date">
            Date of Expire
          </label>
          <Input
            type="text"
            id="wizard-card-exp-date"
            name="date_of_expire"
            placeholder="15/2024"
            value={formData.date_of_expire}
            onChange={onChange}
            required={validation}
          />
          <div className="invalid-feedback">This field is required.</div>
        </Col>
        <Col lg={6}>
          <label className="form-label" htmlFor="wizard-card-cvv">
            CVV
          </label>
          <Input
            type="number"
            id="wizard-card-cvv"
            name="cvv"
            placeholder="123"
            value={formData.cvv}
            onChange={onChange}
            required={validation}
          />
          <div className="invalid-feedback">This field is required.</div>
        </Col>
      </Row>
    </div>
  );
};

export default WizardBillingForm;
