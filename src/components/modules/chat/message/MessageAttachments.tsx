interface MessageAttachmentsProps {
  attachments: string[];
  openLightbox: (slideIndex: number) => void;
}

/**
 * Message image attachments — `+Gallery` and the single-image branch of
 * `+SentMessage`/`+ReceivedMessage` in phoenix-tailwind
 * mixins/chat/ChatContent.pug (the `ol-xl-2` typo is the gold's own).
 */
const MessageAttachments = ({
  attachments,
  openLightbox
}: MessageAttachmentsProps) => {
  if (attachments.length === 1) {
    return (
      <a
        href={attachments[0]}
        onClick={e => {
          e.preventDefault();
          openLightbox(1);
        }}
      >
        <img
          className="rounded-md object-cover mt-1 max-w-50"
          src={attachments[0]}
          alt=""
        />
      </a>
    );
  }

  return (
    <div className="row g-2 mt-0">
      {attachments.map((attachment, index) => (
        <div className="col-6 md:col-4 ol-xl-2 xl:col-3" key={index}>
          <a
            href={attachment}
            onClick={e => {
              e.preventDefault();
              openLightbox(index + 1);
            }}
          >
            {/* the gold anchor keeps a leading space text node before the img */}{' '}
            <img className="rounded-md object-cover" src={attachment} alt="" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default MessageAttachments;
