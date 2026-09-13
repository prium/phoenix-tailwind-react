import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, FloatingLabel, Row, Textarea } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import AddressInformation from 'components/forms/AddressInformation';
import LeadInformationForm from 'components/forms/LeadInformationForm';
import { defaultBreadcrumbItems } from 'data/commonData';
import avatar from 'assets/img/team/150x150/58.webp';
import { ChangeEvent, useState } from 'react';

const AddContact = () => {
  const [image, setImage] = useState<File | null>(null);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="border-b border-subtle mb-12 -mx-4 px-4 lg:-mx-10 lg:px-10">
        <Row>
          <Col xl={9}>
            <div className="sm:flex justify-between">
              <h2 className="mb-6">Create a new lead</h2>
              <div className="flex mb-4">
                <Button variant="phoenix-primary" className="me-2 px-10">
                  Cancel
                </Button>
                <Button variant="primary">Create lead</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col xl={9}>
          <div className="flex items-end relative mb-12">
            <input
              id="upload-avatar"
              className="hidden"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <div className="hoverbox size-37.5">
              <div className="hoverbox-content rounded-full flex flex-center z-1">
                <FontAwesomeIcon
                  icon={faCamera}
                  className="text-6xl text-soft"
                />
              </div>
              <div className="relative bg-emphasis size-full rounded-full cursor-pointer flex flex-center 2xl:mb-12">
                <div className="avatar size-37.5">
                  <img
                    className="rounded-full"
                    src={image ? URL.createObjectURL(image) : avatar}
                    alt=""
                  />
                </div>
                <label
                  className="size-full absolute z-1"
                  htmlFor="upload-avatar"
                />
              </div>
            </div>
          </div>

          <h4 className="mb-4">Lead Information</h4>
          <form className="row g-4 mb-16">
            <LeadInformationForm />
            <AddressInformation />
            <h4 className="mt-10">Description</h4>
            <Col xs={12}>
              <FloatingLabel
                htmlFor="floatingProjectOverview"
                label="Lead description"
              >
                <Textarea
                  id="floatingProjectOverview"
                  className="h-32!"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} className="flex justify-end mt-10">
              <Button variant="primary">Create lead</Button>
            </Col>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default AddContact;
