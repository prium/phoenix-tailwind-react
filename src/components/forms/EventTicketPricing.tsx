import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Input, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import InlineCheckItem from 'components/common/InlineCheckItem';

/** "Ticket pricing" block of `+CreateEvent` in mixins/events/CreateEvent.pug */
const EventTicketPricing = () => {
  return (
    <>
      <h4 className="text-lg mb-7">Ticket pricing</h4>
      <InlineCheckItem
        className="me-4"
        id="freeTicket"
        name="ticketPricing"
        value="freeTicket"
        label="Free"
        defaultChecked
      />{' '}
      <InlineCheckItem
        className="me-4"
        id="paidTicket"
        name="ticketPricing"
        value="paidTicket"
        label="Paid"
      />
      <Row className="g-4 mb-12 mt-1 border-b border-subtle pb-8">
        {/* the stray `col` class is verbatim from the gold pug */}
        <Col xs={6} xl={7} className="col">
          <h4 className="text-md">Option</h4>
        </Col>
        <Col xs={6} xl={5}>
          <h4 className="text-md">Price</h4>
        </Col>
        <Col xs={6} xl={7}>
          <Input type="text" placeholder="Top Gallery" />
        </Col>
        <Col xs={6} xl={5}>
          <Input type="number" placeholder="$0.0" />
        </Col>
        <Col xs={6} xl={7}>
          <Input type="text" placeholder="VIP" />
        </Col>
        <Col xs={6} xl={5}>
          <Input type="number" placeholder="$0.0" />
        </Col>
        <Col xs={6} xl={7}>
          <Input type="text" placeholder="Front row" />
        </Col>
        <Col xs={6} xl={5}>
          <Input type="number" placeholder="$0.0" />
        </Col>
        <Col xs={12}>
          <Button
            variant="link"
            className="p-0"
            startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
          >
            Add an option
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default EventTicketPricing;
