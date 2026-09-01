import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { PropsWithChildren } from 'react';

/** `button.btn.block.p-0.font-semibold` rows — mixins/chat/ChatThreadDetails.pug. */
const ActionButton = ({
  icon,
  className,
  children
}: PropsWithChildren<{ icon: IconProp; className?: string }>) => (
  <Button className={cn('block p-0 font-semibold', className)}>
    <FontAwesomeIcon icon={icon} className="me-4" />
    {children}
  </Button>
);

export default ActionButton;
