import {
  faAngleRight,
  faPencil,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import AvatarDropdown from 'components/common/AvatarDropdown';
import { kanbanBoardMembers } from 'data/kanban';
import { useKanbanContext } from 'providers/KanbanProvider';
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
  },
  {
    label: 'Leave Board',
    className: 'text-danger pb-0'
  }
];

/** `+KanbanOffcanvas` in mixins/kanban/kanban/KanbanOffcanvas.pug */
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
      placement="end"
      className="bg-subtle fixed outline-none max-w-111.25"
    >
      <div className="offcanvas-header justify-between">
        <h3 className="offcanvas-title">Phoenix Kanban</h3>
        <button
          className="btn p-1 font-black"
          type="button"
          onClick={handleClose}
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faTimes} className="text-base" />
        </button>
      </div>
      <div className="offcanvas-body">
        <h4 className="text-highlight font-semibold mb-0 mt-10">Admins</h4>
        <div className="flex items-center mt-4">
          <div className="dropdown">
            <AvatarDropdown
              user={kanbanBoardMembers.admin}
              size="xl"
              className="me-4 border border-subtle-subtle rounded-full"
            />
          </div>
          <div className="flex-1">
            <a
              href="#!"
              className="no-underline text-highlight leading-none font-semibold"
            >
              Sasha Blaus
            </a>
            <h6 className="mb-0 leading-none text-highlight font-semibold">
              @potatogirl
            </h6>
          </div>
        </div>

        <h4 className="text-highlight font-semibold mb-0 mt-8 mb-4">Members</h4>
        <div className="flex">
          {kanbanBoardMembers.members.map(member => (
            <div className="dropdown" key={member.id}>
              <AvatarDropdown
                user={member}
                size="m"
                className="me-2 border border-subtle-subtle rounded-full"
              />
            </div>
          ))}
        </div>

        <h4 className="text-highlight font-semibold mb-0 mt-4 mb-4">Guests</h4>
        <div className="flex">
          {kanbanBoardMembers.guests.map(member => (
            <div className="dropdown" key={member.id}>
              <AvatarDropdown
                user={member}
                size="m"
                className="me-2 border border-subtle-subtle rounded-full"
              />
            </div>
          ))}
        </div>

        <h4 className="text-highlight font-semibold mb-0 mt-12 mb-4 border-b border-subtle pb-4">
          Description{' '}
          <FontAwesomeIcon
            icon={faPencil}
            transform="up-2"
            className="text-default text-md ms-4 cursor-pointer"
          />
        </h4>
        <p>
          Phoenix is a rich and complex symbol that continues to capture the
          imagination of people across cultures and time periods. Whether seen
          as a symbol of hope, renewal, or mystery, the Phoenix remains an
          enduring icon of the human spirit.
        </p>

        <ul className="list-none ps-0 mb-0">
          {actions.map((action, index) => (
            <li key={action.label}>
              <a
                href="#!"
                className={cn(
                  'text-highlight font-semibold no-underline flex flex-between-center py-4',
                  action.className,
                  index !== actions.length - 1 ? 'border-b' : 'pb-0'
                )}
              >
                <span>{action.label}</span>
                {index !== actions.length - 1 && (
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-md me-4"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </PhoenixOffcanvas>
  );
};

export default KanbanBoardOffcanvas;
