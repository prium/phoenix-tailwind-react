import TripDetailsTabReviewAllReviews from './reivew-tab/TripDetailsTabReviewAllReviews';
import type { TripReview } from 'data/travel-agency/customer/trip';
import Button from 'components/base/Button';
import TripDetailsTabReviewCommentCard from './reivew-tab/TripDetailsTabReviewCommentCard';

interface TripDetailsTabReviewContentProps {
  tripDetailsReviews: TripReview;
}

/** `+TripReview` in phoenix-tailwind mixins/travel-agency/trip/TripReview.pug */
const TripDetailsTabReviewContent = ({
  tripDetailsReviews
}: TripDetailsTabReviewContentProps) => {
  return (
    <>
      <TripDetailsTabReviewAllReviews
        overallReview={tripDetailsReviews.overallReview}
      />
      <Button variant="phoenix-secondary" className="my-8">
        Write a review
      </Button>
      <TripDetailsTabReviewCommentCard comments={tripDetailsReviews.comments} />
    </>
  );
};

export default TripDetailsTabReviewContent;
