import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EmojiPickerButton from 'components/base/EmojiPickerButton';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { useState } from 'react';

const emojiButtonCode = `
<div className="relative">
  <EmojiPickerButton className="btn btn-primary">
    <FontAwesomeIcon icon={faFaceSmile} className="text-lg" />
  </EmojiPickerButton>
</div>
`;

const emojiInputCode = `
function EmojiMessageBox() {
  const [message, setMessage] = useState('');
  return (
    <div className="relative flex items-center gap-4">
      <input
        className="form-control"
        value={message}
        placeholder="Say something…"
        onChange={e => setMessage(e.target.value)}
      />
      <EmojiPickerButton
        className="btn btn-phoenix-secondary"
        aria-label="Add an emoji"
        onSelect={emoji => setMessage(current => current + emoji)}
      >
        <FontAwesomeIcon icon={faFaceSmile} className="text-lg" />
      </EmojiPickerButton>
    </div>
  );
}
`;

const EmojiButtonExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Emoji button"
        description="Picmo displays a panel of emojis where one can be selected. What is done with the selected emoji is up to you."
        link={{
          text: 'Documentation for Picmo',
          url: 'https://picmojs.com/docs/api/overview/'
        }}
      >
        <p className="mb-0 text-muted">
          <code>EmojiPickerButton</code> wraps Picmo&apos;s popup picker and
          anchors it to the button you render inside it. The popup is appended
          to <code>&lt;body&gt;</code> and floated, so it overlays the page
          rather than growing the container. Its styling comes from the theme
          skin in <code>assets/css/plugins/picmo.css</code>, which reads{' '}
          <code>data-hb-theme</code> and so follows dark mode on its own.
        </p>
      </DocPageHeader>
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              A bare trigger. <code>position</code> places the popup relative to
              the button and defaults to <code>bottom-start</code>, as in the
              static theme.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={emojiButtonCode}
            scope={{ EmojiPickerButton, FontAwesomeIcon, faFaceSmile }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Appending to an input">
            <p className="mb-0">
              <code>onSelect</code> receives the chosen character. Append it to
              your own state — this is what the chat composer does.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={emojiInputCode}
            scope={{
              EmojiPickerButton,
              FontAwesomeIcon,
              faFaceSmile,
              useState
            }}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default EmojiButtonExample;
