import { Card, Col, Row, Select, cn } from '@hummingbirdui/react';
import FeatherIcon from 'feather-icons-react';
import GrossProfitChart from 'components/charts/e-charts/GrossProfitChart';
import { profitData, profitInterface } from 'data/travel-agency/travelAgency';

const GrossProfitItem = ({
  profit,
  index
}: {
  profit: profitInterface;
  index: number;
}) => {
  const { bgColor, title, percent, icon, color } = profit;
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <div className={cn('bullet-item', bgColor)} data-hb-theme="light" />
          <div>
            <h6 className="mb-0 text-default font-semibold mb-2">{title}</h6>
            <h5 className="mb-0 text-default">${profit.profit}</h5>
          </div>
        </div>
        <div className={`flex items-center gap-2 text-${color}`}>
          <FeatherIcon icon={icon} className="size-6 font-bold" />
          <p className="mb-0 font-bold text-base">{percent}%</p>
        </div>
      </div>
      <hr className={index === profitData.length - 1 ? 'hidden' : ''} />
    </>
  );
};

const GrossProfitCard = () => {
  return (
    <Card className="2xl:h-full">
      <Card.Header className="pb-4">
        <Row className="justify-between g-4">
          <Col xs="auto">
            <h3 className="text-highlight">Gross Profit</h3>
            <p className="mb-0 text-base">
              Annual income according to the board
            </p>
          </Col>
          <Col xs="auto">
            <Select size="sm">
              <option>Last Fiscal Year</option>
              <option>Last Calendar year</option>
              <option>Last Quarter</option>
            </Select>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Row className="items-center h-full gy-8">
          <Col
            xs={12}
            md="auto"
            xl={12}
            xxl="auto"
            className="md:order-1 xl:order-0 2xl:order-1 md:px-14 xl:px-10"
          >
            <div className="echart-gross-profit size-62.5 mx-auto mt-4 md:mt-0 xl:mt-4 2xl:mt-0">
              <GrossProfitChart style={{ height: '100%', width: '100%' }} />
            </div>
          </Col>
          <Col
            xs={12}
            md="auto"
            xl={12}
            xxl="auto"
            className="flex-1 md:h-full"
          >
            <div className="flex flex-col justify-between md:h-full xl:h-auto 2xl:h-full">
              {profitData.map((data, index) => (
                <GrossProfitItem profit={data} key={index} index={index} />
              ))}
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default GrossProfitCard;
