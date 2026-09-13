import { Card, Textarea, cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { customerNotes } from 'data/e-commerce/customers';

interface NoteProps {
  note: string;
  date: string;
  isLast?: boolean;
}
const Note = ({ note, date, isLast }: NoteProps) => {
  return (
    <div
      className={cn('text-md font-semibold', {
        'pb-6 mb-6 border-b border-dashed': !isLast
      })}
    >
      <p className="text-highlight mb-1">{note}</p>
      <div className="text-end">
        <p className="text-subtle/85 mb-0">{date}</p>
      </div>
    </div>
  );
};

const CustomerNotesCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <Card.Body>
        <h3 className="mb-6">Notes on Customer</h3>
        <Textarea className="mb-4" rows={4} />
        <Button variant="phoenix" color="primary" className="w-full mb-6">
          Add Note
        </Button>
        {customerNotes.map((note, index) => (
          <Note
            key={index}
            note={note.note}
            date={note.date}
            isLast={index === customerNotes.length - 1}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default CustomerNotesCard;
