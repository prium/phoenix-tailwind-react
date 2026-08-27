import FileNotFound from 'components/modules/gallery/FileNotFound';
import GalleryColumnItems from 'components/modules/gallery/GalleryColumnItems';
import GalleryLayout from 'components/modules/gallery/GalleryLayout';
import { defaultIsotopeNavItems, columnItems } from 'data/gallery';
import { useGalleryItems } from 'hooks/useGalleryItems';

const GalleryColumn = () => {
  const { filteredItems, setSelectedCategory, setQuery } =
    useGalleryItems(columnItems);

  return (
    <GalleryLayout
      title="Gallery"
      defaultActiveKey="1"
      view="column"
      gridLayouts={true}
      navClassName="gap-md-5 nav-underline"
      navItems={defaultIsotopeNavItems}
      onSelect={key => setSelectedCategory(key ?? '1')}
      onSearch={str => setQuery(str)}
    >
      {filteredItems.length > 0 ? (
        <GalleryColumnItems columnItems={filteredItems} />
      ) : (
        <div className="min-vh-50 d-flex justify-content-center align-items-center">
          <FileNotFound />
        </div>
      )}
    </GalleryLayout>
  );
};

export default GalleryColumn;
