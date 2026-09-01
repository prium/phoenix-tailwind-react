import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import { TreeViewItem, treeviewItems } from 'data/treeview';
import { useState } from 'react';

/** literal classes so Tailwind can see them (`bg-${dot}` would be pruned) */
const dotClass: Record<string, string> = {
  danger: 'bg-danger',
  warning: 'bg-warning',
  success: 'bg-success',
  info: 'bg-info',
  primary: 'bg-primary'
};

const TREEVIEW_ID = 'treeviewExample';

const TreeviewDot = ({ dot }: { dot: string }) => (
  <span className={cn('treeview-dot', dotClass[dot])} />
);

/** Gold `+TreeviewListItem` in mixins/file-manager/FileManagerOffcanvas.pug. */
const TreeviewLeaf = ({ item }: { item: TreeViewItem }) => (
  <li className="treeview-list-item">
    <div className="treeview-item">
      <a href="#!" className="flex-1 ps-2 ms-2">
        <p className="treeview-text text-nowrap">
          {item.icon && (
            <FontAwesomeIcon icon={item.icon} className="treeview-icon" />
          )}
          {item.name}
          {item.dot && <TreeviewDot dot={item.dot} />}
        </p>
      </a>
    </div>
  </li>
);

/**
 * Gold `+SingleItem`. The chevron is drawn by
 * `.treeview [data-bs-toggle='collapse']::after` (components/treeview.css), so
 * the toggle has to keep the gold `data-bs-toggle` + `aria-expanded` attributes
 * and the child list the `collapse`/`show` pair.
 *
 * Every branch starts collapsed like the gold page does: its treeview.js throws
 * on `window.hummingbird.Collapse` before it can honour `data-show`, so nothing
 * is ever expanded there.
 */
const TreeviewBranch = ({ item }: { item: TreeViewItem }) => {
  const [open, setOpen] = useState(false);
  const listId = `${TREEVIEW_ID}-${item.id}`;

  return (
    <li className="treeview-list-item">
      <a
        data-bs-toggle="collapse"
        href={`#${listId}`}
        role="button"
        aria-expanded={open}
        onClick={event => {
          event.preventDefault();
          setOpen(prev => !prev);
        }}
      >
        <p className="treeview-text text-nowrap">
          <FontAwesomeIcon
            icon={faFolder}
            className={cn('treeview-icon', {
              'text-info-light!': item.id === '2-3'
            })}
          />
          {item.name}
          {item.badge && <span className="treeview-badge">{item.badge}</span>}
          {item.dot && <TreeviewDot dot={item.dot} />}
        </p>
      </a>
      <ul
        className={cn('collapse treeview-list treeview-border', {
          'show collapse-show': open
        })}
        id={listId}
        data-show={String(Boolean(item.show))}
      >
        {item.children?.map((child, index) =>
          child.children ? (
            <TreeviewBranch key={index} item={child} />
          ) : (
            <TreeviewLeaf key={index} item={child} />
          )
        )}
      </ul>
    </li>
  );
};

const TreeView = () => (
  <ul className="mb-0 treeview" id={TREEVIEW_ID}>
    {treeviewItems.map((item, index) =>
      item.children ? (
        <TreeviewBranch key={index} item={item} />
      ) : (
        <TreeviewLeaf key={index} item={item} />
      )
    )}
  </ul>
);

export default TreeView;
