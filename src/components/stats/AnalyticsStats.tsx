import { Col, Row } from 'react-bootstrap';
import { StatType } from 'data/crm/stats';
import classNames from 'classnames';
import Unicon from 'components/base/Unicon';

const AnalyticsStats = ({ stats }: { stats: StatType[] }) => {
  return (
    <Row className="justify-between">
      {stats.map((stat, index) => (
        <Col
          key={stat.id}
          xs={6}
          md={4}
          xxl={2}
          className={classNames(
            'text-center 2xl:border-s border-light',
            {
              '2xl:border-e-0 2xl:border-b-0 border-e border-b pb-10 2xl:pb-0':
                index === 0,
              '2xl:border-e-0 2xl:border-b-0 md:border-e border-b pb-10 2xl:pb-0':
                index === 1,
              '2xl:border-b-0 border-b border-e md:border-e-0 pb-10 2xl:pb-0 pt-10 md:pt-0':
                index === 2,
              'md:border-e 2xl:border-e-0 border-b md:border-b-0 pb-10 2xl:pb-0 pt-10 2xl:pt-0':
                index === 3,
              'border-e 2xl:border-e-0 md:pb-6 2xl:pb-0 pt-10 2xl:pt-0':
                index === 4,
              '2xl:border-e md:pb-6 2xl:pb-0 pt-10 2xl:pt-0': index === 5
            }
          )}
        >
          <Stat data={stat} />
        </Col>
      ))}
    </Row>
  );
};

const Stat = ({ data }: { data: StatType }) => {
  return (
    <>
      <Unicon
        icon={data.icon}
        fill='currentColor'
        className={`text-${data.iconColor} mb-1`}
        size={31.25}
      />
      <h1 className="text-2xl mt-4">{data.emailCount}</h1>
      <p className="text-md mb-0">{data.title}</p>
    </>
  );
};

export default AnalyticsStats;
