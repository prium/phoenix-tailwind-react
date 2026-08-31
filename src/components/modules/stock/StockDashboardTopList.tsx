import { Row, Col } from 'react-bootstrap';
import StockDashboardTopListTable from 'components/tables/StockDashboardTopListTable';
import {
  topGainersTableData,
  topLosersTableData
} from 'data/stock/stockDashboard';

const StockDashboardTopList = () => {
  return (
    <Row className="gy-8 xl:gx-12 2xl:gx-18">
      <Col xl={6}>
        <h2 className="mb-6">Top Gainers</h2>
        <StockDashboardTopListTable
          data={topGainersTableData}
          tableType="gainers"
        />
      </Col>
      <Col xl={6}>
        <h2 className="mb-6">Top Losers</h2>
        <StockDashboardTopListTable
          data={topLosersTableData}
          tableType="losers"
        />
      </Col>
    </Row>
  );
};

export default StockDashboardTopList;
