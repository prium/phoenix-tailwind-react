import { useState } from 'react';
import { Row } from '@hummingbirdui/react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBanSmoking,
  faBath,
  faBed,
  faBorderAll,
  faChildren,
  faFilePen,
  faPeopleRoof,
  faPersonBooth,
  faPersonShelter,
  faPersonSwimming,
  faSnowflake,
  faSquareParking,
  faTableTennisPaddleBall,
  faTv,
  faUmbrellaBeach,
  faUser,
  faUtensils,
  faWifi,
  faWineGlass
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import Button from 'components/base/Button';
import SummaryTable from './SummaryTable';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { AddRoomWizardFormData } from 'data/travel-agency/addRoom';

export interface RoomInfo {
  property: string;
  value: string | number;
  icon: IconDefinition;
}

const pad = (value: string | number | undefined, fallback: number) => {
  const num = Number(value ?? fallback);
  return Number.isNaN(num) ? String(value) : String(num).padStart(2, '0');
};

/** gold `+Preview` (mixins/travel-agency/add-room/Preview.pug) */
const Preview = () => {
  const methods = useWizardFormContext<AddRoomWizardFormData>();
  const { formData } = methods;
  const [show, setShow] = useState(true);

  const roomInformation: RoomInfo[] = [
    {
      property: 'Room type',
      value: formData?.roomType || 'Presidential suite',
      icon: faBorderAll
    },
    {
      property: 'Room name',
      value: formData?.roomName || 'Kempinski Jakarta',
      icon: faFilePen
    },
    {
      property: 'Bedroom’s',
      value: pad(formData?.bedRooms, 1),
      icon: faFilePen
    },
    {
      property: 'Number of beds',
      value: pad(formData?.noOfBed, 1),
      icon: faBed
    },
    {
      property: 'Room size',
      value: formData?.roomSize || '2.13 x 3.66 sq.m',
      icon: faPersonShelter
    },
    {
      property: 'Adults',
      value: pad(formData?.adults, 2),
      icon: faUser
    },
    {
      property: 'Childs',
      value: pad(formData?.childs, 1),
      icon: faChildren
    },
    {
      property: 'Bathroom’s',
      value: pad(formData?.BathRooms, 2),
      icon: faBath
    },
    {
      property: 'Balcony',
      value: pad(formData?.Balcony, 1),
      icon: faPersonBooth
    }
  ];
  const amenities: RoomInfo[] = [
    {
      property: 'Wifi',
      value: formData?.wifi ? 'Free' : 'Paid',
      icon: faWifi
    },
    {
      property: 'Restaurant',
      value: formData?.restrurent ? 'Launch & Dinner' : 'Not available',
      icon: faUtensils
    },
    {
      property: 'Pool',
      value: formData?.pool ? 'Paid' : 'Free',
      icon: faPersonSwimming
    },
    {
      property: 'No smoking',
      value: formData?.noSmoking ? 'Available' : 'Not available',
      icon: faBanSmoking
    },
    {
      property: 'Parking',
      value: formData?.parking ? 'Paid' : 'Free',
      icon: faSquareParking
    },
    {
      property: 'Beach view',
      value: formData?.beachView ? 'Available' : 'Not available',
      icon: faUmbrellaBeach
    },
    {
      property: 'Balcony',
      value: formData?.balcony ? 'Sea View' : 'Not available',
      icon: faPersonBooth
    },
    {
      property: 'Hotel bar',
      value: formData?.hotelBar ? 'Paid' : 'Free',
      icon: faWineGlass
    },
    {
      property: 'Common areas',
      value: formData?.commonAreas ? 'Available' : 'Not available',
      icon: faPeopleRoof
    },
    {
      property: 'Tennis courts',
      value: formData?.tennisCourts ? 'Free' : 'Paid',
      icon: faTableTennisPaddleBall
    },
    {
      property: 'Air conditioning',
      value: formData?.airconditioning ? 'Available' : 'Not available',
      icon: faSnowflake
    },
    {
      property: 'Bathtub',
      value: formData?.bathtub ? 'Available' : 'Not available',
      icon: faBath
    },
    {
      property: 'Flat-screen TV',
      value: formData?.flatScreenTv ? 'Paid' : 'Free',
      icon: faTv
    }
  ];

  return (
    <>
      <h3 className="mb-2">We’re building your listing</h3>
      <p className="mb-8 text-subtle">
        We're working on getting your property set up and ready for guests. Stay
        tuned for updates and start accepting bookings soon!
      </p>
      {show && (
        <div
          className="alert alert-subtle-success alert-dismissible items-start fade show mb-8"
          role="alert"
        >
          <p className="mb-0 flex-1 font-semibold text-md sm:text-base">
            Congratulations on your successful listing! Join a community of
            hospitality professionals as a host. Your hard work will turn your
            home into a sought-after destination. We anticipate hearing about
            your achievements.
          </p>
          <button
            className="btn-close bg-size-[1rem] mt-0.5 -me-1"
            type="button"
            aria-label="Close"
            onClick={() => setShow(false)}
          />
        </div>
      )}
      <h4 className="text-default mb-4">
        Room information
        <Link to="#!" className="text-md mx-2">
          Edit
        </Link>
      </h4>
      <Row className="gx-12 xl:gx-6 2xl:gx-12">
        <div className="md:col-7 2xl:col-6">
          <SummaryTable items={roomInformation.slice(0, 5)} />
        </div>
        <div className="md:col-5 2xl:col-6">
          <SummaryTable items={roomInformation.slice(5)} />
        </div>
      </Row>
      <h4 className="text-default mb-6 mt-8">
        Pricing
        <Link to="#!" className="text-md mx-2">
          Edit
        </Link>
      </h4>
      <h6 className="mb-2">Across all days</h6>
      <h3 className="mb-0">${formData?.pricing || 894}</h3>
      <h4 className="text-default mb-4 mt-12">
        Amenities
        <Link to="#!" className="text-md mx-2">
          Edit
        </Link>
      </h4>
      <Row className="gx-12 xl:gx-6 2xl:gx-12">
        <div className="md:col-7 2xl:col-6">
          <SummaryTable items={amenities.slice(0, 7)} />
        </div>
        <div className="md:col-5 2xl:col-6">
          <SummaryTable items={amenities.slice(7)} />
        </div>
      </Row>
      <h4 className="text-default mb-6 mt-12">
        Picture
        <Link to="#!" className="text-md mx-2">
          Edit
        </Link>
      </h4>
      <Row className="g-4">
        {formData?.pictures?.map((item, index) => (
          <div className="sm:col-4" key={index}>
            <img
              src={URL.createObjectURL(item)}
              alt=""
              className="rounded-md h-40 w-full object-cover"
            />
          </div>
        ))}
      </Row>
      <div className="mt-10 flex flex-wrap gap-2">
        <Button variant="phoenix-danger">Discard</Button>
        <Button variant="phoenix-primary">Save draft</Button>
        <Button type="submit" variant="primary" className="px-10 sm:px-20">
          Open for Booking
        </Button>
      </div>
    </>
  );
};

export default Preview;
