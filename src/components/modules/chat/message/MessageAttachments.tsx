import { Col, Row, cn } from '@hummingbirdui/react';

interface MessageAttachmentsProps {
  attachments: string[];
  openLightbox: (slideIndex: number) => void;
}

type Span = React.ComponentProps<typeof Col>['xs'];

const MessageAttachments = ({
  attachments,
  openLightbox
}: MessageAttachmentsProps) => {
  const spans = (): { xs?: Span; md?: Span; xl?: Span } => {
    if (attachments.length > 3) return { xs: 6, md: 4, xl: 3 };
    if (attachments.length === 2) return { xs: 6 };
    if (attachments.length === 1) return { xs: 'auto' };
    return {};
  };
  return (
    <Row className={cn('g-2 mt-0')}>
      {attachments.map((attachment, index) => (
        <Col {...spans()} key={attachment}>
          <img
            src={attachment}
            alt=""
            className="rounded-md cursor-pointer max-w-full h-auto"
            onClick={() => {
              openLightbox(index + 1);
            }}
          />
        </Col>
      ))}
    </Row>
  );
};

export default MessageAttachments;
