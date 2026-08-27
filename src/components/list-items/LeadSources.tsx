import { ListGroup } from 'react-bootstrap';

interface LeadSourceItemProps {
  serial: number;
  source: string;
  count: number;
}

const LeadSources = () => {
  return (
    <ListGroup variant="flush">
      <LeadSourceItem serial={1} source="None" count={65} />
      <LeadSourceItem serial={2} source="Online Store" count={74} />
      <LeadSourceItem serial={3} source="Advertisement" count={32} />
      <LeadSourceItem serial={4} source="Seminar Partner" count={25} />
      <LeadSourceItem serial={5} source="Partner" count={23} />
    </ListGroup>
  );
};

const LeadSourceItem = ({ serial, source, count }: LeadSourceItemProps) => {
  return (
    <ListGroup.Item className="bg-transparent list-group-crm font-bold text-default text-md py-2">
      <div className="flex justify-content-between">
        <span className="font-normal text-md mx-1">
          <span className="font-bold">{serial}.</span> {source}
        </span>{' '}
        <span>({count})</span>
      </div>
    </ListGroup.Item>
  );
};

export default LeadSources;
