import { Col, Row, cn } from '@hummingbirdui/react';
import Unicon from 'components/base/Unicon';
import { StatType } from 'data/crm/stats';

/** `+Analytics` in mixins/crm/Analytics.pug */
const AnalyticsStats = ({ stats }: { stats: StatType[] }) => {
  return (
    <Row className="justify-between">
      {stats.map(stat => (
        <Col
          key={stat.id}
          xs={6}
          md={4}
          xxl={2}
          className={cn(stat.className, 'text-center')}
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
      {/* the gold uses the unicons icon font: an inline 31.25px/leading-none
          span whose line box (with the parent's 16px strut descent) is 33.9px
          tall — give the svg the same box */}
      <span className="flex flex-center h-[33.9px]">
        <Unicon
          icon={data.icon}
          fill="currentColor"
          size={31.25}
          className={data.iconColorClass}
        />
      </span>
      <h1 className="text-2xl pt-4">{data.emailCount}</h1>
      <p className="text-md mb-0">{data.title}</p>
    </>
  );
};

export default AnalyticsStats;
