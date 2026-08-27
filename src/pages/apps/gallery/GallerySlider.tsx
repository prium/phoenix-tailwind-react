import GalleryLayout from 'components/modules/gallery/GalleryLayout';
import { defaultIsotopeNavItems, sliderItems } from 'data/gallery';
import GallerySliderItems from 'components/modules/gallery/GallerySliderItems';
import { useGalleryItems } from 'hooks/useGalleryItems';
import FileNotFound from 'components/modules/gallery/FileNotFound';

const GallerySlider = () => {
  const { filteredItems, setSelectedCategory, setQuery } =
    useGalleryItems(sliderItems);
  return (
    <GalleryLayout
      title="Gallery"
      defaultActiveKey="1"
      view="slider"
      gridLayouts={true}
      navClassName="gap-md-5 nav-underline"
      navItems={defaultIsotopeNavItems}
      onSelect={key => setSelectedCategory(key ?? '1')}
      onSearch={str => setQuery(str)}
    >
      {filteredItems.length > 0 ? (
        <GallerySliderItems galleryItems={filteredItems} />
      ) : (
        <div className="min-vh-50 d-flex justify-content-center align-items-center">
          <FileNotFound />
        </div>
      )}
    </GalleryLayout>
  );
};

export default GallerySlider;
