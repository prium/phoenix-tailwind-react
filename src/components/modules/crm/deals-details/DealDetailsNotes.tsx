import { Col, Row, cn } from '@hummingbirdui/react';
import { Note } from 'data/crm/dealDetailsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

/** `#tab-notes` + `+Notes(data, isLast)` in crm/DealDetails.pug */
const DealDetailsNotes = ({ notes }: { notes: Note[] }) => {
  return (
    <>
      <h2 className="mb-6">Notes</h2>
      <textarea className="form-control mb-4" id="notes" rows={4} />
      <Row className="gy-6">
        <Col xs={12} xl="auto" className="flex-1">
          {notes.map((note, index) => (
            <div
              key={note.id}
              className={cn({
                'mb-6 pb-6 border-b-2 border-dashed border-subtle':
                  index !== notes.length - 1
              })}
            >
              {note.description && (
                <p className="mb-1 text-highlight">{note.description}</p>
              )}
              <div className="flex">
                <div className="text-md text-subtle/85">
                  <FontAwesomeIcon icon={faClock} className="me-2" />
                  <span className="font-semibold me-1">{note.date}</span>
                </div>
                <p className="text-md mb-0 text-subtle/85">
                  by
                  <a href="#!" className="ms-1 font-semibold">
                    {note.name}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default DealDetailsNotes;
