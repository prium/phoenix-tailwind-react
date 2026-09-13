import { cn } from '@hummingbirdui/react';
import Dropzone from 'components/base/Dropzone';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { AddPropertyWizardFormData } from 'data/travel-agency/addProperty';
import { useEffect, useState } from 'react';

/** gold `+AddPhotos` (mixins/travel-agency/add-property/AddPhotos.pug) */
const AddPhotos = ({
  title,
  images,
  className
}: {
  title: string;
  images: File[];
  className?: string;
}) => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { formData, setFormData } = methods;
  const [photos, setPhotos] = useState(images);

  useEffect(() => {
    setFormData({
      ...formData,
      photos: photos
    });
  }, [photos]);

  return (
    <>
      <h3 className="mb-10">{title}</h3>

      <Dropzone
        accept={{
          'image/*': ['.png', '.gif', '.jpeg', '.jpg']
        }}
        defaultFiles={photos.length ? photos : images}
        setPhotos={setPhotos}
        className={cn('p-0 mb-12', className)}
        onDrop={(acceptedFiles: File[]) => {
          setFormData({
            ...formData,
            photos: acceptedFiles
          });
        }}
      />
    </>
  );
};

export default AddPhotos;
