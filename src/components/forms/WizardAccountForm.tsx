import { Col, Input, Row } from '@hummingbirdui/react';
import { WizardFormData } from 'pages/modules/forms/WizardExample';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { Link } from 'react-router';

/** gold `+AccountForm` in mixins/wizard/WizardForms.pug */
const WizardAccountForm = ({ id }: { id: string }) => {
  const { formData, onChange, validation } =
    useWizardFormContext<WizardFormData>();

  return (
    <>
      <div className="mb-2">
        <label
          className="form-label text-default"
          htmlFor={`${id}-wizard-name`}
        >
          Name
        </label>
        <Input
          type="text"
          name="name"
          id={`${id}-wizard-name`}
          placeholder="John Smith"
          value={formData.name || ''}
          onChange={onChange}
          required={validation}
        />
        <div className="invalid-feedback">This field is required.</div>
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor={`${id}-wizard-email`}>
          Email*
        </label>
        <Input
          type="email"
          name="email"
          id={`${id}-wizard-email`}
          placeholder="Email address"
          value={formData.email || ''}
          onChange={onChange}
          required={validation}
        />
        <div className="invalid-feedback">This field is required.</div>
      </div>
      <Row className="g-4 mb-4">
        <Col sm={6}>
          <div className="mb-2 sm:mb-0">
            <label
              className="form-label text-default"
              htmlFor={`${id}-wizard-password`}
            >
              Password*
            </label>
            <Input
              type="password"
              name="password"
              id={`${id}-wizard-password`}
              placeholder="Password"
              value={formData.password || ''}
              onChange={onChange}
              required={validation}
            />
            <div className="invalid-feedback">This field is required.</div>
          </div>
        </Col>
        <Col sm={6}>
          <div className="mb-2">
            <label
              className="form-label text-default"
              htmlFor={`${id}-wizard-confirm-password`}
            >
              Confirm Password*
            </label>
            <Input
              type="password"
              name="confirm_password"
              id={`${id}-wizard-confirm-password`}
              placeholder="Confirm Password"
              value={formData.confirm_password || ''}
              onChange={onChange}
              required={validation}
            />
            <div className="invalid-feedback">This field is required.</div>
          </div>
        </Col>
      </Row>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="terms"
          id={`${id}-terms`}
          checked={formData.accept_terms}
          onChange={onChange}
        />
        <label
          className="form-check-label text-default"
          htmlFor={`${id}-terms`}
        >
          I accept the <Link to="#!">terms</Link> and{' '}
          <Link to="#!">privacy policy</Link>
        </label>
      </div>
    </>
  );
};

export default WizardAccountForm;
