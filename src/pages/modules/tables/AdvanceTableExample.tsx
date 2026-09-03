import { ColumnDef, Row } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import Badge from 'components/base/Badge';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import FilterTab, { FilterTabItem } from 'components/common/FilterTab';
import SearchBox from 'components/common/SearchBox';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import { Project, projects, tableDocData } from 'data/doc/table';
import useAdvanceTable from 'hooks/useAdvanceTable';
import DocPagesLayout from 'layouts/DocPagesLayout';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ChangeEvent, useMemo } from 'react';
import { Link } from 'react-router';

const basicImportString = `
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import RevealDropdown, { RevealDropdownTrigger } from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router';
`;

const basicDataString = `
type Data = {
  name: string;
  email: string;
  age: number;
};

const data: Data[] = [
  {
    name: 'Anna',
    email: 'anna@example.com',
    age: 18
  },
  {
    name: 'Homer',
    email: 'homer@example.com',
    age: 35
  },
  {
    name: 'Oscar',
    email: 'oscar@example.com',
    age: 52
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    age: 30
  },
  {
    name: 'Jara',
    email: 'jara@example.com',
    age: 25
  },
  {
    name: 'Clark',
    email: 'clark@example.com',
    age: 39
  }
];
`;

const paginationDataString = `
type Data = {
  name: string;
  email: string;
  age: number;
};

const data: Data[] = [
  {
    name: 'Anna',
    email: 'anna@example.com',
    age: 18
  },
  {
    name: 'Homer',
    email: 'homer@example.com',
    age: 35
  },
  {
    name: 'Oscar',
    email: 'oscar@example.com',
    age: 52
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    age: 30
  },
  {
    name: 'Jara',
    email: 'jara@example.com',
    age: 25
  },
  {
    name: 'Clark',
    email: 'clark@example.com',
    age: 39
  },
  {
    name: 'Jennifer',
    email: 'jennifer@example.com',
    age: 52
  },
  {
    name: 'Tony',
    email: 'tony@example.com',
    age: 30
  },
  {
    name: 'Tom',
    email: 'tom@example.com',
    age: 25
  },
  {
    name: 'Michael',
    email: 'michael@example.com',
    age: 39
  },
  {
    name: 'Antony',
    email: 'antony@example.com',
    age: 39
  },
  {
    name: 'Raymond',
    email: 'raymond@example.com',
    age: 52
  },
  {
    name: 'Marie',
    email: 'marie@example.com',
    age: 30
  },
  {
    name: 'Cohen',
    email: 'cohen@example.com',
    age: 25
  },
  {
    name: 'Rowen',
    email: 'rowen@example.com',
    age: 39
  },
  {
    name: 'John',
    email: 'john@example.com',
    age: 25
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    age: 31
  },
  {
    name: 'Alice',
    email: 'alice@example.com',
    age: 42
  },
  {
    name: 'David',
    email: 'david@example.com',
    age: 29
  },
  {
    name: 'Sullivan Benton',
    email: 'sullivan@example.com',
    age: 23
  },
  {
    name: 'Uriah Nunez',
    email: 'uriah@example.com',
    age: 32
  },
  {
    name: 'Terry Lynch',
    email: 'terry@example.com',
    age: 45
  },
  {
    name: 'Lailah Green',
    email: 'lailah@example.com',
    age: 25
  },
  {
    name: 'Phillip Mack',
    email: 'phillip@example.com',
    age: 21
  },
  {
    name: 'Whitney Sawyer',
    email: 'whitney@example.com',
    age: 12
  },
  {
    name: 'Jaliyah Ritter',
    email: 'jaliyah@example.com',
    age: 12
  },
  {
    name: 'Clayton Arnold',
    email: 'clayton@example.com',
    age: 52
  },
  {
    name: 'Jett Donovan',
    email: 'jett@example.com',
    age: 31
  },
  {
    name: 'Javion Christensen',
    email: 'javion@example.com',
    age: 25
  },
  {
    name: 'Brittany Griffin',
    email: 'brittany@example.com',
    age: 41
  },
  {
    name: 'Dustin Middleton',
    email: 'dustin@example.com',
    age: 45
  },
  {
    name: 'Janessa Mann',
    email: 'janessa@example.com',
    age: 65
  },
  {
    name: 'Evangeline Santos',
    email: 'evangeline@example.com',
    age: 32
  },
  {
    name: 'Parker Todd',
    email: 'parker@example.com',
    age: 41
  },
  {
    name: 'Jaxson Gill',
    email: 'jaxson@example.com',
    age: 33
  },
  {
    name: 'Lucille',
    email: 'lucille@example.com',
    age: 34
  },
  {
    name: 'Terrell',
    email: 'terrell@example.com',
    age: 35
  },
  {
    name: 'Shayna',
    email: 'shayna@example.com',
    age: 36
  },
  {
    name: 'Alvaro',
    email: 'alvaro@example.com',
    age: 37
  },
  {
    name: 'Clay',
    email: 'clay@example.com',
    age: 37
  },
  {
    name: 'Oscar',
    email: 'oscar@example.com',
    age: 37
  },
  {
    name: 'Tabitha',
    email: 'tabitha@example.com',
    age: 37
  },
  {
    name: 'Jordon',
    email: 'jordon@example.com',
    age: 37
  }
];
`;

