import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import { Alert } from 'react-bootstrap';

const DesignFile = () => {
  return (
    <div>
      <h2 className="mb-4 lh-sm">Design</h2>
      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="Figma file" noPreview />
        <PhoenixDocCard.Body>
          <Alert variant="info" className="p-3 mb-4">
            <div className="d-flex">
              <FontAwesomeIcon icon={faExclamationCircle} className="fs-6" />
              <div className='flex-1 ms-3'>
                <p className="mb-0">
                  Figma file is only available for{' '}
                  <strong>Standard Plus</strong> &amp;{' '}
                  <strong>Extended Plus</strong> license
                </p>
              </div>
            </div>
          </Alert>
          <h5 className="mb-2">To play with the design:</h5>
          <ul>
            <li>
              <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                Download Figma
              </a>
            </li>
            <li>
              Download{' '}
              <code>
                {import.meta.env.VITE_NAME}-design-
                {import.meta.env.VITE_VERSION}.zip
              </code>{' '}
              from ThemeWagon account
            </li>
            <li>
              Open the figma link from{' '}
              <code>
                {import.meta.env.VITE_NAME}-design-
                {import.meta.env.VITE_VERSION} {'->'} Figma file link.md
              </code>{' '}
              file
            </li>
            <li>
              This file is <code>"read-only". </code>So, to customize the design
              on your own, you have to duplicate the Figma file and start the
              editing process on the copied file.
            </li>
          </ul>
        </PhoenixDocCard.Body>
      </PhoenixDocCard>
    </div>
  );
};

export default DesignFile;
