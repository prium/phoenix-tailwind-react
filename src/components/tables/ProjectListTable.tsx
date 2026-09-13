import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { Link } from 'react-router';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { Project } from 'data/project-management/projects';
import Avatar from 'components/base/Avatar';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import Badge from 'components/base/Badge';

/** `+ProjectListTable` in project-management/Common.pug */
export const projectListTableColumns: ColumnDef<Project>[] = [
  {
    accessorKey: 'name',
    header: 'PROJECT NAME',
    cell: ({ row: { original } }) => {
      const { name } = original;
      return (
        <Link to="#!" className="font-bold text-base leading-normal">
          {name}
        </Link>
      );
    },
    meta: {
      cellProps: { className: 'text-start whitespace-nowrap ps-0 py-6' },
      headerProps: {
        className: 'text-start whitespace-nowrap ps-0 w-3/10 leading-none'
      }
    }
  },
  {
    id: 'assigness',
    header: 'ASSIGNEES',
    cell: ({ row: { original } }) => {
      const { assigness } = original;
      return (
        <Avatar.Group
          total={assigness.length}
          size="s"
          className="avatar-group-dense h-6"
        >
          {assigness.slice(0, 4).map(assigne => (
            <Avatar
              key={assigne.id}
              src={assigne.avatar ? assigne.avatar : undefined}
              variant={assigne.avatar ? 'image' : 'name'}
              size="s"
              className="border-0 h-6"
            >
              {!assigne.avatar && assigne.name[0]}
            </Avatar>
          ))}
        </Avatar.Group>
      );
    },
    meta: {
      cellProps: { className: 'whitespace-nowrap ps-6 py-6' },
      headerProps: { className: 'text-start ps-4 w-1/10 leading-none' }
    }
  },
  {
    header: 'START DATE',
    accessorKey: 'start',
    cell: ({ row: { original } }) => (
      <p className="mb-0 text-md text-default">{original.start}</p>
    ),
    meta: {
      cellProps: { className: 'text-start whitespace-nowrap ps-4 py-6' },
      headerProps: { className: 'text-start ps-4 w-1/10 leading-none' }
    }
  },
  {
    header: 'DEADLINE',
    accessorKey: 'deadline',
    cell: ({ row: { original } }) => (
      <p className="mb-0 text-md text-default">{original.deadline}</p>
    ),
    meta: {
      cellProps: { className: 'text-start whitespace-nowrap ps-4 py-6' },
      headerProps: { className: 'text-start ps-4 w-3/20 leading-none' }
    }
  },
  {
    accessorKey: 'task',
    header: 'TASK',
    cell: ({ row: { original } }) => (
      <p className="text-default text-md mb-0">{original.task}</p>
    ),
    meta: {
      cellProps: { className: 'text-start whitespace-nowrap ps-4 py-6' },
      headerProps: { className: 'text-start ps-4 w-3/25 leading-none' }
    }
  },
  {
    id: 'progress',
    header: 'PROGRESS',
    cell: ({ row: { original } }) => {
      const { progress } = original;

      return (
        <>
          <p className="text-muted text-sm mb-0">
            {progress.min} / {progress.max}
          </p>
          <div className="progress h-0.75">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: `${(progress.min / progress.max) * 100}%` }}
            />
          </div>
        </>
      );
    },
    meta: {
      cellProps: { className: 'text-start whitespace-nowrap ps-4' },
      headerProps: { className: 'text-start ps-4 w-1/20 leading-none' }
    }
  },
  {
    id: 'status',
    header: 'STATUS',
    accessorFn: ({ status }) => status.label,
    cell: ({ row: { original } }) => {
      const { status } = original;
      return (
        <Badge variant="phoenix" bg={status.type} className="text-sm">
          {status.label}
        </Badge>
      );
    },
    meta: {
      cellProps: { className: 'whitespace-nowrap text-end' },
      headerProps: { className: 'text-end w-1/10 leading-none' }
    }
  },
  {
    id: 'action',
    cell: () => (
      <RevealDropdownTrigger className="static">
        <RevealDropdown>
          <ActionDropdownItems />
        </RevealDropdown>
      </RevealDropdownTrigger>
    ),
    meta: {
      headerProps: { className: 'text-end w-1/10' },
      cellProps: { className: 'text-end whitespace-nowrap pe-0' }
    }
  }
];

const ProjectListTable = () => {
  return (
    <div>
      <AdvanceTable
        tableProps={{
          className: 'text-md mb-0 border-t border-subtle'
        }}
      />
      <AdvanceTableFooter
        pagination
        className="flex-wrap py-4 border-b border-subtle"
      />
    </div>
  );
};

export default ProjectListTable;
