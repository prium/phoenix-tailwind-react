import { useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';
import { useChatContext } from 'providers/ChatProvider';
import PhoenixOffcanvas, {
  PhoenixOffcanvasContainer
} from 'components/base/PhoenixOffcanvas';
import ConversationDetails from '../conversation-details';
import ChatSidebar from '../ChatSidebar';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import ChatContentHeader from './ChatContentHeader';
import ConversationStarter from './ConversationStarter';
import ChatContentFooter from './ChatContentFooter';
import Message from '../message';
import Scrollbar from 'components/base/Scrollbar';
import { SET_CHAT_STATE } from 'reducers/ChatReducer';

const ChatContent = () => {
  const {
    currentConversation,
    chatDispatch,
    showConversationDetails,
    showUserListOffcanvas,
    setShowConversationDetails
  } = useChatContext();

  const messageEndRef = useRef<null | HTMLSpanElement>(null);

  const { breakpoints } = useBreakpoints();

  useEffect(() => {
    chatDispatch({
      type: SET_CHAT_STATE,
      payload: {
        showConversationDetails: false,
        showUserListOffcanvas: false
      }
    });

    messageEndRef.current?.scrollIntoView();
  }, [currentConversation]);

  if (currentConversation) {
    return (
      <Card as={PhoenixOffcanvasContainer} className="h-full w-full">
        <ChatContentHeader />
        <Card.Body className="p-4 sm:p-6 scrollbar flex flex-col gap-2">
          {currentConversation.messages.length === 0 && <ConversationStarter />}
          {currentConversation.messages.map(message => (
            <Message
              message={message}
              user={currentConversation.user}
              key={message.id}
            />
          ))}
          <span ref={messageEndRef} />
        </Card.Body>

        <ChatContentFooter />

        <PhoenixOffcanvas
          open={showConversationDetails}
          placement="top"
          noBackdrop
          className="bg-soft w-full z-index-0 rounded-lg"
        >
          <Scrollbar>
            <ConversationDetails
              conversation={currentConversation}
              handleClose={() => setShowConversationDetails(false)}
            />
          </Scrollbar>
        </PhoenixOffcanvas>

        {breakpoints.down('sm') && (
          <PhoenixOffcanvas
            open={showUserListOffcanvas}
            placement="start"
            noBackdrop
            className="w-full z-index-0"
          >
            <ChatSidebar className="border-0 h-full" />
          </PhoenixOffcanvas>
        )}
      </Card>
    );
  } else {
    return <></>;
  }
};

export default ChatContent;
