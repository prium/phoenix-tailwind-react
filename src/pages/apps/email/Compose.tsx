import {
  faImage,
  faPaperPlane,
  faPaperclip
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import TinymceEditor from 'components/base/TinymceEditor';
import EmailLayout from 'layouts/EmailLayout';
import { Card, Col, Form, Row } from 'react-bootstrap';

const Compose = () => {
  return (
    <EmailLayout page="compose">
      <Col>
        <Card className="email-content">
          <Card.Body>
            <form className="flex flex-column h-100">
              <Row className="g-3 mb-2">
                <Col xs={4}>
                  <Form.Control type="email" placeholder="To" />
                </Col>
                <Col xs={4}>
                  <Form.Control type="email" placeholder="CC" />
                </Col>
                <Col xs={4}>
                  <Form.Control type="email" placeholder="BCC" />
                </Col>
                <Col xs={12}>
                  <Form.Control type="text" placeholder="Subject" />
                </Col>
              </Row>
              <div className="mb-3 flex-1">
                <TinymceEditor
                  options={{
                    height: '100%'
                  }}
                />
              </div>
              <div className="flex justify-content-between align-items-center">
                <div className="flex gap-3">
                  <div>
                    <Button className="p-0">
                      <label
                        className="text-default text-md cursor-pointer"
                        htmlFor="attachments"
                      >
                        <FontAwesomeIcon icon={faPaperclip} />
                      </label>
                    </Button>
                    <Form.Control
                      className="hidden"
                      type="file"
                      id="attachments"
                    />
                  </div>

                  <div>
                    <Button className="p-0">
                      <label
                        className="text-default text-md cursor-pointer"
                        htmlFor="images"
                      >
                        <FontAwesomeIcon icon={faImage} />
                      </label>
                    </Button>
                    <Form.Control
                      className="hidden"
                      type="file"
                      accept="image/*"
                      id="images"
                    />
                  </div>
                </div>
                <div className="flex">
                  <Button
                    variant="link"
                    className="text-default text-sm text-decoration-none"
                  >
                    Discard
                  </Button>
                  <Button
                    variant="primary"
                    className="text-sm"
                    type="submit"
                    endIcon={<FontAwesomeIcon icon={faPaperPlane} />}
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </Card.Body>
        </Card>
      </Col>
    </EmailLayout>
  );
};

export default Compose;
