import { Card, Col, Dropdown, Progress, Row } from '@hummingbirdui/react';
import FeatherIcon from 'feather-icons-react';
import Avatar from 'components/base/Avatar';
import avatar from 'assets/img/team/72x72/58.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import Badge from 'components/base/Badge';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

/** `+DealProfileCard` in mixins/crm/DealDetails.pug */
const DealProfileCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <Card.Body>
        <Row className="items-center g-4">
          <Col xs={12} sm="auto" className="flex-1">
            <h3 className="font-extrabold mb-2 line-clamp-1">
              Start-Up Growth Suite
            </h3>
            <div className="flex items-center mb-6">
              <h5 className="mb-0 me-6">USD $12,000.00</h5>
              <h5 className="font-semibold">
                <FeatherIcon
                  icon="grid"
                  size={16}
                  className="size-4 inline-block leading-sm me-1"
                />
                <span className="inline-block leading-sm">Financial</span>
              </h5>
            </div>

            <div className="md:flex xl:block items-center justify-between mb-8">
              <div className="flex items-center mb-4 md:mb-0 xl:mb-4">
                <Avatar size="xl" src={avatar} className="me-4" />
                <div>
                  <h5>Ansolo Lazinatov</h5>
                  <Dropdown>
                    <Dropdown.Trigger asChild>
                      <a
                        href="#!"
                        className="text-muted no-underline dropdown-caret-none"
                      >
                        Owner
                        <FontAwesomeIcon
                          icon={faCaretDown}
                          className="text-muted text-md ms-2"
                        />
                      </a>
                    </Dropdown.Trigger>
                    {/* gold `.dropdown-menu.shadow-sm.min-w-80` — Radix popper needs the width pinned */}
                    <Dropdown.Content className="shadow-sm min-w-80 w-80">
                      <div className="card relative border-0">
                        <div className="card-body p-0">
                          <div className="mx-4">
                            <h4 className="mb-4 font-bold">Switch ownership</h4>
                            <h5 className="mb-4">Deal Owner</h5>
                            <select
                              className="form-select mb-4"
                              aria-label="Default select"
                              defaultValue=""
                            >
                              <option value="">Select</option>
                              <option value="1">Jerry Seinfield</option>
                              <option value="2">Anthoney Michael</option>
                              <option value="3">Ansolo Lazinatov</option>
                            </select>
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
                        </div>
                      </div>
                    </Dropdown.Content>
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

            {/* the gold's bar is 2/5 wide but carries aria-valuenow=25; HB
                drives both from `value`, so the label matches what is drawn */}
            <Progress value={40} className="mb-2 h-1.25 dark">
              <Progress.Bar className="bg-blue-200" />
            </Progress>
            <div className="flex items-center justify-between">
              <p className="mb-0">New</p>
              <div>
                <FeatherIcon
                  icon="clock"
                  size={16}
                  className="size-4 inline-block leading-sm me-1"
                />
                <span className="inline-block leading-sm">
                  {' '}
                  Dec 15, 05:00AM
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default DealProfileCard;
