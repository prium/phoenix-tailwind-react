import { Card, Select } from '@hummingbirdui/react';
import BookingsChart from 'components/charts/e-charts/BookingsChart';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { useEffect, useRef, useState } from 'react';
import { bookingsData } from 'data/travel-agency/travelAgency';

const Bookings = () => {
  const chartRef = useRef<null | EChartsReactCore>(null);
  const [selectedOption, setSelectedOption] = useState<number>(0);

  useEffect(() => {
    const data1 = bookingsData.fullfilledData[selectedOption];
    const data2 = bookingsData.cencelledData[selectedOption];
    chartRef?.current?.getEchartsInstance().setOption({
      series: [
        {
          data: data1
        },
        {
          data: data2
        }
      ]
    });
  }, [selectedOption]);
  return (
    <Card className="h-full">
      <Card.Header className="pb-4 sm:flex xl:block 2xl:flex justify-between items-start">
        <div>
          <h3 className="text-highlight">Bookings</h3>
          <p className="mb-0 text-base">Completed and canceled bookings</p>
        </div>
        <Select
          size="sm"
          className="pe-16 w-auto mt-4 sm:mt-0 xl:mt-4 2xl:mt-0"
          value={selectedOption}
          onChange={e => setSelectedOption(parseInt(e.target.value))}
        >
          <option value={0}>Hotel</option>
          <option value={1}>Flight</option>
          <option value={2}>Trip</option>
        </Select>
      </Card.Header>
      <Card.Body>
        <div className="echart-bookings size-full min-h-80.5">
          <BookingsChart
            ref={chartRef}
            style={{ height: '100%', width: '100%' }}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Bookings;