const basicColumnString = `
const columns: ColumnDef<Data>[] = [
  {
    accessorKey: 'name'
  },
  {
    accessorKey: 'email',
    cell: ({ row: { original } }) => (
      <Link to={\`mailto:\${original.email}\`}>{original.email}</Link>
    )
  },
  {
    accessorKey: 'age'
  },

  {
    id: 'action',
    cell: () => (
      <RevealDropdownTrigger>
        <RevealDropdown>
          <ActionDropdownItems />
        </RevealDropdown>
      </RevealDropdownTrigger>
    ),
    meta: {
      headerProps: { style: { width: '7%' } },
      cellProps: { className: 'text-end' }
    }
  }
];
`;

const exampleCode = `
${basicImportString}
${basicDataString}
${basicColumnString}
const Example = () => {
  const table = useAdvanceTable({
    data: data,
    columns,
    selection: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'text-md mb-0 border-t border-subtle'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger static"
      />
    </AdvanceTableProvider>
  );
};
`;

const paginationExampleCode = `
${basicImportString}
${paginationDataString}
${basicColumnString}
const PaginationExample = () => {
  const table = useAdvanceTable({
    data: data,
    columns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'text-md mb-0 border-t border-subtle'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger static"
      />
      <AdvanceTableFooter pagination />
    </AdvanceTableProvider>
  );
};
`;

const serversidePaginationCode = `

const PaginationExample = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  });

   const table = useAdvanceTable({
    data: tableData, // Your fetched data
    columns,
    sortable: true,
    manualPagination: true, // turn off client-side pagination
    rowCount: tableData.length,
    onPaginationChange: setPagination,
    state: {
      pagination
    }
  });
};
`;

const searchExampleCode = `
${basicImportString}
import { ChangeEvent } from 'react';
import SearchBox from 'components/common/SearchBox';

${basicDataString}
${basicColumnString}
const SearchExample = () => {
  const table = useAdvanceTable({
    data: data,
    columns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  return (
    <AdvanceTableProvider {...table}>
      <SearchBox
        placeholder="Search..."
        size="sm"
        onChange={handleSearchInputChange}
        className="mx-auto mb-6"
      />
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'text-md mb-0 border-t border-subtle'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger static"
      />
      <AdvanceTableFooter navBtn />
    </AdvanceTableProvider>
  );
};
`;

