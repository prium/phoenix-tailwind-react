import PageBreadcrumb from 'components/common/PageBreadcrumb';
import RoomListingTable from 'components/tables/RoomListingTable';
import { defaultBreadcrumbItems } from 'data/commonData';

const RoomListing = () => {
  return (
    <>
      <PageBreadcrumb className="mb-4" items={defaultBreadcrumbItems} />
      <div className="mb-12">
        <h2>Room Listing</h2>
        <RoomListingTable />
      </div>
    </>
  );
};

export default RoomListing;
