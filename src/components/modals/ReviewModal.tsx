import Button from 'components/base/Button';
import Rating from 'components/base/Rating';
import { Dialog, Textarea } from '@hummingbirdui/react';
import Dropzone from 'components/base/Dropzone';

interface ReviewModalProps {
  show: boolean;
  handleClose: () => void;
}

/** `#reviewModal` in apps/e-commerce/landing/product-details.pug */
const ReviewModal = ({ show, handleClose }: ReviewModalProps) => {
  return (
    <Dialog open={show} onOpenChange={open => !open && handleClose()}>
      <Dialog.Content centered className="p-6" aria-describedby={undefined}>
        <Dialog.Title className="sr-only">Rate this product</Dialog.Title>
        <div className="flex flex-between-center mb-2">
          <h5 className="text-base mb-0">Your rating</h5>
          <button type="button" className="btn p-0 text-sm" onClick={handleClose}>
            Clear
          </button>
        </div>
        <Rating emptyIconColor="warning" iconClass="text-2xl" className="mb-4" />
        <div className="mb-4">
          <h5 className="text-highlight mb-4">Your review</h5>
          <Textarea rows={5} placeholder="Write your review" />
        </div>
        <Dropzone
          className="mb-4 bg-default"
          size="sm"
          accept={{
            'image/*': ['.png', '.gif', '.jpeg', '.jpg']
          }}
        />
        <div className="sm:flex flex-between-center">
          <div className="form-check flex-1">
            <input
              type="checkbox"
              id="reviewAnonymously"
              className="form-check-input"
              defaultChecked
            />
            <label
              htmlFor="reviewAnonymously"
              className="form-check-label mb-0 text-emphasis font-semibold"
            >
              Review anonymously
            </label>
          </div>
          <button type="button" className="btn ps-0" onClick={handleClose}>
            Close
          </button>
          <Button variant="primary" className="rounded-full">
            Submit
          </Button>
        </div>
      </Dialog.Content>
    </Dialog>
  );
};

export default ReviewModal;
