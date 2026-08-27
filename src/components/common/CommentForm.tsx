import {
  faCalendarDays,
  faImage,
  faLocationDot,
  faTag
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Form } from 'react-bootstrap';

const CommentForm = () => {
  return (
    <>
      <Form.Group className="mb-4" controlId="commentForm">
        <Form.Control placeholder="Add comment" as="textarea" rows={3} />
      </Form.Group>
      <div className="flex items-center gap-4">
        <Button size="sm" className="p-0">
          <FontAwesomeIcon icon={faImage} className="text-base" />
        </Button>
        <Button size="sm" className="p-0">
          <FontAwesomeIcon icon={faCalendarDays} className="text-base" />
        </Button>
        <Button size="sm" className="p-0">
          <FontAwesomeIcon icon={faLocationDot} className="text-base" />
        </Button>
        <Button size="sm" className="p-0">
          <FontAwesomeIcon icon={faTag} className="text-base" />
        </Button>
        <Button variant="primary" className="px-10 ms-auto">
          Comment
        </Button>
      </div>
    </>
  );
};

export default CommentForm;
