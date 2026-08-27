import {
  faAngleDown,
  faSquareEnvelope,
  faSquarePhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Deal } from 'data/crm/deals';
import { currencyFormat } from 'helpers/utils';
import { Card, Collapse, Form, ProgressBar, Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { UilHeadphones, UilUser } from '@iconscout/react-unicons';
import classNames from 'classnames';
import { Link } from 'react-router';
import Badge, { BadgeBg } from 'components/base/Badge';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { useDealsContext } from 'providers/CrmDealsProvider';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface DealCardProps {
  deal: Deal;
  columnId: number;
  cursor?: boolean;
}

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

  const handleOpenDetails = () => {
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
      <Card className="mb-4">
        <Card.Body>
          <div className="flex items-center justify-between mb-4">
            <FeatherIcon icon="clock" size={16} className="me-2" />

            <p className="mb-0 text-md font-semibold text-subtle flex-1">
              {deal.date} .{' '}
              <span className="text-soft">{deal.time}</span>
            </p>
            <button
              className="btn p-0 deal-collapse-btn"
              onClick={handleOpenDetails}
            >
              <FontAwesomeIcon
                icon={faAngleDown}
                className={classNames('text-subtle text-base', {
                  show: deal.openDetails
                })}
              />
            </button>
          </div>
          <div className="flex items-center mb-2">
            <Link
              to="/apps/crm/deal-details"
              className="font-bold line-clamp-1 me-4 text-lg"
            >
              {deal.title}
            </Link>
            <p
              className={classNames('text-sm mb-0', {
                'hidden': !deal.openDetails
              })}
            >
              <FeatherIcon
                icon="grid"
                size={12}
                className="text-soft me-1"
              />
              {deal.category}
            </p>
            <p
              className={classNames(
                'ms-auto text-md text-emphasis font-semibold mb-0',
                {
                  'hidden': deal.openDetails
                }
              )}
            >
              {currencyFormat(deal.revenue, { minimumFractionDigits: 2 })}
            </p>
          </div>

          <div
            className={classNames('flex flex-between-center mb-2', {
              'hidden': deal.openDetails
            })}
          >
            <div className="flex items-center">
              <UilUser fill='currentColor' className="me-2" size={16} />
              <p className="text-muted font-bold text-md mb-0">
                {deal.company}
              </p>
            </div>
            <div className="flex items-center">
              <UilHeadphones fill='currentColor' className="me-2" size={16} />
              <p className="text-muted font-bold text-md mb-0">
                {deal.agent}
              </p>
            </div>
          </div>

          <Collapse in={deal.openDetails}>
            <div>
              <div className="flex gap-2 mb-8">
                <Badge variant="phoenix" bg={deal.status.variant as BadgeBg}>
                  {deal.status.label}
                </Badge>
                <Badge variant="phoenix" bg={deal.priority.variant as BadgeBg}>
                  {deal.priority.label}
                </Badge>
              </div>
              <div className="scrollbar mb-6">
                <Table className="mb-0 w-full align-middle" borderless size="sm">
                  <tbody>
                    <tr>
                      <td className="flex gap-2 items-center">
                        <FeatherIcon
                          icon="dollar-sign"
                          size={16}
                          className="text-subtle"
                        />
                        <p className="font-semibold text-md mb-0 text-subtle">
                          Expected Revenue
                        </p>
                      </td>
                      <td>:</td>
                      <td className="font-semibold text-md mb-0 text-emphasis">
                        {currencyFormat(deal.revenue, {
                          minimumFractionDigits: 2
                        })}
                      </td>
                    </tr>
                    <tr>
                      <td className="flex gap-2 items-center">
                        <FeatherIcon
                          icon="user"
                          size={16}
                          className="text-subtle"
                        />
                        <p className="font-semibold text-md mb-0 text-subtle">
                          Company Name
                        </p>
                      </td>
                      <td>:</td>
                      <td className="font-semibold text-md mb-0 text-emphasis">
                        <p className="items-center flex text-md font-semibold gap-2 mb-0 text-emphasis">
                          {deal.company}
                          <Link to="#!">
                            <FontAwesomeIcon
                              icon={faSquarePhone}
                              className="text-subtle"
                            />
                          </Link>
                          <Link to="#!">
                            <FontAwesomeIcon
                              icon={faSquareEnvelope}
                              className="text-subtle"
                            />
                          </Link>
                          <Link to="#!">
                            <FontAwesomeIcon
                              icon={faWhatsappSquare}
                              className="text-subtle"
                            />
                          </Link>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="flex gap-2 items-center">
                        <FeatherIcon
                          icon="calendar"
                          size={16}
                          className="text-subtle"
                        />
                        <p className="font-semibold text-md mb-0 text-subtle">
                          Closing Date & Time
                        </p>
                      </td>
                      <td>:</td>
                      <td className="font-semibold text-md mb-0 text-emphasis">
                        {deal.closingDate} . <span>{deal.closingTime}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="flex gap-2 items-center">
                        <FeatherIcon
                          icon="headphones"
                          size={16}
                          className="text-subtle"
                        />
                        <p className="font-semibold text-md mb-0 text-subtle">
                          Assigned Agent
                        </p>
                      </td>
                      <td>:</td>
                      <td className="font-semibold text-md mb-0 text-emphasis">
                        <Form.Select
                          size="sm"
                          className="py-0 -ms-4 border-0 shadow-none"
                        >
                          {[
                            'Ally Aagaard',
                            'Lonnie Kub',
                            'Aida Moen',
                            'Niko Koss',
                            'Alec Haag',
                            'Ola Smith',
                            'Leif Walsh',
                            'Brain Cole',
                            'Reese Mann'
                          ].map(agent => (
                            <option key={agent}>{agent}</option>
                          ))}
                        </Form.Select>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <p className="text-md mb-1">Probability:</p>
              <ProgressBar
                style={{ height: '8px' }}
                now={Number(deal.probability.value)}
                variant={deal.probability.variant}
              />
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DealCard;
