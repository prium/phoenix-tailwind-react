import React from 'react';
import { Card, Col, Dropdown, Form, ProgressBar, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import Avatar from 'components/base/Avatar';
import avatar from 'assets/img/team/72x72/58.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import Badge from 'components/base/Badge';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from 'providers/AppProvider';

const DealProfileCard = ({ className }: { className?: string }) => {
  const {
    config: { isRTL }
  } = useAppContext();
  return (
    <Card className={className}>
      <Card.Body>
        <Row className="items-center g-4">
          <Col sm="auto" className="flex-1">
            <h3 className="font-black mb-2 line-clamp-1">
              Start-Up Growth Suite
            </h3>
            <div className="flex items-center mb-6">
              <h5 className="mb-0 me-6">USD $12,000.00</h5>
              <h5 className="font-semibold">
                <FeatherIcon
                  icon="grid"
                  className="inline-block leading-sm me-1"
                  width={16}
                  height={16}
                />
                <span className="inline-block leading-sm">Financial</span>
              </h5>
            </div>
            <div className="md:flex xl:block items-center justify-between mb-8">
              <div className="flex items-center mb-4 md:mb-0 xl:mb-4">
                <Avatar size="xl" src={avatar} className="me-4" />
                <div>
                  <h5>Ansolo Lazinatov</h5>
                  <Dropdown align={isRTL ? 'end' : 'start'}>
                    <Dropdown.Toggle
                      variant="link"
                      className="text-muted no-underline dropdown-caret-none p-0 text-base font-normal"
                    >
                      Owner
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        className="text-muted text-md ms-2"
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                      className="shadow-sm"
                      style={{ minWidth: '20rem' }}
                    >
                      <Card className="relative border-0">
                        <Card.Body className="p-0">
                          <div className="mx-4">
                            <h4 className="mb-4 font-bold">Switch ownership</h4>
                            <h5 className="mb-4">Deal Owner</h5>
                            <Form.Select className="mb-4">
                              <option value="">Select</option>
                              <option value="1">Jerry Seinfield</option>
                              <option value="2">Anthoney Michael</option>
                              <option value="3">Ansolo Lazinatov</option>
                            </Form.Select>
                            <div className="text-end">
                              <Button variant="link" className="text-danger">
                                Cancel
                              </Button>
                              <Button
                                size="sm"
                                variant="primary"
                                className="px-8"
                              >
                                Save
                              </Button>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div>
                <Badge variant="phoenix" bg="success" className="me-2">
                  Success
                </Badge>
                <Badge variant="phoenix" bg="danger" className="me-2">
                  Lost
                </Badge>
                <Badge variant="phoenix" bg="secondary">
                  Close
                </Badge>
              </div>
            </div>
            <ProgressBar variant="primary-lighter" now={40} className="mb-2" />
            <div className="flex items-center justify-between">
              <p className="mb-0">New</p>
              <div>
                <FeatherIcon
                  icon="clock"
                  className="leading-sm me-1"
                  width={16}
                  height={16}
                />
                <span className="inline-block leading-sm">Dec 15, 05:00AM</span>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default DealProfileCard;
