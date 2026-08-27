import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router';
import { getFileIcon } from 'helpers/utils';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Avatar, { Status } from 'components/base/Avatar';
import { SearchResult as SearchResultType, searchItems } from 'data/search';
import Scrollbar from 'components/base/Scrollbar';
import useSearchHook from 'hooks/useSearchHook';
import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';
import { faClockRotateLeft, faLink } from '@fortawesome/free-solid-svg-icons';

const ResultSectionHeader = ({ title }: { title: string }) => {
  return (
    <h6 className="text-highlight text-md border-y border-light py-2 leading-sm mb-0 px-4">
      {title}
    </h6>
  );
};

const searchFields: ColumnDef<SearchResultType>[] = [
  {
    accessorKey: 'label'
  }
];

const SearchResult = ({ searchValue = '' }: { searchValue?: string }) => {
  const results = useSearchHook(searchItems, searchFields, searchValue);

  const recentlySearchedItems = useMemo(
    () => results.filter(item => item.category === 'recently_searched'),
    [results]
  );

  const products = useMemo(
    () => results.filter(item => item.category === 'products'),
    [results]
  );

  const quickLinks = useMemo(
    () => results.filter(item => item.category === 'quick_links'),
    [results]
  );

  const suggestionFiles = useMemo(
    () => results.filter(item => item.category === 'suggestion_files'),
    [results]
  );

  const members = useMemo(
    () => results.filter(item => item.category === 'members'),
    [results]
  );

  const relatedSearchedItems = useMemo(
    () => results.filter(item => item.category === 'related_search'),
    [results]
  );

  return (
    <Scrollbar style={{ maxHeight: '30rem'}}>
      <h6 className="text-highlight text-sm py-2 mb-0 px-4">
        {results.length} <span className="text-soft">Results</span>{' '}
      </h6>
      {recentlySearchedItems.length > 0 && (
        <>
          <ResultSectionHeader title="Recently Searched" />
          <div className="py-2">
            {recentlySearchedItems.map(item => (
              <Dropdown.Item as={Link} to={item.url} key={item.label}>
                <div className="flex items-center font-normal gap-1 text-highlight">
                  <FontAwesomeIcon
                    icon={faClockRotateLeft}
                    transform="shrink-2"
                  />
                  {item.label}
                </div>
              </Dropdown.Item>
            ))}
          </div>
        </>
      )}
      {products.length > 0 && (
        <>
          <ResultSectionHeader title="Products" />
          <div className="py-2">
            {products.map(item => (
              <Dropdown.Item
                as={Link}
                to={item.url}
                key={item.label}
                className="py-2 flex gap-2 items-center"
              >
                <div className="file-thumbnail">
                  <img
                    className="fit-cover rounded-lg"
                    src={item.image}
                    height={28}
                    width={28}
                    alt={item.label}
                  />
                </div>
                <div className="flex-1">
                  <h6 className="mb-0 text-highlight">{item.label}</h6>
                  <p className="text-sm mb-0 flex text-subtle">
                    <span className="font-medium text-subtle text-opacity-85">
                      {item.details}
                    </span>
                  </p>
                </div>
              </Dropdown.Item>
            ))}
          </div>
        </>
      )}
      {quickLinks.length > 0 && (
        <>
          <ResultSectionHeader title="Quick Links" />
          <div className="py-2">
            {quickLinks.map(item => (
              <Dropdown.Item as={Link} to={item.url} key={item.label}>
                <div className="flex items-center font-normal gap-1 text-highlight">
                  <FontAwesomeIcon
                    icon={faLink}
                    transform="shrink-2"
                    className="text-default"
                  />
                  {item.label}
                </div>
              </Dropdown.Item>
            ))}
          </div>
        </>
      )}
      {suggestionFiles.length > 0 && (
        <>
          <ResultSectionHeader title="Files" />
          <div className="py-2">
            {suggestionFiles.map(item => (
              <Dropdown.Item as={Link} to={item.url} key={item.label}>
                <div className="flex items-center font-normal gap-1 text-highlight">
                  <FontAwesomeIcon
                    icon={getFileIcon(item.format || '')}
                    transform="shrink-2"
                    className="text-default"
                  />
                  {item.label}
                </div>
              </Dropdown.Item>
            ))}
          </div>
        </>
      )}
      {members.length > 0 && (
        <>
          <ResultSectionHeader title="Members" />
          <div className="py-2">
            {members.map(item => (
              <Dropdown.Item as={Link} to={item.url} key={item.label}>
                <div className="flex items-center font-normal text-highlight">
                  <Avatar
                    src={item.avatar}
                    size="l"
                    status={item.status as Status}
                    className="me-2"
                  />
                  <div className="flex-1">
                    <h6 className="mb-0 text-highlight title">
                      {item.label}
                    </h6>
                    <p className="text-sm mb-0 flex text-subtle">
                      {item.details}
                    </p>
                  </div>
                </div>
              </Dropdown.Item>
            ))}
          </div>
        </>
      )}
      {relatedSearchedItems.length > 0 && (
        <>
          <ResultSectionHeader title="Related Searches" />
          <div className="py-2">
            {relatedSearchedItems.map(item => (
              <Dropdown.Item as={Link} to={item.url} key={item.label}>
                <div className="flex items-center font-normal gap-1 text-highlight">
                  <FontAwesomeIcon
                    icon={item.icon as IconProp}
                    transform="shrink-2"
                    className="text-default"
                  />
                  {item.label}
                </div>
              </Dropdown.Item>
            ))}
          </div>
        </>
      )}
    </Scrollbar>
  );
};

export default SearchResult;
