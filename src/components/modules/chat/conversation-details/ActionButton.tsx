import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React, { PropsWithChildren } from 'react';

const ActionButton = ({
  icon,
  children
}: PropsWithChildren<{ icon: IconProp }>) => (
  <div>
    <Button className="p-0 font-semibold block">
      <FontAwesomeIcon icon={icon} className="me-4" />
      {children}
    </Button>
  </div>
);

export default ActionButton;
