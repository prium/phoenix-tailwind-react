import PageBreadcrumb, {
  PageBreadcrumbItem
} from 'components/common/PageBreadcrumb';
import { Col, Row } from '@hummingbirdui/react';
import img from 'assets/img/spot-illustrations/timeline.png';
import imgDark from 'assets/img/spot-illustrations/timeline-dark.png';
import { timelineData } from 'data/timelineData';
import BasicTimeline from 'components/timelines/BasicTimeline';

export const timelineBreadcrumb: PageBreadcrumbItem[] = [
  {
    label: 'Pages',
    url: '#!'
  },
  {
    label: 'Timeline',
    active: true
  }
];

const Timeline = () => {
  return (
    <>
      <PageBreadcrumb
        items={timelineBreadcrumb}
        className="breadcrumb-sticky-top"
      />
      <h2 className="text-bold mb-8 page-title-sticky-top">Timeline</h2>
      <Row className="xl:gx-14 2xl:gx-20">
        <Col xl={5} className="2xl:p-12">
          <div className="top-3/10 2xl:ms-4 hidden xl:block sticky">
            <img src={img} alt="" className="dark:hidden" />
            <img src={imgDark} alt="" className="hidden dark:block" />
          </div>
        </Col>
        <Col xl={7} className="scrollbar">
          {timelineData.map(timeline => (
            <div key={timeline.id}>
              <h4 className="py-4 border-y mb-8 ms-14">{timeline.date}</h4>
              <BasicTimeline data={timeline.items} />
            </div>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Timeline;
