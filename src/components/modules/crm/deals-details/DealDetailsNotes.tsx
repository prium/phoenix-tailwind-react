import React from 'react';
import { Form } from 'react-bootstrap';
import { Note } from 'data/crm/dealDetailsData';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const DealDetailsNotes = ({ notes }: { notes: Note[] }) => {
  return (
    <>
      <h2 className="mb-4">Notes</h2>
      <Form.Control as="textarea" rows={4} className="mb-3" />
      {notes.map((note, index) => (
        <div
          key={note.id}
          className={classNames('border-2 border-dashed border-light', {
            'mb-4 pb-4 border-bottom': index !== notes.length - 1
          })}
        >
          <p className="mb-1 text-highlight">{note.description}</p>
          <div className="d-sm-flex">
            <div className="text-md text-subtle text-opacity-85">
              <FontAwesomeIcon icon={faClock} className="me-2" />
              <span className="font-semibold me-1">{note.date}</span>
            </div>
            <p className="text-md mb-0 text-subtle text-opacity-85">
              by
              <Link to="#!" className="ms-1 font-semibold">
                {note.name}
              </Link>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DealDetailsNotes;
