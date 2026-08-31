import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Card, cn } from '@hummingbirdui/react';
import DatePicker from 'components/base/DatePicker';
import Dropzone from 'components/base/Dropzone';
import imageIcon from 'assets/img/icons/image-icon.png';

const PassportUploader = ({ id, title }: { id: string; title: string }) => {
  return (
    <Dropzone
      className="p-0"
      noPreview
      accept={{
        'image/*': ['.png', '.gif', '.jpeg', '.jpg']
      }}
    >
      <div className="dz-message text-subtle/85" id={id}>
        <h6 className="mb-1 text-soft">Upload or drag</h6>
        <h6 className="mb-4 text-muted">{title}</h6>
        <img className="mt-4 me-2" src={imageIcon} width={42} alt="" />
      </div>
    </Dropzone>
  );
};

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
}

const Field = ({ id, label, type = 'text', placeholder }: FieldProps) => (
  <div className="md:col-6">
    <label htmlFor={id} className="font-bold text-highlight mb-2">
      {label}
    </label>
    <input
      className="form-control"
      id={id}
      type={type}
      placeholder={placeholder}
    />
  </div>
);

/** `+TravelerInfo` in mixins/travel-agency/flight/booking/TravelerDetails.pug */
const TravelerInfo = ({
  id,
  className
}: {
  id: string;
  className?: string;
}) => {
  return (
    <Card className={cn('bg-default overflow-hidden', className)}>
      <Card.Header className="bg-subtle">
        <div className="flex flex-between-center">
          <h5 className="mb-0 text-nowrap">
            <FontAwesomeIcon
              icon={faUser}
              className="text-md me-2 text-primary"
            />
            Person {id}
          </h5>
          <div className="form-check mb-0">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id={`saveInfo-${id}`}
            />
            <label
              className="form-check-label text-base font-normal mb-0 text-emphasis"
              htmlFor={`saveInfo-${id}`}
            >
              Save traveler info
            </label>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <h6 className="mb-0 font-semibold text-md text-subtle">
          Personal info
        </h6>
        <hr className="my-2" />
        <div className="row g-4 mb-10">
          <Field
            id={`firstName-${id}`}
            label="First name"
            placeholder="First name"
          />
          <Field
            id={`lastName-${id}`}
            label="Last name"
            placeholder="Last name"
          />
        </div>

        <h6 className="mb-0 font-semibold text-md text-subtle">Contact info</h6>
        <hr className="my-2" />
        <div className="row g-4 mb-10">
          <Field
            id={`email-${id}`}
            label="Email"
            type="email"
            placeholder="Email"
          />
          <Field
            id={`phone-${id}`}
            label="Phone"
            type="tel"
            placeholder="XXX-XXX-XXXX"
          />
        </div>

        <h6 className="mb-0 font-semibold text-md text-subtle">
          Passport info
        </h6>
        <hr className="my-2" />
        <div className="row g-4 mb-4">
          <Field
            id={`passportNum-${id}`}
            label="Passport Number"
            placeholder="Passport number"
          />
          <div className="md:col-6">
            <label
              htmlFor={`passportExpiry-${id}`}
              className="font-bold text-highlight mb-2"
            >
              Passport expiry date
            </label>
            <DatePicker
              hideIcon
              id={`passportExpiry-${id}`}
              placeholder="Select date"
              options={{ disableMobile: true, dateFormat: 'j M, Y' }}
            />
          </div>
        </div>

        <div className="row g-4">
          <div className="md:col-6">
            <PassportUploader
              id={`passportFrontPage-${id}`}
              title="The photo of the front page of your passport"
            />
          </div>
          <div className="md:col-6">
            <PassportUploader
              id={`passportBackPage-${id}`}
              title="The photo of the back page of your passport"
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

/** `+TravelerDetails` in mixins/travel-agency/flight/booking/TravelerDetails.pug */
const TravelerDetails = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <div className="mb-6">
        <h3>Traveler Details</h3>
        <small>
          <FontAwesomeIcon icon={faInfoCircle} className="me-2 text-info" />
          As mentioned in your passport or government approved IDs
        </small>
      </div>

      <TravelerInfo id="1" className="mb-6" />
      <TravelerInfo id="2" className="mb-6" />
    </div>
  );
};

export default TravelerDetails;
