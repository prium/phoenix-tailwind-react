import { Fragment } from 'react';
import { Table, cn } from '@hummingbirdui/react';

export interface TableRowData {
  key: string;
  value: string | number | string[];
}

export interface SpecificationTableProps {
  title: string;
  data: TableRowData[];
}

const SpecificationTable = ({ title, data }: SpecificationTableProps) => {
  return (
    <>
      <h3 className="mb-0 ms-6 font-bold">{title}</h3>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-2/5" />
            <Table.Head className="w-3/5" />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map(item => (
            <Table.Row key={item.key}>
              <Table.Cell
                className={cn('bg-subtle', {
                  'align-middle': !Array.isArray(item.value)
                })}
              >
                <h6
                  className={cn(
                    'mb-0 text-default uppercase font-black px-6 text-md leading-sm',
                    {
                      'mt-1': Array.isArray(item.value)
                    }
                  )}
                >
                  {item.key}
                </h6>
              </Table.Cell>
              <Table.Cell className="px-8 mb-0">
                {Array.isArray(item.value)
                  ? item.value.map(val => (
                      <Fragment key={val}>
                        {val} <br />
                      </Fragment>
                    ))
                  : item.value}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default SpecificationTable;
