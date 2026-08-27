import { Col, Row } from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faCircle,
  faPause,
  faSquare,
  faStar,
  faXmark
} from '@fortawesome/free-solid-svg-icons';

type StatType = {
  id: number | string;
  icon: IconProp;
  title: string;
  subTitle: string;
  /** Literal class strings so Tailwind can see them (no `text-${color}`). */
  squareClass: string;
  circleClass: string;
  iconClass: string;
};

/** `+Stats` in phoenix-tailwind mixins/dashboard/e-commerce/Stats.pug */
const stats: StatType[] = [
  {
    id: 1,
    icon: faStar,
    title: '57 new orders',
    subTitle: 'Awaiting processing',
    squareClass: 'text-success-light dark:text-success-light/50',
    circleClass: 'text-(--color-success-subtle) dark:text-[#134207]',
    iconClass: 'text-success'
  },
  {
    id: 2,
    icon: faPause,
    title: '5 orders',
    subTitle: 'On hold',
    squareClass: 'text-warning-light dark:text-warning-light/50',
    circleClass: 'text-(--color-warning-subtle) dark:text-[#52310b]',
    iconClass: 'text-warning'
  },
  {
    id: 3,
    icon: faXmark,
    title: '15 products',
    subTitle: 'Out of stock',
    squareClass: 'text-danger-light dark:text-danger-light/50',
    circleClass: 'text-(--color-danger-subtle) dark:text-[#612017]',
    iconClass: 'text-danger'
  }
];

const EcomStats = () => {
  return (
    <Row className="items-center g-6">
      {stats.map(stat => (
        <Col xs={12} md="auto" key={stat.id}>
          <Stat stat={stat} />
        </Col>
      ))}
    </Row>
  );
};

const Stat = ({ stat }: { stat: StatType }) => {
  return (
    <div className="flex items-center">
      <span className="fa-layers min-h-11.5 min-w-11.5">
        <FontAwesomeIcon
          icon={faSquare}
          size="2x"
          className={stat.squareClass}
          transform="down-4 rotate--10 left-4"
        />
        <FontAwesomeIcon
          icon={faCircle}
          size="2x"
          className={`stack-circle ${stat.circleClass}`}
          transform="up-4 right-3 grow-2"
        />
        <FontAwesomeIcon
          icon={stat.icon}
          size="1x"
          className={stat.iconClass}
          transform="shrink-2 up-8 right-6"
        />
      </span>

      <div className="ms-4">
        <h4 className="mb-0">{stat.title}</h4>
        <p className="text-muted text-md mb-0">{stat.subTitle}</p>
      </div>
    </div>
  );
};

export default EcomStats;
