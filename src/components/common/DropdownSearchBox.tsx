import {
  Children,
  CSSProperties,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  useEffect,
  useRef,
  useState
} from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, cn } from '@hummingbirdui/react';

export interface DropdownSearchBoxProps
  extends Omit<Input.Props, 'size' | 'style'> {
  className?: string;
  inputClassName?: string;
  size?: 'sm' | 'lg';
  style?: CSSProperties;
}

/**
 * `+NavSearch` in phoenix-tailwind Mixins.pug: a search input whose result
 * list is a statically positioned `.dropdown-menu` toggled with `.show`.
 */
const DropdownSearchBox = ({
  children,
  className,
  inputClassName,
  size,
  style,
  placeholder = 'Search...',
  ...rest
}: PropsWithChildren<DropdownSearchBoxProps>) => {
  const [open, setOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (
        rootRef.current &&
        !rootRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={cn('search-box navbar-top-search-box', className)}
      style={style}
    >
      <form
        className={cn('relative', { show: open })}
        onSubmit={e => e.preventDefault()}
      >
        <Input
          type="search"
          size={size}
          placeholder={placeholder}
          aria-label="Search"
          className={cn('search-input fuzzy-search rounded-full', inputClassName)}
          value={searchInputValue}
          onFocus={() => setOpen(true)}
          onChange={({ target }) => {
            setSearchInputValue(target.value);
            setOpen(true);
          }}
          {...rest}
        />
        <FontAwesomeIcon icon={faSearch} className="search-box-icon" />
      </form>
      {open && (
        <div
          className="btn-close absolute end-0 top-1/2 -translate-1/2 rtl:translate-x-1/2 cursor-pointer shadow-none"
          onClick={() => {
            setSearchInputValue('');
            setOpen(false);
          }}
        >
          <button type="button" className="btn btn-link p-0" aria-label="Close" />
        </div>
      )}
      {children && (
        <div
          className={cn(
            'dropdown-menu border start-0! py-0 overflow-hidden w-full',
            { show: open }
          )}
        >
          {Children.map(children, child =>
            cloneElement(child as ReactElement<{ searchValue?: string }>, {
              searchValue: searchInputValue
            })
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownSearchBox;