const filterExampleCode = `
${basicImportString}
import Badge, { BadgeBg } from 'components/base/Badge';
import FilterTab, { FilterTabItem } from 'components/common/FilterTab';
import { useMemo } from 'react';

type Project = {
  id: number;
  name: string;
  start: string;
  task: number;
  status: {
    label: string;
    type: BadgeBg;
  };
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Making the Butterflies shoot each other dead',
    start: 'Dec 12, 2018',
    task: 287,
    status: {
      label: 'completed',
      type: 'success'
    }
  },
  {
    id: 2,
    name: 'Project Doughnut Dungeon',
    start: 'Jan 9, 2019',
    task: 125,
    status: {
      label: 'inactive',
      type: 'warning'
    }
  },
  {
    id: 3,
    name: 'The Chewing Gum Attack',
    start: 'Sep 4, 2019',
    task: 72,
    status: {
      label: 'ongoing',
      type: 'primary'
    }
  },
  {
    id: 4,
    name: 'Execution of Micky the foul mouse',
    start: 'Nov 1, 2019',
    task: 91,
    status: {
      label: 'critical',
      type: 'danger'
    }
  },
  {
    id: 5,
    name: 'Harnessing stupidity from Jerry',
    start: 'Dec 28, 2019',
    task: 134,
    status: {
      label: 'ongoing',
      type: 'primary'
    }
  },
  {
    id: 6,
    name: 'Water resistant mosquito killer gun',
    start: 'Feb 24, 2020',
    task: 24,
    status: {
      label: 'cancelled',
      type: 'secondary'
    }
  },
  {
    id: 7,
    name: 'Olga Dies Dreaming by Xóchitl González',
    start: 'Feb 24, 2020',
    task: 24,
    status: {
      label: 'cancelled',
      type: 'secondary'
    }
  }
];

const projectListTableColumns: ColumnDef<Project>[] = [
  {
    accessorKey: 'name',
    header: 'Project Name',
    cell: ({ row: { original } }) => {
      const { name } = original;
      return (
        <Link to="#!" className="no-underline font-bold text-base">
          {name}
        </Link>
      );
    },
    meta: {
      cellProps: { className: 'whitespace-nowrap py-4' }
    }
  },

  {
    header: 'Start date',
    accessorKey: 'start',
    meta: {
      cellProps: { className: 'ps-3 text-md text-default whitespace-nowrap py-4' },
      headerProps: { className: 'ps-3' }
    }
  },

  {
    accessorKey: 'task',
    header: 'Task',
    meta: {
      cellProps: { className: 'ps-3 text-default py-4' },
      headerProps: { className: 'ps-3' }
    }
  },

  {
    id: 'status',
    header: 'Status',
    accessorFn: ({ status }) => status.label,
    cell: ({ row: { original } }) => {
      const { status } = original;
      return (
        <Badge variant="phoenix" bg={status.type}>
          {status.label}
        </Badge>
      );
    },
    meta: {
      cellProps: { className: 'ps-8 py-4' },
      headerProps: { className: 'ps-8' }
    }
  },
  {
    id: 'action',
    cell: () => (
      <RevealDropdownTrigger>
        <RevealDropdown>
          <ActionDropdownItems />
        </RevealDropdown>
      </RevealDropdownTrigger>
    ),
    meta: {
      headerProps: { style: { width: '10%' }, className: 'text-end' },
      cellProps: { className: 'text-end' }
    }
  }
];

const FilterByColumnExample = () => {
  const table = useAdvanceTable({
    data: projects,
    columns: projectListTableColumns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  const { getColumn, getPrePaginationRowModel } = table;

  const handleFilterItemClick = (columnId: string, value: string) => {
    const column = getColumn(columnId);
    column?.setFilterValue(value === 'all' ? '' : value);
  };

  const tabItems: FilterTabItem[] = useMemo(() => {
    const getDataCount = (label: string) =>
      getPrePaginationRowModel().rows.filter(
        ({ original: { status } }: any) => status.label === label
      ).length;

    return [
      {
        label: 'All',
        value: 'all',
        onClick: () => handleFilterItemClick('status', 'all'),
        count: getPrePaginationRowModel().rows.length
      },
      {
        label: 'Ongoing',
        value: 'ongoing',
        onClick: () => handleFilterItemClick('status', 'ongoing'),
        count: getDataCount('ongoing')
      },
      {
        label: 'Cancelled',
        value: 'cancelled',
        onClick: () => handleFilterItemClick('status', 'cancelled'),
        count: getDataCount('cancelled')
      },
      {
        label: 'Completed',
        value: 'completed',
        onClick: () => handleFilterItemClick('status', 'completed'),
        count: getDataCount('completed')
      },
      {
        label: 'Critical',
        value: 'critical',
        onClick: () => handleFilterItemClick('status', 'critical'),
        count: getDataCount('critical')
      }
    ];
  }, [getPrePaginationRowModel]);

  return (
    <AdvanceTableProvider {...table}>
      <FilterTab tabItems={tabItems} className="mb-4" />
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'text-md mb-0 border-t border-subtle'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger static"
      />
      <AdvanceTableFooter navBtn />
    </AdvanceTableProvider>
  );
};
`;

