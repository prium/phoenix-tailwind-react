import FileNotFound from 'components/modules/gallery/FileNotFound';
import GalleryGridWithTitleItems from 'components/modules/gallery/GalleryGridWithTitleItems';
import GalleryLayout from 'components/modules/gallery/GalleryLayout';
import GalleryTabs from 'components/modules/gallery/GalleryTabs';
import GalleryToolbar from 'components/modules/gallery/GalleryToolbar';
import { galleryTabs, gridItems } from 'data/gallery';
import { useGalleryItems } from 'hooks/useGalleryItems';

const GalleryGridWithTitle = () => {
  const { filteredItems, activeFilter, setActiveFilter, setQuery } =
    useGalleryItems(gridItems);

  return (
    <GalleryLayout
      title="Gallery"
      onSearch={setQuery}
      toolbar={
        <GalleryToolbar
          view="grid-title"
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
        <GalleryGridWithTitleItems gridItems={filteredItems} />
      ) : (
        <div className="flex justify-center items-center">
          <FileNotFound />
        </div>
      )}
    </GalleryLayout>
  );
};

export default GalleryGridWithTitle;
