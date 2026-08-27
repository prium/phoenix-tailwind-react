import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { PropsWithChildren, useState } from 'react';
import { Collapse } from 'react-bootstrap';

interface FormCollapseProps {
  title: string;
  defaultOpen?: boolean;
}

const FormCollapse = ({
  title,
  defaultOpen = true,
  children
}: PropsWithChildren<FormCollapseProps>) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        className={classNames('px-0 block collapse-indicator w-full mt-6', {
          collapsed: !open
        })}
      >
        <div className="flex items-center justify-between w-full">
          <div className="text-base text-highlight">{title}</div>
          <FontAwesomeIcon
            icon={faAngleUp}
            className="toggle-icon text-soft"
          />
        </div>
      </Button>
      <Collapse in={open}>
        <div>{children}</div>
      </Collapse>
    </>
  );
};

export default FormCollapse;