const advanceTableProviderCode = `
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';

const YourTableComponent = () => {
  const table = useAdvanceTable({
    data,               // your array of rows
    columns,            // your TanStack column definitions
    selection: true,    // prepend the bulk-select column
    sortable: true,     // make every column sortable
    pagination: true,   // paginate client side
    pageSize: 10        // rows per page (ignored without \`pagination\`)
  });

  return (
    // spreading the table instance into the provider makes it available to
    // AdvanceTable, AdvanceTableFooter and any component of your own that
    // calls useAdvanceTableContext()
    <AdvanceTableProvider {...table}>
      {/* your table UI */}
    </AdvanceTableProvider>
  );
};
`;

const advanceTableFooterCode = `
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';

const YourTableUi = () => (
  <>
    <AdvanceTable
      className="your-wrapper-class"
      headerClassName="your-header-class"
      bodyClassName="your-body-class"
      rowClassName="hover-actions-trigger btn-reveal-trigger static"
      tableProps={{
        size: 'sm',
        className: 'text-md mb-0 border-t border-subtle'
      }}
    />
    <AdvanceTableFooter pagination />
  </>
);
`;

const selectionColumnCode = `
import { ColumnDef } from '@tanstack/react-table';
import { buildSelectionColumn } from 'hooks/useAdvanceTable';

// module scope, next to the other columns — never rebuilt in a component body
export const leadsTableColumns: ColumnDef<LeadDataType>[] = [
  buildSelectionColumn<LeadDataType>(),
  {
    accessorKey: 'customer.name',
    header: 'NAME',
    meta: {
      headerProps: { className: 'whitespace-nowrap uppercase ps-0 w-1/4' },
      cellProps: { className: 'whitespace-nowrap ps-0' }
    }
  }
  // …
];
`;

const selectionColumnPropsCode = `
const table = useAdvanceTable({
  data,
  columns,
  selection: true,
  // merged onto the defaults of the selection th/td, for tables whose row
  // padding differs from the shared one
  selectionColumnProps: {
    headerClassName: 'ps-4 py-4',
    cellClassName: 'ps-4'
  }
});
`;

type Data = {
  name?: string;
  email?: string;
  age?: number;
};

const data: Data[] = [
  {
    name: 'Anna',
    email: 'anna@example.com',
    age: 18
  },
  {
    name: 'Homer',
    email: 'homer@example.com',
    age: 35
  },
  {
    name: 'Oscar',
    email: 'oscar@example.com',
    age: 52
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    age: 30
  },
  {
    name: 'Jara',
    email: 'jara@example.com',
    age: 25
  },
  {
    name: 'Clark',
    email: 'clark@example.com',
    age: 39
  }
];

const columns: ColumnDef<Data>[] = [
  {
    accessorKey: 'name'
  },
  {
    accessorKey: 'email',
    cell: ({ row: { original } }) => (
      <Link to={`mailto:${original.email}`}>{original.email}</Link>
    )
  },
  {
    accessorKey: 'age'
  },

  {
    id: 'action',
    cell: () => (
      <RevealDropdownTrigger>
        <RevealDropdown>
          <ActionDropdownItems />
        </RevealDropdown>
      </RevealDropdownTrigger>
    ),
    meta: {
      headerProps: { style: { width: '7%' } },
      cellProps: { className: 'text-end' }
    }
  }
];

