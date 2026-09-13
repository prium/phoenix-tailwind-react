import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Input, Row, Select } from '@hummingbirdui/react';
import DatePicker from 'components/base/DatePicker';
import { AddPropertyWizardFormData } from 'data/travel-agency/addProperty';
import { useWizardFormContext } from 'providers/WizardFormProvider';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

/** gold "By day of week" card of PricingForm.pug */
const WeeklyPricingCard = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { onChange } = methods;

  return (
    <Card className="bg-subtle">
      <Card.Body>
        <Row className="gx-2 justify-between">
          <div className="col sm:col-auto">
            <label
              className="form-label mb-1 text-highlight font-bold text-md"
              htmlFor="date"
            >
              Date
            </label>
            <div className="input-group-icon">
              <DatePicker
                id="date"
                placeholder="Start date"
                hideIcon
                wrapperClassName="contents"
                options={{
                  disableMobile: true,
                  mode: 'range',
                  minDate: 'today',
                  dateFormat: 'd-m-y'
                }}
              />
              <FontAwesomeIcon
                icon={faCalendarAlt}
                transform="up-1"
                className="form-control-icon-start text-md text-subtle"
              />
            </div>
          </div>
          <Col xs="auto">
            <label
              className="form-label mb-1 text-highlight font-bold text-md"
              htmlFor="day-of-week-currency"
            >
              Currency
            </label>
            <Select
              name="day-of-week-currency"
              id="day-of-week-currency"
              onChange={onChange}
            >
              <option value="1">USD</option>
              <option value="2">EUR</option>
              <option value="2">BDT</option>
            </Select>
          </Col>
        </Row>
        <hr className="mb-2" />
        <Row className="g-2">
          {days.map(day => (
            <div className="col-4 sm:col" key={day}>
              <label
                className="form-label mb-1 text-highlight font-bold text-md"
                htmlFor={day.toLowerCase()}
              >
                {day}
              </label>
              <Input
                id={day.toLowerCase()}
                type="number"
                defaultValue={100}
                className="input-spin-none"
                onChange={onChange}
              />
            </div>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WeeklyPricingCard;
