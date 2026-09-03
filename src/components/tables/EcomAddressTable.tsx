import { Table, cn } from '@hummingbirdui/react';
import FeatherIcon from 'feather-icons-react';
import { Fragment } from 'react';

interface AddressTableDataType {
  labelIcon: string;
  label: string;
  value: string;
}

/** `+ShippingDetails` table in phoenix-tailwind checkout/Checkout.pug */
const TableRow = ({ rowData }: { rowData: AddressTableDataType }) => {
  // gold: only the (multi-line) Address row is `align-top` with `leading-lg`
  const multiline = rowData.value.includes('\n') || rowData.label === 'Address';
  return (
    <Table.Row>
      <Table.Cell className={cn('py-2 ps-0', { 'align-top': multiline })}>
        <div className="flex">
          <FeatherIcon
            icon={rowData.labelIcon}
            size={16}
            className="me-2 size-4"
          />
          <h5 className="leading-sm me-6">{rowData.label}</h5>
        </div>
      </Table.Cell>
      <Table.Cell className="py-2 font-bold leading-sm align-top">:</Table.Cell>
      <Table.Cell className="py-2 px-4">
        <h5
          className={cn('font-normal text-muted', {
            'leading-lg': multiline,
            'leading-sm': !multiline
          })}
        >
          {/* the gold breaks the address with an explicit `<br>`; `max-width`
              on a `td` is ignored in auto table layout, so relying on wrapping
              collapses the row to one line on a wide column (768px widgets) */}
          {rowData.value.split('\n').map((line, i) => (
            <Fragment key={line}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h5>
      </Table.Cell>
    </Table.Row>
  );
};

const EcomAddressTable = ({ data }: { data: AddressTableDataType[] }) => {
  return (
    <Table borderless className="mt-6">
      <Table.Body>
        {data.map(item => (
          <TableRow rowData={item} key={item.label} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default EcomAddressTable;
