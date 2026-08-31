import {
  faEnvelope,
  faFileExport,
  faFilter,
  faPencil,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import ReportsFilterModal from 'components/modals/ReportsFilterModal';
import { DealsReport } from 'data/crm/reportsData';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { ChangeEvent, useState } from 'react';

/** Action row of apps/crm/report-details.pug */
const ReportDetailsHeader = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false);

  const { setGlobalFilter } = useAdvanceTableContext<DealsReport>();

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value || undefined);
  };
  return (
    <Row className="g-4 justify-between mb-6">
      <Col xs="auto">
        <div className="flex flex-wrap gap-2">
          <Button
            variant="primary"
            startIcon={<FontAwesomeIcon icon={faEnvelope} className="me-2" />}
          >
            Send mail
          </Button>
          <Button
            variant="phoenix-primary"
            startIcon={<FontAwesomeIcon icon={faPencil} className="me-2" />}
          >
            Edit
          </Button>
          <Button
            variant="phoenix-secondary"
            className="text-default"
            startIcon={
              <FontAwesomeIcon icon={faFileExport} className="text-md me-2" />
            }
          >
            Export
          </Button>
        </div>
      </Col>
      <Col xs="auto">
        <div className="flex">
          <SearchBox
            placeholder="Search by name"
            className="me-2 hidden xl:block"
            onChange={handleSearchInputChange}
          />
          <Button variant="phoenix-secondary" className="px-4 me-2 xl:hidden">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
          <Button
            variant="phoenix-primary"
            className="px-4"
            onClick={() => setOpenFilterModal(true)}
          >
            <FontAwesomeIcon icon={faFilter} transform="down-3" />
          </Button>
          <ReportsFilterModal
            show={openFilterModal}
            onHide={() => setOpenFilterModal(false)}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ReportDetailsHeader;
