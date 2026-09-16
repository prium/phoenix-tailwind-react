import { ColumnDef } from '@tanstack/react-table';
import { Progress, Tooltip } from '@hummingbirdui/react';
import AdvanceTable from 'components/base/AdvanceTable';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Project, Status, projects } from 'data/project-management/projects';
import Avatar from 'components/base/Avatar';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import AvatarDropdown from 'components/common/AvatarDropdown';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

/** stacked status bar segments: gold `.progress-bar.bg-*` + tooltip title */
const statusBars: { key: keyof Status; className: string; title: string }[] = [
  { key: 'ongoing', className: 'progress-bar bg-info', title: 'Active' },
  { key: 'inactive', className: 'progress-bar bg-danger', title: 'Damage' },
  { key: 'critical', className: 'progress-bar bg-warning', title: 'Pending' },
  { key: 'completed', className: 'progress-bar bg-success', title: 'Done' }
];

/** `+ProjectSummeryTable` in mixins/dashboard/project-management/ProjectSummery.pug */
const columns: ColumnDef<Project>[] = [
  {
    accessorKey: 'name',
    header: 'PROJECT NAME',
    cell: ({ row: { original } }) => {
      const { name } = original;
      return (
        <Link
          to="/apps/project-management/project-details"
          className="font-bold text-base"
        >
          {name}
        </Link>
      );
    },
    meta: {
      cellProps: {
        className: 'time whitespace-nowrap ps-0 project text-start'
      },
      headerProps: {
        className: 'text-start whitespace-nowrap ps-0 w-3/10'
      }
    }
  },
  {
    id: 'assigness',
    header: 'ASSIGNEES',
    cell: ({ row: { original } }) => {
      const { assignees, more } = original.summary ?? {
        assignees: original.assigness
      };
      return (
        <Avatar.Group
          total={assignees.length + (more ?? 0)}
          size="s"
          className="avatar-group-dense"
        >
          {assignees.map(assigne => (
            <AvatarDropdown user={assigne} size="s" key={assigne.id} />
          ))}
        </Avatar.Group>
      );
    },
    meta: {
      cellProps: { className: 'whitespace-nowrap assignees ps-6' },
      headerProps: { className: 'text-start ps-4 w-1/10' }
    }
  },
  {
    header: 'START DATE',
    accessorKey: 'start',
    cell: ({ row: { original } }) => (
      <p className="mb-0 text-md text-default">{original.start}</p>
    ),
    meta: {
      cellProps: { className: 'whitespace-nowrap start ps-4 text-start' },
      headerProps: { className: 'text-start ps-4 w-1/10' }
    }
  },
  {
    header: 'DEADLINE',
    accessorKey: 'deadline',
    cell: ({ row: { original } }) => (
      <p className="mb-0 text-md text-default">{original.deadline}</p>
    ),
    meta: {
      cellProps: { className: 'whitespace-nowrap deadline ps-4 text-start' },
      headerProps: { className: 'text-start ps-4 w-3/20' }
    }
  },
  {
    id: 'calculation',
    header: 'CALCULATION',
    cell: ({ row: { original } }) => {
      const { calculation } = original;
      if (calculation) {
        return (
          <>
            <p className="font-bold text-emphasis text-md mb-0">
              {calculation.amount}
            </p>
            <p className="font-semibold text-sm text-subtle mb-0">
              {calculation.label}
            </p>
          </>
        );
      }
      return (
        <button
          type="button"
          className="btn btn-phoenix-secondary btn-square size-7.5"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      );
    },
    meta: {
      cellProps: {
        className: 'whitespace-nowrap calculation ps-4 text-start'
      },
      headerProps: { className: 'text-start ps-4 w-3/25' }
    }
  },
  {
    id: 'progress',
    header: 'PROGRESS',
    cell: ({ row: { original } }) => {
      const { progress } = original;
      return (
        <>
          <p className="text-muted text-sm text-start mb-0">
            {progress.min} / {progress.max}
          </p>
          <Progress value={progress.min} max={progress.max} className="h-0.75">
            <Progress.Bar className="bg-success" />
          </Progress>
        </>
      );
    },
    meta: {
      cellProps: { className: 'whitespace-nowrap ps-4 projectprogress' },
      headerProps: { className: 'text-start ps-4 w-1/20' }
    }
  },
  {
    header: 'STATUS',
    id: 'status',
    enableSorting: false,
    cell: ({ row: { original } }) => {
      const { statusProgress } = original;
      return (
        <div className="progress progress-stack mt-4 h-0.75">
          {statusBars.map(bar => (
            <Tooltip key={bar.key}>
              <Tooltip.Trigger asChild>
                <div
                  className={bar.className}
                  style={{ width: `${statusProgress[bar.key]}%` }}
                  role="progressbar"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </Tooltip.Trigger>
              <Tooltip.Content side="top">{bar.title}</Tooltip.Content>
            </Tooltip>
          ))}
        </div>
      );
    },
    meta: {
      cellProps: { className: 'whitespace-nowrap ps-14' },
      headerProps: { className: 'text-start ps-14 w-1/10' }
    }
  },
  {
    id: 'action',
    enableSorting: false,
    cell: () => (
      <RevealDropdownTrigger className="static">
        <RevealDropdown btnClassName="text-sm">
          <ActionDropdownItems />
        </RevealDropdown>
      </RevealDropdownTrigger>
    ),
    meta: {
      headerProps: { className: 'sort text-end w-1/10' },
      cellProps: { className: 'text-end whitespace-nowrap pe-0 action' }
    }
  }
];

const ProjectDashboardTable = () => {
  const table = useAdvanceTable({
    data: projects,
    columns,
    pageSize: 6,
    pagination: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        className="table-responsive -ms-1 ps-1 scrollbar"
        tableProps={{
          className: 'text-md mb-0 border-t border-subtle'
        }}
      />
      <AdvanceTableFooter pagination />
    </AdvanceTableProvider>
  );
};

export default ProjectDashboardTable;
