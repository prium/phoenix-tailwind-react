import { Select } from '@hummingbirdui/react';
import { CompanyProfileItems } from 'data/stock/stockDetails';
import CompanyProfileTotalItemsCard from 'components/cards/CompanyProfileTotalItemsCard';
import CompanyProfileDescriptionCard from 'components/cards/CompanyProfileDescriptionCard';
import CompanyProfileEmployeesChart from 'components/charts/e-charts/CompanyProfileEmployeesChart';
import EmployeeRecordsTable from 'components/tables/EmployeeRecordsTable';

/** Gold: mixins/stock/stock-details/CompanyProfileTabContent.pug */
const CompanyProfileTabContent = ({
  companyProfileItems
}: {
  companyProfileItems: CompanyProfileItems;
}) => {
  return (
    <>
      <CompanyProfileTotalItemsCard
        cardItems={companyProfileItems.companyProfileTotalItems}
      />
      <CompanyProfileDescriptionCard
        companyDetails={companyProfileItems.companyDetailsItems}
        stockDetails={companyProfileItems.stockDetailsItems}
      />
      <div className="row flex-between-center g-4 mb-6">
        <div className="col-auto">
          <h4>Chart of Employees</h4>
          <p className="mb-0">No. of bookings fulfilled &amp; cancelled</p>
        </div>
        <div className="col-auto">
          <div
            className="btn-group stock-btn-group"
            role="group"
            aria-label="employees-btn-group"
          >
            <button type="button" className="btn btn-phoenix-secondary">
              Total
            </button>
            <button type="button" className="btn btn-phoenix-secondary">
              Change
            </button>
            <button
              type="button"
              className="btn btn-phoenix-secondary active text-primary bg-white border-subtle"
            >
              Growth
            </button>
          </div>
        </div>
      </div>

      <CompanyProfileEmployeesChart />

      <div className="card">
        <div className="card-body">
          <div className="row g-4 flex-between-center mb-4">
            <div className="col-auto">
              <h4>Employee Records</h4>
              <p className="mb-0">Record of employees' roles and tenure.</p>
            </div>
            <div className="col-auto">
              <Select size="sm" name="action" id="action">
                <option value="export">Export</option>
                <option value="import">Import</option>
                <option value="delete">Delete</option>
              </Select>
            </div>
          </div>
          <EmployeeRecordsTable
            data={companyProfileItems.employeeRecordTableRows}
          />
        </div>
      </div>
    </>
  );
};

export default CompanyProfileTabContent;
