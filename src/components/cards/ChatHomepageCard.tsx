import { Card } from '@hummingbirdui/react';
import chatIllustration from 'assets/img/spot-illustrations/chat.webp';
import chatDarkIllustration from 'assets/img/spot-illustrations/dark_chat.webp';

/** React-only chat landing card (no gold counterpart). */
const ChatHomepageCard = () => {
  return (
    <Card className="h-full flex-1 hidden sm:block">
      <Card.Body className="h-full flex flex-col flex-center text-center scrollbar">
        <img
          src={chatIllustration}
          alt="chat"
          height={260}
          width={320}
          className="mb-30 dark:hidden"
        />
        <img
          src={chatDarkIllustration}
          alt="chat"
          height={260}
          width={320}
          className="mb-30 hidden dark:block"
        />
        <h3 className="text-default font-semibold mb-4 text-lg sm:text-xl">
          Click to select a Conversation or,
        </h3>
        <h3 className="text-primary font-semibold text-lg sm:text-xl">
          Start a New Conversation
        </h3>
      </Card.Body>
    </Card>
  );
};

export default ChatHomepageCard;
