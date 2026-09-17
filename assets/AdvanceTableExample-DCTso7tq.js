import{PA as e,R7 as b,Rc as C,Rd as j,Re as v,Rf as y,PB as k,PC as P,PD as l,PE as r,Rg as i,Rh as m,Ri as d,Rj as p,Rk as N,QH as A,Rl as D}from"./index-B2xsAIRn.js";const w=[{name:"Anna",email:"anna@example.com",age:18},{name:"Homer",email:"homer@example.com",age:35},{name:"Oscar",email:"oscar@example.com",age:52},{name:"Emily",email:"emily@example.com",age:30},{name:"Jara",email:"jara@example.com",age:25},{name:"Clark",email:"clark@example.com",age:39},{name:"Jennifer",email:"jennifer@example.com",age:52},{name:"Tony",email:"tony@example.com",age:30},{name:"Tom",email:"tom@example.com",age:25},{name:"Michael",email:"michael@example.com",age:39},{name:"Antony",email:"antony@example.com",age:39},{name:"Raymond",email:"raymond@example.com",age:52},{name:"Marie",email:"marie@example.com",age:30},{name:"Cohen",email:"cohen@example.com",age:25},{name:"Rowen",email:"rowen@example.com",age:39},{name:"John",email:"john@example.com",age:25},{name:"Emily",email:"emily@example.com",age:31},{name:"Alice",email:"alice@example.com",age:42},{name:"David",email:"david@example.com",age:29},{name:"Sullivan Benton",email:"sullivan@example.com",age:23},{name:"Uriah Nunez",email:"uriah@example.com",age:32},{name:"Terry Lynch",email:"terry@example.com",age:45},{name:"Lailah Green",email:"lailah@example.com",age:25},{name:"Phillip Mack",email:"phillip@example.com",age:21},{name:"Whitney Sawyer",email:"whitney@example.com",age:12},{name:"Jaliyah Ritter",email:"jaliyah@example.com",age:12},{name:"Clayton Arnold",email:"clayton@example.com",age:52},{name:"Jett Donovan",email:"jett@example.com",age:31},{name:"Javion Christensen",email:"javion@example.com",age:25},{name:"Brittany Griffin",email:"brittany@example.com",age:41},{name:"Dustin Middleton",email:"dustin@example.com",age:45},{name:"Janessa Mann",email:"janessa@example.com",age:65},{name:"Evangeline Santos",email:"evangeline@example.com",age:32},{name:"Parker Todd",email:"parker@example.com",age:41},{name:"Jaxson Gill",email:"jaxson@example.com",age:33},{name:"Lucille",email:"lucille@example.com",age:34},{name:"Terrell",email:"terrell@example.com",age:35},{name:"Shayna",email:"shayna@example.com",age:36},{name:"Alvaro",email:"alvaro@example.com",age:37},{name:"Clay",email:"clay@example.com",age:37},{name:"Oscar",email:"oscar@example.com",age:37},{name:"Tabitha",email:"tabitha@example.com",age:37},{name:"Jordon",email:"jordon@example.com",age:37}],S=[{id:1,name:"Making the Butterflies shoot each other dead",start:"Dec 12, 2018",task:287,status:{label:"completed",type:"success"}},{id:2,name:"Project Doughnut Dungeon",start:"Jan 9, 2019",task:125,status:{label:"inactive",type:"warning"}},{id:3,name:"The Chewing Gum Attack",start:"Sep 4, 2019",task:72,status:{label:"ongoing",type:"primary"}},{id:4,name:"Execution of Micky the foul mouse",start:"Nov 1, 2019",task:91,status:{label:"critical",type:"danger"}},{id:5,name:"Harnessing stupidity from Jerry",start:"Dec 28, 2019",task:134,status:{label:"ongoing",type:"primary"}},{id:6,name:"Water resistant mosquito killer gun",start:"Feb 24, 2020",task:24,status:{label:"cancelled",type:"secondary"}},{id:7,name:"Olga Dies Dreaming by Xóchitl González",start:"Feb 24, 2020",task:24,status:{label:"cancelled",type:"secondary"}}],h=`
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import RevealDropdown, { RevealDropdownTrigger } from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router';
`,f=`
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
`,F=`
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
`,x=`
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
`,R=`
${h}
${f}
${x}
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
`,B=`
${h}
${F}
${x}
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
`,E=`

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
`,I=`
${h}
import { ChangeEvent } from 'react';
import SearchBox from 'components/common/SearchBox';

${f}
${x}
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
`,z=`
${h}
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
`,M=`
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
`,J=`
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
`,L=`
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
`,H=`
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
`,K=[{name:"Anna",email:"anna@example.com",age:18},{name:"Homer",email:"homer@example.com",age:35},{name:"Oscar",email:"oscar@example.com",age:52},{name:"Emily",email:"emily@example.com",age:30},{name:"Jara",email:"jara@example.com",age:25},{name:"Clark",email:"clark@example.com",age:39}],g=[{accessorKey:"name"},{accessorKey:"email",cell:({row:{original:a}})=>e.jsx(b,{to:`mailto:${a.email}`,children:a.email})},{accessorKey:"age"},{id:"action",cell:()=>e.jsx(j,{children:e.jsx(v,{children:e.jsx(y,{})})}),meta:{headerProps:{style:{width:"7%"}},cellProps:{className:"text-end"}}}],G=()=>{const a=i({data:K,columns:g,selection:!0,sortable:!0});return e.jsx(m,{...a,children:e.jsx(d,{tableProps:{size:"sm",className:"text-md mb-0 border-t border-subtle"},rowClassName:"hover-actions-trigger btn-reveal-trigger static"})})},$=()=>{const a=i({data:w,columns:g,pageSize:6,pagination:!0,selection:!0,sortable:!0});return e.jsxs(m,{...a,children:[e.jsx(d,{tableProps:{size:"sm",className:"text-md mb-0 border-t border-subtle"},rowClassName:"hover-actions-trigger btn-reveal-trigger static"}),e.jsx(p,{pagination:!0})]})},O=()=>{const a=i({data:w,columns:g,pageSize:6,pagination:!0,selection:!0,sortable:!0}),t=n=>{a.setGlobalFilter(n.target.value||void 0)};return e.jsxs(m,{...a,children:[e.jsx(N,{placeholder:"Search...",size:"sm",onChange:t,className:"mx-auto mb-6"}),e.jsx(d,{tableProps:{size:"sm",className:"text-md mb-0 border-t border-subtle"},rowClassName:"hover-actions-trigger btn-reveal-trigger static"}),e.jsx(p,{navBtn:!0})]})},V=[{accessorKey:"name",header:"Project Name",cell:({row:{original:a}})=>{const{name:t}=a;return e.jsx(b,{to:"#!",className:"no-underline font-bold text-base",children:t})},meta:{cellProps:{className:"whitespace-nowrap py-4"}}},{header:"Start date",accessorKey:"start",meta:{cellProps:{className:"ps-3 text-md text-default whitespace-nowrap py-4"},headerProps:{className:"ps-3"}}},{accessorKey:"task",header:"Task",meta:{cellProps:{className:"ps-3 text-default py-4"},headerProps:{className:"ps-3"}}},{id:"status",header:"Status",accessorFn:({status:a})=>a.label,cell:({row:{original:a}})=>{const{status:t}=a;return e.jsx(C,{variant:"phoenix",bg:t.type,children:t.label})},meta:{cellProps:{className:"ps-8 py-4"},headerProps:{className:"ps-8"}}},{id:"action",cell:()=>e.jsx(j,{children:e.jsx(v,{children:e.jsx(y,{})})}),meta:{headerProps:{style:{width:"10%"},className:"text-end"},cellProps:{className:"text-end"}}}],U=()=>{const a=i({data:S,columns:V,pageSize:6,pagination:!0,selection:!0,sortable:!0}),{getColumn:t,getPrePaginationRowModel:n}=a,o=(s,c)=>{t(s)?.setFilterValue(c==="all"?"":c)},T=A.useMemo(()=>{const s=c=>n().rows.filter(({original:{status:u}})=>u.label===c).length;return[{label:"All",value:"all",onClick:()=>o("status","all"),count:n().rows.length},{label:"Ongoing",value:"ongoing",onClick:()=>o("status","ongoing"),count:s("ongoing")},{label:"Cancelled",value:"cancelled",onClick:()=>o("status","cancelled"),count:s("cancelled")},{label:"Completed",value:"completed",onClick:()=>o("status","completed"),count:s("completed")},{label:"Critical",value:"critical",onClick:()=>o("status","critical"),count:s("critical")}]},[n]);return e.jsxs(m,{...a,children:[e.jsx(D,{tabItems:T,className:"mb-4"}),e.jsx(d,{tableProps:{size:"sm",className:"text-md mb-0 border-t border-subtle"},rowClassName:"hover-actions-trigger btn-reveal-trigger static"}),e.jsx(p,{navBtn:!0})]})},_=()=>e.jsxs("div",{children:[e.jsx(k,{title:"Advance Tables",description:"Sortable, selectable, paginated tables built on TanStack Table and rendered with hb-react's Table.",link:{text:"TanStack Table documentation",url:"https://tanstack.com/table/v8"},children:e.jsxs("p",{className:"mb-2 text-muted",children:["Every data table in this app — leads, orders, products, members, reports — is the same four pieces: ",e.jsx("code",{children:"useAdvanceTable"})," builds a TanStack table instance, ",e.jsx("code",{children:"AdvanceTableProvider"})," puts it on context, ",e.jsx("code",{children:"AdvanceTable"})," renders it through hb-react 's ",e.jsx("code",{children:"Table"}),", and ",e.jsx("code",{children:"AdvanceTableFooter"})," draws the pagination."]})}),e.jsxs(P,{children:[e.jsxs(l,{className:"mb-4",children:[e.jsx(l.Header,{title:"How to use",noPreview:!0}),e.jsxs(l.Body,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("p",{className:"mb-2",children:"The two building blocks are a hook and a context provider. They are always used together: the hook owns the table state, the provider hands it to every component below it."}),e.jsxs("ul",{className:"mb-4",children:[e.jsxs("li",{className:"mb-1",children:[e.jsx("strong",{children:"useAdvanceTable :"})," ",e.jsx("code",{children:"hooks/useAdvanceTable.tsx"}),". Wraps"," ",e.jsx("code",{children:"useReactTable"})," with the core, sorted, filtered and paginated row models already wired up, and returns the table instance. Its own options are:",e.jsxs("ul",{className:"mb-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:"data"})," / ",e.jsx("code",{children:"columns"}),": the rows and the TanStack column definitions."]}),e.jsxs("li",{children:[e.jsx("code",{children:"selection"}),": prepends the shared bulk-select column (see below)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"sortable"}),": sets ",e.jsx("code",{children:"enableSorting"})," for the whole table, which is what makes"," ",e.jsx("code",{children:"AdvanceTable"})," emit the sort markup on each header."]}),e.jsxs("li",{children:[e.jsx("code",{children:"pagination"}),": paginate client side."," ",e.jsx("code",{children:"pageSize"})," sets the rows per page and is ignored without it — with no ",e.jsx("code",{children:"pagination"})," the page size is the full row count, so the whole data set renders."]}),e.jsxs("li",{children:[e.jsx("code",{children:"selectionColumnProps"}),":"," ",e.jsx("code",{children:"{ headerClassName, cellClassName }"}),", merged onto the defaults of the selection ",e.jsx("code",{children:"th"}),"/",e.jsx("code",{children:"td"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"initialState"})," and any remaining TanStack option (",e.jsx("code",{children:"state"}),","," ",e.jsx("code",{children:"onPaginationChange"}),","," ",e.jsx("code",{children:"manualPagination"}),", ",e.jsx("code",{children:"rowCount"}),","," ",e.jsx("code",{children:"pageCount"}),") are forwarded to"," ",e.jsx("code",{children:"useReactTable"})," untouched."]})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"AdvanceTableProvider :"})," ",e.jsx("code",{children:"providers/AdvanceTableProvider.tsx"}),". Spread the table instance into it and everything underneath can read it with ",e.jsx("code",{children:"useAdvanceTableContext()"})," — that is how"," ",e.jsx("code",{children:"AdvanceTable"}),", ",e.jsx("code",{children:"AdvanceTableFooter"})," and your own toolbars reach the same instance without prop drilling."]})]}),e.jsxs("div",{className:"ms-4",children:[e.jsx("p",{children:"Here's how you can use these two together: "}),e.jsx(r,{code:M})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h5",{className:"mb-2",children:"UI Components"}),e.jsxs("p",{className:"mb-2",children:["Two components read the context and render the table for you:"," ",e.jsx("code",{children:"AdvanceTable"})," and ",e.jsx("code",{children:"AdvanceTableFooter"}),"."]}),e.jsxs("ul",{className:"mb-4",children:[e.jsxs("li",{className:"mb-1",children:[e.jsx("strong",{children:"AdvanceTable :"})," ",e.jsx("code",{children:"components/base/AdvanceTable.tsx"}),". Renders the header, body and optional footer of the context table with hb-react's ",e.jsx("code",{children:"Table"}),". Props:",e.jsxs("ul",{className:"mb-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:"className"}),": extra classes for the scroll wrapper (",e.jsx("code",{children:"div.table-list.overflow-x-auto.scrollbar"}),")."]}),e.jsxs("li",{children:[e.jsx("code",{children:"headerClassName"})," / ",e.jsx("code",{children:"bodyClassName"}),": classes for the ",e.jsx("code",{children:"thead"})," and ",e.jsx("code",{children:"tbody"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"rowClassName"}),": classes for every body"," ",e.jsx("code",{children:"tr"})," — this is where"," ",e.jsx("code",{children:"hover-actions-trigger btn-reveal-trigger static"})," ","goes when the rows carry a reveal dropdown."]}),e.jsxs("li",{children:[e.jsx("code",{children:"tableProps"}),": forwarded to hb-react's"," ",e.jsx("code",{children:"Table"}),", so ",e.jsx("code",{children:"size"}),","," ",e.jsx("code",{children:"striped"}),", ",e.jsx("code",{children:"bordered"}),","," ",e.jsx("code",{children:"hover"})," and ",e.jsx("code",{children:"className"})," all apply."]}),e.jsxs("li",{children:[e.jsx("code",{children:"hasFooter"}),": renders a ",e.jsx("code",{children:"tfoot"})," from the columns' ",e.jsx("code",{children:"footer"})," definitions."]})]})]}),e.jsxs("li",{className:"mb-1",children:[e.jsx("strong",{children:"AdvanceTableFooter :"})," ",e.jsx("code",{children:"components/base/AdvanceTableFooter.tsx"}),'. The row under the table: the "x to y Items of z" counter, a View all toggle and one of two navigations. Props:',e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"className"}),": classes for the footer"," ",e.jsx("code",{children:"Row"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"pagination"}),": numbered pages — the gold list.js markup, prev/next ",e.jsx("code",{children:"button.page-link"})," around a"," ",e.jsx("code",{children:"ul.pagination"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"navBtn"}),": plain Previous / Next buttons instead."]}),e.jsxs("li",{children:[e.jsx("code",{children:"showViewAllBtn"})," (default ",e.jsx("code",{children:"true"}),") and ",e.jsx("code",{children:"viewAllBtnClass"}),": the View all / View less toggle, which swaps the page size for the full row count."]}),e.jsxs("li",{children:[e.jsx("code",{children:"tableInfo"}),": extra classes for the counter paragraph; ",e.jsx("code",{children:"nextPageLinkClassName"}),": extra classes for the next-page button."]})]})]})]}),e.jsxs("div",{className:"ms-4",children:[e.jsx("p",{children:"Here's how you can use these components: "}),e.jsx(r,{code:J})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h5",{className:"mb-2",children:"Column definition"}),e.jsxs("div",{children:["For the column definition itself see TanStack Table's"," ",e.jsx("a",{href:"https://tanstack.com/table/v8/docs/api/core/column-def",target:"_blank",rel:"noreferrer",children:"official documentation"}),". On top of the standard properties, ",e.jsx("code",{children:"AdvanceTable"})," ","reads three keys from a column's ",e.jsx("code",{children:"meta"})," object:",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"headerProps"}),": props spread onto the column's ",e.jsx("code",{children:"th"}),". Its ",e.jsx("code",{children:"className"})," is merged with the sort classes, so this is where the header's width, alignment and"," ",e.jsx("code",{children:"whitespace-nowrap"})," live."]}),e.jsxs("li",{children:[e.jsx("code",{children:"cellProps"}),": props spread onto every"," ",e.jsx("code",{children:"td"})," of the column."]}),e.jsxs("li",{children:[e.jsx("code",{children:"footerProps"}),": props spread onto the"," ",e.jsx("code",{children:"tfoot"})," cell, used together with"," ",e.jsx("code",{children:"hasFooter"}),"."]})]}),e.jsxs("p",{className:"mb-0",children:["Header labels are written literally in the case they should render — the skin has no ",e.jsx("code",{children:"text-transform"}),", so a column that reads ",e.jsx("code",{children:"NAME"})," in the design carries"," ",e.jsx("code",{children:"header: 'NAME'"}),"."]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h5",{className:"mb-2",children:"Selection column"}),e.jsxs("p",{className:"mb-2",children:[e.jsx("code",{children:"selection: true"})," prepends the one shared bulk-select column: an ",e.jsx("code",{children:"IndeterminateCheckbox"})," (",e.jsx("code",{children:"div.form-check > input.form-check-input"}),", no label) in the header and in every row, with the header box in the indeterminate state while only some rows are selected. The same column is exported as ",e.jsx("code",{children:"buildSelectionColumn"})," for tables that declare their columns explicitly."]}),e.jsx("div",{className:"ms-4 mb-4",children:e.jsx(r,{code:L})}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Build it at module scope"}),", alongside the other columns, as ",e.jsx("code",{children:"components/tables/LeadsTable.tsx"})," does."," ",e.jsx("code",{children:"flexRender"})," renders ",e.jsx("code",{children:"columnDef.cell"})," as a component ",e.jsx("em",{children:"type"}),", so a column rebuilt on every render is a new type in the same position and React remounts the cell — the checkbox is replaced mid-click and loses focus. For the same reason the hook memoizes the column it builds for"," ",e.jsx("code",{children:"selection"}),"."]}),e.jsxs("p",{className:"mb-2",children:["Pass ",e.jsx("code",{children:"selectionColumnProps"})," only when a table's own row padding differs; never to restyle the checkbox itself."]}),e.jsx("div",{className:"ms-4",children:e.jsx(r,{code:H})})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"mb-2",children:"Sorting markup"}),e.jsxs("p",{className:"mb-0",children:["The sort carets are CSS, not icons. ",e.jsx("code",{children:"AdvanceTable"})," ","wraps the table in ",e.jsx("code",{children:"div.table-list"})," and gives every sortable header ",e.jsx("code",{children:'class="sort"'})," plus"," ",e.jsx("code",{children:'data-sort="<column id>"'}),", adding"," ",e.jsx("code",{children:"asc"})," or ",e.jsx("code",{children:"desc"})," as the state changes;"," ",e.jsx("code",{children:"assets/css/components/list.css"})," draws the caret from"," ",e.jsx("code",{children:".table-list .sort[data-sort]"}),". Keep that wrapper and those attributes whenever you render the table markup yourself."]})]})]})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(l.Header,{title:"Example",children:e.jsxs("p",{className:"mb-0",children:[e.jsx("code",{children:"selection"})," and ",e.jsx("code",{children:"sortable"}),", no pagination — so the table renders every row. Click a header to sort it."]})}),e.jsx(l.Body,{code:R,hidePreview:!0,children:e.jsx(G,{})})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(l.Header,{title:"Pagination Example",children:e.jsxs("p",{className:"mb-0",children:[e.jsx("code",{children:"pagination"})," with a ",e.jsx("code",{children:"pageSize"}),", and"," ",e.jsx("code",{children:"AdvanceTableFooter pagination"})," for the numbered pages."]})}),e.jsx(l.Body,{code:B,hidePreview:!0,children:e.jsx($,{})})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(l.Header,{title:"Serverside Pagination",noPreview:!0}),e.jsxs(l.Body,{children:[e.jsxs("p",{children:["Hold the pagination state in your component and pass these options through ",e.jsx("code",{children:"useAdvanceTable"})," — they are forwarded to TanStack Table as-is. The same applies to serverside filtering and sorting:"," ",e.jsx("a",{rel:"noreferrer",target:"_blank",href:"https://tanstack.com/table/latest/docs/guide/pagination#manual-server-side-pagination",children:"serverside-pagination"}),","," ",e.jsx("a",{rel:"noreferrer",target:"_blank",href:"https://tanstack.com/table/latest/docs/framework/react/examples/pagination-controlled",children:"pagination-controlled"}),","," ",e.jsx("a",{rel:"noreferrer",target:"_blank",href:"https://tanstack.com/table/latest/docs/guide/column-filtering#manual-server-side-filtering",children:"filtering"}),","," ",e.jsx("a",{rel:"noreferrer",target:"_blank",href:"https://tanstack.com/table/latest/docs/guide/sorting#manual-server-side-sorting",children:"sorting"}),"."]}),e.jsx(r,{code:E})]})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(l.Header,{title:"Search Example",children:e.jsxs("p",{className:"mb-0",children:["The table instance is on context, so a ",e.jsx("code",{children:"SearchBox"})," ","above it only has to call ",e.jsx("code",{children:"table.setGlobalFilter"})," — the filtered row model is already enabled."]})}),e.jsx(l.Body,{code:I,hidePreview:!0,children:e.jsx(O,{})})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(l.Header,{title:"Column filter example",children:e.jsxs("p",{className:"mb-0",children:[e.jsx("code",{children:"FilterTab"})," drives a single column's filter value with ",e.jsx("code",{children:"getColumn(id).setFilterValue()"}),", counting the matches off ",e.jsx("code",{children:"getPrePaginationRowModel()"}),"."]})}),e.jsx(l.Body,{code:z,hidePreview:!0,children:e.jsx(U,{})})]})]})]});export{_ as default,V as projectListTableColumns};
