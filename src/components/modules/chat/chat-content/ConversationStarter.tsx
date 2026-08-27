import { useChatContext } from 'providers/ChatProvider';

const ConversationStarter = () => {
  const { currentConversation } = useChatContext();

  return (
    <div className="flex items-end justify-center text-center h-full">
      <div>
        This is the beginning of your private chat with{' '}
        <a href="#!" className="font-semibold">
          {currentConversation?.user.name}
        </a>
        . You have 237 mutual connections.
        <br />
        Say Hi to your new friend now
        <span className="fa-solid fa-paper-plane text-primary ms-1"></span>
      </div>
    </div>
  );
};

export default ConversationStarter;
