import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Input, Row, Select, Textarea } from '@hummingbirdui/react';
import Button from 'components/base/Button';

/** "Custom fields" block of `+CreateEvent` in mixins/events/CreateEvent.pug */
const EventCustomFields = () => {
  return (
    <>
      <h4 className="text-lg mb-4">Custom fields</h4>
      <Row className="g-4 mb-4">
        <Col md={6} lg={12} xl={6}>
          <label className="form-label" htmlFor="inputName">
            Name
          </label>
          <Input
            id="inputName"
            type="text"
            placeholder="Item name (e.g. Special T-shirt)"
          />
        </Col>
        <Col md={6} lg={12} xl={6}>
          <label className="form-label" htmlFor="inputState1">
            Type
          </label>
          <Select id="inputState1">
            <option value="">Choose...</option>
            <option value="">Type One</option>
            <option value="">Type Two</option>
          </Select>
        </Col>
        <Col xs={12}>
          <label className="form-label" htmlFor="filedOptions">
            Field options
          </label>
          <Textarea id="filedOptions" placeholder="Description" rows={6} />
        </Col>
      </Row>
      <Row className="g-4">
        <Col md={6} lg={12} xl={6}>
          <label className="form-label" htmlFor="inputName2">
            Name
          </label>
          <Input
            id="inputName2"
            type="text"
            placeholder="Item name (e.g. Special T-shirt)"
          />
        </Col>
        <Col md={6} lg={12} xl={6}>
          <label className="form-label" htmlFor="inputState2">
            Type
          </label>
          <Select id="inputState2">
            <option value="">Choose...</option>
            <option value="">Type Three</option>
            <option value="">Type Four</option>
          </Select>
        </Col>
        <Col xs={12}>
          <label className="form-label" htmlFor="filedOptions2">
            Field options
          </label>
          <Textarea id="filedOptions2" placeholder="Description" rows={6} />
        </Col>
        <Col xs={12}>
          <Button
            variant="link"
            className="p-0"
            startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
          >
            Add an item
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default EventCustomFields;
