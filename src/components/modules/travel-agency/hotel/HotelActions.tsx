import classNames from 'classnames';
import bg42 from 'assets/img/bg/42.png';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faMapMarkerAlt,
  faSearch,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'components/base/DatePicker';
import Button from 'components/base/Button';
import InputGroupCounter from 'components/common/InputGroupCounter';

export const DropdownItem = ({
  title,
  className
}: {
  title: string;
  className?: string;
}) => {
  return (
    <Dropdown.Item
      as="div"
      className={`flex items-center px-0 hover-bg-none g-0 border-subtle ${className}`}
    >
      <h5 className="mb-0 text-default" style={{ minWidth: 100 }}>
        {title}
      </h5>
      <div style={{ minWidth: 160 }}>
        <InputGroupCounter id={title} inputGap="gap-2" />
      </div>
    </Dropdown.Item>
  );
};

const HotelActions = ({ background }: { background: boolean }) => {
  return (
    <div
      className={classNames('container-medium-md px-0', {
        'md:px-4': background === true
      })}
    >
      <div
        className={classNames({
          'px-6 py-28 relative': background === true
        })}
      >
        {background && (
          <div
            className="bg-holder overlay md:rounded-md"
            style={{
              backgroundImage: `url(${bg42})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
        )}
        <Row
          className={classNames(
            'gx-0 gy-6 md:gy-0 items-center mx-auto p-6 bg-soft rounded-4xl md:rounded-full relative border',
            {
              'lg:w-3/4': background === true
            }
          )}
        >
          <Col xs={12} md>
            <div className="form-icon-container border-b md:border-b-0 border-subtle pb-4 md:pb-0">
              <Form.Control
                id="PickPlace"
                type="text"
                placeholder="Pick a place"
                className="form-icon-input border-0 py-0 shadow-none text-base"
              />
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="form-icon text-subtle top-0"
                transform="down-2"
              />
            </div>
          </Col>
          <Col xs={6} md>
            <div className="form-icon-container flatpickr-input-container">
              <DatePicker
                render={(_, ref) => {
                  return (
                    <>
                      <Form.Control
                        type="text"
                        placeholder="Pick a date"
                        ref={ref}
                        id="pickDate"
                        className="form-icon-input border-y-0 border-s-0 md:border-s py-0 shadow-none border-subtle text-base rounded-none"
                      />
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="form-icon text-subtle top-0"
                        transform="down-2"
                      />
                    </>
                  );
                }}
                hideIcon={true}
                options={{
                  mode: 'range',
                  minDate: 'today',
                  dateFormat: 'Y-m-d'
                }}
              />
            </div>
          </Col>
          <Col xs={6} md>
            <Dropdown autoClose="outside">
              <Dropdown.Toggle
                variant="link"
                className="btn px-4 text-base font-semibold text-subtle no-underline dropdown-caret-none"
              >
                <FontAwesomeIcon icon={faUser} className="me-2" />1 adult
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="p-6"
                align="start"
                style={{ maxWidth: 320 }}
              >
                <DropdownItem
                  title="Adults"
                  className="pb-4 pt-0 border-b"
                />
                <DropdownItem title="Infants" className="py-4 border-b" />
                <DropdownItem title="Children" className="pt-4 pb-0" />
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs={12} md="auto">
            <Button
              variant="phoenix-primary"
              className="rounded-full w-full btn-lg"
            >
              <FontAwesomeIcon icon={faSearch} className="me-2" />
              Search
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HotelActions;
