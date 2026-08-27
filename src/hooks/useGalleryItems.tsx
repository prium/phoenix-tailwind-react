import { useMemo, useState, useEffect } from 'react';

export interface UseGalleryItemsResult<T> {
  filteredItems: T[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  query: string;
  setQuery: (value: string) => void;
}

export function useGalleryItems<
  T extends { title: string; category: string[] }
>(items: T[], debounceDelay = 300): UseGalleryItemsResult<T> {
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, debounceDelay);

    return () => clearTimeout(timeout);
  }, [query, debounceDelay]);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchCategory =
        selectedCategory === '1' || item.category.includes(selectedCategory);

      const matchSearch = item.title
        .toLowerCase()
        .includes(debouncedQuery.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [items, selectedCategory, debouncedQuery]);

  return {
    filteredItems,
    selectedCategory,
    setSelectedCategory,
    query,
    setQuery
  };
}
