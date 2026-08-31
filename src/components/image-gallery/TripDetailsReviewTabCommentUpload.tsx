import type { UploadedImage } from 'data/travel-agency/customer/trip';
import useLightbox from 'hooks/useLightbox';
import Lightbox from 'components/base/LightBox';

interface TripDetailsReviewTabCommentUploadProps {
  uploadedCommentImage: UploadedImage[];
}

/** review image strip in phoenix-tailwind mixins/travel-agency/trip/TripReview.pug */
const TripDetailsReviewTabCommentUpload = ({
  uploadedCommentImage
}: TripDetailsReviewTabCommentUploadProps) => {
  const { lightboxProps, openLightbox } = useLightbox(
    uploadedCommentImage.map(src => src.largeImg)
  );
  return (
    <>
      {uploadedCommentImage.map((upload, index) => (
        <a
          key={upload.id}
          className="cursor-pointer"
          onClick={() => openLightbox(index + 1)}
        >
          <img src={upload.image} alt="" className="rounded-md" />
        </a>
      ))}
      <Lightbox {...lightboxProps} />
    </>
  );
};

export default TripDetailsReviewTabCommentUpload;
