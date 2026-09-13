import { CSSProperties, useState } from 'react';
import { Col, FloatingLabel, Input, Textarea } from '@hummingbirdui/react';
import FeatherIcon from 'feather-icons-react';
import Button from 'components/base/Button';
import Dropzone from 'components/base/Dropzone';
import ReactSelect from 'components/base/ReactSelect';
import imageIcon from 'assets/img/icons/image-icon.png';

const tagOptions = [
  { value: 'MUSIC', label: 'Music' },
  { value: 'CONCEERT', label: 'CONCEERT' },
  { value: 'GREATEST SHOW ON EARTH', label: 'GREATEST SHOW ON EARTH ' }
];

/** Description / organizers / dropzone / tags fields of `+CreateEvent` in mixins/events/CreateEvent.pug */
const EventDescriptionForm = () => {
  const [photos, setPhotos] = useState<File[]>([]);
  return (
    <>
      <Col xs={12} className="gy-10">
        <FloatingLabel
          className="form-field"
          htmlFor="floatingProjectDescription"
          label="Description"
        >
          <Textarea
            id="floatingProjectDescription"
            className="h-32!"
            placeholder="Leave a comment here"
          />
        </FloatingLabel>
      </Col>
      <Col sm={6} className="gy-10">
        <FloatingLabel
          className="form-field"
          htmlFor="floatingOrganizersInput"
          label="ORGANIZERS"
        >
          <Input
            id="floatingOrganizersInput"
            type="text"
            placeholder="ORGANIZERS"
          />
        </FloatingLabel>
      </Col>
      <Col sm={6} className="gy-10">
        <FloatingLabel
          className="form-field"
          htmlFor="floatingSponsorsInput"
          label="SPONSORS"
        >
          <Input
            id="floatingSponsorsInput"
            type="text"
            placeholder="SPONSORS"
          />
        </FloatingLabel>
      </Col>
      <Col xs={12} className="gy-10">
        <Dropzone
          noPreview
          className="p-0 mb-8"
          accept={{
            'image/*': ['.png', '.gif', '.jpeg', '.jpg']
          }}
          onDrop={acceptedFiles =>
            setPhotos(photos => [...photos, ...acceptedFiles])
          }
        >
          {/* gold `.dz-preview` template markup (cleared on init, filled per drop) */}
          <div className="dz-preview flex flex-wrap">
            {photos.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="border border-subtle bg-soft rounded-lg flex flex-center relative me-2 mb-2 size-20"
              >
                <img
                  className="dz-image"
                  src={URL.createObjectURL(file)}
                  alt="..."
                />
                <a
                  href="#!"
                  className="dz-remove text-soft"
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPhotos(photos.filter((_, ind) => ind !== index));
                  }}
                >
                  <FeatherIcon icon="x" size={16} />
                </a>
              </div>
            ))}
          </div>
          <div className="dz-message text-subtle text-center">
            Drag your photo here <span className="text-muted">or </span>
            <Button variant="link" className="p-0">
              Browse from device
            </Button>
            <br />
            <img className="mt-4 me-2" src={imageIcon} width={40} alt="" />
          </div>
        </Dropzone>
      </Col>
      <Col xs={12}>
        <div
          className="form-floating form-floating-advance-select"
          style={{ '--choices-inner-min-height': '128px' } as CSSProperties}
        >
          <ReactSelect
            isMulti
            placeholder="Add tags"
            options={tagOptions}
            // top-align like the gold choices flow box (base styles + flex-start)
            styles={{
              valueContainer: base => ({ ...base, alignItems: 'baseline' }),
              multiValue: base => ({ ...base, display: 'block' }),
              multiValueLabel: base => ({
                ...base,
                padding: 0,
                display: 'inline'
              }),
              control: base => ({ ...base, alignItems: 'flex-start' })
            }}
          />
        </div>
      </Col>
    </>
  );
};

export default EventDescriptionForm;
