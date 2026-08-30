import { Dialog } from '@hummingbirdui/react';
import DropdownSearchBox from 'components/common/DropdownSearchBox';
import SearchResult from 'components/common/SearchResult';

/** `#searchBoxModal` in phoenix-tailwind LayoutContent.pug */
const SearchModal = ({
  open,
  onOpenChange
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <Dialog.Content className="mt-30 rounded-full" aria-describedby={undefined}>
      <Dialog.Title className="sr-only">Search</Dialog.Title>
      <Dialog.Body className="p-0">
        <DropdownSearchBox
          className="navbar-top-search-box"
          inputClassName="rounded-full"
          size="lg"
          style={{ width: 'auto' }}
        >
          <SearchResult />
        </DropdownSearchBox>
      </Dialog.Body>
    </Dialog.Content>
  </Dialog>
);

export default SearchModal;
