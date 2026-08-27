import classNames from 'classnames';
import Button from 'components/base/Button';
import { customerNotes } from 'data/e-commerce/customers';
import React from 'react';
import { Card, Form } from 'react-bootstrap';

interface NoteProps {
  note: string;
  date: string;
  isLast?: boolean;
}
const Note = ({ note, date, isLast }: NoteProps) => {
  return (
    <div
      className={classNames('text-md font-semibold', {
        'border-b border-dashed pb-6 mb-10': !isLast
      })}
    >
      <p className="text-highlight mb-1">{note}</p>
      <div className="text-end">
        <p className="text-subtle text-opacity-85 mb-0">{date}</p>
      </div>
    </div>
  );
};

const CustomerNotesCard = ({ className }: { className?: string }) => {
  return (
    <Card className={classNames(className)}>
      <Card.Body>
        <h3 className="mb-6">Notes on Customer</h3>
        <Form.Control as="textarea" className="mb-4" rows={4} />
        <Button variant="phoenix-primary" className="w-full mb-6">
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
