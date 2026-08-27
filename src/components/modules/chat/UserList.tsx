import classNames from 'classnames';
import Avatar from 'components/base/Avatar';
import Badge from 'components/base/Badge';
import { Conversation } from 'data/chat';
import { useChatContext } from 'providers/ChatProvider';
import React, { useMemo } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import { MARKED_AS_READ } from 'reducers/ChatReducer';

const UserListitem = ({ conversation }: { conversation: Conversation }) => {
  const { currentConversation, chatDispatch } = useChatContext();

  const lastMessage = useMemo(
    () => conversation.messages[conversation.messages.length - 1],
    [conversation]
  );
  const unseenMessageCount = useMemo(
    () =>
      conversation.messages.filter(
        message => message.type === 'received' && !message.readAt
      ).length,
    [conversation]
  );

  const markedAsRead = () => {
    chatDispatch({
      type: MARKED_AS_READ,
      payload: { conversationId: conversation.id }
    });
  };

  return (
    <Nav.Item
      key={conversation.id}
      className={unseenMessageCount > 0 ? 'read' : 'unread'}
    >
      <Nav.Link
        as={Link}
        to={`/apps/chat/${conversation.user.id}/conversation`}
        onClick={markedAsRead}
        className={classNames(
          'flex items-center justify-center p-2',
          {
            unread: unseenMessageCount > 0,
            active: currentConversation?.user.id === conversation.user.id
          }
        )}
      >
        <div className="relative me-2 sm:me-0 xl:me-2">
          <Avatar
            src={conversation.user.avatar}
            size="xl"
            className="block"
            imageClassName="border border-2 border-light-subtle"
          />
          {unseenMessageCount > 0 && (
            <span
              className="bg-primary rounded-full top-0 end-0 absolute text-white flex flex-center text-sm font-semibold hidden sm:flex xl:hidden leading-none"
              style={{ height: '1rem', width: '1rem' }}
            >
              {unseenMessageCount}
            </span>
          )}
        </div>
        <div className="flex-1 sm:hidden xl:block">
          <div className="flex justify-between items-center">
            <h5 className="text-default font-normal name whitespace-nowrap">
              {conversation.user.name}
            </h5>
            <p className="text-sm text-subtle text-opacity-85 mb-0 whitespace-nowrap">
              {lastMessage.time}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-md mb-0 line-clamp-1 text-subtle text-opacity-85 message">
              {lastMessage.message}
            </p>
            {unseenMessageCount > 0 && (
              <Badge
                variant="phoenix"
                bg="primary"
                className="px-1 unread-badge ms-1"
              >
                {unseenMessageCount}
              </Badge>
            )}
          </div>
        </div>
      </Nav.Link>
    </Nav.Item>
  );
};

const UserList = ({ conversations }: { conversations: Conversation[] }) => {
  return (
    <div className="scrollbar">
      <Nav className="chat-conversation-tab flex-col">
        {conversations.map(conversation => (
          <UserListitem conversation={conversation} key={conversation.id} />
        ))}
      </Nav>
    </div>
  );
};

export default UserList;
