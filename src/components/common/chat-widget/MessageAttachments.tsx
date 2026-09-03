import Lightbox from 'components/base/Lightbox';
import useLightbox from 'hooks/useLightbox';
import { Col, Row } from '@hummingbirdui/react';

const MessageAttachments = ({ attachments }: { attachments: string[] }) => {
  const { lightboxProps, openLightbox } = useLightbox(attachments);
  return (
    <>
      <Lightbox {...lightboxProps} />
      <Row className="g-2 mt-0">
        {attachments.map((attachment, index) => (
          <Col
            xs={
              attachments.length === 2 ? 6 : attachments.length > 2 ? 4 : 'auto'
            }
            key={attachment}
          >
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
    </>
  );
};

export default MessageAttachments;
