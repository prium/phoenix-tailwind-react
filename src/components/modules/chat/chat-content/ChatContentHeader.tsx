import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Card, Dropdown } from 'react-bootstrap';
import { useChatContext } from 'providers/ChatProvider';
import classNames from 'classnames';
import { useMemo } from 'react';
import {
  faChevronDown,
  faChevronLeft,
  faCircle,
  faEllipsisVertical,
  faPhone,
  faVideo
} from '@fortawesome/free-solid-svg-icons';

const ChatContentHeader = () => {
  const {
    currentConversation,
    setShowConversationDetails,
    setShowUserListOffcanvas
  } = useChatContext();

  const firstName = useMemo(() => {
    return currentConversation?.user.name.split(' ')[0] || '';
  }, [currentConversation]);

  return (
    <>
      {currentConversation && (
        <>
          <Card.Header className="p-4 md:p-6 flex flex-between-center">
            <div className="flex items-center">
              <Button
                className="ps-0 pe-2 text-subtle sm:hidden"
                onClick={() => setShowUserListOffcanvas(true)}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <div className="flex flex-col md:flex-row md:items-center">
                <Button
                  className="text-lg font-semibold text-emphasis flex items-center p-0 me-4 text-start"
                  onClick={() => setShowConversationDetails(true)}
                >
                  <span>{firstName}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="ms-2 text-sm"
                  />
                </Button>
                <p className="text-md mb-0 me-2">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className={classNames('text-xs me-2', {
                      'text-success':
                        currentConversation.user.status === 'online',
                      'text-light':
                        currentConversation.user.status === 'offline'
                    })}
                  />
                  {currentConversation.user.status === 'online'
                    ? 'Active now'
                    : 'Offline'}
                </p>
              </div>
            </div>
            <div className="flex">
              <Button variant="primary" className="btn-icon me-1">
                <FontAwesomeIcon icon={faPhone} />
              </Button>
              <Button variant="primary" className="btn-icon me-1">
                <FontAwesomeIcon icon={faVideo} />
              </Button>

              <Dropdown>
                <Dropdown.Toggle
                  variant="phoenix-primary"
                  className="btn-icon dropdown-caret-none"
                >
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </Dropdown.Toggle>

                <Dropdown.Menu className="py-2">
                  <Dropdown.Item href="#/action-1">
                    Add to favourites
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">View profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Report</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Manage notifications
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Card.Header>
        </>
      )}
    </>
  );
};

export default ChatContentHeader;
