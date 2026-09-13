import { Card, Col, Row } from '@hummingbirdui/react';
import ReportDetailsChart from 'components/charts/e-charts/ReportDetailsChart';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import ReportDetailsHeader from 'components/modules/crm/report-details/ReportDetailsHeader';
import DealsReportTable, {
  dealsReportTableColumns
} from 'components/tables/DealsReportTable';
import ReportDetailsTable from 'components/tables/ReportDetailsTable';
import { defaultBreadcrumbItems } from 'data/commonData';
import { dealsReportData } from 'data/crm/reportsData';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';

/** apps/crm/report-details.pug */
const ReportDetails = () => {
  const table = useAdvanceTable({
    data: dealsReportData,
    columns: dealsReportTableColumns,
    pageSize: 10,
    pagination: true,
    sortable: true
  });

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <AdvanceTableProvider {...table}>
        <div className="pb-16">
          <h2 className="mb-6">Purchasers and sellers</h2>
          <ReportDetailsHeader />
          <Row className="gy-8">
            <Col xl={5} xxl={4}>
              <Card>
                <Card.Body>
                  <div className="echart-reports-details mb-8 h-89.5 w-full">
                    <ReportDetailsChart
                      style={{ height: '100%', width: '100%' }}
                    />
                  </div>
                  <ReportDetailsTable />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={7} xxl={8}>
              <DealsReportTable />
            </Col>
          </Row>
        </div>
      </AdvanceTableProvider>
    </div>
  );
};

export default ReportDetails;
