import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@hummingbirdui/react';
import Button from 'components/base/Button';

interface TooltipIconButtonProps {
  title: string;
  icon: IconProp;
  /** classes for the `button.btn`, copied verbatim from the gold pug */
  className?: string;
  /** classes for the icon `span`, copied verbatim from the gold pug */
  iconClass?: string;
}

/**
 * Gold `button(data-bs-toggle="tooltip" data-bs-placement="top" ...)` icon
 * buttons (email InboxToolbar / EmailDetails mixins) rendered with the
 * Hummingbird Tooltip.
 */
const TooltipIconButton = ({
  title,
  icon,
  className,
  iconClass
}: TooltipIconButtonProps) => {
  return (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button className={className}>
          <FontAwesomeIcon icon={icon} className={iconClass} />
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content side="top">{title}</Tooltip.Content>
    </Tooltip>
  );
};

export default TooltipIconButton;
