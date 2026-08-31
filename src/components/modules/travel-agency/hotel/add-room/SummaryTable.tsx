import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from 'react-bootstrap';
import { RoomInfo } from './Preview';

const PreviewItem = ({ item }: { item: RoomInfo }) => {
  return (
    <tr>
      <td className="whitespace-nowrap py-2">
        <div className="flex gap-2">
          <FontAwesomeIcon icon={item.icon} className="text-md" />
          <h5 className="mb-0">{item.property}</h5>
        </div>
      </td>
      <td className="py-2 pe-1 sm:px-4">
        <h5 className="font-normal mb-0"> :</h5>
      </td>
      <td className="py-2">
        <h5 className="font-normal mb-0 text-muted">{item.value}</h5>
      </td>
    </tr>
  );
};

const SummaryTable = ({ items }: { items: RoomInfo[] }) => {
  return (
    <Table borderless className="mb-0">
      <thead>
        <tr>
          <th className="p-0" style={{ width: 155 }} />
          <th className="p-0" style={{ width: 16 }} />
          <th className="p-0" />
        </tr>
      </thead>
      <tbody>
        {items.map((item: RoomInfo, index: number) => (
          <PreviewItem item={item} key={index} />
        ))}
      </tbody>
    </Table>
  );
};

export default SummaryTable;
