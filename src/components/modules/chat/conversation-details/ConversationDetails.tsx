import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from '@hummingbirdui/react';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import { Conversation } from 'data/chat';
import SharedMedia from './SharedMedia';
import SharedFiles from './SharedFiles';
import ActionButton from './ActionButton';
import {
  faBan,
  faBellSlash,
  faChevronLeft,
  faEllipsisV,
  faFlag,
  faGear,
  faHandHoldingHeart,
  faPalette,
  faPhone,
  faSearch,
  faUserPen,
  faUserPlus,
  faVideo
} from '@fortawesome/free-solid-svg-icons';

interface ConversationDetailsProps {
  conversation: Conversation;
  handleClose: () => void;
}

/** `+ChatThreadDeatils` — phoenix-tailwind mixins/chat/ChatThreadDetails.pug. */
const ConversationDetails = ({
  conversation,
  handleClose
}: ConversationDetailsProps) => {
  return (
    <>
      <div className="border-b border-subtle p-6">
        <div className="flex flex-between-center">
          <button className="btn p-0" type="button" onClick={handleClose}>
            <FontAwesomeIcon icon={faChevronLeft} className="text-subtle" />
          </button>
          <Dropdown>
            <Dropdown.Trigger asChild>
              <button
                className="btn p-0 btn-reveal dropdown-toggle dropdown-caret-none transition-none"
                type="button"
              >
                <FontAwesomeIcon icon={faEllipsisV} className="text-subtle" />
              </button>
            </Dropdown.Trigger>
            <Dropdown.Content align="end" className="py-2">
              <ActionDropdownItems />
            </Dropdown.Content>
          </Dropdown>
        </div>
        <div className="flex flex-col items-center text-center">
          <Avatar
            src={conversation.user.avatar}
            size="4xl"
            className="mb-2"
            imageClassName="border border-2 border-subtle-subtle"
            placeholder={conversation.user.placeholder}
          />
          <h4 className="font-semibold mb-4">{conversation.user.name}</h4>
          <div className="flex">
            <Button
              variant="primary"
              shape="square"
              size="sm"
              className="text-sm me-1"
            >
              <FontAwesomeIcon icon={faPhone} />
            </Button>
            <Button
              variant="primary"
              shape="square"
              size="sm"
              className="text-sm me-1"
            >
              <FontAwesomeIcon icon={faVideo} />
            </Button>
            <Button
              variant="phoenix-secondary"
              shape="square"
              size="sm"
              className="text-sm"
            >
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </div>
        </div>
      </div>
      <div className="p-6 sm:px-8 scrollbar">
        <ActionButton icon={faUserPen} className="mb-4">
          Nickname
        </ActionButton>
        <ActionButton icon={faPalette} className="mb-4">
          Change Color
        </ActionButton>
        <ActionButton icon={faUserPlus} className="mb-8">
          Create Group Chat
        </ActionButton>

        <SharedMedia />

        <SharedFiles />

        <ActionButton icon={faBellSlash} className="mb-4">
          Mute Conversation
        </ActionButton>
        <ActionButton icon={faGear} className="mb-4">
          Manage Settings
        </ActionButton>
        <ActionButton icon={faHandHoldingHeart} className="mb-4">
          Get help
        </ActionButton>
        <ActionButton icon={faFlag} className="mb-4">
          Report Account
        </ActionButton>
        <ActionButton icon={faBan}>Block Account</ActionButton>
      </div>
    </>
  );
};

export default ConversationDetails;
