import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, cn } from '@hummingbirdui/react';
import { CSSProperties } from 'react';

export interface SearchBoxProps extends Omit<Input.Props, 'size'> {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  formClassName?: string;
  size?: 'sm' | 'lg';
  style?: CSSProperties;
}

/**
 * Phoenix search box. Uses the `search-box` / `search-input` / `search-box-icon`
 * structure from assets/css/components/search-box.css rather than Hummingbird's
 * InputIcon so the markup matches phoenix-tailwind exactly.
 */
const SearchBox = ({
  placeholder = 'Search',
  size,
  className,
  inputClassName,
  formClassName,
  style,
  ...rest
}: SearchBoxProps) => {
  return (
    <div className={cn('search-box', className)} style={style}>
      <form className={cn('relative', formClassName)}>
        <Input
          type="search"
          placeholder={placeholder}
          className={cn('search-input search', inputClassName)}
          size={size}
          {...rest}
        />
        <FontAwesomeIcon icon={faSearch} className="search-box-icon" />
      </form>
    </div>
  );
};

export default SearchBox;
