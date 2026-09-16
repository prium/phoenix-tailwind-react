import {
  faAngleDown,
  faSquareEnvelope,
  faSquarePhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Unicon from 'components/base/Unicon';
import { Deal, dealAgents } from 'data/crm/deals';
import { cn, Progress } from '@hummingbirdui/react';
import FeatherIcon from 'feather-icons-react';
import { UilHeadphones, UilUser } from '@iconscout/react-unicons';
import { Link } from 'react-router';
import Badge from 'components/base/Badge';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { useDealsContext } from 'providers/CrmDealsProvider';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MouseEvent } from 'react';

interface DealCardProps {
  deal: Deal;
  columnId: number;
  cursor?: boolean;
}

/** `+DealsCol(data)` in mixins/crm/Deals.pug — the collapse show/hide of
 *  revenue/category/company rows is driven by crm.css sibling selectors keyed
 *  on `[aria-expanded]` of `.dropdown-indicator-icon`, so the DOM order inside
 *  `.card-body` must stay exactly as in the gold. */
const DealCard = ({ deal, columnId, cursor }: DealCardProps) => {
  const { dealColumns, setDealColumns } = useDealsContext();

  const {
    setNodeRef,
    isDragging,
    transform,
    transition,
    attributes,
    listeners
  } = useSortable({
    id: deal.id,
    data: {
      type: 'deal',
      item: deal,
      columnId
    }
  });

  const handleOpenDetails = (e: MouseEvent) => {
    e.preventDefault();
    const updatedColumns = structuredClone(dealColumns);
    const column = updatedColumns.find(c => c.id === columnId);
    if (column) {
      const targetDeal = column.deals.find(item => item.id === deal.id);
      if (targetDeal) {
        targetDeal.openDetails = !targetDeal.openDetails;
      }
    }
    setDealColumns(updatedColumns);
  };

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: isDragging || cursor ? 'grabbing' : 'pointer',
    opacity: isDragging ? 0 : 1
  };

  return (
    <div ref={setNodeRef} style={styles} {...attributes} {...listeners}>
      <div className="card mb-4">
        <div className="card-body">
          <a
            className="dropdown-indicator-icon absolute text-subtle"
            href={`#collapseWidthDeals-${deal.id}`}
            role="button"
            aria-expanded={deal.openDetails ?? false}
            aria-controls={`collapseWidthDeals-${deal.id}`}
            onClick={handleOpenDetails}
          >
            <FontAwesomeIcon icon={faAngleDown} className="fa-angle-down" />
          </a>
          <div className="flex items-center justify-between mb-4">
            <div className="flex">
              <FeatherIcon icon="clock" size={16} className="me-2 stroke-2" />
              <p className="mb-0 text-md font-semibold text-subtle date">
                {deal.date}
                <span className="text-soft"> . {deal.time}</span>
              </p>
            </div>
          </div>

          <div className="deals-items-head flex items-center mb-2">
            <Link
              to="/apps/crm/deal-details"
              className="text-primary font-bold line-clamp-1 me-4 mb-0 text-lg"
            >
              {deal.title}
            </Link>
            <p className="deals-category text-sm mb-0 mt-1 hidden">
              <FeatherIcon
                icon="grid"
                size={12}
                className="me-1 text-soft stroke-2 size-3"
              />
              {deal.category}
            </p>
            <p className="ms-auto text-md text-emphasis font-semibold mb-0 deals-revenue">
              {deal.revenue}
            </p>
          </div>
          <div className="deals-company-agent flex items-center justify-between">
            <div className="flex items-center">
              <Unicon
                icon={UilUser}
                lineBox
                wrapperClassName="me-2"
                fill="currentColor"
                size={16}
              />
              <p className="text-muted font-bold text-md mb-0">
                {deal.company}
              </p>
            </div>
            <div className="flex items-center">
              <Unicon
                icon={UilHeadphones}
                lineBox
                wrapperClassName="me-2"
                fill="currentColor"
                size={16}
              />
              <p className="text-muted font-bold text-md mb-0">{deal.agent}</p>
            </div>
          </div>

          <div
            className={cn('collapse', { show: deal.openDetails })}
            id={`collapseWidthDeals-${deal.id}`}
          >
            <div className="flex gap-2 mb-8">
              <Badge variant="phoenix" bg={deal.status.variant}>
                {deal.status.label}
              </Badge>
              <Badge variant="phoenix" bg={deal.priority.variant}>
                {deal.priority.label}
              </Badge>
            </div>
            <table className="mb-6 w-full table-stats">
              <tbody>
                <tr>
                  <th />
                  <th />
                  <th />
                </tr>
                <tr>
                  <td className="py-1">
                    <div className="flex items-center">
                      <FeatherIcon
                        icon="dollar-sign"
                        size={16}
                        className="me-2 text-subtle"
                      />
                      <p className="font-semibold text-md mb-0 text-subtle">
                        Expected Revenue
                      </p>
                    </div>
                  </td>
                  <td className="py-1 sm:pe-2">:</td>
                  <td className="py-1">
                    <p className="ps-10 sm:ps-0 font-semibold text-md mb-0 pb-4 sm:pb-0 text-emphasis">
                      {deal.revenue}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="py-1">
                    <div className="flex items-center">
                      <FeatherIcon
                        icon="user"
                        size={16}
                        className="me-2 text-subtle size-4"
                      />
                      <p className="font-semibold text-md mb-0 text-subtle">
                        Company Name
                      </p>
                    </div>
                  </td>
                  <td className="py-1 sm:pe-2">:</td>
                  <td className="py-1">
                    <p className="ps-10 sm:ps-0 font-semibold text-md mb-0 pb-4 sm:pb-0 text-emphasis flex items-center gap-2">
                      {deal.company}
                      <a href="#!">
                        <FontAwesomeIcon
                          icon={faSquarePhone}
                          className="text-subtle"
                        />
                      </a>
                      <a href="#!">
                        <FontAwesomeIcon
                          icon={faSquareEnvelope}
                          className="text-subtle"
                        />
                      </a>
                      <a href="#!">
                        <FontAwesomeIcon
                          icon={faWhatsappSquare}
                          className="text-subtle"
                        />
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="py-1">
                    <div className="flex items-center">
                      <FeatherIcon
                        icon="calendar"
                        size={16}
                        className="me-2 text-subtle size-4"
                      />
                      <p className="font-semibold text-md mb-0 text-subtle">
                        Closing Date &amp; Time
                      </p>
                    </div>
                  </td>
                  <td className="py-1 sm:pe-2">:</td>
                  <td className="py-1">
                    <p className="ps-10 sm:ps-0 font-semibold text-md mb-0 pb-4 sm:pb-0 text-emphasis">
                      {deal.closingDate}
                      <span> . {deal.closingTime}</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="py-1">
                    <div className="flex items-center">
                      <FeatherIcon
                        icon="headphones"
                        size={16}
                        className="me-2 text-subtle size-4"
                      />
                      <p className="font-semibold text-md mb-0 text-subtle">
                        Assigned Agent
                      </p>
                    </div>
                  </td>
                  <td className="py-1 sm:pe-2">:</td>
                  <td className="py-1">
                    <select
                      className="form-select form-select-sm py-0 -ms-4 border-0 shadow-none"
                      defaultValue={deal.agent}
                    >
                      {dealAgents.map(agent => (
                        <option key={agent}>{agent}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="text-md mb-1">Probability:</p>
            <Progress value={deal.probability.value} className="h-2">
              <Progress.Bar
                className={`rounded-full ${deal.probability.barClass}`}
              />
            </Progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
