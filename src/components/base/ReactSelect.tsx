import { cn } from '@hummingbirdui/react';
import { ReactElement } from 'react';
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
  ...rest
}: ReactSelectProps) => {
  return (
    <div
      className={cn('choices', icon && 'choices-select-container', className)}
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
          input: () => 'choices__input choices__input--cloned',
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