const Example = () => {
  const table = useAdvanceTable({
    data: data,
    columns,
    selection: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'text-md mb-0 border-t border-subtle'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger static"
      />
    </AdvanceTableProvider>
  );
};

const PaginationExample = () => {
  const table = useAdvanceTable({
    data: tableDocData,
    columns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'text-md mb-0 border-t border-subtle'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger static"
      />
      <AdvanceTableFooter pagination />
    </AdvanceTableProvider>
  );
};

const SearchExample = () => {
  const table = useAdvanceTable({
    data: tableDocData,
    columns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  return (
    <AdvanceTableProvider {...table}>
      <SearchBox
        placeholder="Search..."
        size="sm"
        onChange={handleSearchInputChange}
        className="mx-auto mb-6"
      />
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'text-md mb-0 border-t border-subtle'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger static"
      />
      <AdvanceTableFooter navBtn />
    </AdvanceTableProvider>
  );
};

export const projectListTableColumns: ColumnDef<Project>[] = [
  {
    accessorKey: 'name',
    header: 'Project Name',
    cell: ({ row: { original } }) => {
      const { name } = original;
      return (
        <Link to="#!" className="no-underline font-bold text-base">
          {name}
        </Link>
      );
    },
    meta: {
      cellProps: { className: 'whitespace-nowrap py-4' }
    }
  },

  {
    header: 'Start date',
    accessorKey: 'start',
    meta: {
      cellProps: {
        className: 'ps-3 text-md text-default whitespace-nowrap py-4'
      },
      headerProps: { className: 'ps-3' }
    }
  },

  {
    accessorKey: 'task',
    header: 'Task',
    meta: {
      cellProps: { className: 'ps-3 text-default py-4' },
      headerProps: { className: 'ps-3' }
    }
  },

  {
    id: 'status',
    header: 'Status',
    accessorFn: ({ status }) => status.label,
    cell: ({ row: { original } }) => {
      const { status } = original;
      return (
        <Badge variant="phoenix" bg={status.type}>
          {status.label}
        </Badge>
      );
    },
    meta: {
      cellProps: { className: 'ps-8 py-4' },
      headerProps: { className: 'ps-8' }
    }
  },
  {
    id: 'action',
    cell: () => (
      <RevealDropdownTrigger>
        <RevealDropdown>
          <ActionDropdownItems />
        </RevealDropdown>
      </RevealDropdownTrigger>
    ),
    meta: {
      headerProps: { style: { width: '10%' }, className: 'text-end' },
      cellProps: { className: 'text-end' }
    }
  }
];

const FilterByColumnExample = () => {
  const table = useAdvanceTable({
    data: projects,
    columns: projectListTableColumns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  const { getColumn, getPrePaginationRowModel } = table;

  const handleFilterItemClick = (columnId: string, value: string) => {
    const column = getColumn(columnId);
    column?.setFilterValue(value === 'all' ? '' : value);
  };

  const tabItems: FilterTabItem[] = useMemo(() => {
    const getDataCount = (label: string) =>
      getPrePaginationRowModel().rows.filter(
        ({ original: { status } }: Row<Project>) => status.label === label
      ).length;

    return [
      {
        label: 'All',
        value: 'all',
        onClick: () => handleFilterItemClick('status', 'all'),
        count: getPrePaginationRowModel().rows.length
      },
      {
        label: 'Ongoing',
        value: 'ongoing',
        onClick: () => handleFilterItemClick('status', 'ongoing'),
        count: getDataCount('ongoing')
      },
      {
        label: 'Cancelled',
        value: 'cancelled',
        onClick: () => handleFilterItemClick('status', 'cancelled'),
        count: getDataCount('cancelled')
      },
      {
        label: 'Completed',
        value: 'completed',
        onClick: () => handleFilterItemClick('status', 'completed'),
        count: getDataCount('completed')
      },
      {
        label: 'Critical',
        value: 'critical',
        onClick: () => handleFilterItemClick('status', 'critical'),
        count: getDataCount('critical')
      }
    ];
  }, [getPrePaginationRowModel]);

  return (
    <AdvanceTableProvider {...table}>
      <FilterTab tabItems={tabItems} className="mb-4" />
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'text-md mb-0 border-t border-subtle'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger static"
      />
      <AdvanceTableFooter navBtn />
    </AdvanceTableProvider>
  );
};

const AdvanceTableExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Advance Tables"
        description="Sortable, selectable, paginated tables built on TanStack Table and rendered with hb-react's Table."
        link={{
          text: 'TanStack Table documentation',
          url: 'https://tanstack.com/table/v8'
        }}
      >
        <p className="mb-2 text-muted">
          Every data table in this app — leads, orders, products, members,
          reports — is the same four pieces: <code>useAdvanceTable</code> builds
          a TanStack table instance, <code>AdvanceTableProvider</code> puts it
          on context, <code>AdvanceTable</code> renders it through hb-react
          &apos;s <code>Table</code>, and <code>AdvanceTableFooter</code> draws
          the pagination.
        </p>
      </DocPageHeader>

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="How to use" noPreview />
          <PhoenixDocCard.Body>
            <div className="mb-8">
              <p className="mb-2">
                The two building blocks are a hook and a context provider. They
                are always used together: the hook owns the table state, the
                provider hands it to every component below it.
              </p>
              <ul className="mb-4">
                <li className="mb-1">
                  <strong>useAdvanceTable :</strong>{' '}
                  <code>hooks/useAdvanceTable.tsx</code>. Wraps{' '}
                  <code>useReactTable</code> with the core, sorted, filtered and
                  paginated row models already wired up, and returns the table
                  instance. Its own options are:
                  <ul className="mb-2">
                    <li>
                      <code>data</code> / <code>columns</code>: the rows and the
                      TanStack column definitions.
                    </li>
                    <li>
                      <code>selection</code>: prepends the shared bulk-select
                      column (see below).
                    </li>
                    <li>
                      <code>sortable</code>: sets <code>enableSorting</code> for
                      the whole table, which is what makes{' '}
                      <code>AdvanceTable</code> emit the sort markup on each
                      header.
                    </li>
                    <li>
                      <code>pagination</code>: paginate client side.{' '}
                      <code>pageSize</code> sets the rows per page and is
                      ignored without it — with no <code>pagination</code> the
                      page size is the full row count, so the whole data set
                      renders.
                    </li>
                    <li>
                      <code>selectionColumnProps</code>:{' '}
                      <code>{`{ headerClassName, cellClassName }`}</code>,
                      merged onto the defaults of the selection <code>th</code>/
                      <code>td</code>.
                    </li>
                    <li>
                      <code>initialState</code> and any remaining TanStack
                      option (<code>state</code>,{' '}
                      <code>onPaginationChange</code>,{' '}
                      <code>manualPagination</code>, <code>rowCount</code>,{' '}
                      <code>pageCount</code>) are forwarded to{' '}
                      <code>useReactTable</code> untouched.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>AdvanceTableProvider :</strong>{' '}
                  <code>providers/AdvanceTableProvider.tsx</code>. Spread the
                  table instance into it and everything underneath can read it
                  with <code>useAdvanceTableContext()</code> — that is how{' '}
                  <code>AdvanceTable</code>, <code>AdvanceTableFooter</code> and
                  your own toolbars reach the same instance without prop
                  drilling.
                </li>
              </ul>
              <div className="ms-4">
                <p>Here&apos;s how you can use these two together: </p>
                <PhoenixLiveEditor code={advanceTableProviderCode} />
              </div>
            </div>
            <div className="mb-8">
              <h5 className="mb-2">UI Components</h5>
              <p className="mb-2">
                Two components read the context and render the table for you:{' '}
                <code>AdvanceTable</code> and <code>AdvanceTableFooter</code>.
              </p>
              <ul className="mb-4">
                <li className="mb-1">
                  <strong>AdvanceTable :</strong>{' '}
                  <code>components/base/AdvanceTable.tsx</code>. Renders the
                  header, body and optional footer of the context table with
                  hb-react&apos;s <code>Table</code>. Props:
                  <ul className="mb-2">
                    <li>
                      <code>className</code>: extra classes for the scroll
                      wrapper (
                      <code>div.table-list.overflow-x-auto.scrollbar</code>
                      ).
                    </li>
                    <li>
                      <code>headerClassName</code> / <code>bodyClassName</code>:
                      classes for the <code>thead</code> and <code>tbody</code>.
                    </li>
                    <li>
                      <code>rowClassName</code>: classes for every body{' '}
                      <code>tr</code> — this is where{' '}
                      <code>
                        hover-actions-trigger btn-reveal-trigger static
                      </code>{' '}
                      goes when the rows carry a reveal dropdown.
                    </li>
                    <li>
                      <code>tableProps</code>: forwarded to hb-react&apos;s{' '}
                      <code>Table</code>, so <code>size</code>,{' '}
                      <code>striped</code>, <code>bordered</code>,{' '}
                      <code>hover</code> and <code>className</code> all apply.
                    </li>
                    <li>
                      <code>hasFooter</code>: renders a <code>tfoot</code> from
                      the columns&apos; <code>footer</code> definitions.
                    </li>
                  </ul>
                </li>
                <li className="mb-1">
                  <strong>AdvanceTableFooter :</strong>{' '}
                  <code>components/base/AdvanceTableFooter.tsx</code>. The row
                  under the table: the &quot;x to y Items of z&quot; counter, a
                  View all toggle and one of two navigations. Props:
                  <ul>
                    <li>
                      <code>className</code>: classes for the footer{' '}
                      <code>Row</code>.
                    </li>
                    <li>
                      <code>pagination</code>: numbered pages — the gold list.js
                      markup, prev/next <code>button.page-link</code> around a{' '}
                      <code>ul.pagination</code>.
                    </li>
                    <li>
                      <code>navBtn</code>: plain Previous / Next buttons
                      instead.
                    </li>
                    <li>
                      <code>showViewAllBtn</code> (default <code>true</code>)
                      and <code>viewAllBtnClass</code>: the View all / View less
                      toggle, which swaps the page size for the full row count.
                    </li>
                    <li>
                      <code>tableInfo</code>: extra classes for the counter
                      paragraph; <code>nextPageLinkClassName</code>: extra
                      classes for the next-page button.
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="ms-4">
                <p>Here&apos;s how you can use these components: </p>
                <PhoenixLiveEditor code={advanceTableFooterCode} />
              </div>
            </div>
            <div className="mb-8">
              <h5 className="mb-2">Column definition</h5>
              <div>
                For the column definition itself see TanStack Table&apos;s{' '}
                <a
                  href="https://tanstack.com/table/v8/docs/api/core/column-def"
                  target="_blank"
                  rel="noreferrer"
                >
                  official documentation
                </a>
                . On top of the standard properties, <code>AdvanceTable</code>{' '}
                reads three keys from a column&apos;s <code>meta</code> object:
                <ul>
                  <li>
                    <code>headerProps</code>: props spread onto the
                    column&apos;s <code>th</code>. Its <code>className</code> is
                    merged with the sort classes, so this is where the
                    header&apos;s width, alignment and{' '}
                    <code>whitespace-nowrap</code> live.
                  </li>
                  <li>
                    <code>cellProps</code>: props spread onto every{' '}
                    <code>td</code> of the column.
                  </li>
                  <li>
                    <code>footerProps</code>: props spread onto the{' '}
                    <code>tfoot</code> cell, used together with{' '}
                    <code>hasFooter</code>.
                  </li>
                </ul>
                <p className="mb-0">
                  Header labels are written literally in the case they should
                  render — the skin has no <code>text-transform</code>, so a
                  column that reads <code>NAME</code> in the design carries{' '}
                  <code>header: &apos;NAME&apos;</code>.
                </p>
              </div>
            </div>
            <div className="mb-8">
              <h5 className="mb-2">Selection column</h5>
              <p className="mb-2">
                <code>selection: true</code> prepends the one shared bulk-select
                column: an <code>IndeterminateCheckbox</code> (
                <code>div.form-check &gt; input.form-check-input</code>, no
                label) in the header and in every row, with the header box in
                the indeterminate state while only some rows are selected. The
                same column is exported as <code>buildSelectionColumn</code> for
                tables that declare their columns explicitly.
              </p>
              <div className="ms-4 mb-4">
                <PhoenixLiveEditor code={selectionColumnCode} />
              </div>
              <p className="mb-2">
                <strong>Build it at module scope</strong>, alongside the other
                columns, as <code>components/tables/LeadsTable.tsx</code> does.{' '}
                <code>flexRender</code> renders <code>columnDef.cell</code> as a
                component <em>type</em>, so a column rebuilt on every render is
                a new type in the same position and React remounts the cell —
                the checkbox is replaced mid-click and loses focus. For the same
                reason the hook memoizes the column it builds for{' '}
                <code>selection</code>.
              </p>
              <p className="mb-2">
                Pass <code>selectionColumnProps</code> only when a table&apos;s
                own row padding differs; never to restyle the checkbox itself.
              </p>
              <div className="ms-4">
                <PhoenixLiveEditor code={selectionColumnPropsCode} />
              </div>
            </div>
            <div>
              <h5 className="mb-2">Sorting markup</h5>
              <p className="mb-0">
                The sort carets are CSS, not icons. <code>AdvanceTable</code>{' '}
                wraps the table in <code>div.table-list</code> and gives every
                sortable header <code>class=&quot;sort&quot;</code> plus{' '}
                <code>data-sort=&quot;&lt;column id&gt;&quot;</code>, adding{' '}
                <code>asc</code> or <code>desc</code> as the state changes;{' '}
                <code>assets/css/components/list.css</code> draws the caret from{' '}
                <code>.table-list .sort[data-sort]</code>. Keep that wrapper and
                those attributes whenever you render the table markup yourself.
              </p>
            </div>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              <code>selection</code> and <code>sortable</code>, no pagination —
              so the table renders every row. Click a header to sort it.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} hidePreview>
            <Example />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Pagination Example">
            <p className="mb-0">
              <code>pagination</code> with a <code>pageSize</code>, and{' '}
              <code>AdvanceTableFooter pagination</code> for the numbered pages.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={paginationExampleCode} hidePreview>
            <PaginationExample />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Serverside Pagination" noPreview />
          <PhoenixDocCard.Body>
            <p>
              Hold the pagination state in your component and pass these options
              through <code>useAdvanceTable</code> — they are forwarded to
              TanStack Table as-is. The same applies to serverside filtering and
              sorting:{' '}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://tanstack.com/table/latest/docs/guide/pagination#manual-server-side-pagination"
              >
                serverside-pagination
              </a>
              ,{' '}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://tanstack.com/table/latest/docs/framework/react/examples/pagination-controlled"
              >
                pagination-controlled
              </a>
              ,{' '}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://tanstack.com/table/latest/docs/guide/column-filtering#manual-server-side-filtering"
              >
                filtering
              </a>
              ,{' '}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://tanstack.com/table/latest/docs/guide/sorting#manual-server-side-sorting"
              >
                sorting
              </a>
              .
            </p>
            <PhoenixLiveEditor code={serversidePaginationCode} />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Search Example">
            <p className="mb-0">
              The table instance is on context, so a <code>SearchBox</code>{' '}
              above it only has to call <code>table.setGlobalFilter</code> — the
              filtered row model is already enabled.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={searchExampleCode} hidePreview>
            <SearchExample />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Column filter example">
            <p className="mb-0">
              <code>FilterTab</code> drives a single column&apos;s filter value
              with <code>getColumn(id).setFilterValue()</code>, counting the
              matches off <code>getPrePaginationRowModel()</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={filterExampleCode} hidePreview>
            <FilterByColumnExample />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default AdvanceTableExample;
