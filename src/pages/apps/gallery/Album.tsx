import AlbumItems from 'components/modules/gallery/AlbumItems';
import FileNotFound from 'components/modules/gallery/FileNotFound';
import GalleryLayout from 'components/modules/gallery/GalleryLayout';
import GalleryTabs from 'components/modules/gallery/GalleryTabs';
import { albumItems, albumTabs } from 'data/gallery';
import { useGalleryItems } from 'hooks/useGalleryItems';

const Album = () => {
  const { filteredItems, activeFilter, setActiveFilter, setQuery } =
    useGalleryItems(albumItems);

  return (
    <GalleryLayout title="Album" onSearch={setQuery}>
      <GalleryTabs
        tabs={albumTabs}
        activeFilter={activeFilter}
        onSelect={setActiveFilter}
        scrollable={false}
        className="my-6 gap-0 w-max"
        linkClassName={(_tab, index) =>
          index === 0 ? 'pe-4 cursor-pointer text-start' : 'px-4 cursor-pointer'
        }
      />
      {filteredItems.length > 0 ? (
        <AlbumItems albumItems={filteredItems} />
      ) : (
        <div className="flex justify-center items-center mt-6">
          <FileNotFound />
        </div>
      )}
    </GalleryLayout>
  );
};

export default Album;
