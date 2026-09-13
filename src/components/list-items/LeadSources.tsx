import { cn } from '@hummingbirdui/react';

interface LeadSourceItemProps {
  /* the gold pug bolds the space after the serial on items 1-2 but not 3-5 —
     a bold space is wider, so mirror the exact text split */
  bold: string;
  rest: string;
  count: number;
  first?: boolean;
  last?: boolean;
}

/** "Top 5 Lead Sources" list in mixins/dashboard/CRM/CrmStats.pug */
const LeadSources = () => {
  return (
    <ul className="list-group bg-transparent">
      <LeadSourceItem bold="1. " rest="None" count={65} first />
      <LeadSourceItem bold="2. " rest="Online Store" count={74} />
      <LeadSourceItem bold="3." rest=" Advertisement" count={32} />
      <LeadSourceItem bold="4." rest=" Seminar Partner" count={25} />
      <LeadSourceItem bold="5." rest=" Partner" count={23} last />
    </ul>
  );
};

const LeadSourceItem = ({
  bold,
  rest,
  count,
  first,
  last
}: LeadSourceItemProps) => {
  return (
    <li
      className={cn(
        'list-group-item font-bold text-default text-md px-0 py-2 bg-transparent border-x-0',
        { 'border-t-0': first, 'border-b-0': last }
      )}
    >
      <div className="flex justify-between">
        <span className="font-normal text-md mx-1">
          <span className="font-bold">{bold}</span>
          {rest}
        </span>
        <span>({count})</span>
      </div>
    </li>
  );
};

export default LeadSources;
