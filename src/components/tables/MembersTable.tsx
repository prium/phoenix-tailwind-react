import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { Link } from 'react-router';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import Avatar from 'components/base/Avatar';
import { Member } from 'data/members';

/** Columns of `+MembersTable` in phoenix-tailwind mixins/pages/members. */
export const membersTablecolumns: ColumnDef<Member>[] = [
  {
    accessorKey: 'name',
    header: 'CUSTOMER',
    cell: ({ row: { original } }) => {
      const { name, avatar, avatarPlaceholder } = original;
      return (
        <Link
          to="#!"
          className="flex items-center text-default text-hover-1000"
        >
          {avatar ? (
            <Avatar src={avatar} size="m" placeholder={avatarPlaceholder} />
          ) : (
            <Avatar size="m" variant="name">
              {name.charAt(0).toUpperCase()}
            </Avatar>
          )}
          <h6 className="mb-0 ms-4 font-semibold">{name}</h6>
        </Link>
      );
    },
    meta: {
      headerProps: { className: 'w-3/20 min-w-50' },
      cellProps: { className: 'customer whitespace-nowrap' }
    }
  },
  {
    accessorKey: 'email',
    header: 'EMAIL',
    cell: ({ row: { original } }) => (
      <Link to={`mailto:${original.email}`} className="font-semibold">
        {original.email}
      </Link>
    ),
    meta: {
      headerProps: { className: 'w-3/20 min-w-50' },
      cellProps: { className: 'email whitespace-nowrap' }
    }
  },
  {
    accessorKey: 'mobile',
    header: 'MOBILE NUMBER',
    cell: ({ row: { original } }) => (
      <Link to={`tel:${original.mobile}`} className="font-bold text-emphasis">
        {original.mobile}
      </Link>
    ),
    meta: {
      headerProps: { className: 'pe-4 w-1/5 min-w-50' },
      cellProps: { className: 'mobile_number whitespace-nowrap' }
    }
  },
  {
    accessorKey: 'city',
    header: 'CITY',
    meta: {
      headerProps: { className: 'w-1/10' },
      cellProps: { className: 'city whitespace-nowrap text-default' }
    }
  },
  {
    accessorKey: 'lastActive',
    header: 'LAST ACTIVE',
    meta: {
      headerProps: { className: 'text-end w-[21%] min-w-50' },
      cellProps: {
        className: 'last_active text-end whitespace-nowrap text-subtle'
      }
    }
  },
  {
    accessorKey: 'joined',
    header: 'JOINED',
    meta: {
      headerProps: { className: 'text-end pe-0 w-[19%] min-w-50' },
      cellProps: { className: 'joined whitespace-nowrap text-subtle text-end' }
    }
  }
];

const MembersTable = () => {
  return (
    <div>
      <AdvanceTable
        tableProps={{ size: 'sm', className: 'text-md mb-0' }}
        bodyClassName="list"
        rowClassName="hover-actions-trigger btn-reveal-trigger static"
      />
      {/* gold next button is `.page-link.pe-0` */}
      <AdvanceTableFooter pagination nextPageLinkClassName="pe-0" />
    </div>
  );
};

export default MembersTable;
