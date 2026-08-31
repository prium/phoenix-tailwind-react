import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { useEffect, useState } from 'react';
import useWizardForm from 'hooks/useWizardForm';
import WizardForm from 'components/wizard/WizardForm';
import WizardFormProvider from 'providers/WizardFormProvider';
import WizardSideNav from 'components/wizard/WizardSideNav';
import WizardTabPane from 'components/wizard/WizardTabPane';
import RoomDetailsForm from 'components/modules/travel-agency/hotel/add-room/RoomDetailsForm';
import { addRoomWizardNav } from 'data/wizard/wizard';
import RoomWizardFooter from 'components/modules/travel-agency/hotel/add-room/RoomWizardFooter';
import Pricing from 'components/modules/travel-agency/hotel/add-room/Pricing';
import GeneralAmenitiesForm from 'components/modules/travel-agency/hotel/add-proterty/GeneralAmenitiesForm';
import AddPhotos from 'components/modules/travel-agency/hotel/add-proterty/AddPhotos';
import Preview from 'components/modules/travel-agency/hotel/add-room/Preview';
import { urlToFile } from 'helpers/utils';
import { pictures } from 'data/travel-agency/addProperty';
import { addRoomDefaultFormData } from 'data/travel-agency/addRoom';

const AddRoom = () => {
  const [images, setImages] = useState<File[]>([]);

  const form = useWizardForm({
    totalStep: 5
  });

  useEffect(() => {
    const loadImages = async () => {
      const imageFiles = await Promise.all(
        pictures.map(async picUrl => {
          return await urlToFile(picUrl);
        })
      );
      setImages(imageFiles);
    };

    loadImages();
  }, []);

  useEffect(() => {
    form.setFormData({ ...addRoomDefaultFormData, pictures: images });
  }, [images]);

  return (
    <>
      <PageBreadcrumb className="mb-4" items={defaultBreadcrumbItems} />
      <div className="mb-16">
        <h2 className="text-2xl mb-6 xl:mb-8">Add New Room</h2>
        <WizardFormProvider {...form}>
          <div className="theme-wizard">
            <div className="row gx-0 xl:gx-8">
              <div className="xl:col-4 xl:order-1">
                <WizardSideNav navItems={addRoomWizardNav} />
              </div>
              <div className="xl:col-8 flex-1">
                <div className="tab-content">
                  <WizardTabPane step={1}>
                    <div className="row g-0">
                      <div className="2xl:col-8">
                        <WizardForm step={1}>
                          <RoomDetailsForm />
                        </WizardForm>
                      </div>
                    </div>
                  </WizardTabPane>
                  <WizardTabPane step={2}>
                    <div className="row g-0">
                      <div className="2xl:col-8">
                        <WizardForm step={2}>
                          <Pricing />
                        </WizardForm>
                      </div>
                    </div>
                  </WizardTabPane>
                  <WizardTabPane step={3}>
                    <div className="row g-0">
                      <div className="2xl:col-8">
                        <WizardForm step={3}>
                          <GeneralAmenitiesForm title="Amenities" />
                        </WizardForm>
                      </div>
                    </div>
                  </WizardTabPane>
                  <WizardTabPane step={4}>
                    <div className="row g-0">
                      <div className="2xl:col-8">
                        <WizardForm step={4}>
                          <AddPhotos title="Add room picture" images={images} />
                        </WizardForm>
                      </div>
                    </div>
                  </WizardTabPane>
                  <WizardTabPane step={5}>
                    <div className="row g-0">
                      <div className="2xl:col-10">
                        <WizardForm step={5}>
                          <Preview />
                        </WizardForm>
                      </div>
                    </div>
                  </WizardTabPane>
                </div>
                {form.getCanNextPage && <RoomWizardFooter />}
              </div>
            </div>
          </div>
        </WizardFormProvider>
      </div>
    </>
  );
};

export default AddRoom;
