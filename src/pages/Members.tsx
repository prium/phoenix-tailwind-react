import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ChangeEvent } from 'react';
import { memberBreadcrumbItems, members } from 'data/members';
import MembersTable, {
  membersTablecolumns
} from 'components/tables/MembersTable';

const Members = () => {
  const table = useAdvanceTable({
    data: members,
    columns: membersTablecolumns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: true,
    // gold `td.text-md.align-middle.ps-0.py-5` on the bulk-select cell
    selectionColumnProps: { cellClassName: 'py-5' }
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  return (
    <div>
      <PageBreadcrumb items={memberBreadcrumbItems} />
      <h2 className="text-bold text-emphasis mb-8">Members</h2>

      <AdvanceTableProvider {...table}>
        <Row className="items-center justify-between g-4 mb-6">
          <Col xs="auto" className="col">
            <SearchBox
              placeholder="Search members"
              onChange={handleSearchInputChange}
            />
          </Col>
          <Col xs="auto">
            <div className="flex items-center">
              <Button variant="link" className="text-default me-6 px-0">
                <FontAwesomeIcon icon={faFileExport} className="text-md me-2" />
                Export
              </Button>
              <Button variant="primary">
                <FontAwesomeIcon icon={faPlus} className="me-2" />
                Add member
              </Button>
            </div>
          </Col>
        </Row>

        <div className="-mx-6 lg:-mx-10 px-6 lg:px-10 mb-16 bg-soft border-y mt-2 relative top-1">
          <MembersTable />
        </div>
      </AdvanceTableProvider>
    </div>
  );
};

export default Members;
