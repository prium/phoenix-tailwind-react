import { faAngleRight, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Dropdown } from '@hummingbirdui/react';
import { useState } from 'react';
import Button from 'components/base/Button';
import CountryWiseVisitorsChart from 'components/charts/e-charts/CountryWiseVisitorsChart';
import {
  VisitorsTable,
  visitorsTableColumns
} from 'components/tables/VisitorsTable';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { visitorData } from 'data/travel-agency/travelAgency';

export const VisitorsCard = () => {
  const [userCounter, setUserCounter] = useState(119);

  const updateUserCounder = (value: number): void => {
    setUserCounter(value);
  };

  const table = useAdvanceTable({
    data: visitorData,
    columns: visitorsTableColumns,
    pageSize: 4,
    sortable: true
  });

  return (
    <Card className="h-full">
      <Card.Header className="border-0 flex justify-between items-start">
        <div>
          <h3 className="text-highlight">Visitors</h3>
          <p className="mb-0 text-subtle text-base">Users across countries</p>
        </div>
        <Dropdown>
          <Dropdown.Trigger asChild>
            <Button
              variant="phoenix"
              color="secondary"
              size="sm"
              className="bg-soft hover:bg-default action-btn dropdown-caret-none"
            >
              <FontAwesomeIcon icon={faEllipsisH} transform="shrink-2" />
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Content align="end">
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </Card.Header>
      <AdvanceTableProvider {...table}>
        <Card.Body className="py-0">
          <h4 className="flex items-center gap-2 text-highlight mb-4">
            <span className="real-time-user">{userCounter}</span>
            <span className="text-md font-normal">User per second</span>
          </h4>
          <div className="echart-country-wise-visitors w-full h-10.75">
            <CountryWiseVisitorsChart
              updateUserCounder={updateUserCounder}
              style={{ height: '100%', width: '100%' }}
            />
          </div>
          <VisitorsTable />
        </Card.Body>
        <Card.Footer className="pt-4 border-0">
          {/* gold list.js footer: hidden .pagination + [data-list-info] + View all */}
          <div className="flex items-center">
            <div className="pagination hidden"></div>
            <p className="mb-0 hidden sm:block me-4 font-semibold text-default text-base">
              1 to {table.getPaginationRowModel().rows.length}
              <span className="text-subtle"> Items of </span>
              {table.getPrePaginationRowModel().rows.length}
            </p>
            <a className="font-bold text-md ms-auto" href="#!">
              View all
              <FontAwesomeIcon
                icon={faAngleRight}
                className="ms-1"
                transform="down-1"
              />
            </a>
          </div>
        </Card.Footer>
      </AdvanceTableProvider>
    </Card>
  );
};
