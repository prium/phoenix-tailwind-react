import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lightbox from 'components/base/LightBox';
import Portal from 'components/base/Portal';
import { attachments } from 'data/chat';
import useLightbox from 'hooks/useLightbox';

/** "Shared Media" block — mixins/chat/ChatThreadDetails.pug. */
const SharedMedia = () => {
  const { lightboxProps, openLightbox } = useLightbox(
    attachments.map(attachment => attachment.image)
  );

  return (
    <div className="flex mb-8">
      <FontAwesomeIcon icon={faPhotoFilm} className="me-4 text-md" />
      <div>
        <h6 className="font-semibold mb-2">Shared Media</h6>
        <div className="row g-2">
          {attachments.map((attachment, index) => (
            <div className="col-auto" key={index}>
              <a
                href={attachment.image}
                onClick={e => {
                  e.preventDefault();
                  openLightbox(index + 1);
                }}
              >
                {/* the gold anchor keeps a leading space text node */}{' '}
                <img
                  className="object-cover rounded-md hover:bg-muted"
                  src={attachment.image}
                  alt=""
                  height={100}
                  width={100}
                />
              </a>
            </div>
          ))}
        </div>
        <Portal>
          <Lightbox {...lightboxProps} />
        </Portal>
      </div>
    </div>
  );
};

export default SharedMedia;
