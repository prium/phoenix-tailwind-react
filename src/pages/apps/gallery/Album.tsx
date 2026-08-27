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
      <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-3" />
      <div className="mb-9">
        <h2 className="mb-5">Album</h2>
        <div className="d-flex justify-content-between gap-3 flex-wrap">
          <div>
            <Button variant="primary" className="me-4">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add New
            </Button>
            <Button variant="link" className="px-0 me-4 text-body">
              <FontAwesomeIcon icon={faFileExport} className="me-2 fs-9" />
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
          <div className="min-vh-50 d-flex justify-content-center align-items-center mt-4">
            <FileNotFound />
          </div>
        )}
      </div>
    </>
  );
};

export default Album;
