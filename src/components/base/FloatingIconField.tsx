import { ComponentProps } from 'react';
import { cn, Input, Textarea } from '@hummingbirdui/react';

export interface FloatingIconFieldProps {
  id: string;
  label: string;
  /** Font Awesome class string, e.g. `fa-solid fa-user` */
  icon: string;
  placeholder: string;
  type?: ComponentProps<'input'>['type'];
  as?: 'input' | 'textarea';
  /** Extra classes on the `.input-group-icon` wrapper, e.g. `mb-4` */
  className?: string;
  /** Extra classes on the icon span, e.g. `top-6` */
  iconClassName?: string;
  /** Extra classes on the control, e.g. `h-28.75!` */
  controlClassName?: string;
}

/**
 * Gold floating label input with a leading icon:
 * `.input-group-icon > span.<icon>.form-control-icon-start + .form-floating >
 * .form-control + label.text-subtle.form-label`.
 * Pug mixins: PersonalInformation / CompanyInfo / ChangePassword / Social in
 * `../phoenix-tailwind/src/pug/mixins/social/Settings.pug`.
 */
const FloatingIconField = ({
  id,
  label,
  icon,
  placeholder,
  type = 'text',
  as = 'input',
  className,
  iconClassName,
  controlClassName
}: FloatingIconFieldProps) => {
  return (
    <div className={cn('input-group-icon', className)}>
      <span
        className={cn(
          icon,
          'text-default text-md form-control-icon-start',
          iconClassName
        )}
      />
      <div className="form-floating">
        {as === 'textarea' ? (
          <Textarea
            id={id}
            placeholder={placeholder}
            className={controlClassName}
          />
        ) : (
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            className={controlClassName}
          />
        )}
        <label className="text-subtle form-label" htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default FloatingIconField;
