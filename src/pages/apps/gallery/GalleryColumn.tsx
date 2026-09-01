import FileNotFound from 'components/modules/gallery/FileNotFound';
import GalleryColumnItems from 'components/modules/gallery/GalleryColumnItems';
import GalleryLayout from 'components/modules/gallery/GalleryLayout';
import GalleryTabs from 'components/modules/gallery/GalleryTabs';
import GalleryToolbar from 'components/modules/gallery/GalleryToolbar';
import { columnItems, galleryTabs } from 'data/gallery';
import { useGalleryItems } from 'hooks/useGalleryItems';

const GalleryColumn = () => {
  const { filteredItems, activeFilter, setActiveFilter, setQuery } =
    useGalleryItems(columnItems);

  return (
    <GalleryLayout
      title="Gallery"
      onSearch={setQuery}
      toolbar={
        <GalleryToolbar
          view="column"
          tabs={
            <GalleryTabs
              tabs={galleryTabs}
              activeFilter={activeFilter}
              onSelect={setActiveFilter}
              className="md:gap-8 min-w-100"
            />
          }
        />
      }
    >
      {filteredItems.length > 0 ? (
        <GalleryColumnItems columnItems={filteredItems} />
      ) : (
        <div className="flex justify-center items-center">
          <FileNotFound />
        </div>
      )}
    </GalleryLayout>
  );
};

export default GalleryColumn;
