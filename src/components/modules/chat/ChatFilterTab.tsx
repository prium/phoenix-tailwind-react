import { useMemo, useState } from 'react';
import UserList from './UserList';
import { ConversationFilterType, useChatContext } from 'providers/ChatProvider';
import PhoenixNav from 'components/base/PhoenixNav';

const filterItems = [
  { label: 'All', eventKey: 'all' },
  { label: 'Read', eventKey: 'read' },
  { label: 'Unread', eventKey: 'unread' }
];

const ChatFilterTab = () => {
  const { conversations } = useChatContext();
  const [activeKey, setActiveKey] = useState<ConversationFilterType>('all');

  const filteredConversations = useMemo(
    () =>
      conversations.filter(conversation =>
        activeKey === 'read'
          ? !conversation.unread
          : activeKey === 'unread'
            ? conversation.unread
            : true
      ),
    [conversations, activeKey]
  );

  return (
    <>
      <PhoenixNav
        navItems={filterItems}
        activeKey={activeKey}
        onSelect={eventKey => setActiveKey(eventKey as ConversationFilterType)}
      />
      <UserList conversations={filteredConversations} />
    </>
  );
};

export default ChatFilterTab;
