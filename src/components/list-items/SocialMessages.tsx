import Avatar from 'components/base/Avatar';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import { Message } from 'data/social/messages';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router';

interface SocialMessagesProps {
  messages: Message[];
}

const SocialMessages = ({ messages }: SocialMessagesProps) => {
  return (
    <>
      <div className="flex flex-between-center pb-3 border-bottom border-dashed">
        <h3 className="mb-0">
          Messages
          <span className="text-subtle ms-2 font-normal">(97)</span>
        </h3>
        <RevealDropdownTrigger>
          <RevealDropdown>
            <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
            <Dropdown.Item eventKey="2" className="text-danger">
              Delete
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">Download</Dropdown.Item>
            <Dropdown.Item eventKey="2">Report abuse</Dropdown.Item>
          </RevealDropdown>
        </RevealDropdownTrigger>
      </div>
      {messages.map(message => (
        <div
          key={message.id}
          className="flex py-3 align-items-center border-bottom border-subtle border-dashed"
        >
          <div className="me-2">
            <Avatar
              size={message.avatar.size}
              src={message.avatar.img}
              status={message.avatar.status}
            />
          </div>
          <Link to="/apps/chat" className="text-decoration-none flex-1">
            <h5>{message.name}</h5>
            <p className="text-subtle font-semibold text-md mb-0 lh-sm line-clamp-1">
              {message.message}
            </p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default SocialMessages;
