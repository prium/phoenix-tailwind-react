import {
  faChevronDown,
  faCircle,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import { Card, Dropdown, cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { useAppContext } from 'providers/AppProvider';
import ChatWidgetConversation from './ChatWidgetConversation';
import { useChatWidgetContext } from 'providers/ChatWidgetProvider';
import ChatWidgetFooter from './ChatWidgetFooter';

/** `+SupportChat` in phoenix-tailwind mixins/common/SupportChat.pug */
const ChatWidget = () => {
  const {
    config: { isChatWidgetVisible }
  } = useAppContext();
  const { isOpenChat, setIsOpenChat } = useChatWidgetContext();
  return (
    <div className={cn('support-chat-container', { show: isChatWidgetVisible })}>
      <div
        className={cn('container-fluid support-chat', {
          'show-chat': isOpenChat
        })}
      >
        <Card className="bg-soft">
          <Card.Header className="flex flex-between-center px-6 py-4 border-b border-light">
            <h5 className="mb-0 flex items-center gap-2">
              Demo widget
              <FontAwesomeIcon icon={faCircle} className="text-success text-xs" />
            </h5>
            <RevealDropdownTrigger>
              <RevealDropdown btnClassName="btn-link p-0 flex">
                <Dropdown.Item>Request a callback</Dropdown.Item>
                <Dropdown.Item>Search in chat</Dropdown.Item>
                <Dropdown.Item>Show history</Dropdown.Item>
                <Dropdown.Item>Report to Admin</Dropdown.Item>
                <Dropdown.Item onClick={() => setIsOpenChat(!isOpenChat)}>
                  Close Support
                </Dropdown.Item>
              </RevealDropdown>
            </RevealDropdownTrigger>
          </Card.Header>
          <Card.Body className="chat p-0">
            <ChatWidgetConversation />
          </Card.Body>
          <Card.Footer className="border-t border-light ps-4 pe-6 py-4">
            <ChatWidgetFooter />
          </Card.Footer>
        </Card>
      </div>
      <Button
        className={cn('p-0 border border-light btn-support-chat', {
          'btn-chat-close': isOpenChat
        })}
        onClick={() => setIsOpenChat(!isOpenChat)}
      >
        <span className="text-base btn-text text-primary whitespace-nowrap">
          Chat demo
        </span>
        <span className="ping-icon-wrapper -mt-6 -ms-10 sm:mt-0 sm:ms-2 absolute! sm:relative!">
          <span className="ping-icon-bg" />
          <FontAwesomeIcon icon={faCircle} className="ping-icon" />
        </span>
        <FontAwesomeIcon
          icon={faHeadset}
          className="text-primary text-base sm:hidden!"
        />
        <FontAwesomeIcon icon={faChevronDown} className="text-primary text-lg" />
      </Button>
    </div>
  );
};

export default ChatWidget;
