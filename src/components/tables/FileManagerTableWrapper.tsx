import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { ColumnDef } from '@tanstack/react-table';
import Avatar from 'components/base/Avatar';
import IndeterminateCheckbox from 'components/base/IndeterminateCheckbox';
import AvatarDropdown from 'components/common/AvatarDropdown';
import FilesDropdown from 'components/modules/file-manager/FilesDropdown';
import FileIcon from 'components/modules/file-manager/myfile-contents/FileIcon';
import { File } from 'data/file-manager';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { useFileManagerContext } from 'providers/FileManagerProvider';
import { PropsWithChildren } from 'react';

/** the gold list view only renders the first 16 of the 20 demo files */
export const LIST_VIEW_ROWS = 16;

const NameCell = ({ file }: { file: File }) => {
  const { checkedFileIds, setCheckedFileIds } = useFileManagerContext();
  const fileId = String(file.id);

  return (
    <div className="underline-on-hover flex items-center relative gap-4">
      <input
        className="form-check-input text-base mt-0 me-0"
        type="checkbox"
        id={fileId}
        data-bulk-select-row
        data-file={fileId}
        checked={checkedFileIds.includes(file.id)}
        onChange={() =>
          setCheckedFileIds(prev =>
            prev.includes(file.id)
              ? prev.filter(id => id !== file.id)
              : [...prev, file.id]
          )
        }
      />
      <label
        className="square-icon-box border border-subtle overflow-hidden stretched-link"
        htmlFor={fileId}
        data-file={fileId}
        data-file-thumbnail={
          file.type === 'video'
            ? file.video
            : file.type === 'image'
              ? file.img
              : undefined
        }
      >
        <FileIcon file={file} className="text-md" />
        {file.img && (
          <img
            className="w-full h-full pointer-events-none"
            src={file.img}
            alt=""
          />
        )}
        {file.video && (
          <img
            className="w-full h-full pointer-events-none"
            src={file.thumb}
            alt=""
          />
        )}
      </label>
      <a className="font-semibold text-highlight name" href="#!">
        {file.name}
      </a>
    </div>
  );
};

const SharedCell = ({ file }: { file: File }) => (
  <div className="avatar-group avatar-group-dense">
    {file.assignees.map((member, index) => (
      <AvatarDropdown
        key={index}
        user={{
          ...member,
          id: index,
          username: 'tyrion222',
          connections: 224,
          mutual: 23
        }}
        size="s"
        dropdownClass="dropdown-toggle dropdown-caret-none"
        className="border border-subtle-subtle"
      />
    ))}
    {file.more && (
      <Avatar size="s" variant="name">
        {file.more}
      </Avatar>
    )}
  </div>
);

/**
 * Columns of the gold `+MyFilesTable` (mixins/file-manager/MyFilesTable.pug).
 * The gold has no separate bulk-select column — the checkbox lives in the NAME
 * header/cell — and its header labels are literally uppercase.
 */
const columns: ColumnDef<File>[] = [
  {
    id: 'name',
    accessorFn: ({ name }) => name,
    enableSorting: false,
    header: ({ table }) => (
      <>
        <IndeterminateCheckbox
          className="text-base"
          id="bulk-select-file-manager"
          checked={table.getIsAllRowsSelected()}
          indeterminate={table.getIsSomeRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
        <span className="sort ms-14" data-sort="name">
          NAME
        </span>
      </>
    ),
    cell: ({ row }) => <NameCell file={row.original} />,
    meta: {
      headerProps: {
        scope: 'col',
        className: 'ps-0 pt-1 whitespace-nowrap flex items-center pb-3.5'
      },
      cellProps: { className: 'whitespace-nowrap py-0' }
    }
  },
  {
    id: 'shared',
    accessorFn: ({ assignees }) => assignees.length,
    header: 'SHARED',
    cell: ({ row }) => <SharedCell file={row.original} />,
    meta: {
      headerProps: { scope: 'col', className: 'pt-1 pb-3.5 min-w-37.5' },
      cellProps: { className: 'shared whitespace-nowrap ps-4' }
    }
  },
  {
    id: 'modified',
    accessorKey: 'modified',
    header: 'LAST MODIFIED',
    meta: {
      headerProps: { scope: 'col', className: 'pt-1 pb-3.5 min-w-37.5' },
      cellProps: {
        className: 'modified time whitespace-nowrap font-semibold text-subtle'
      }
    }
  },
  {
    id: 'file-size',
    accessorFn: ({ size, itemCount }) => size ?? itemCount,
    header: 'FILE SIZE',
    meta: {
      headerProps: { scope: 'col', className: 'pt-1 pb-3.5 max-w-32.5' },
      cellProps: {
        className: 'file-size whitespace-nowrap font-semibold text-subtle'
      }
    }
  },
  {
    id: 'action',
    enableSorting: false,
    header: '',
    cell: () => (
      <FilesDropdown
        className="btn-reveal-trigger"
        triggerClassName="btn-sm btn-reveal"
        icon={faEllipsisH}
        iconClassName="text-subtle"
        menuClassName="py-2"
        itemClassName="dropdown-item font-semibold"
      />
    ),
    meta: {
      headerProps: { scope: 'col', className: 'sort text-end pe-0' },
      cellProps: { className: 'text-end time whitespace-nowrap' }
    }
  }
];

const FileManagerTableWrapper = ({ children }: PropsWithChildren) => {
  const { fileCollection, isGridView } = useFileManagerContext();
  const data = isGridView
    ? fileCollection
    : fileCollection.slice(0, LIST_VIEW_ROWS);

  const table = useAdvanceTable<File>({
    data,
    columns,
    sortable: true,
    pagination: true,
    pageSize: 100
  });

  return <AdvanceTableProvider {...table}>{children}</AdvanceTableProvider>;
};

export default FileManagerTableWrapper;
