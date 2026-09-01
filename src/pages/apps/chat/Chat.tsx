import { conversations } from 'data/chat';
import ChatProvider from 'providers/ChatProvider';
import { Outlet } from 'react-router';

const Chat = () => {
  return (
    <ChatProvider conversations={conversations}>
      <div className="chat flex gap-4">
        <Outlet />
      </div>
    </ChatProvider>
  );
};

export default Chat;
