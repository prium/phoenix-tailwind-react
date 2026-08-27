import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import CountryWiseVitorsChart from 'components/charts/e-charts/CountryWiseVisitorsChart';
import { VisitorsTable } from 'components/tables/VisitorsTable';

export const VisitorsCard = () => {
  const [userCounter, setUserCounter] = useState(119);

  const updateUserCounder = (value: number): void => {
    setUserCounter(value);
  };

  return (
    <Card className="h-full">
      <Card.Header className="border-0 flex justify-between items-start">
        <div>
          <h3 className="text-highlight">Visitors</h3>
          <p className="mb-0 text-subtle"> Users across countries </p>
        </div>
        <Dropdown>
          <Dropdown.Toggle
            size="sm"
            variant="phoenix-secondary"
            className="dropdown-caret-none px-4 bg-soft hover:bg-default"
          >
            <FontAwesomeIcon transform="shrink-2" icon={faEllipsisH} />
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Header>
      <Card.Body className="py-0">
        <h4 className="flex items-center gap-2 text-highlight mb-4">
          <span>{userCounter}</span>
          <span className="text-md font-normal">User per second</span>
        </h4>
        <CountryWiseVitorsChart
          updateUserCounder={updateUserCounder}
          style={{ height: '43px', width: '100%' }}
        />
        <VisitorsTable />
      </Card.Body>
    </Card>
  );
};
