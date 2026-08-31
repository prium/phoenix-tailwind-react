import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RoomInfo } from './Preview';

const PreviewItem = ({ item }: { item: RoomInfo }) => {
  return (
    <tr>
      <td className="text-nowrap py-2">
        <div className="flex gap-2">
          <FontAwesomeIcon icon={item.icon} className="text-md" />
          <h5 className="mb-0">{item.property}</h5>
        </div>
      </td>
      <td className="py-2 pe-1 sm:px-4">
        <h5 className="font-normal mb-0">:</h5>
      </td>
      <td className="py-2">
        <h5 className="font-normal mb-0 text-muted">{item.value}</h5>
      </td>
    </tr>
  );
};

/** gold `+PreviewItem` tables (mixins/travel-agency/add-room/Preview.pug) */
const SummaryTable = ({ items }: { items: RoomInfo[] }) => {
  return (
    <table className="table table-borderless mb-0">
      <tbody>
        <tr>
          <th className="p-0 w-38.75" />
          <th className="p-0 w-4" />
          <th className="p-0" />
        </tr>
        {items.map((item: RoomInfo, index: number) => (
          <PreviewItem item={item} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default SummaryTable;
