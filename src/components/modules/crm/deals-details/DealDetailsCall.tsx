import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DealDetailsCallTable from 'components/tables/DealDetailsCallTable';

/** `#tab-call` in apps/crm/deal-details.pug */
const DealDetailsCall = () => {
  return (
    <>
      <div className="row items-center gx-6 gy-4 flex-wrap mb-4">
        <div className="col-auto flex flex-1">
          <h2 className="mb-0">Call</h2>
        </div>
        <div className="col-auto">
          <div className="flex gap-4 sm:gap-6">
            <div className="form-check mb-0">
              <input
                className="form-check-input"
                id="allCall"
                type="radio"
                name="allCall"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="allCall">
                All Call
              </label>
            </div>
            <div className="form-check mb-0">
              <input
                className="form-check-input"
                id="incomingCall"
                type="radio"
                name="allCall"
              />
              <label className="form-check-label" htmlFor="incomingCall">
                Incoming Call
              </label>
            </div>
            <div className="form-check mb-0">
              <input
                className="form-check-input"
                id="outgoingCall"
                type="radio"
                name="allCall"
              />
              <label className="form-check-label" htmlFor="outgoingCall">
                OutgoingCall
              </label>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <Button
            variant="primary"
            startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
          >
            Add Call
          </Button>
        </div>
      </div>
      <DealDetailsCallTable />
    </>
  );
};

export default DealDetailsCall;
