import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import { useWizardFormContext } from 'providers/WizardFormProvider';

interface WizardNavItemProps {
  icon: IconProp;
  label: string;
  step: number;
  isHorizontal?: boolean;
}

/** One `li.nav-item` of gold `+WizardHeader` (mixins/wizard/WizardHeader.pug) */
const WizardNavItem = ({
  icon,
  label,
  step,
  isHorizontal
}: WizardNavItemProps) => {
  const { selectedStep, totalStep, goToStep } = useWizardFormContext();
  return (
    <li className="nav-item">
      <a
        role="button"
        className={cn('nav-link font-semibold', {
          active: selectedStep === step,
          done: selectedStep > step && step !== totalStep,
          complete: selectedStep > step && step !== totalStep - 1,
          'py-0 xl:py-4': isHorizontal
        })}
        onClick={() => goToStep(step)}
      >
        <div
          className={cn('text-center inline-block', {
            'xl:flex items-center gap-4': isHorizontal
          })}
        >
          <span className="nav-item-circle-parent">
            <span className="nav-item-circle">
              <FontAwesomeIcon
                icon={icon}
                className={isHorizontal ? 'nav-item-icon' : undefined}
              />
              {isHorizontal && (
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
              )}
            </span>
          </span>
          <span
            className={cn('text-md text-center', {
              'hidden md:block mt-1': !isHorizontal,
              'nav-item-title xl:text-base': isHorizontal
            })}
          >
            {label}
          </span>
        </div>
      </a>
    </li>
  );
};

export default WizardNavItem;
