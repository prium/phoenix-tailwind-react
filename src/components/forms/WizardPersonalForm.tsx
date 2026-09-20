import Avatar from 'components/base/Avatar';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { useState } from 'react';
import { Col, Input, Row, Select, Textarea } from '@hummingbirdui/react';
import avatarPlaceholder from 'assets/img/team/avatar.webp';
import AvatarDropzone from 'components/common/AvatarDropzone';
import DatePicker from 'components/base/DatePicker';
import { WizardFormData } from 'pages/modules/forms/WizardExample';

/** gold `+PersonalForm` in mixins/wizard/WizardForms.pug */
const WizardPersonalForm = () => {
  const { formData, onChange, validation } =
    useWizardFormContext<WizardFormData>();
  const [avatar, setAvatar] = useState(avatarPlaceholder);

  const onDrop = (acceptedFiles: File[]) => {
    setAvatar(URL.createObjectURL(acceptedFiles[0]));
  };

  return (
    <>
      <Row className="g-6 mb-6">
        <Col md="auto">
          <Avatar src={avatar} placeholder size="4xl" />
        </Col>
        <Col>
          <AvatarDropzone onDrop={onDrop} />
        </Col>
      </Row>
      <div className="mb-2">
        <label className="form-label" htmlFor="wizard-gender">
          Gender
        </label>
        <Select
          name="gender"
          id="wizard-gender"
          value={formData.gender}
          onChange={onChange}
          required={validation}
        >
          <option value="">Select your gender ...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Select>
        <div className="invalid-feedback">This field is required.</div>
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor="wizard-phone">
          Phone
        </label>
        <Input
          type="text"
          name="phone"
          id="wizard-phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={onChange}
          required={validation}
        />
        <div className="invalid-feedback">This field is required.</div>
      </div>

      <DatePicker
        hideIcon
        render={(_, ref) => (
          <div className="mb-2">
            <label className="form-label" htmlFor="wizard-datepicker">
              Date of birth
            </label>
            <Input
              type="date"
              id="wizard-datepicker"
              placeholder="Date of birth"
              ref={ref}
              value={formData.dob}
              name="dob"
            />
          </div>
        )}
      />

      <div className="mb-2">
        <label className="form-label" htmlFor="wizard-address">
          Address
        </label>
        <Textarea
          id="wizard-address"
          name="address"
          value={formData.address}
          onChange={onChange}
          rows={4}
          required={validation}
        />
        <div className="invalid-feedback">This field is required.</div>
      </div>
    </>
  );
};

export default WizardPersonalForm;
