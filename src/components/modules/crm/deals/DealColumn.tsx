import { faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from '@hummingbirdui/react';
import { DealColumn as Column } from 'data/crm/deals';
import DealCard from 'components/cards/DealCard';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';

/** `.deals-col` in mixins/crm/Deals.pug — the column sizing/scroll comes from
 *  `.deals .deals-col .deals-items-container` in assets/css/components/crm.css,
 *  so this DOM must stay verbatim. */
const DealColumn = ({
  column,
  handleOpenAddModal
}: {
  column: Column;
  handleOpenAddModal: () => void;
}) => {
  const { setNodeRef, listeners, attributes } = useSortable({
    id: column.id,
    data: {
      type: 'column'
    }
  });
  return (
    <div className="deals-col me-6">
      <div className="flex items-center justify-between sticky top-0 z-1 bg-default">
        <div>
          <h5 className="mb-2">{column.title}</h5>
          <p className="text-md text-subtle mb-1">Forecast Revenue:</p>
          <h4 className="mb-4">{column.revenue}</h4>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            className="btn p-0"
            onClick={handleOpenAddModal}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <Dropdown>
            <Dropdown.Trigger asChild>
              <button type="button" className="btn p-0">
                <FontAwesomeIcon icon={faEllipsisH} className="text-sm" />
              </button>
            </Dropdown.Trigger>
            <Dropdown.Content align="end">
              <Dropdown.Item asChild>
                <a href="#!">Edit</a>
              </Dropdown.Item>
              <Dropdown.Item asChild>
                <a href="#!">Add meeting</a>
              </Dropdown.Item>
              <Dropdown.Item asChild>
                <a href="#!">See all connected contacts</a>
              </Dropdown.Item>
              <Dropdown.Item asChild>
                <a href="#!">Clone</a>
              </Dropdown.Item>
              <Dropdown.Item asChild>
                <a href="#!">Delete</a>
              </Dropdown.Item>
              <Dropdown.Item asChild>
                <a href="#!">Display only bad deals</a>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </div>
      </div>
      <div className="scrollbar deals-items-container">
        <div
          ref={setNodeRef}
          {...attributes}
          {...listeners}
          className="w-full min-vh-50"
          onClick={e => e.stopPropagation()}
        >
          <SortableContext
            items={column.deals.map(item => item.id)}
            strategy={verticalListSortingStrategy}
          >
            {column.deals.map(item => (
              <div key={item.id}>
                <DealCard deal={item} columnId={column.id} />
              </div>
            ))}
          </SortableContext>
        </div>
      </div>
    </div>
  );
};

export default DealColumn;
