import ChatSidebar from 'components/modules/chat/ChatSidebar';
import { conversations } from 'data/chat';
import ChatProvider, { useChatContext } from 'providers/ChatProvider';
import { Outlet } from 'react-router';

/**
 * Gold `.chat` container — phoenix-tailwind `src/pug/apps/chat.pug`.
 * The sidebar card doubles as a start offcanvas below `sm`; the backdrop must
 * stay a later sibling of it (`.phoenix-offcanvas.show ~ .phoenix-offcanvas-backdrop`).
 */
const ChatLayout = () => {
  const { setShowUserListOffcanvas } = useChatContext();

  return (
    <div className="chat flex phoenix-offcanvas-container pt-1 -mt-1 mb-16">
      <ChatSidebar />
      <Outlet />
      <div
        className="phoenix-offcanvas-backdrop lg:hidden top-0"
        data-phoenix-backdrop="data-phoenix-backdrop"
        onClick={() => setShowUserListOffcanvas(false)}
      />
    </div>
  );
};

const Chat = () => {
  return (
    <ChatProvider conversations={conversations}>
      <ChatLayout />
    </ChatProvider>
  );
};

export default Chat;
