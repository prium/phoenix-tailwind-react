import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import { Link } from 'react-router';

/** `+Labels` in project-management/ProjectDetailsModal.pug */
const ProjectModalLabels = () => (
  <>
    <h6 className="text-muted mb-2">Labels</h6>
    <div className="flex items-center">
      <Badge variant="phoenix" bg="info" className="text-sm me-2">
        INFO
      </Badge>
      <Badge variant="phoenix" bg="warning" className="text-sm me-2">
        URGENT
      </Badge>
      <Badge variant="phoenix" bg="success" className="text-sm me-2">
        DONE
      </Badge>
      <Link
        to="#!"
        className="text-default font-extrabold text-md leading-none no-underline"
      >
        <FontAwesomeIcon icon={faPlus} className="me-1" />
        Add another
      </Link>
    </div>
  </>
);

export default ProjectModalLabels;
