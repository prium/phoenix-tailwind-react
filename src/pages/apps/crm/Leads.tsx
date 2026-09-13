import {
  faFileExport,
  faFilter,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import LeadsFilterModal from 'components/modals/LeadsFilterModal';
import LeadsTable, { leadsTableColumns } from 'components/tables/LeadsTable';
import { defaultBreadcrumbItems } from 'data/commonData';
import { leadsTableData } from 'data/crm/leadsTableData';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ChangeEvent, useState } from 'react';

const Leads = () => {
  const table = useAdvanceTable({
    data: leadsTableData,
    columns: leadsTableColumns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    initialState: {
      columnVisibility: {
        status: false,
        designation: false
      }
    }
  });
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="pb-10">
        <AdvanceTableProvider {...table}>
          <h2 className="mb-6">{leadsTableData.length} Leads</h2>
          <Row className="g-4 justify-between mb-6">
            <Col xs="auto">
              <div className="md:flex justify-between">
                <div>
                  <Button
                    variant="primary"
                    className="me-6"
                    startIcon={
                      <FontAwesomeIcon icon={faPlus} className="me-2" />
                    }
                  >
                    Create Lead
                  </Button>{' '}
                  <Button
                    variant="link"
                    className="text-default px-0"
                    startIcon={
                      <FontAwesomeIcon
                        icon={faFileExport}
                        className="text-md me-2"
                      />
                    }
                  >
                    Export
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="auto">
              <div className="flex">
                <SearchBox
                  placeholder="Search by name"
                  className="me-2"
                  onChange={handleSearchInputChange}
                />
                <DatePicker
                  defaultValue="Mar 1, 2022"
                  wrapperClassName="me-2"
                />
                <Button
                  variant="phoenix-secondary"
                  className="px-4"
                  onClick={() => setOpenFilterModal(true)}
                >
                  <FontAwesomeIcon
                    icon={faFilter}
                    transform="down-3"
                    className="text-primary"
                  />
                </Button>
              </div>
              <LeadsFilterModal
                show={openFilterModal}
                handleClose={() => setOpenFilterModal(false)}
              />
            </Col>
          </Row>
          <LeadsTable />
        </AdvanceTableProvider>
      </div>
    </div>
  );
};

export default Leads;
