import FileNotFound from 'components/modules/gallery/FileNotFound';
import GalleryGridItems from 'components/modules/gallery/GalleryGridItems';
import GalleryLayout from 'components/modules/gallery/GalleryLayout';
import { defaultIsotopeNavItems, gridItems } from 'data/gallery';
import { useGalleryItems } from 'hooks/useGalleryItems';

const GalleryGrid = () => {
  const { filteredItems, setSelectedCategory, setQuery } =
    useGalleryItems(gridItems);


  return (
    <GalleryLayout
      title="Gallery"
      defaultActiveKey="1"
      view="grid-view"
      gridLayouts={true}
      navClassName="gap-md-5 nav-underline"
      navItems={defaultIsotopeNavItems}
      onSelect={key => setSelectedCategory(key ?? '1')}
      onSearch={str => setQuery(str)}
    >
      {filteredItems.length > 0 ? (
        <GalleryGridItems gridItems={filteredItems} />
      ) : (
        <div className="min-vh-50 d-flex justify-content-center align-items-center">
          <FileNotFound />
        </div>
      )}
    </GalleryLayout>
  );
};

export default GalleryGrid;
