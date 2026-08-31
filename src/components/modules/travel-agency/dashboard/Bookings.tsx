import BookingsChart from 'components/charts/e-charts/BookingsChart';
import EChartsReactCore from 'echarts-for-react/lib/core';
import  { useEffect, useRef, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
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
          <p className="mb-0">Completed and canceled bookings</p>
        </div>
        <Form.Select
          size="sm"
          className="pe-16 w-auto mt-4 sm:mt-0 xl:mt-4 2xl:mt-0"
          value={selectedOption}
          onChange={e => setSelectedOption(parseInt(e.target.value))}
        >
          <option value={0}>Hotel</option>
          <option value={1}>Flight</option>
          <option value={2}>Trip</option>
        </Form.Select>
      </Card.Header>
      <Card.Body>
        <BookingsChart
          ref={chartRef}
          style={{ height: '100%', minHeight: 322, width: '100%' }}
        />
      </Card.Body>
    </Card>
  );
};

export default Bookings;
