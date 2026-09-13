import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useChatContext } from 'providers/ChatProvider';

/**
 * Empty-thread greeting — phoenix-tailwind mixins/chat/ChatContent.pug
 * (gold copy kept verbatim, including the "begining" typo).
 */
const ConversationStarter = () => {
  const { currentConversation } = useChatContext();

  return (
    <div className="flex items-end justify-center text-center h-full">
      <div>
        This is the begining of your private chat with{' '}
        <a className="font-semibold" href="#!">
          {currentConversation?.user.name}.{' '}
        </a>
        You have 137 mutual connections.
        <br />
        Say Hi to your new friend now
        <FontAwesomeIcon icon={faPaperPlane} className="text-primary ms-1" />
      </div>
    </div>
  );
};

export default ConversationStarter;
