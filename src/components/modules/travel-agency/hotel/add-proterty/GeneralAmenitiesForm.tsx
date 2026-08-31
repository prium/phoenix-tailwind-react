import { useWizardFormContext } from 'providers/WizardFormProvider';
import React from 'react';
import { Accordion, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import {
  AddPropertyWizardFormData,
  generalAmenities
} from 'data/travel-agency/addProperty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

import Button from 'components/base/Button';
import PriceTierForm from '../common/PriceTierForm';

const GeneralAmenitiesForm = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { onChange } = methods;

  return (
    <>
      <div>
        <h3 className="mb-10">General amenities</h3>
        <Row className="g-4">
          <Col sm="auto" className="sm:flex-1 sm:basis-auto">
            <div className="form-icon-container">
              <FloatingLabel
                controlId="GeneralAmenitiesSearch"
                label="Search amenities"
              >
                <Form.Control
                  name="GeneralAmenitiesSearch"
                  type="text"
                  onChange={onChange}
                  placeholder="Search amenities"
                />
              </FloatingLabel>
              <FontAwesomeIcon
                icon={faSearch}
                transform="down-2"
                className="absolute text-soft text-md end-0 top-0 mt-4 me-4"
              />
            </div>
          </Col>
          <Col sm="auto">
            <Button variant="phoenix-primary" className="w-full h-full text-base">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add amenity
            </Button>
          </Col>
        </Row>
      </div>

      <Accordion
        id="generalAmenitiesAccordion"
        className="accordion-button-arrow-icon mt-2"
      >
        {generalAmenities.map((item, index) => (
          <Accordion.Item
            key={index}
            eventKey={item.eventKey}
            className="px-0 py-4"
          >
            <Accordion.Button className="py-0">
              <span className="circle-icon-item me-4">
                <FontAwesomeIcon icon={item.icon} />
              </span>
              <span className="flex-1 text-highlight">{item.title}</span>
            </Accordion.Button>
            <Accordion.Body className="md:ms-16">
              {item.innerItems.map((item, index) => (
                <PriceTierForm
                  key={index}
                  id={item.id}
                  name={item.name}
                  className={item.className}
                  methods={methods}
                />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default GeneralAmenitiesForm;
