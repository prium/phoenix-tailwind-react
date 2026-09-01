import FileNotFound from 'components/modules/gallery/FileNotFound';
import GalleryLayout from 'components/modules/gallery/GalleryLayout';
import GalleryMasonryItems from 'components/modules/gallery/GalleryMasonryItems';
import GalleryTabs from 'components/modules/gallery/GalleryTabs';
import GalleryToolbar from 'components/modules/gallery/GalleryToolbar';
import { galleryTabs, masonryItems } from 'data/gallery';
import { useGalleryItems } from 'hooks/useGalleryItems';

const GalleryMasonry = () => {
  const { filteredItems, activeFilter, setActiveFilter, setQuery } =
    useGalleryItems(masonryItems);

  return (
    <GalleryLayout
      title="Gallery"
      onSearch={setQuery}
      toolbar={
        <GalleryToolbar
          view="masonry"
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
        <GalleryMasonryItems galleryItems={filteredItems} />
      ) : (
        <div className="flex justify-center items-center">
          <FileNotFound />
        </div>
      )}
    </GalleryLayout>
  );
};

export default GalleryMasonry;
