import { Dialog } from '@hummingbirdui/react';
import DialogHeading from 'components/base/DialogHeading';
import spotIllustration44 from 'assets/img/spot-illustrations/44.png';
import spotIllustrationDark44 from 'assets/img/spot-illustrations/44-dark.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/base/Button';

interface FlightPromoModalProps {
  show: boolean;
  handleClose: () => void;
}

/** `+FlightPromoModal` (#flightPromoModal) in mixins/travel-agency/flight/homepage/FlightPromoModal.pug */
const FlightPromoModal = ({ show, handleClose }: FlightPromoModalProps) => {
  return (
    <Dialog open={show} onOpenChange={open => !open && handleClose()}>
      <Dialog.Content
        centered
        dialogClassName="modal-md"
        aria-describedby={undefined}
      >
        <Dialog.Body className="p-10">
          <div className="absolute end-0 top-0">
            <button
              type="button"
              className="btn btn-link text-danger px-4"
              aria-label="Close"
              onClick={handleClose}
            >
              <FontAwesomeIcon icon={faTimes} transform="down-2" />
            </button>
          </div>
          <div className="text-center">
            <img
              src={spotIllustration44}
              alt=""
              className="dark:hidden mx-auto mb-6 w-32.5"
            />
            <img
              src={spotIllustrationDark44}
              alt=""
              className="hidden dark:block mx-auto mb-6 w-32.5"
            />
            <DialogHeading as="h1" className="text-success">
              Save 20%
            </DialogHeading>
            <h3 className="mb-2 text-default">
              on your next flight - Join now!
            </h3>
            <p className="mb-6 text-md">
              Sign up now to save up to 20% on flights with our free membership
              program!
            </p>
            <div className="flex gap-2 items-center mb-6">
              <input
                className="form-control"
                type="email"
                placeholder="Your email address"
              />
              <Button
                type="button"
                variant="primary"
                className="rounded-md text-nowrap sm:px-10"
              >
                Sign-up
              </Button>
            </div>
            <p className="mb-1 text-md text-soft">
              Subscribe for exclusive offers. <a href="#!">Privacy Policy</a>
            </p>
            <button
              type="button"
              aria-label="Close"
              className="btn btn-link p-0 text-sm underline text-subtle"
              onClick={handleClose}
            >
              Don’t show it again
            </button>
          </div>
        </Dialog.Body>
      </Dialog.Content>
    </Dialog>
  );
};

export default FlightPromoModal;
