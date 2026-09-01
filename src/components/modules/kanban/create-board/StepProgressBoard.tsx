import { cn } from '@hummingbirdui/react';
import { useWizardFormContext } from 'providers/WizardFormProvider';

/**
 * Gold create-board step header: `p.mb-0.text-muted` counter +
 * `ul.nav.justify-between.nav-wizard.nav-wizard-progress` with one empty
 * `a.nav-link.font-semibold` per step (`active`/`done`/`complete` classes are
 * what the gold wizard JS toggles). Pug mixin: `WizardHeader` in
 * `../phoenix-tailwind/src/pug/mixins/kanban/KanbanCreateBoard.pug`.
 */
const StepProgressBoard = ({ className }: { className?: string }) => {
  const { totalStep, selectedStep, goToStep } = useWizardFormContext();
  return (
    <div className={className}>
      <p className="mb-0 text-muted">
        Step: <span data-kanban-step="">{selectedStep}</span>
      </p>
      <ul className="nav justify-between nav-wizard nav-wizard-progress">
        {Array.from({ length: totalStep }).map((_, index) => (
          <li className="nav-item" key={index}>
            <a
              className={cn('nav-link font-semibold', {
                active: selectedStep === index + 1,
                done: index + 1 < selectedStep,
                complete: index + 2 < selectedStep
              })}
              href={`#create-board-tab${index + 1}`}
              onClick={e => {
                e.preventDefault();
                goToStep(index + 1);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepProgressBoard;
