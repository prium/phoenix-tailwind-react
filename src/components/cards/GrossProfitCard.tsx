import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import GrossProfitChart from 'components/charts/e-charts/GrossProfitChart';
import { profitData, profitInterface } from 'data/travel-agency/travelAgency';

const GrossProfitTable = ({
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
          <div className={`bg-${bgColor} bullet-item`} />
          <div>
            <h6 className="mb-0 text-default font-semibold mb-2">{title}</h6>
            <h5 className="mb-0 text-default">${profit.profit}</h5>
          </div>
        </div>
        <div className={`flex items-center gap-2 text-${color}`}>
          <FeatherIcon icon={icon} width={24} height={24} />
          <p className="mb-0 font-bold">{percent}%</p>
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
            <p className="mb-0">Annual income according to the board</p>
          </Col>
          <Col xs="auto">
            <Form.Select size="sm">
              <option>Last Fiscal Year</option>
              <option>Last Calendar year</option>
              <option>Last Quarter</option>
            </Form.Select>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Row className="items-center h-full gy-8">
          <Col
            xs={12}
            md={{ span: 'auto', order: 1 }}
            xl={{ span: 12, order: 0 }}
            xxl={{ span: 'auto', order: 1 }}
            className="md:px-14 xl:px-10"
          >
            {/* echart gross profit */}
            <GrossProfitChart style={{ height: 250, width: 250 }} />
          </Col>
          <Col xx={12} md="auto" xl={12} xxl="auto" className="flex-1 md:h-full">
            <div className="flex flex-col justify-between md:h-full xl:h-auto 2xl:h-full">
              {profitData.map((data, index) => (
                <GrossProfitTable profit={data} key={index} index={index} />
              ))}
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default GrossProfitCard;
