import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleDown,
  faBars,
  faBarsStaggered,
  faBoxArchive,
  faCalendarDays,
  faFilter,
  faPalette,
  faRightLeft,
  faSearch,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from '@hummingbirdui/react';
import AvatarDropdown from 'components/common/AvatarDropdown';
import KanbanInviteModal from 'components/modals/KanbanInviteModal';
import { kanbanHeaderUsers } from 'data/kanban';
import { useKanbanContext } from 'providers/KanbanProvider';
import { useState } from 'react';
import { TOGGLE_DETAILS_OFFCANVAS } from 'reducers/KanbanReducer';

const navItems: { icon: IconProp; title: string }[] = [
  {
    icon: faFilter,
    title: 'Filter'
  },
  {
    icon: faRightLeft,
    title: 'Export/import'
  },
  {
    icon: faPalette,
    title: 'Modify'
  },
  {
    icon: faBarsStaggered,
    title: 'Gantt'
  },
  {
    icon: faCalendarDays,
    title: 'Calendar'
  },
  {
    icon: faBoxArchive,
    title: 'Archive'
  }
];

/** `+KanbanHeader` in mixins/kanban/kanban/KanbanHeader.pug */
const KanbanHeader = () => {
  const [openInviteModal, setOpenInviteModal] = useState(false);
  const { kanbanDispatch } = useKanbanContext();

  return (
    <>
      <div className="kanban-header">
        <div className="row gx-0 justify-between md:justify-start">
          <div className="col-auto">
            <div className="dropdown me-2">
              <Dropdown>
                <Dropdown.Trigger asChild>
                  <button
                    className="btn btn-link hover:no-underline text-emphasis text-base ps-0"
                    type="button"
                  >
                    <span className="text-lg me-2">Phoenix</span>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      transform="up-2"
                      className="text-soft inline-block min-w-3"
                    />
                  </button>
                </Dropdown.Trigger>
                <Dropdown.Content className="py-0">
                  <Dropdown.Item asChild>
                    <a href="#!">Sparrow</a>
                  </Dropdown.Item>
                  <Dropdown.Item asChild>
                    <a href="#!">Boreas</a>
                  </Dropdown.Item>
                  <Dropdown.Item asChild>
                    <a href="#!">Erebus</a>
                  </Dropdown.Item>
                </Dropdown.Content>
              </Dropdown>
            </div>
          </div>
          <div className="col-auto flex items-center">
            <div className="avatar-group">
              {kanbanHeaderUsers.map(user => (
                <AvatarDropdown
                  user={user}
                  size="m"
                  dropdownClass="flex"
                  key={user.id}
                />
              ))}
            </div>
            <button
              className="btn btn-primary ms-6 text-sm px-4"
              type="button"
              onClick={() => setOpenInviteModal(true)}
            >
              <FontAwesomeIcon
                icon={faUserPlus}
                className="inline-block min-w-3.5"
              />
              <span className="hidden sm:inline ms-2">invite</span>
            </button>
          </div>
          <div className="md:col-auto flex items-center ms-auto mt-2 md:mt-0">
            <ul className="nav w-full">
              <li className="nav-item">
                <a
                  href="#!"
                  className="nav-link flex items-center text-default ps-0 pe-2 xl:px-4 font-bold"
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    transform="up-2"
                    className="me-1 min-w-3.5 text-md"
                  />
                  <span className="hidden 2xl:inline text-md">Search</span>
                </a>
              </li>
              {navItems.map(item => (
                <li className="nav-item" key={item.title}>
                  <a
                    href="#!"
                    className="nav-link flex items-center text-default px-2 xl:px-4 font-bold"
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      transform="up-2"
                      className="me-1 min-w-3.5 text-md"
                    />
                    <span className="hidden 2xl:inline text-md">
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
              <li className="nav-item ms-auto">
                <a
                  href="#offcanvasKanban"
                  role="button"
                  className="nav-link flex items-center pe-0 ps-1 xl:ps-4 text-default h-full"
                  onClick={e => {
                    e.preventDefault();
                    kanbanDispatch({
                      type: TOGGLE_DETAILS_OFFCANVAS,
                      payload: true
                    });
                  }}
                >
                  <FontAwesomeIcon
                    icon={faBars}
                    transform="up-2"
                    className="inline min-w-3.5 text-md"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <KanbanInviteModal
        show={openInviteModal}
        handleClose={() => setOpenInviteModal(false)}
      />
    </>
  );
};

export default KanbanHeader;
