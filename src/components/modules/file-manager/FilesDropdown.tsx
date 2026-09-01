import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, cn } from '@hummingbirdui/react';

const items = [
  'Share',
  'Download',
  'Duplicate',
  'Move',
  'Rename',
  'Move to Bin'
];

export interface FilesDropdownProps {
  /** classes for the gold `.dropdown` wrapper; omit to render the trigger bare */
  className?: string;
  /** classes for the trigger `button` (after the base `btn`) */
  triggerClassName?: string;
  icon?: IconProp;
  iconClassName?: string;
  iconTransform?: string;
  /** extra classes for the portaled `.dropdown-menu` */
  menuClassName?: string;
  /** gold item classes — they differ per call site (`text-start`, `no-underline!` …) */
  itemClassName: string;
}

/**
 * The file/row action menu of `mixins/file-manager/{MyFile,RecentFiles,
 * MyFilesTable}.pug` and the bulk-action bar. Content is portaled, so every
 * class lives on `Dropdown.Content` / the items themselves.
 */
const FilesDropdown = ({
  className,
  triggerClassName,
  icon = faEllipsisVertical,
  iconClassName,
  iconTransform,
  menuClassName,
  itemClassName
}: FilesDropdownProps) => {
  const dropdown = (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <button type="button" className={cn('btn', triggerClassName)}>
          <FontAwesomeIcon
            icon={icon}
            className={iconClassName}
            transform={iconTransform}
          />
        </button>
      </Dropdown.Trigger>
      <Dropdown.Content align="end" className={menuClassName}>
        {items.map(item => (
          <Dropdown.Item key={item} asChild className={itemClassName}>
            <a href="#!">{item}</a>
          </Dropdown.Item>
        ))}
        <Dropdown.Separator />
        <Dropdown.Item asChild className={cn(itemClassName, 'text-danger')}>
          <a href="#!">Delete</a>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );

  return className ? <div className={className}>{dropdown}</div> : dropdown;
};

export default FilesDropdown;
