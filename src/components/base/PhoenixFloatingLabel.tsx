import { PropsWithChildren, ReactElement } from 'react';
import { cn } from '@hummingbirdui/react';

export interface PhoenixFloatingLabelProps {
  label: React.ReactNode;
  className?: string;
  /** `for` attribute of the floating label */
  htmlFor?: string;
  /** Extra classes on the `label.form-label` */
  labelClassName?: string;
  /**
   * Fully-classed leading element, e.g. the gold
   * `span.fa-solid.fa-bars.kanban-column-icon.form-control-icon-start`
   * drag handle. Switches to the icon-field wrapper markup.
   */
  startComponent?: ReactElement;
  /**
   * Fully-classed trailing element (absolutely positioned by the caller),
   * e.g. the gold clear/copy controls.
   */
  endComponent?: ReactElement;
}

/**
 * Gold floating-label field. Emits the same DOM as HB `FloatingLabel` /
 * `FloatingIconField` instead of delegating, because the icon variants need
 * extra siblings inside the wrapper:
 *
 * - plain:        `.form-floating > control + label.form-label`
 * - endComponent: `.form-floating.relative > control + label.form-label + end`
 *   (gold Step5 shareable link, `mixins/kanban/KanbanWizardForm.pug`)
 * - startComponent: `.input-group-icon.relative > start +
 *   .form-floating.form-field > control + label.form-label.ps-10` + end
 *   (gold Step2 column rows, `mixins/kanban/KanbanWizardForm.pug`)
 */
const PhoenixFloatingLabel = ({
  children,
  startComponent,
  endComponent,
  className,
  label,
  htmlFor,
  labelClassName
}: PropsWithChildren<PhoenixFloatingLabelProps>) => {
  if (startComponent) {
    return (
      <div className={cn('input-group-icon relative', className)}>
        {startComponent}
        <div className="form-floating form-field">
          {children}
          <label
            className={cn('form-label ps-10', labelClassName)}
            htmlFor={htmlFor}
          >
            {label}
          </label>
        </div>
        {endComponent}
      </div>
    );
  }
  return (
    <div
      className={cn('form-floating', { relative: !!endComponent }, className)}
    >
      {children}
      <label className={cn('form-label', labelClassName)} htmlFor={htmlFor}>
        {label}
      </label>
      {endComponent}
    </div>
  );
};

export default PhoenixFloatingLabel;
