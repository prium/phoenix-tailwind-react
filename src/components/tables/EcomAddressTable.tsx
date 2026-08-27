import React from 'react';
import { Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

interface AddressTableDataType {
  labelIcon: string;
  label: string;
  value: string;
}

const TableRow = ({ rowData }: { rowData: AddressTableDataType }) => {
  return (
    <tr>
      <td className="py-2 ps-0">
        <div className="flex">
          <FeatherIcon icon={rowData.labelIcon} size={16} className="me-2" />
          <h5 className="leading-sm me-6">{rowData.label}</h5>
        </div>
      </td>
      <td className="py-2 font-bold leading-sm">:</td>
      <td className="py-2 px-4" style={{ maxWidth: 260 }}>
        <h5 className="leading-lg font-normal text-muted">{rowData.value}</h5>
      </td>
    </tr>
  );
};

const EcomAddressTable = ({ data }: { data: AddressTableDataType[] }) => {
  return (
    <Table borderless>
      <tbody>
        {data.map(item => (
          <TableRow rowData={item} key={item.label} />
        ))}
      </tbody>
    </Table>
  );
};

export default EcomAddressTable;
