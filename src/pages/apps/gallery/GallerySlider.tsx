import FileNotFound from 'components/modules/gallery/FileNotFound';
import GalleryLayout from 'components/modules/gallery/GalleryLayout';
import GallerySliderItems from 'components/modules/gallery/GallerySliderItems';
import GalleryTabs from 'components/modules/gallery/GalleryTabs';
import GalleryToolbar from 'components/modules/gallery/GalleryToolbar';
import { galleryTabs, sliderItems } from 'data/gallery';
import { useGalleryItems } from 'hooks/useGalleryItems';

const GallerySlider = () => {
  const { filteredItems, activeFilter, setActiveFilter, setQuery } =
    useGalleryItems(sliderItems);
  const category = activeFilter === '*' ? 'all' : activeFilter;

  return (
    <GalleryLayout
      title="Gallery"
      onSearch={setQuery}
      toolbar={
        <GalleryToolbar
          view="slider"
          tabs={
            <GalleryTabs
              id="gallery-slider-tab"
              tabs={galleryTabs}
              activeFilter={activeFilter}
              onSelect={setActiveFilter}
              className="gap-4 md:gap-8 min-w-96.25"
            />
          }
        />
      }
    >
      <div className="tab-content" id="gallery-slider-tab-content">
        <div
          className="tab-pane fade show active"
          id={`${category}-tab-pane`}
          role="tabpanel"
          tabIndex={0}
        >
          {filteredItems.length > 0 ? (
            <GallerySliderItems
              key={category}
              galleryItems={filteredItems}
              category={category}
            />
          ) : (
            <div className="flex justify-center items-center">
              <FileNotFound />
            </div>
          )}
        </div>
      </div>
    </GalleryLayout>
  );
};

export default GallerySlider;
