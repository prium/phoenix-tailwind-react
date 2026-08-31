import { cn, Card } from '@hummingbirdui/react';

interface SummaryItemProps {
  label: string;
  value: string;
  bold?: boolean;
  badgeText?: string;
  className?: string;
}

const SummaryItem = ({
  label,
  value,
  bold,
  badgeText,
  className
}: SummaryItemProps) => (
  <li className={className}>
    <div className="flex flex-between-center">
      <h6 className="mb-0">
        {label}
        {badgeText && (
          <span className="badge border-x-0 border-t-0 bg-warning ms-2">
            {badgeText}
          </span>
        )}
      </h6>
      <p className={cn('mb-0 text-emphasis', { 'font-bold': bold })}>
        <span className={cn('text-md me-2', { 'font-semibold': bold })}>
          BDT
        </span>
        {value}
      </p>
    </div>
  </li>
);

/** `+PaymentSummary` in mixins/travel-agency/flight/booking/PaymentSummary.pug */
const PaymentSummary = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <h3 className="mb-6">Payment Summary</h3>
      <Card className="bg-subtle">
        <Card.Body>
          <ul className="list-group list-group-flush">
            <SummaryItem
              label="Base fare"
              value="4,074"
              className="p-0 pb-4 list-group-item border-x-0 border-t-0 bg-subtle"
            />
            <SummaryItem
              label="Tax"
              value="+725"
              className="px-0 py-4 list-group-item border-x-0 border-t-0 bg-subtle"
            />
            <SummaryItem
              label="Sub-total"
              value="4,799"
              bold
              className="px-0 pt-4 pb-8 list-group-item border-x-0 border-t-0 bg-subtle"
            />
            <SummaryItem
              label="Code"
              value="-285"
              badgeText="DOMFLy2023"
              className="px-0 py-4 list-group-item border-x-0 border-t-0 bg-subtle"
            />
            <SummaryItem
              label="Convenience charge"
              value="+95"
              className="px-0 pb-0 pt-4 list-group-item border-0 bg-subtle"
            />
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PaymentSummary;
