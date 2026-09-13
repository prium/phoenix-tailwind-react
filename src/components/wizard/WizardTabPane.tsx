import { cn } from '@hummingbirdui/react';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { PropsWithChildren } from 'react';

/** gold `.tab-content > .tab-pane(.active)` pane of the theme wizard */
const WizardTabPane = ({
  step,
  className,
  children
}: PropsWithChildren<{ step: number; className?: string }>) => {
  const { selectedStep } = useWizardFormContext();
  return (
    <div
      role="tabpanel"
      className={cn('tab-pane', className, { active: selectedStep === step })}
    >
      {children}
    </div>
  );
};

export default WizardTabPane;
