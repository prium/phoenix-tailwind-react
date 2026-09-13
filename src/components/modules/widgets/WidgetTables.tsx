import { faList } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from '@hummingbirdui/react';
import ProjectActivityCard from 'components/cards/ProjectActivityCard';
import DealsReportTable, {
  dealsReportColumns
} from 'components/tables/DealsReportTable';
import EcomLatestReviewsTable from 'components/tables/EcomLatestReviewsTable';
import { dealsReportData } from 'data/crm/reportsData';
import { widgetsTodoList } from 'data/project-management/todoListData';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import DealForecast from '../crm/DealForecast';
import EcomTopRegions from '../e-commerce/dashboard/EcomTopRegions';
import ProjectDashboard from '../project-management/dashboard/ProjectDashboard';
import TodoList from '../project-management/todo-list/TodoList';
import WidgetsSectionTitle from './WidgetsSectionTitle';

/** `+Tables` in mixins/widgets/Tables.pug */
const WidgetTables = () => {
  const table = useAdvanceTable({
    data: dealsReportData,
    columns: dealsReportColumns,
    pageSize: 10,
    selection: true,
    pagination: true,
    sortable: true
  });
  return (
    <>
      <WidgetsSectionTitle
        title="Tables, Files, and Lists"
        subtitle="Phoenix Tailwind's styled components are dedicatedly made for displaying your contents and lists."
        icon={faList}
        transform="shrink-2"
        className="mb-8 pt-12"
      />
      <h3 className="mb-4">Purchasers and sellers</h3>
      <AdvanceTableProvider {...table}>
        <DealsReportTable />
      </AdvanceTableProvider>
      <Row className="gx-10 -mt-4 pb-8">
        <Col xl={6}>
          <EcomTopRegions />
        </Col>
        <Col xl={6} className="mt-12">
          <DealForecast pageSize={6} />
        </Col>
      </Row>
      <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 bg-soft py-8 border-y">
        <ProjectDashboard />
      </div>
      <div className="mt-4 lg:-mx-6">
        <Row className="g-4">
          <Col xs={12} xl={6} xxl={7}>
            <TodoList items={widgetsTodoList} />
          </Col>
          <Col xs={12} xl={6} xxl={5}>
            <ProjectActivityCard />
          </Col>
        </Row>
      </div>
      <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 bg-soft pt-12 mt-4 border-y">
        <EcomLatestReviewsTable />
      </div>
    </>
  );
};

export default WidgetTables;
