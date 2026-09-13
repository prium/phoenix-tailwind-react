import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';

/**
 * Gold `.flex.pager.wizard.list-inline.mb-0` footer of the create-board
 * wizard: `btn.btn-link.ps-0` Previous + right-aligned `btn.btn-primary
 * .px-10.sm:px-10` Next/Submit. Used by the shared wizard footer
 * (`../phoenix-tailwind/src/pug/apps/kanban/create-kanban-board.pug`) and the
 * Step5 in-form footer (`mixins/kanban/KanbanWizardForm.pug`).
 */
const WizardPager = ({
  nextLabel,
  prevHidden,
  onPrev,
  onNext,
  prevButtonProps,
  nextButtonProps
}: {
  nextLabel: string;
  prevHidden?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  /** Extra attrs (e.g. the gold `data-wizard-prev-btn` hook) */
  prevButtonProps?: React.ComponentProps<'button'> & Record<string, unknown>;
  nextButtonProps?: React.ComponentProps<'button'> & Record<string, unknown>;
}) => {
  return (
    <div className="flex pager wizard list-inline mb-0">
      <button
        className={cn('btn btn-link ps-0', { hidden: prevHidden })}
        type="button"
        onClick={onPrev}
        {...prevButtonProps}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          transform="shrink-3"
          className="me-1"
        />
        Previous
      </button>
      <div className="flex-1 text-end">
        <button
          className="btn btn-primary px-10 sm:px-10"
          type="submit"
          onClick={onNext}
          {...nextButtonProps}
        >
          {nextLabel}
          <FontAwesomeIcon
            icon={faChevronRight}
            transform="shrink-3"
            className="ms-1"
          />
        </button>
      </div>
    </div>
  );
};

export default WizardPager;
