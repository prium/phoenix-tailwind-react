import { Col, Row, cn } from '@hummingbirdui/react';

interface ChartLegendInterface {
  /** literal bullet class, e.g. `bg-primary` */
  bulletClass?: string;
  /** legacy alias: colour name appended to `bg-` (prefer `bulletClass`) */
  bulletBg?: string;
  label: string;
  value: string;
}

/** `+ChartLegend` in mixins/project-management/ProjectDetails.pug */
const ChartLegend = ({
  bulletClass,
  bulletBg,
  label,
  value
}: ChartLegendInterface) => {
  return (
    <Row className="justify-center sm:justify-between g-8 sm:g-0 mb-2">
      <Col>
        <div className="flex items-center">
          <div
            className={cn('bullet-item me-2', bulletClass ?? `bg-${bulletBg}`)}
          />
          <h6 className="text-default font-semibold flex-1 mb-0">{label}</h6>
        </div>
      </Col>
      <Col xs="auto">
        <h6 className="text-default font-semibold mb-0">{value}</h6>
      </Col>
    </Row>
  );
};

export default ChartLegend;
