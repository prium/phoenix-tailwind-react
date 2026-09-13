import { ColumnDef } from '@tanstack/react-table';
import { Col, Row } from '@hummingbirdui/react';
import ReportCard from 'components/cards/ReportCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Report, reports } from 'data/crm/reportsData';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import ReportTopSection from 'components/modules/crm/ReportTopSection';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';

export const columns: ColumnDef<Report>[] = [
  {
    // For filtering and searching projects by priority
    id: 'priority',
    accessorFn: ({ priority }) => priority.label
  },
  {
    // For filtering and searching projects by category
    id: 'category',
    accessorFn: ({ category }) => category
  },
  {
    // For searching projects by name
    accessorKey: 'title'
  }
];

/** apps/crm/reports.pug */
const Reports = () => {
  const table = useAdvanceTable<Report>({
    data: reports,
    columns,
    pageSize: 10,
    pagination: true,
    sortable: true
  });
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <AdvanceTableProvider {...table}>
        <div className="pb-14">
          <h2 className="mb-6">Reports</h2>
          <ReportTopSection />
          <Row className="g-4">
            {table
              .getRowModel()
              .rows.map(row => row.original)
              .map(report => (
                <Col xs={12} xl={6} key={report.id}>
                  <ReportCard report={report} />
                </Col>
              ))}
          </Row>
          <AdvanceTableFooter pagination className="mt-2" />
        </div>
      </AdvanceTableProvider>
    </div>
  );
};

export default Reports;
