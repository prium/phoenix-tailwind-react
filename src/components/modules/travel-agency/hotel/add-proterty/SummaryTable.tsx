import { cn } from '@hummingbirdui/react';
import {
  PropertyDetails,
  SummaryTableProp
} from 'data/travel-agency/addProperty';

/** gold `+PreviewItem` tables (mixins/travel-agency/add-property/Preview.pug) */
const SummaryTable = (props: SummaryTableProp) => {
  const tableItems: PropertyDetails[] = [...props.tableData];

  return (
    <table className="w-full">
      <tbody>
        <tr>
          <th className="w-44" />
          <th className="w-8" />
          <th className={props.thirdColClassName} />
        </tr>
        {tableItems.map((item, index) => {
          const isLast = index === tableItems.length - 1;
          return (
            <tr key={index}>
              <td
                className={cn('border-t py-4 text-nowrap', { 'pb-0': isLast })}
              >
                <h5 className="font-semibold text-highlight mb-0">
                  {item.property}
                </h5>
              </td>
              <td
                className={cn('border-t px-4 py-4 w-max', { 'pb-0': isLast })}
              >
                <p className="mb-0 w-max">:</p>
              </td>
              <td
                className={cn('border-t py-4', {
                  'pb-0': isLast,
                  'text-nowrap': item.property !== 'Property Information'
                })}
              >
                <p className="mb-0 text-muted">{item.value}</p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SummaryTable;
