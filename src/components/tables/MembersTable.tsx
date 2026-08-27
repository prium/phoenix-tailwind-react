import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { Link } from 'react-router';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import Avatar from 'components/base/Avatar';
import { Member } from 'data/members';

export const membersTablecolumns: ColumnDef<Member>[] = [
  {
    accessorKey: 'name',
    header: 'Member',
    cell: ({ row: { original } }) => {
      const { name, avatar } = original;
      return (
        <Link to="#!" className=" flex items-center text-default">
          <Avatar src={avatar} size="m" />
          <p className="mb-0 ms-4 text-emphasis font-semibold">{name}</p>
        </Link>
      );
    },
    meta: {
      headerProps: {
        style: { width: '15%', minWidth: '200px' },
        className: 'px-1'
      },
      cellProps: { className: 'align-middle whitespace-nowrap py-2' }
    }
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row: { original } }) => {
      const { email } = original;
      return (
        <Link to={`mailto:${email}`} className="font-semibold">
          {email}
        </Link>
      );
    },
    meta: {
      headerProps: {
        style: { width: '15%', minWidth: '200px' }
      },
      cellProps: { className: 'whitespace-nowrap' }
    }
  },
  {
    accessorKey: 'mobile',
    header: 'Mobile Number',
    cell: ({ row: { original } }) => {
      const { mobile } = original;
      return (
        <Link to={`tel:${mobile}`} className="font-bold text-emphasis">
          {mobile}
        </Link>
      );
    },
    meta: {
      headerProps: {
        style: { width: '20%', minWidth: '200px' },
        className: 'pe-3'
      }
    }
  },
  {
    accessorKey: 'city',
    header: 'City',
    meta: {
      headerProps: { style: { width: '10%' } },
      cellProps: { className: 'text-default' }
    }
  },
  {
    accessorKey: 'lastActive',
    header: 'Last Active',
    meta: {
      headerProps: {
        style: { width: '21%', minWidth: '200px' },
        className: 'text-end'
      },
      cellProps: {
        className: 'text-end text-subtle'
      }
    }
  },
  {
    accessorKey: 'joined',
    header: 'Joined',
    meta: {
      headerProps: {
        style: { width: '19%', minWidth: '200px' },
        className: 'text-end pe-0'
      },
      cellProps: {
        className: 'text-subtle text-end'
      }
    }
  }
];

const MembersTable = () => {
  return (
    <div>
      <AdvanceTable tableProps={{ className: ' text-md' }} />
      <AdvanceTableFooter pagination />
    </div>
  );
};

export default MembersTable;
