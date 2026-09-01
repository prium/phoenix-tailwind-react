import {
  faAngleDown,
  faBars,
  faBarsStaggered,
  faBoxArchive,
  faCalendarDays,
  faFilter,
  faPalette,
  faRightLeft,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import AvatarDropdown from 'components/common/AvatarDropdown';
import { kanbanBoardMembers } from 'data/kanban';
import { Col, Dropdown, Nav, Row } from 'react-bootstrap';
import { useKanbanContext } from 'providers/KanbanProvider';
import { useState } from 'react';
import KanbanInviteModal from 'components/modals/KanbanInviteModal';
import { TOGGLE_DETAILS_OFFCANVAS } from 'reducers/KanbanReducer';

const navItems = [
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

const KanbanHeader = () => {
  const [openInviteModal, setOpenInviteModal] = useState(false);
  const { kanbanDispatch } = useKanbanContext();

  return (
    <>
      <div className="kanban-header">
        <Row className="gx-0 justify-between md:justify-start">
          <Col xs="auto">
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className="no-underline dropdown-caret-none text-emphasis text-base ps-0"
              >
                <span className="text-lg me-2">Phoenix</span>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="text-soft inline-block"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="py-0">
                <Dropdown.Item href="#/action-1">Sparrow</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Boreas</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Erebus</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs="auto" className="flex items-center gap-6">
            <Avatar.Group
              total={
                kanbanBoardMembers.members.length +
                kanbanBoardMembers.guests.length
              }
              size="m"
            >
              {kanbanBoardMembers.members.slice(0, 3).map(member => (
                <AvatarDropdown user={member} size="m" key={member.id} />
              ))}
            </Avatar.Group>
            <Button
              startIcon={<FontAwesomeIcon icon={faUserPlus} />}
              variant="primary"
              className="text-sm px-4"
              onClick={() => setOpenInviteModal(!openInviteModal)}
            >
              <span className="hidden sm:inline">invite</span>
            </Button>
          </Col>
          <Col md="auto" className="flex items-center gap-6 ms-auto">
            <Nav className="w-full text-md">
              {navItems.map(item => (
                <Nav.Item key={item.title}>
                  <Nav.Link className="flex gap-2 items-center text-default px-2 xl:px-4 font-bold">
                    <FontAwesomeIcon icon={item.icon} transform="up-2" />
                    <span className="hidden 2xl:inline">{item.title}</span>
                  </Nav.Link>
                </Nav.Item>
              ))}
              <Nav.Item className="my-auto ms-auto">
                <Nav.Link
                  className="flex gap-2 items-center text-default px-2 xl:px-4 font-bold"
                  onClick={() => {
                    kanbanDispatch({
                      type: TOGGLE_DETAILS_OFFCANVAS,
                      payload: true
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faBars} transform="up-2" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </div>
      <KanbanInviteModal
        show={openInviteModal}
        handleClose={() => setOpenInviteModal(false)}
      />
    </>
  );
};

export default KanbanHeader;
