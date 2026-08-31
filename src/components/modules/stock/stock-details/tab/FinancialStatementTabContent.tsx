import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Select } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import FinancialStatementTable from 'components/tables/FinancialStatementTable';

/** Gold: mixins/stock/stock-details/FinancialStatementTabContent.pug */
const FinancialStatementTabContent = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row g-4 flex-between-center mb-6">
          <div className="col-auto">
            <h4>Apple Income Statement</h4>
            <p className="text-subtle mb-0">Financials in millions USD.</p>
          </div>
          <div className="col-auto">
            <div className="flex items-center gap-2">
              <Select size="sm" name="amount" id="amount">
                <option value="million">Millions</option>
                <option value="billions">Thousands</option>
                <option value="remove">hundreds</option>
              </Select>
              <Select size="sm" name="time" id="time">
                <option value="million">Annual</option>
                <option value="semi-annual">Semi Annual</option>
                <option value="quarterly">Quarterly</option>
              </Select>
              <Button variant="phoenix-secondary" size="sm">
                <FontAwesomeIcon icon={faDownload} />
              </Button>
            </div>
          </div>
        </div>
        <FinancialStatementTable />
      </div>
    </div>
  );
};

export default FinancialStatementTabContent;
