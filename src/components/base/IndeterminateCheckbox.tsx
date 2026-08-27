import { Checkbox, cn } from '@hummingbirdui/react';

export interface IndeterminateCheckboxProps
  extends Omit<Checkbox.Props, 'indeterminate' | 'label'> {
  indeterminate?: boolean;
  /** Classes for the `.form-check` wrapper. */
  className?: string;
  /** Classes for the `<input>` itself. */
  inputClassName?: string;
}

const IndeterminateCheckbox = ({
  indeterminate,
  className,
  inputClassName,
  ...rest
}: IndeterminateCheckboxProps) => (
  <div className={cn('form-check mb-0', className)}>
    <Checkbox
      indeterminate={!rest.checked && !!indeterminate}
      className={inputClassName}
      {...rest}
    />
  </div>
);

export default IndeterminateCheckbox;
