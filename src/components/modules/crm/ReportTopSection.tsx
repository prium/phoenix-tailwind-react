import {
  faFileExport,
  faFilter,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import ReportFilterModal from 'components/modals/ReportFilterModal';
import { Report } from 'data/crm/reportsData';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { ChangeEvent, useState } from 'react';

/** Top action row of apps/crm/reports.pug */
const ReportTopSection = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const { setGlobalFilter } = useAdvanceTableContext<Report>();
  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value || undefined);
  };
  return (
    <Row className="g-4 justify-between mb-2">
      <Col xs={12}>
        <div className="md:flex justify-between">
          <div className="mb-4">
            <Button
              variant="primary"
              className="me-6"
              startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
            >
              Create Report
            </Button>{' '}
            <Button
              variant="link"
              className="text-default px-0"
              startIcon={
                <FontAwesomeIcon icon={faFileExport} className="text-md me-2" />
              }
            >
              Export
            </Button>
          </div>
          <div className="flex mb-4">
            <SearchBox
              placeholder="Search by name"
              className="me-2"
              onChange={handleSearchInputChange}
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
            <ReportFilterModal
              show={openFilterModal}
              handleClose={() => setOpenFilterModal(false)}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ReportTopSection;
