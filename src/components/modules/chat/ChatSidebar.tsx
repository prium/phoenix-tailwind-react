import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, Dropdown, cn } from '@hummingbirdui/react';
import ChatFilterTab from './ChatFilterTab';
import { useState } from 'react';
import {
  faBars,
  faMagnifyingGlass,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { useChatContext } from 'providers/ChatProvider';

/**
 * Gold `#chat-sidebar` card + `#chatSearchBoxModal` — phoenix-tailwind
 * `src/pug/apps/chat.pug`. The card doubles as a start offcanvas below `sm`.
 */
const ChatSidebar = () => {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const { showUserListOffcanvas } = useChatContext();

  return (
    <>
      <div
        className={cn(
          'card p-4 xl:p-1 xl:-mt-1 chat-sidebar me-4 phoenix-offcanvas phoenix-offcanvas-start',
          { show: showUserListOffcanvas }
        )}
        id="chat-sidebar"
      >
        <button
          className="btn hidden sm:block xl:hidden mb-2"
          type="button"
          onClick={() => setOpenSearchModal(true)}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-subtle/85 text-lg"
          />
        </button>
        <div className="hidden sm:block xl:hidden mb-8">
          <Dropdown>
            <Dropdown.Trigger asChild>
              <button className="btn w-full mx-auto" type="button">
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-subtle/85 text-lg"
                />
              </button>
            </Dropdown.Trigger>
            <Dropdown.Content align="end" className="p-0">
              <Dropdown.Item asChild>
                <a href="#!">All</a>
              </Dropdown.Item>
              <Dropdown.Item asChild>
                <a href="#!">Read</a>
              </Dropdown.Item>
              <Dropdown.Item asChild>
                <a href="#!">Unread</a>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </div>
        <div className="input-group-icon mb-6 sm:hidden xl:block">
          <FontAwesomeIcon
            icon={faUser}
            className="text-default text-md form-control-icon-start"
            transform="up-2"
          />
          <input
            className="form-control"
            type="text"
            placeholder="People, Groups and Messages"
          />
        </div>
        <ChatFilterTab />
      </div>
      <Dialog open={openSearchModal} onOpenChange={setOpenSearchModal}>
        <Dialog.Content className="mt-30" aria-describedby={undefined}>
          <Dialog.Title className="sr-only">Search</Dialog.Title>
          <Dialog.Body className="p-0">
            <div className="chat-search-box">
              <div className="input-group-icon">
                <input
                  className="form-control py-4 rounded-sm"
                  type="text"
                  autoFocus
                  placeholder="Search People, Groups and Messages"
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-md form-control-icon-start"
                />
              </div>
            </div>
          </Dialog.Body>
        </Dialog.Content>
      </Dialog>
    </>
  );
};

export default ChatSidebar;
