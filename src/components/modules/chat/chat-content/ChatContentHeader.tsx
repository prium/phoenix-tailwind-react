import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { useChatContext } from 'providers/ChatProvider';
import {
  faChevronDown,
  faChevronLeft,
  faCircle,
  faEllipsisVertical,
  faPhone,
  faVideo
} from '@fortawesome/free-solid-svg-icons';

/** `.card-header` of a chat thread — phoenix-tailwind mixins/chat/ChatContent.pug. */
const ChatContentHeader = ({ index }: { index: number }) => {
  const {
    currentConversation,
    setShowConversationDetails,
    setShowUserListOffcanvas
  } = useChatContext();

  if (!currentConversation) return null;

  return (
    <div className="card-header p-4 md:p-6 flex flex-between-center">
      <div className="flex items-center">
        <button
          className="btn ps-0 pe-2 text-subtle sm:hidden"
          type="button"
          onClick={() => setShowUserListOffcanvas(true)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="flex flex-col md:flex-row md:items-center">
          <button
            className="btn text-lg font-semibold text-emphasis flex items-center p-0 me-4 text-start"
            type="button"
            data-phoenix-toggle="offcanvas"
            data-phoenix-target={`#thread-details-${index}`}
            onClick={() => setShowConversationDetails(true)}
          >
            <span className="line-clamp-1">
              {currentConversation.user.name}
            </span>
            <FontAwesomeIcon icon={faChevronDown} className="ms-2 text-sm" />
          </button>
          {/* the gold header shows "Active now" for every thread */}
          <p className="text-md mb-0 me-2">
            {' '}
            <FontAwesomeIcon
              icon={faCircle}
              className="text-success text-xs me-2"
            />
            Active now
          </p>
        </div>
      </div>
      <div className="flex">
        <Button variant="primary" shape="square" className="me-1 size-8">
          <FontAwesomeIcon icon={faPhone} />
        </Button>
        <Button variant="primary" shape="square" className="me-1 size-8">
          <FontAwesomeIcon icon={faVideo} />
        </Button>
        <Dropdown>
          <Dropdown.Trigger asChild>
            <Button variant="phoenix-primary" shape="square" className="size-8">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Content align="end" className="p-0">
            <Dropdown.Item asChild>
              <a href="#!">Add to favourites</a>
            </Dropdown.Item>
            <Dropdown.Item asChild>
              <a href="#!">View profile</a>
            </Dropdown.Item>
            <Dropdown.Item asChild>
              <a href="#!">Report</a>
            </Dropdown.Item>
            <Dropdown.Item asChild>
              <a href="#!">Manage notifications</a>
            </Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </div>
    </div>
  );
};

export default ChatContentHeader;
