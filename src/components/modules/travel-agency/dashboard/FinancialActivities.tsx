import classNames from 'classnames';
import BasicDropdown from 'components/base/basicDropdown';
import FinancialActivitiesChart from 'components/charts/e-charts/FinancialActivitiesChart';
import { FinancialActivitiesData } from 'data/travel-agency/travelAgency';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { capitalize } from 'helpers/utils';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap';

export const FinancialActivities = () => {
  const chartRef = useRef<null | EChartsReactCore>(null);
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const chartData = useMemo(() => ({
    profit: FinancialActivitiesData.profitData[selectedOption],
    revenue: FinancialActivitiesData.revenueData[selectedOption],
    expenses: FinancialActivitiesData.expensesData[selectedOption],
  }), [selectedOption]);

  const [legends, setlegends] = useState({
    profit: true,
    revenue: true,
    expenses: true
  });

  const handleLegend = (value: 'profit' | 'revenue' | 'expenses') => {
    setlegends({
      ...legends,
      [value]: !legends[value]
    });

    chartRef?.current?.getEchartsInstance().dispatchAction({
      type: 'legendToggleSelect',
      name: capitalize(value)
    });
  };

  useEffect(() => {
    const data1 = chartData.profit;
    const data2 = chartData.revenue;
    const data3 = chartData.expenses;

    chartRef?.current?.getEchartsInstance().setOption({
      series: [
        { data: data1 },
        { data: data2 },
        { data: data3 }
      ]
    });
  }, [chartData]);

  return (
    <div className="mt-8 xl:mt-0 2xl:mt-8 mb-8 2xl:mb-0">
      <Row className="flex-between-end gy-4 gx-2">
        <Col xs="auto">
          <h3 className="text-highlight">Financial activities</h3>
          <p className="mb-0 text-subtle"> Yearly Balance</p>
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          sm={{
            span: 'auto',
            order: 0
          }}
          md={{ order: 1 }}
          lg={{ order: 0 }}
          xxl={{ order: 1 }}
          className="ms-auto"
        >
          <Form.Select
            size="sm"
            className="pe-16 w-auto xl:mt-4 2xl:mt-0"
            value={selectedOption}
            onChange={e => setSelectedOption(parseInt(e.target.value))}
          >
            <option value={0}>Hotel</option>
            <option value={1}>Flight</option>
            <option value={2}>Trip</option>
          </Form.Select>
        </Col>
        <Col xs="auto" md={{ order: 1 }} lg={{ order: 0 }} xxl={{ order: 1 }}>
          <BasicDropdown>
            <Dropdown.Item href="#!">Action</Dropdown.Item>
            <Dropdown.Item href="#!">Another action</Dropdown.Item>
            <Dropdown.Item href="#!">Something else</Dropdown.Item>
          </BasicDropdown>
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          sm={{ order: 0 }}
          md="auto"
          lg={12}
          xxl="auto"
          className="mx-auto mb-6"
        >
          <div className="flex justify-center gap-10 2xl:gap-6">
            <Button
              variant="link"
              id="profile"
              onClick={() => handleLegend('profit')}
              className={classNames(
                'flex items-center p-0 shadow-none font-semibold no-underline',
                {
                  'opacity-50': !legends.profit
                }
              )}
            >
              <span
                className="bg-primary-light me-2"
                style={{ width: 16, height: 6, borderRadius: 1 }}
                data-bs-theme="light"
              />
              <span className="text-muted"> Profit </span>
            </Button>
            <Button
              variant="link"
              id="revenue"
              onClick={() => handleLegend('revenue')}
              className={classNames(
                'flex items-center p-0 shadow-none font-semibold no-underline',
                {
                  'opacity-50': !legends.revenue
                }
              )}
            >
              <span
                className="bg-success-light me-2"
                style={{ width: 16, height: 6, borderRadius: 1 }}
                data-bs-theme="light"
              />
              <span className="text-muted"> Revenue </span>
            </Button>
            <Button
              variant="link"
              id="expenses"
              onClick={() => handleLegend('expenses')}
              className={classNames(
                'flex items-center p-0 shadow-none font-semibold no-underline',
                {
                  'opacity-50': !legends.expenses
                }
              )}
            >
              <span
                className="bg-info-light me-2"
                style={{ width: 16, height: 6, borderRadius: 1 }}
                data-bs-theme="light"
              />
              <span className="text-muted"> Expenses </span>
            </Button>
          </div>
        </Col>
      </Row>
      <FinancialActivitiesChart ref={chartRef} chartData={chartData} />
    </div>
  );
};
