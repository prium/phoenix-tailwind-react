import { useEffect, useRef } from 'react';
import { cn } from '@hummingbirdui/react';
import { useChatContext } from 'providers/ChatProvider';
import ConversationDetails from '../conversation-details/ConversationDetails';
import ChatContentHeader from './ChatContentHeader';
import ConversationStarter from './ConversationStarter';
import ChatContentFooter from './ChatContentFooter';
import Message from '../message/Message';
import { SET_CHAT_STATE } from 'reducers/ChatReducer';

/**
 * One `.tab-pane` chat thread — phoenix-tailwind mixins/chat/ChatContent.pug.
 * The gold pug renders `thread.messages.reverse()`, so the newest data entry
 * sits at the top; the gold JS then scrolls the card-body to the bottom.
 */
const ChatContent = () => {
  const {
    currentConversation,
    conversations,
    chatDispatch,
    showConversationDetails,
    setShowConversationDetails
  } = useChatContext();

  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatDispatch({
      type: SET_CHAT_STATE,
      payload: {
        showConversationDetails: false,
        showUserListOffcanvas: false
      }
    });

    // gold chat.js: chatBox.scrollTop = chatBox.scrollHeight — re-applied when
    // attachment images load (they grow scrollHeight after mount)
    const body = bodyRef.current;
    if (!body) return;
    const toBottom = () => {
      body.scrollTop = body.scrollHeight;
    };
    toBottom();
    body.addEventListener('load', toBottom, true);
    return () => body.removeEventListener('load', toBottom, true);
  }, [currentConversation]);

  if (!currentConversation) return null;

  const index = conversations.findIndex(
    conversation => conversation.id === currentConversation.id
  );

  return (
    <div
      className="tab-pane h-full fade active show"
      id={`tab-thread-${currentConversation.id}`}
      role="tabpanel"
      aria-labelledby={`tab-thread-${currentConversation.id}`}
    >
      <div className="flex flex-col h-full">
        <ChatContentHeader index={index} />
        <div
          ref={bodyRef}
          className={`chat-content-body-${index} card-body p-4 sm:p-6 scrollbar`}
        >
          {currentConversation.messages.length === 0 && <ConversationStarter />}
          {[...currentConversation.messages].reverse().map(message => (
            <Message
              message={message}
              user={currentConversation.user}
              key={message.id}
            />
          ))}
        </div>
        <ChatContentFooter />
        <div
          className={cn(
            'phoenix-offcanvas phoenix-offcanvas-top h-full w-full bg-soft scrollbar z-index-0 rounded-md',
            { show: showConversationDetails }
          )}
          id={`thread-details-${index}`}
        >
          <ConversationDetails
            conversation={currentConversation}
            handleClose={() => setShowConversationDetails(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
