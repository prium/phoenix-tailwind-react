import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from 'components/base/Rating';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import { StoreItem as StoreItemType } from 'data/e-commerce/stores';
import { Link } from 'react-router';
import ActionDropdownItems from './ActionDropdownItems';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const StoreItem = ({ store }: { store: StoreItemType }) => {
  return (
    <RevealDropdownTrigger className="hover-actions-trigger">
      <div className="border border-light flex flex-center rounded-lg mb-4 p-6 h-45">
        <img className="max-w-full" src={store.logo} alt={store.name} />
      </div>
      <h5 className="mb-2">{store.name}</h5>
      <div className="mb-1 text-md">
        <Rating initialValue={store.rating} readonly />
      </div>
      <p className="text-soft text-md mb-2 font-semibold">
        ({store.rated} people rated)
      </p>
      <Link className="btn btn-link p-0" to="#!">
        Visit Store
        <FontAwesomeIcon icon={faChevronRight} className="ms-1 text-sm" />
      </Link>

      <RevealDropdown
        className="hover-actions top-0 end-0 mt-2 me-4"
        btnClassName="leading-none bg-subtle rounded-sm"
      >
        <ActionDropdownItems />
      </RevealDropdown>
    </RevealDropdownTrigger>
  );
};

export default StoreItem;
