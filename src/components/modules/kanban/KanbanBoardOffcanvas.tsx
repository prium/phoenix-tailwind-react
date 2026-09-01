import {
  faAngleRight,
  faPencil,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import AvatarDropdown from 'components/common/AvatarDropdown';
import { kanbanBoardMembers } from 'data/kanban';
import { useKanbanContext } from 'providers/KanbanProvider';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router';
import { TOGGLE_DETAILS_OFFCANVAS } from 'reducers/KanbanReducer';

const actions = [
  {
    label: 'Board Setting'
  },
  {
    label: 'Duplicate Board'
  },
  {
    label: 'Manage Labels'
  },
  {
    label: 'Go to Archive'
  },
  {
    label: 'Print'
  },
  {
    label: 'Export As'
  },
  {
    label: 'Integrations'
  },
  {
    label: 'Privacy Settings'
  },
  {
    label: 'Automation'
  }
];

const KanbanBoardOffcanvas = () => {
  const { openBoardDetailsOffcanvas, kanbanDispatch } = useKanbanContext();

  const handleClose = () => {
    kanbanDispatch({
      type: TOGGLE_DETAILS_OFFCANVAS,
      payload: false
    });
  };
  return (
    <PhoenixOffcanvas
      open={openBoardDetailsOffcanvas}
      onHide={handleClose}
      className="bg-subtle"
      placement="end"
      fixed
      style={{ maxWidth: 445 }}
    >
      <Offcanvas.Header className="mb-10">
        <h3 className="offcanvas-title">Phoenix Kanban</h3>
        <Button className="p-1 font-black ms-auto" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} className="text-base" />
        </Button>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <h4 className="text-highlight font-semibold mb-4">Admins</h4>
        <div className="flex items-center gap-4 mb-8">
          <AvatarDropdown user={kanbanBoardMembers.admin} size="xl" />
          <div className="flex-1">
            <Link
              to="#!"
              className="no-underline text-highlight leading-none font-semibold"
            >
              Sasha Blaus
            </Link>
            <h6 className="mb-0 leading-none text-highlight font-semibold">
              @potatogirl
            </h6>
          </div>
        </div>

        <h4 className="text-highlight font-semibold mb-4">Members</h4>
        <div className="flex items-center gap-2 mb-6">
          {kanbanBoardMembers.members.map(member => (
            <AvatarDropdown user={member} size="m" key={member.id} />
          ))}
        </div>

        <h4 className="text-highlight font-semibold mb-4">Guests</h4>
        <div className="flex items-center gap-2 mb-12">
          {kanbanBoardMembers.guests.map(member => (
            <AvatarDropdown user={member} size="m" key={member.id} />
          ))}
        </div>

        <div className="flex mb-4 border-b border-subtle pb-4 gap-4">
          <h4 className="text-highlight font-semibold mb-0">Description</h4>
          <Button className="p-0">
            <FontAwesomeIcon icon={faPencil} className="text-default text-md" />
          </Button>
        </div>
        <p>
          Phoenix is a rich and complex symbol that continues to capture the
          imagination of people across cultures and time periods. Whether seen
          as a symbol of hope, renewal, or mystery, the Phoenix remains an
          enduring icon of the human spirit.
        </p>

        <ul className="list-unstyled mb-0">
          {actions.map(action => (
            <li key={action.label}>
              <Link
                to="#!"
                className={classNames(
                  'text-highlight font-semibold no-underline flex flex-between-center py-6 border-b border-subtle'
                )}
              >
                <span>{action.label}</span>
                <FontAwesomeIcon icon={faAngleRight} className="text-md" />
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="#!"
              className={classNames(
                'font-semibold no-underline flex flex-between-center text-danger pt-6'
              )}
            >
              Leave Board
            </Link>
          </li>
        </ul>
      </Offcanvas.Body>
    </PhoenixOffcanvas>
  );
};

export default KanbanBoardOffcanvas;
