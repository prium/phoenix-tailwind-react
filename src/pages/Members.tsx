import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ChangeEvent } from 'react';
import { Col, Row } from 'react-bootstrap';
import { memberBreadcrumbItems, members } from 'data/members';
import MembersTable, {
  membersTablecolumns
} from 'components/tables/MembersTable';
import { faFileExport, faPlus } from '@fortawesome/free-solid-svg-icons';

const Members = () => {
  const table = useAdvanceTable({
    data: members,
    columns: membersTablecolumns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: true
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  return (
    <div>
      <PageBreadcrumb items={memberBreadcrumbItems} />
      <div className="mb-16">
        <h2 className="mb-8">Members</h2>

        <AdvanceTableProvider {...table}>
          <div className="mb-6">
            <Row className="g-4">
              <Col xs="auto">
                <SearchBox
                  placeholder="Search members"
                  onChange={handleSearchInputChange}
                />
              </Col>
              <Col
                xs="auto"
                className="scrollbar overflow-hidden-y grow"
              ></Col>
              <Col xs="auto">
                <Button variant="link" className="text-default me-6 px-0">
                  <FontAwesomeIcon icon={faFileExport} className="text-md me-2" />
                  Export
                </Button>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  Add member
                </Button>
              </Col>
            </Row>
          </div>

          <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 bg-soft border-t border-b border-subtle relative top-1">
            <MembersTable />
          </div>
        </AdvanceTableProvider>
      </div>
    </div>
  );
};

export default Members;
