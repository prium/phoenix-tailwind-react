import {
  faAngleDown,
  faCheck,
  faEllipsisVertical,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import { actionItems, addToCardItems } from 'data/project-management/actions';
import { Col, Dropdown, Row } from 'react-bootstrap';

const ActionSection = () => {
  return (
    <Row className="gx-0 gy-4 border-b px-8 lg:px-10 py-6 xl:p-0">
      <Col xs={12} xl={5} className="xl:border-e">
        <Row className="h-full items-center xl:px-10 justify-between xl:justify-start">
          <Col xs="auto">
            <div>
              <p className="text-subtle text-sm font-semibold mb-0">
                Created
              </p>
              <p className="text-highlight text-md mb-0">Jan 3, 3:24 pm</p>
            </div>
          </Col>
          <Col xs={7} lg={6}>
            <DatePicker
              placeholder="Set the due date"
              options={{
                defaultDate: 'May 1, 2023'
              }}
            />
          </Col>
        </Row>
      </Col>
      <Col xs={12} xl={7}>
        <div className="xl:px-10 xl:py-6">
          <div className="flex gap-2 justify-between items-center">
            <div className="flex gap-2">
              <Dropdown align="end">
                <Dropdown.Toggle
                  className="hidden sm:block btn btn-subtle-secondary dropdown-toggle dropdown-caret-none flex items-center"
                  variant="subtle-secondary"
                >
                  Add to card
                  <FontAwesomeIcon icon={faPlus} className="ms-2" />
                </Dropdown.Toggle>
                <Dropdown.Toggle
                  className="sm:hidden btn btn-icon btn-icon-lg btn-subtle-secondary dropdown-toggle dropdown-caret-none flex items-center show"
                  variant="subtle-secondary"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className="px-2 flex flex-col gap-2">
                    {addToCardItems.map(item => (
                      <Dropdown.Item
                        key={item.label}
                        as={Button}
                        variant="subtle-secondary"
                        startIcon={
                          <FontAwesomeIcon icon={item.icon} className="me-2" />
                        }
                        className="w-full text-start"
                        size="sm"
                      >
                        {item.label}
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown align="end">
                <Dropdown.Toggle
                  className="btn-icon btn-icon-lg bg-subtle text-emphasis bg-body-secondary-hover rounded-md me-2 dropdown-caret-none"
                  variant=""
                >
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="px-2 flex flex-col gap-2">
                    {actionItems.map(item => (
                      <Dropdown.Item
                        as={Button}
                        variant="subtle-secondary"
                        startIcon={
                          <FontAwesomeIcon icon={item.icon} className="me-2" />
                        }
                        className="w-full text-start"
                        size="sm"
                        key={item.label}
                      >
                        {item.label}
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="flex gap-2">
              <Dropdown align="end">
                <Dropdown.Toggle
                  className="dropdown-caret-none flex items-center"
                  variant="subtle-info"
                >
                  Review
                  <FontAwesomeIcon icon={faAngleDown} className="ms-2" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="py-2">
                  <Dropdown.Item eventKey="1">View</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Export</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4" className="text-danger">
                    Remove
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Button
                className="btn-icon btn-icon-lg"
                variant="subtle-secondary"
              >
                <FontAwesomeIcon icon={faCheck} />
              </Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ActionSection;
