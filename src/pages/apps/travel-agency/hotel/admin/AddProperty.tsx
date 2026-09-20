import WizardForm from 'components/wizard/WizardForm';
import useWizardForm from 'hooks/useWizardForm';
import WizardFormProvider from 'providers/WizardFormProvider';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import LocationForm from 'components/modules/travel-agency/hotel/add-proterty/LocationForm';
import GeneralAmenitiesForm from 'components/modules/travel-agency/hotel/add-proterty/GeneralAmenitiesForm';
import AddPhotos from 'components/modules/travel-agency/hotel/add-proterty/AddPhotos';
import FinanceForm from 'components/modules/travel-agency/hotel/add-proterty/FinanceForm';
import Preview from 'components/modules/travel-agency/hotel/add-proterty/Preview';
import { addPropertyWizardNav } from 'data/wizard/wizard';
import WizardSideNav from 'components/wizard/WizardSideNav';
import WizardTabPane from 'components/wizard/WizardTabPane';
import { useEffect, useState } from 'react';
import { urlToFile } from 'helpers/utils';
import {
  addPropertyDefaultFormData,
  pictures
} from 'data/travel-agency/addProperty';
import PoliciesForm from 'components/modules/travel-agency/hotel/add-proterty/PoliciesForm';
import BasicInformationForm from 'components/modules/travel-agency/hotel/add-proterty/BasicInformationForm';

const AddProperty = () => {
  const [images, setImages] = useState<File[]>([]);
  const form = useWizardForm({
    totalStep: 7
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
    form.setFormData({ ...addPropertyDefaultFormData, photos: images });
  }, [images]);

  return (
    <>
      <PageBreadcrumb className="mb-4" items={defaultBreadcrumbItems} />
      <div className="mb-16">
        <h2 className="text-2xl mb-6 xl:mb-8">Add New Property</h2>
        <WizardFormProvider {...form}>
          <div className="theme-wizard">
            <div className="row gx-0 xl:gx-8">
              <div className="xl:col-4 xl:order-1">
                <WizardSideNav navItems={addPropertyWizardNav} />
              </div>
              <div className="xl:col-8 flex-1">
                <div className="row">
                  <div className="2xl:col-8">
                    <div className="tab-content">
                      <WizardTabPane step={1}>
                        <WizardForm step={1}>
                          <BasicInformationForm />
                        </WizardForm>
                      </WizardTabPane>
                      <WizardTabPane step={2}>
                        <WizardForm step={2}>
                          <LocationForm />
                        </WizardForm>
                      </WizardTabPane>
                      <WizardTabPane step={3}>
                        <WizardForm step={3}>
                          <GeneralAmenitiesForm />
                        </WizardForm>
                      </WizardTabPane>
                      <WizardTabPane step={4}>
                        <WizardForm step={4}>
                          <AddPhotos
                            title="Add property picture"
                            className="mb-14"
                            images={images}
                          />
                        </WizardForm>
                      </WizardTabPane>
                      <WizardTabPane step={5}>
                        <WizardForm step={5}>
                          <FinanceForm />
                        </WizardForm>
                      </WizardTabPane>
                      <WizardTabPane step={6}>
                        <WizardForm step={6}>
                          <PoliciesForm />
                        </WizardForm>
                      </WizardTabPane>
                      <WizardTabPane step={7}>
                        <WizardForm step={7}>
                          <Preview />
                        </WizardForm>
                      </WizardTabPane>
                    </div>
                    {form.getCanNextPage && (
                      <div className="mt-10">
                        <div className="hidden" />
                        <Button
                          type="submit"
                          variant="primary"
                          className="px-10 sm:px-20"
                          onClick={() => form.goToStep(form.selectedStep + 1)}
                        >
                          Next
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WizardFormProvider>
      </div>
    </>
  );
};

export default AddProperty;
