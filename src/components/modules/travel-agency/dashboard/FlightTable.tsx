import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, ProgressBar, Row, Table } from 'react-bootstrap';

const FlightTable = () => {
  return (
    <>
      <div className="flight-desc-card p-3 bg-soft rounded-3">
        <Row className="gx-5 justify-content-between">
          <Col xs="auto">
            <Table className="text-md" bsPrefix="flight-table">
              <tbody>
                <tr>
                  <th style={{ width: 70 }}></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td>
                    <h6 className="mb-0 text-subtle">Flight no.</h6>
                  </td>
                  <td className="text-subtle pe-2"> : </td>
                  <td>
                    <h6 className="mb-0 text-nowrap font-semibold text-subtle">
                      FF-SCA001
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="mb-0 text-subtle">Model</h6>
                  </td>
                  <td className="text-subtle pe-2"> : </td>
                  <td>
                    <h6 className="mb-0 text-nowrap font-semibold text-subtle">
                      Appa 707-RTX
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="mb-0 text-subtle">Velocity</h6>
                  </td>
                  <td className="text-subtle pe-2"> : </td>
                  <td>
                    <h6 className="mb-0 text-nowrap font-semibold text-subtle">
                      450 km/h
                    </h6>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs="auto">
            <Table className="text-md font-sans-serif" bsPrefix="flight-table">
              <tbody>
                <tr>
                  <th style={{ width: 70 }}></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td>
                    <h6 className="mb-0 text-subtle">Airline</h6>
                  </td>
                  <td className="text-subtle pe-2"> : </td>
                  <td>
                    <h6 className="mb-0 text-nowrap font-semibold text-primary">
                      YIP YIP
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="mb-0 text-subtle">Callsign</h6>
                  </td>
                  <td className="text-subtle pe-2"> : </td>
                  <td>
                    <h6 className="mb-0 text-nowrap font-semibold text-subtle">
                      Skybison1
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="mb-0 text-subtle">ETA</h6>
                  </td>
                  <td className="text-subtle pe-2"> : </td>
                  <td>
                    <h6 className="mb-0 text-nowrap font-semibold text-subtle">
                      12 hrs 57 mins
                    </h6>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <div className="flex align-items-center gap-2 mt-3">
          <h6 className="mb-0 text-subtle">GRU</h6>
          <div className="relative w-100">
            <ProgressBar
              style={{ height: 2 }}
              className="overflow-visible align-middle"
            >
              <ProgressBar
                now={50}
                min={0}
                max={100}
                variant="info"
                style={{
                  height: '2px',
                  transform: 'translateY(-75%)'
                }}
              />
            </ProgressBar>
            <FontAwesomeIcon
              className="text-info absolute top-50 translate-middle-y"
              icon={faPlane}
              style={{ left: '50%' }} // Adjust this to match current progress
            />
          </div>

          <h6 className="mb-0 text-subtle">SJC</h6>
        </div>
      </div>
    </>
  );
};

export default FlightTable;
