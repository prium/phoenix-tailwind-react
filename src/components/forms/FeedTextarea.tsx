import {
  faCalendarAlt,
  faCaretDown,
  faGlobeAsia,
  faImage,
  faMapMarkerAlt,
  faTag
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { useState } from 'react';
import { Card, Dropdown, Form } from 'react-bootstrap';

const FeedTextarea = ({ className }: { className?: string }) => {
  const [privacy, setPrivacy] = useState('Public');
  return (
    <Card className={className}>
      <Card.Body className="p-0">
        <Form.Control
          as="textarea"
          className="border-subtle rounded-b-none border-0 flex-1 text-base"
          rows={7}
          placeholder="Write something..."
        />
      </Card.Body>
      <Card.Footer className="p-4">
        <div className="flex justify-between items-center">
          <Button className="p-0 me-4">
            <FontAwesomeIcon icon={faImage} className="text-base" />
          </Button>
          <Button className="p-0 me-4">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-base" />
          </Button>
          <Button className="p-0 me-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-base" />
          </Button>
          <Button className="p-0 me-4">
            <FontAwesomeIcon icon={faTag} className="text-base" />
          </Button>
          <Dropdown className="me-4 flex-1">
            <Dropdown.Toggle
              variant=""
              className="p-0 dropdown-caret-none flex items-center"
            >
              <FontAwesomeIcon icon={faGlobeAsia} className="text-base me-1" />
              <span className="me-1 leading-base hidden sm:block">{privacy}</span>
              <FontAwesomeIcon
                icon={faCaretDown}
                className="text-sm text-soft"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setPrivacy('Public')}>
                Public
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setPrivacy('Private')}>
                Private
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setPrivacy('Draft')}>
                Draft
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button
            variant="primary"
            type="submit"
            size="sm"
            className="px-10 sm:px-14"
          >
            Post
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default FeedTextarea;
