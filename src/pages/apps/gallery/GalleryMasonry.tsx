import GalleryLayout from 'components/modules/gallery/GalleryLayout';
import { defaultIsotopeNavItems, masonryItems } from 'data/gallery';
import GalleryMasonryItems from 'components/modules/gallery/GalleryMasonryItems';
import { useGalleryItems } from 'hooks/useGalleryItems';
import FileNotFound from 'components/modules/gallery/FileNotFound';

const GalleryMasonry = () => {
  const { filteredItems, setSelectedCategory, setQuery } =
    useGalleryItems(masonryItems);

  return (
    <GalleryLayout
      title="Gallery"
      defaultActiveKey="1"
      view="masonry"
      gridLayouts={true}
      navClassName="gap-md-5 nav-underline"
      navItems={defaultIsotopeNavItems}
      onSelect={key => setSelectedCategory(key ?? '1')}
      onSearch={str => setQuery(str)}
    >
      {filteredItems.length > 0 ? (
        <GalleryMasonryItems galleryItems={filteredItems} />
      ) : (
        <div className="min-vh-50 d-flex justify-content-center align-items-center">
          <FileNotFound />
        </div>
      )}
    </GalleryLayout>
  );
};

export default GalleryMasonry;
