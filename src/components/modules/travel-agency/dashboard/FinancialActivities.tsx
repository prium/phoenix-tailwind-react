import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Dropdown, Row, Select, cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import FinancialActivitiesChart from 'components/charts/e-charts/FinancialActivitiesChart';
import { FinancialActivitiesData } from 'data/travel-agency/travelAgency';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { capitalize } from 'helpers/utils';
import { useEffect, useMemo, useRef, useState } from 'react';

/** gold legend rows: id + swatch colour (`data-hb-theme="light"` swatches) */
const legendItems = [
  { id: 'profit', label: 'Profit', swatch: 'bg-primary-light dark:bg-primary' },
  {
    id: 'revenue',
    label: 'Revenue',
    swatch: 'bg-success-light dark:bg-success'
  },
  // gold copy really says "Expanses"
  { id: 'expanses', label: 'Expanses', swatch: 'bg-info-light dark:bg-info' }
] as const;

const legendSeriesName: Record<string, string> = {
  profit: 'Profit',
  revenue: 'Revenue',
  expanses: 'Expenses'
};

export const FinancialActivities = ({ className }: { className?: string }) => {
  const chartRef = useRef<null | EChartsReactCore>(null);
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const chartData = useMemo(
    () => ({
      profit: FinancialActivitiesData.profitData[selectedOption],
      revenue: FinancialActivitiesData.revenueData[selectedOption],
      expenses: FinancialActivitiesData.expensesData[selectedOption]
    }),
    [selectedOption]
  );

  const [legends, setLegends] = useState<Record<string, boolean>>({
    profit: true,
    revenue: true,
    expanses: true
  });

  const handleLegend = (value: (typeof legendItems)[number]['id']) => {
    setLegends({
      ...legends,
      [value]: !legends[value]
    });

    chartRef?.current?.getEchartsInstance().dispatchAction({
      type: 'legendToggleSelect',
      name: legendSeriesName[value] ?? capitalize(value)
    });
  };

  useEffect(() => {
    chartRef?.current?.getEchartsInstance().setOption({
      series: [
        { data: chartData.profit },
        { data: chartData.revenue },
        { data: chartData.expenses }
      ]
    });
  }, [chartData]);

  return (
    <div className={className}>
      <Row className="flex-between-end gy-4 gx-2">
        <Col xs="auto">
          <h3 className="text-highlight">Financial activities</h3>
          <p className="mb-0 text-subtle">Yearly Balance</p>
        </Col>
        <Col
          xs={12}
          sm="auto"
          className="ms-auto order-1 sm:order-0 md:order-1 lg:order-0 2xl:order-1"
        >
          <Select
            size="sm"
            className="pe-16 w-auto"
            value={selectedOption}
            onChange={e => setSelectedOption(parseInt(e.target.value))}
          >
            <option value={0}>Hotel</option>
            <option value={1}>Flight</option>
            <option value={2}>Trip</option>
          </Select>
        </Col>
        <Col xs="auto" className="md:order-1 lg:order-0 2xl:order-1">
          <Dropdown>
            <Dropdown.Trigger asChild>
              <Button
                variant="phoenix"
                color="secondary"
                size="sm"
                className="bg-soft hover:bg-default action-btn dropdown-caret-none"
              >
                <FontAwesomeIcon icon={faEllipsisH} transform="shrink-2" />
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Content align="end">
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Item>Something else here</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </Col>
        <Col
          xs={12}
          md="auto"
          lg={12}
          xxl="auto"
          className="mx-auto order-1 sm:order-0"
        >
          <div className="flex justify-center gap-10 2xl:gap-6">
            {legendItems.map(item => (
              <button
                key={item.id}
                type="button"
                id={item.id}
                onClick={() => handleLegend(item.id)}
                className={cn(
                  'btn flex items-center p-0 shadow-none font-semibold',
                  { 'opacity-50': !legends[item.id] }
                )}
              >
                <span
                  className={cn('me-2 w-4 h-1.5 rounded-[1px]', item.swatch)}
                  data-hb-theme="light"
                />
                <span className="text-muted">{item.label}</span>
              </button>
            ))}
          </div>
        </Col>
      </Row>
      {/* height comes from assets/css/components/travel-agency.css */}
      <div className="echart-financial-Activities">
        <FinancialActivitiesChart
          ref={chartRef}
          chartData={chartData}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </div>
  );
};
