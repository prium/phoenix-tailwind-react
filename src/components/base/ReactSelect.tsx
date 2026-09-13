import { cn } from '@hummingbirdui/react';
import { FocusEvent, ReactElement, useState } from 'react';
import Select, {
  ControlProps,
  GroupBase,
  MultiValueRemoveProps,
  Props,
  SelectInstance,
  components
} from 'react-select';

interface ReactSelectProps extends Props {
  icon?: ReactElement;
  ref?: React.Ref<SelectInstance>;
}

/**
 * react-select engine rendered with the gold `choices` markup/classes
 * (`assets/css/plugins/choices.css` + hummingbird `plugins/choices.css`):
 *   .choices > .choices__inner > .choices__list--multiple > .choices__item
 * A hidden `select.form-select.choices__input` marker inside the control lets
 * the `.choices__inner:has(.choices__input.form-select)` rules apply.
 */
const Control = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({
  children,
  ...props
}: ControlProps<Option, IsMulti, Group>) => (
  <components.Control {...props}>
    <select
      hidden
      tabIndex={-1}
      aria-hidden
      className="form-select mb-0 choices__input"
    />
    {children}
  </components.Control>
);

const MultiValueRemove = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: MultiValueRemoveProps<Option, IsMulti, Group>
) => (
  <button
    type="button"
    aria-label={`Remove item: ${props.data && (props.data as { label?: string }).label}`}
    {...(props.innerProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    className={cn(props.innerProps.className, 'choices__button w-2')}
  >
    Remove item
  </button>
);

const ReactSelect = ({
  icon,
  ref,
  isMulti,
  className,
  classNames,
  onMenuOpen,
  onMenuClose,
  onFocus,
  onBlur,
  ...rest
}: ReactSelectProps) => {
  /**
   * choices.js puts `is-open` / `is-focused` on the wrapper, and the skin needs
   * them: `.choices` is `overflow-hidden`, and only `.choices.is-open` turns
   * that back to `visible`. Without them the absolutely-positioned menu was
   * clipped away entirely — the control looked dead because no options could
   * ever be seen. They also drive the focused border, via `.is-focused &`.
   */
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={cn('choices', icon && 'choices-select-container', className, {
        'is-open': isOpen,
        'is-focused': isFocused
      })}
      data-type={isMulti ? 'select-multiple' : 'select-one'}
      role="combobox"
    >
      <Select
        unstyled
        closeMenuOnSelect={!isMulti}
        openMenuOnFocus
        ref={ref}
        isMulti={isMulti}
        components={{
          ClearIndicator: () => null,
          Control,
          MultiValueRemove,
          DropdownIndicator: null,
          IndicatorSeparator: null
        }}
        onMenuOpen={() => {
          setIsOpen(true);
          onMenuOpen?.();
        }}
        onMenuClose={() => {
          setIsOpen(false);
          onMenuClose?.();
        }}
        onFocus={(e: FocusEvent<HTMLInputElement>) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e: FocusEvent<HTMLInputElement>) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        classNamePrefix="react-select"
        // emotion wins over utility classes: match the gold inline layout
        // (block chip, baseline-aligned list next to the cloned input)
        styles={{
          valueContainer: base => ({ ...base, alignItems: 'baseline' }),
          multiValue: base => ({ ...base, display: 'block' }),
          multiValueLabel: base => ({ ...base, padding: 0, display: 'inline' })
        }}
        classNames={{
          control: () => 'choices__inner',
          valueContainer: () =>
            isMulti
              ? 'choices__list choices__list--multiple'
              : 'choices__list choices__list--single',
          multiValue: () => 'choices__item choices__item--selectable',
          multiValueLabel: () => '',
          singleValue: () => 'choices__item',
          placeholder: () => cn('choices__placeholder', icon && 'ps-2'),
          // Only the multi control carries a visible inline input in choices.
          // For `select-one` the cloned search field lives in the DROPDOWN, so
          // `.choices__input` is styled as one — `block w-full py-2.5 px-3`
          // plus a bottom border. Putting that on react-select's in-control
          // input grew the single select to 83px against the gold's 38px and
          // drew a stray rule under the placeholder.
          input: () => (isMulti ? 'choices__input choices__input--cloned' : ''),
          menu: () => 'choices__list choices__list--dropdown is-active',
          menuList: () => 'choices__list',
          option: ({ isFocused }) =>
            cn(
              'choices__item choices__item--choice choices__item--selectable',
              isFocused && 'is-highlighted'
            ),
          ...classNames
        }}
        {...rest}
      />
      {icon}
    </div>
  );
};

ReactSelect.displayName = 'ReactSelect';

export default ReactSelect;
