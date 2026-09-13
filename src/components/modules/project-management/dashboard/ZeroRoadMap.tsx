import { Col, Row } from '@hummingbirdui/react';
import ZeroRoadMapChart from 'components/charts/dhtmlx/ZeroRoadMapChart';
import { ChangeEvent, Fragment, useState } from 'react';

const scaleViews = [
  { id: 'weekView', value: 'week', label: 'Week' },
  { id: 'monthView', value: 'month', label: 'Month' },
  { id: 'yearView', value: 'year', label: 'Year' }
];

/** `+ZeroRoadmap` in mixins/dashboard/project-management/ZeroRoadmap.pug */
const ZeroRoadMap = () => {
  const [scaleView, setScaleView] = useState('week');
  const [showLinks, setShowLinks] = useState(true);
  const [showProgress, setShowProgress] = useState(true);

  return (
    <div className="2xl:mx-0">
      <h3 className="mb-1">Project: zero Roadmap</h3>
      <p className="text-subtle">Phase 2 is now ongoing</p>

      <div className="gantt-zero-roadmap">
        <Row className="g-2 justify-between items-end mb-4">
          <Col xs={12} sm="auto">
            <div className="flex mb-0.5">
              <div className="flex items-end me-4">
                <label
                  className="form-check-label mb-0 me-2 leading-none text-default"
                  htmlFor="progress"
                >
                  Progress
                </label>
                <div className="form-check form-switch min-h-auto mb-0">
                  <input
                    id="progress"
                    className="form-check-input"
                    type="checkbox"
                    checked={showProgress}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setShowProgress(e.target.checked)
                    }
                  />
                </div>
              </div>
              <div className="flex items-end flex-1">
                <label
                  className="form-check-label mb-0 me-2 leading-none text-default"
                  htmlFor="links"
                >
                  Links
                </label>
                <div className="form-check form-switch min-h-auto flex-1 mb-0">
                  <input
                    id="links"
                    className="form-check-input"
                    type="checkbox"
                    checked={showLinks}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setShowLinks(e.target.checked)
                    }
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm="auto">
            <div className="btn-group" role="group">
              {scaleViews.map(view => (
                <Fragment key={view.id}>
                  <input
                    id={view.id}
                    className="btn-check"
                    type="radio"
                    name="scaleView"
                    value={view.value}
                    checked={scaleView === view.value}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setScaleView(e.target.value)
                    }
                  />
                  <label
                    htmlFor={view.id}
                    className="btn btn-phoenix-secondary hover:bg-subtle text-sm py-1 mb-0"
                  >
                    {view.label}
                  </label>
                </Fragment>
              ))}
            </div>
          </Col>
        </Row>

        <ZeroRoadMapChart
          scaleView={scaleView}
          showProgress={showProgress}
          showLinks={showLinks}
        />
      </div>
    </div>
  );
};

export default ZeroRoadMap;
