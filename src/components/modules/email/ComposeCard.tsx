import {
  faImage,
  faPaperPlane,
  faPaperclip
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Input, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import TinymceEditor from 'components/base/TinymceEditor';
import { useEffect, useRef } from 'react';

/** `+Compose` in mixins/email/Compose.pug (email compose page + widgets). */
const ComposeCard = ({ className }: { className?: string }) => {
  const editorWrapperRef = useRef<HTMLDivElement>(null);

  // The gold textarea is `textarea.tinymce.email-textarea`; email.css keys
  // `.email-textarea + .tox` for the editor min-height/header spacing.
  // @tinymce/tinymce-react owns its textarea, so add the classes here.
  useEffect(() => {
    editorWrapperRef.current
      ?.querySelector('textarea')
      ?.classList.add('tinymce', 'email-textarea');
  }, []);

  return (
    <Card className={className}>
      <Card.Body>
        <form className="flex flex-col h-full">
          <Row className="g-4 mb-2">
            <Col xs={4}>
              <Input type="email" placeholder="To" />
            </Col>
            <Col xs={4}>
              <Input type="email" placeholder="CC" />
            </Col>
            <Col xs={4}>
              <Input type="email" placeholder="BCC" />
            </Col>
            <Col xs={12}>
              <Input type="text" placeholder="Subject" />
            </Col>
          </Row>
          <div className="mb-4 flex-1" ref={editorWrapperRef}>
            <TinymceEditor
              options={{
                height: '100%'
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex">
              <label
                className="btn btn-link py-0 px-2 text-default text-md"
                htmlFor="emailAttachment"
              >
                {' '}
                <FontAwesomeIcon icon={faPaperclip} />
              </label>
              <input className="hidden" id="emailAttachment" type="file" />
              <label
                className="btn btn-link py-0 px-2 text-default text-md"
                htmlFor="emailPhotos"
              >
                <FontAwesomeIcon icon={faImage} />
              </label>
              <input
                className="hidden"
                id="emailPhotos"
                type="file"
                accept="image/*"
              />
            </div>
            <div className="flex">
              <Button
                variant="link"
                className="text-default text-sm no-underline"
              >
                Discard
              </Button>
              <Button variant="primary" className="text-sm" type="submit">
                Send
                <FontAwesomeIcon icon={faPaperPlane} className="ms-1" />
              </Button>
            </div>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
};

export default ComposeCard;
