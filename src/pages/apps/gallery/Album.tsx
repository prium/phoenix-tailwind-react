import { ChangeEvent, useEffect, useState } from 'react';
import { faFileExport, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import AlbumItems from 'components/modules/gallery/AlbumItems';
import { defaultBreadcrumbItems } from 'data/commonData';
import { albumItems } from 'data/gallery';
import FileNotFound from 'components/modules/gallery/FileNotFound';

const Album = () => {
  const [items, setItems] = useState(albumItems);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filtered = albumItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setItems(filtered);
    }, 400);

    return () => clearTimeout(timeout);
  }, [query]);
  return (
    <>
      <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
      <div className="mb-16">
        <h2 className="mb-8">Album</h2>
        <div className="flex justify-between gap-4 flex-wrap">
          <div>
            <Button variant="primary" className="me-6">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add New
            </Button>
            <Button variant="link" className="px-0 me-6 text-default">
              <FontAwesomeIcon icon={faFileExport} className="me-2 text-md" />
              Export
            </Button>
          </div>
          <SearchBox
            placeholder="Search by name"
            onChange={e => setQuery(e.target.value)}
            value={query}
          />
        </div>
        {items.length > 0 ? (
          <AlbumItems albumItems={items} />
        ) : (
          <div className="min-vh-50 flex justify-center items-center mt-6">
            <FileNotFound />
          </div>
        )}
      </div>
    </>
  );
};

export default Album;
