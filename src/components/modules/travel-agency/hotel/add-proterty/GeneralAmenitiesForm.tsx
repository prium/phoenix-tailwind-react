import { Accordion, cn, Col, Input, Row } from '@hummingbirdui/react';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import {
  AddPropertyWizardFormData,
  generalAmenities
} from 'data/travel-agency/addProperty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/base/Button';
import PriceTierForm from '../common/PriceTierForm';

/** gold `+GeneralAmenitiesForm` (mixins/travel-agency/add-property/GeneralAmenitiesForm.pug) */
const GeneralAmenitiesForm = ({
  title = 'General amenities'
}: {
  title?: string;
}) => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { onChange } = methods;
  const isAmenities = title === 'Amenities';

  return (
    <>
      <div className={isAmenities ? 'sm:flex flex-between-center gap-4' : ''}>
        <h3 className={isAmenities ? 'mb-6 sm:mb-0' : 'mb-10'}>{title}</h3>
        <Row className="g-4">
          <div className="sm:col-auto sm:flex-1 sm:basis-auto">
            <div className="form-floating">
              <Input
                type="text"
                name="search-amenities"
                id="wizard-search-amenities"
                placeholder="Search amenities"
                onChange={onChange}
              />
              <label className="form-label" htmlFor="wizard-search-amenities">
                Search amenities
              </label>
              <FontAwesomeIcon
                icon={faSearch}
                transform="down-2"
                className="absolute text-soft text-md end-0 top-0 mt-4 me-4"
              />
            </div>
          </div>
          <Col sm="auto">
            <Button
              variant="phoenix-primary"
              className="w-full h-full text-base"
            >
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add amenity
            </Button>
          </Col>
        </Row>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue={generalAmenities[0]?.eventKey}
        id="generalAmenitiesAccordion"
        className="accordion-button-arrow-icon mt-2"
      >
        {generalAmenities.map(item => (
          <Accordion.Item
            key={item.eventKey}
            value={item.eventKey}
            className="px-0 py-4"
          >
            <Accordion.Header className="text-xl">
              <Accordion.Trigger className="py-0 text-highlight after:size-5 after:bg-cover">
                <span className="circle-icon-item border border-primary text-primary me-4">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span
                  className={cn('flex-1 rtl:flex-none text-start', {
                    'me-2': item !== generalAmenities[0]
                  })}
                >
                  {item.title}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="md:ms-16 p-0">
              {item.innerItems.map((innerItem, index) => (
                <PriceTierForm
                  key={index}
                  id={innerItem.id}
                  name={innerItem.name}
                  className={innerItem.className}
                  methods={methods}
                />
              ))}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default GeneralAmenitiesForm;
