import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Card, Dropdown, Form, Modal } from 'react-bootstrap';
import classNames from 'classnames';
import ChatFilterTab from './ChatFilterTab';
import DropdownSearchBox from 'components/common/DropdownSearchBox';
import { useState } from 'react';
import {
  faBars,
  faMagnifyingGlass,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from 'providers/AppProvider';

const ChatSidebar = ({ className }: { className?: string }) => {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const {
    config: { isRTL }
  } = useAppContext();
  return (
    <>
      <Card className={classNames(className, 'chat-sidebar p-6 xl:p-1')}>
        <Button
          className="hidden sm:block xl:hidden mb-2"
          onClick={() => setOpenSearchModal(true)}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-subtle text-opacity-85 text-lg"
          />
        </Button>
        <Dropdown
          className="hidden sm:block xl:hidden mb-8"
          align={isRTL ? 'end' : 'start'}
        >
          <Dropdown.Toggle
            variant=""
            size="sm"
            className="w-full mx-auto dropdown-caret-none"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="text-lg text-subtle text-opacity-85"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu className="p-0">
            <Dropdown.Item eventKey="1">All</Dropdown.Item>
            <Dropdown.Item eventKey="2">Read</Dropdown.Item>
            <Dropdown.Item eventKey="3">Unread</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Form.Group className="form-icon-container mb-6 sm:hidden xl:block">
          <Form.Control
            type="text"
            placeholder="People, Groups and Messages"
            className="form-icon-input"
          />
          <FontAwesomeIcon icon={faUser} className="text-default text-md form-icon" />
        </Form.Group>
        <ChatFilterTab />
      </Card>
      <Modal
        show={openSearchModal}
        onHide={() => setOpenSearchModal(false)}
        className="search-box-modal mt-30"
      >
        <Modal.Body className="p-0 bg-transparent">
          <DropdownSearchBox
            placeholder="Search People, Groups and Messages"
            size="lg"
            style={{ width: 'auto' }}
            autoFocus
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChatSidebar;
