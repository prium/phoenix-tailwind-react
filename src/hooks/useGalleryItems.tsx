import { useEffect, useMemo, useState } from 'react';

export interface UseGalleryItemsResult<T> {
  filteredItems: T[];
  /** gold `data-filter` value without the dot; `*` is "All" */
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  query: string;
  setQuery: (value: string) => void;
}

/**
 * Filter nav + search-box state for the gallery pages. `category` holds the
 * gold filter class(es) of an item, space separated when it belongs to several.
 */
export function useGalleryItems<T extends { title: string; category: string }>(
  items: T[],
  debounceDelay = 300
): UseGalleryItemsResult<T> {
  const [activeFilter, setActiveFilter] = useState('*');
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, debounceDelay);

    return () => clearTimeout(timeout);
  }, [query, debounceDelay]);

  const filteredItems = useMemo(
    () =>
      items.filter(
        item =>
          (activeFilter === '*' ||
            item.category.split(' ').includes(activeFilter)) &&
          item.title.toLowerCase().includes(debouncedQuery.toLowerCase())
      ),
    [items, activeFilter, debouncedQuery]
  );

  return {
    filteredItems,
    activeFilter,
    setActiveFilter,
    query,
    setQuery
  };
}
