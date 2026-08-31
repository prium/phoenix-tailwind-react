import {
  faCalendarDays,
  faImage,
  faLocationDot,
  faTag
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Textarea } from '@hummingbirdui/react';
import Button from 'components/base/Button';

/** `+ModalNotificationComment` in mixins/project-management/ProjectDetailsModal.pug */
const CommentForm = () => {
  return (
    <>
      <Textarea
        className="mb-4"
        placeholder="Add comment"
        rows={3}
        id="commentForm"
      />
      <div className="flex flex-between-center">
        <div className="flex">
          <Button size="sm" className="ps-0 pe-2 py-0">
            <FontAwesomeIcon icon={faImage} className="text-base" />
          </Button>
          <Button size="sm" className="px-2 py-0">
            <FontAwesomeIcon icon={faCalendarDays} className="text-base" />
          </Button>
          <Button size="sm" className="px-2 py-0">
            <FontAwesomeIcon icon={faLocationDot} className="text-base" />
          </Button>
          <Button size="sm" className="px-2 py-0">
            <FontAwesomeIcon icon={faTag} className="text-base" />
          </Button>
        </div>
        <Button variant="primary" size="sm" className="px-10">
          Comment
        </Button>
      </div>
    </>
  );
};

export default CommentForm;
