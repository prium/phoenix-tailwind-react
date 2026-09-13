import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import LeadDealsTable from 'components/tables/LeadDealsTable';

const LeadDeals = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="mb-0">Deals</h2>
        <Button
          variant="primary"
          size="sm"
          startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
        >
          Add Deals
        </Button>
      </div>
      <LeadDealsTable />
    </div>
  );
};

export default LeadDeals;
