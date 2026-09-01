import { faPaste } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PhoenixFloatingLabel from 'components/base/PhoenixFloatingLabel';
import { useState } from 'react';
import {
  Accordion,
  Col,
  FloatingLabel,
  Form,
  FormCheckProps,
  OverlayTrigger,
  Row,
  Tooltip,
  useAccordionButton
} from 'react-bootstrap';
import { Link } from 'react-router';

interface CustomToggleProps extends FormCheckProps {
  eventKey: string;
}

const CustomToggle = ({ eventKey, ...rest }: CustomToggleProps) => {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <Form.Check
      type="radio"
      onClick={decoratedOnClick}
      name="access"
      {...rest}
    />
  );
};

const shareableLink = `${window.location.origin}/kanban/invite/jd9sklaicijs`;
const AccessForm = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyShareableLink = async () => {
    await navigator.clipboard.writeText(shareableLink);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div>
      <p className="mb-6">
        Add <b>Members</b> or <b>Guests</b> to your Kanban board. They can add,
        edit, or move tasks in your board. Tasks can also be assigned to them.
        <br />
        <Link className="mb-6" to="#!">
          Learn more
        </Link>
      </p>

      <Accordion defaultActiveKey="0">
        <CustomToggle
          eventKey="0"
          id="anyone"
          label="Anyone with shareable link can access"
          className="mb-6"
          defaultChecked
        />

        <Accordion.Collapse eventKey="0" className="ms-6">
          <Row className="g-4 mb-6">
            <Col md={9}>
              <PhoenixFloatingLabel
                label="Shareable Link"
                className="flex-1"
                endComponent={
                  <Button
                    className="text-base text-soft end-0"
                    onClick={handleCopyShareableLink}
                  >
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="ThemeColor" style={{ position: 'fixed' }}>
                          {copied ? 'Copied' : 'Copy'}
                        </Tooltip>
                      }
                    >
                      <FontAwesomeIcon icon={faPaste} />
                    </OverlayTrigger>
                  </Button>
                }
              >
                <Form.Control
                  type="text"
                  readOnly
                  placeholder="Board Name"
                  value={shareableLink}
                  className="pe-12"
                />
              </PhoenixFloatingLabel>
            </Col>
            <Col md={3}>
              <FloatingLabel controlId="addTye" label="Add as">
                <Form.Select>
                  <option value="guest">Guest</option>
                  <option value="member">Member</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
        </Accordion.Collapse>

        <CustomToggle
          eventKey="1"
          id="invited"
          label="Only invited people can access"
          className="mb-6"
        />

        <Accordion.Collapse eventKey="1" className="ms-6">
          <div className="flex flex-col gap-4">
            <Row className="g-4">
              <Col md={9}>
                <PhoenixFloatingLabel
                  label="ADD PEOPLE (ID OR EMAIL)"
                  className="flex-1"
                >
                  <Form.Control type="text" placeholder="Board Name" />
                </PhoenixFloatingLabel>
              </Col>
              <Col md={3}>
                <FloatingLabel controlId="addTye" label="Add as">
                  <Form.Select>
                    <option value="guest">Guest</option>
                    <option value="member">Member</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel
              controlId="addAMessage"
              label="ADD A MESSAGE (OPTIONAL)"
            >
              <Form.Control
                as="textarea"
                placeholder="ADD A MESSAGE (OPTIONAL)"
                style={{ height: '128px' }}
              />
            </FloatingLabel>
            <Button
              variant="outline-primary"
              endIcon={<FontAwesomeIcon icon={faEnvelope} className="ms-2" />}
              className="w-full"
            >
              Invite
            </Button>
          </div>
        </Accordion.Collapse>
      </Accordion>
    </div>
  );
};

export default AccessForm;
