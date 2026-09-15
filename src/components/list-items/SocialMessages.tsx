import { Dropdown } from '@hummingbirdui/react';
import Avatar from 'components/base/Avatar';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import { Message } from 'data/social/messages';
import { Link } from 'react-router';

interface SocialMessagesProps {
  messages: Message[];
}

/** `+Messages` in mixins/social/Feed.pug */
const SocialMessages = ({ messages }: SocialMessagesProps) => {
  return (
    <>
      <div className="flex flex-between-center pb-4 border-b border-subtle border-dashed">
        <h3 className="mb-0">
          Messages
          <span className="text-subtle ms-2 font-normal">(97)</span>
        </h3>
        <RevealDropdownTrigger>
          <RevealDropdown btnClassName="flex" iconClassName="">
            <Dropdown.Item>Edit</Dropdown.Item>
            <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
            <Dropdown.Item>Download</Dropdown.Item>
            <Dropdown.Item>Report abuse</Dropdown.Item>
          </RevealDropdown>
        </RevealDropdownTrigger>
      </div>
      {messages.map(message => (
        <div
          key={message.id}
          className="flex py-4 items-center border-b border-subtle border-dashed"
        >
          <div className="me-2">
            <Avatar
              size={message.avatar.size}
              src={message.avatar.img}
              status={message.avatar.status}
              placeholder={message.avatar.imgClass === 'avatar-placeholder'}
            />
          </div>
          <Link to="/apps/chat" className="no-underline flex-1">
            <h5>{message.name}</h5>
            <p className="text-subtle font-semibold text-md mb-0 leading-sm line-clamp-1">
              {message.message}
            </p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default SocialMessages;
