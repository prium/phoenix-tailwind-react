import { Card } from '@hummingbirdui/react';
import ChatContent from 'components/modules/chat/chat-content';
import { useChatContext } from 'providers/ChatProvider';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { SET_CURRENT_CONVERSATION } from 'reducers/ChatReducer';

/** Gold `.card.tab-content` thread area — phoenix-tailwind apps/chat.pug. */
const ChatConversation = () => {
  const { userId } = useParams();

  const { chatDispatch, conversations } = useChatContext();

  useEffect(() => {
    chatDispatch({
      type: SET_CURRENT_CONVERSATION,
      payload: {
        userId
      }
    });
  }, [userId, conversations]);

  return (
    <Card className="tab-content flex-1 phoenix-offcanvas-container">
      <ChatContent />
    </Card>
  );
};

export default ChatConversation;
