import { cn } from '@hummingbirdui/react';
import { Conversation } from 'data/chat';
import { useChatContext } from 'providers/ChatProvider';
import { Link } from 'react-router';
import { MARKED_AS_READ } from 'reducers/ChatReducer';

/** One `li` of the gold thread list — mixins/chat/ChatSidebar.pug. */
const UserListitem = ({ conversation }: { conversation: Conversation }) => {
  const { currentConversation, chatDispatch } = useChatContext();

  const markedAsRead = () => {
    chatDispatch({
      type: MARKED_AS_READ,
      payload: { conversationId: conversation.id }
    });
  };

  return (
    <li
      className={cn('nav-item', conversation.unread ? 'unread' : 'read')}
      role="presentation"
    >
      <Link
        to={`/apps/chat/${conversation.user.id}/conversation`}
        onClick={markedAsRead}
        className={cn('nav-link flex items-center justify-center p-2', {
          unread: conversation.unread,
          active: currentConversation?.user.id === conversation.user.id
        })}
        role="tab"
      >
        {/* gold hardcodes avatar-status-online on every thread */}
        <div className="avatar avatar-lg avatar-status-online relative me-2 sm:me-0 xl:me-2">
          <img
            className={cn('rounded-full border border-2 border-subtle-subtle', {
              'avatar-placeholder': conversation.user.placeholder
            })}
            src={conversation.user.avatar}
            alt=""
          />
          {conversation.badge && (
            <span className="size-4 bg-primary rounded-full top-0 end-0 absolute text-white flex-center text-sm font-semibold hidden sm:flex xl:hidden leading-none">
              {conversation.badge}
            </span>
          )}
        </div>
        <div className="flex-1 sm:hidden xl:block">
          <div className="flex justify-between items-center">
            <h5 className="text-default font-normal name text-nowrap">
              {conversation.user.name}
            </h5>
            <p className="text-sm text-subtle/85 mb-0 text-nowrap font-normal">
              {conversation.time}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-md mb-0 line-clamp-1 text-subtle/85 font-normal message">
              {conversation.message}
            </p>
            {conversation.badge && (
              <span className="badge badge-phoenix-primary px-1 unread-badge">
                {conversation.badge}+
              </span>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
};

const UserList = ({ conversations }: { conversations: Conversation[] }) => {
  return (
    <div className="scrollbar">
      <div className="tab-content" id="contactListTabContent">
        <div>
          <ul className="nav chat-thread-tab flex-col list">
            {conversations.map(conversation => (
              <UserListitem conversation={conversation} key={conversation.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserList;
