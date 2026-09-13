import ChatHomepageCard from 'components/cards/ChatHomepageCard';

/**
 * React-only index view (no gold counterpart — the gold chat page always
 * shows the first thread); the sidebar is rendered by the Chat layout.
 */
const ChatHomepage = () => {
  return <ChatHomepageCard />;
};

export default ChatHomepage;
