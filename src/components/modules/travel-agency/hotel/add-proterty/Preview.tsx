import { PropsWithChildren, useState } from 'react';
import { Accordion, cn, Row } from '@hummingbirdui/react';
import info from 'assets/img/icons/info.svg';
import infoDark from 'assets/img/icons/info_dark.svg';
import locationImg from 'assets/img/icons/location.svg';
import locationDark from 'assets/img/icons/location_dark.svg';
import bedDouble from 'assets/img/icons/bed-double.svg';
import bedDoubleDark from 'assets/img/icons/bed-double_dark.svg';
import picture from 'assets/img/icons/picture.svg';
import pictureDark from 'assets/img/icons/picture_dark.svg';
import dollarAlt from 'assets/img/icons/dollar-alt.svg';
import dollarAltDark from 'assets/img/icons/dollar-alt_dark.svg';
import fileCheckAlt from 'assets/img/icons/file-check-alt.svg';
import fileCheckAltDark from 'assets/img/icons/file-check-alt_dark.svg';
import { Link } from 'react-router';
import Button from 'components/base/Button';
import {
  AccordionItemInterface,
  AddPropertyWizardFormData,
  PropertyDetails,
  PropertyDetailsWithTitle
} from 'data/travel-agency/addProperty';
import SummaryTable from './SummaryTable';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { formatDateToTime } from 'helpers/utils';

const AccordionItem = ({
  img1,
  img2,
  title,
  eventKey,
  editLabel,
  children
}: PropsWithChildren<AccordionItemInterface & { editLabel: string }>) => {
  return (
    <Accordion.Item
      value={eventKey}
      className="border rounded-lg bg-soft p-4 sm:p-6 mb-8"
    >
      <Accordion.Header className="text-xl">
        <Accordion.Trigger className="py-0 text-highlight after:size-5 after:bg-cover">
          <img src={img1} alt="" className="me-2 dark:hidden" />
          <img src={img2} alt="" className="me-2 hidden dark:block" />
          <span className="sm:text-lg">{title}</span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="p-0">
        <div className="mt-6 scrollbar">
          <Link to="#!" className="text-md font-semibold mb-2.5 inline-block">
            {editLabel}
          </Link>
          {children}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

/** gold `+Preview` (mixins/travel-agency/add-property/Preview.pug) */
const Preview = () => {
  const [show, setShow] = useState(true);
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { formData } = methods;

  const basicInfo: PropertyDetails[] = [
    {
      property: 'Property name',
      value: 'Phoenix Oasis'
    },
    {
      property: 'Property Information',
      value: formData.propertyInfo
    },
    {
      property: 'Property type',
      value: formData.propertyType
    },
    {
      property: 'Rating',
      value: `${formData.propertyRating ?? 5} Star`
    },
    {
      property: 'Email address',
      value: formData.contactEmail
    },
    {
      property: 'Mobile number',
      value: formData.contactNumber
    },
    {
      property: 'Property chain',
      value: 'Not-available'
    },
    {
      property: 'CMS',
      value: formData.channelManagement ? 'Available' : 'Not-available'
    },
    {
      property: 'CMS provider name',
      value: formData.channelManagement
    }
  ];

  const location: PropertyDetails[] = [
    {
      property: 'Apartment / Street',
      value: formData.apartment
    },
    {
      property: 'State',
      value: formData.state
    },
    {
      property: 'Country / Region',
      value: formData.country
    },
    {
      property: 'City',
      value: formData.city
    },
    {
      property: 'Zip code',
      value: formData.zipCode
    }
  ];

  const amenities: PropertyDetails[] = [
    {
      property: 'Wifi',
      value: formData.wifi ? 'Available' : 'Not-available'
    },
    {
      property: 'Hotel Bar',
      value: formData.hotelBar ? 'Available' : 'Not-available'
    },
    {
      property: 'Restaurant',
      value: formData.restaurant ? 'Available' : 'Not-available'
    },
    {
      property: 'Common Areas',
      value: formData.commonAreas ? 'Available' : 'Not-available'
    },
    {
      property: 'Pool',
      value: formData.pool ? 'Available' : 'Not-available'
    },
    {
      property: 'Tennis Courts',
      value: formData.tennisCourts ? 'Available' : 'Not-available'
    },
    {
      property: 'No Smoking',
      value: formData.noSmoking ? 'Available' : 'Not-available'
    },
    {
      property: 'Air Conditioning',
      value: 'Available'
    },
    {
      property: 'Parking',
      value: 'Available'
    },
    {
      property: 'Bathtub',
      value: formData.bathtub ? 'Available' : 'Not-available'
    },
    {
      property: 'Beach View',
      value: formData.beachView ? 'Available' : 'Not-available'
    },
    {
      property: 'Flat-screen TV',
      value: formData.flatScreenTv ? 'Available' : 'Not-available'
    },
    {
      property: 'Balcony',
      value: formData.balcony ? 'Available' : 'Not-available'
    }
  ];

  const financeData: PropertyDetailsWithTitle[] = [
    {
      name: 'Payment from PBM',
      data: [
        {
          property: 'Payment currency',
          value: 'US Dollar'
        },
        {
          property: 'Payment method',
          value: 'Electronic Funds Transfer (EFT)'
        },
        {
          property: 'Received payment',
          value: 'Credit Card'
        },
        {
          property: 'Card type',
          value: 'Visa Debit Card'
        },
        {
          property: 'Card number',
          value: '123 456 7890'
        },
        {
          property: 'Card holder name',
          value: 'Phoenix Oasis '
        },
        {
          property: 'Commission Percentage',
          value: 'Flat 10%'
        },
        {
          property: 'Invoice email',
          value: 'Not-Available'
        }
      ]
    },
    {
      name: 'Payment from Guests (On property)',
      data: [
        {
          property: 'Cash payment',
          value: 'No'
        },
        {
          property: 'Card Payment',
          value: 'No'
        },
        {
          property: 'MFS / Online Payment',
          value: 'No'
        }
      ]
    }
  ];

  const policiesData: PropertyDetailsWithTitle[] = [
    {
      name: 'Check-in-Policy',
      data: [
        {
          property: 'Check-in type',
          value: 'Limited Check-in'
        },
        {
          property: 'Check-in start',
          value: formData.checkInStarts
            ? formatDateToTime(formData.checkInStarts)
            : '09:00 AM'
        },
        {
          property: 'Age Restriction',
          value: 'No'
        },
        {
          property: 'Deposit at Check-in',
          value: 'No'
        },
        {
          property: 'Documentation at Check-in',
          value: 'No'
        },
        {
          property: 'Late check-in',
          value: 'Flat 10%'
        },
        {
          property: 'Check-in end',
          value: formData.checkInEnds
            ? formatDateToTime(formData.checkInEnds)
            : '12:00 PM'
        }
      ]
    },
    {
      name: 'Checkout Policy',
      data: [
        {
          property: 'Checkout before',
          value: '11:00 AM'
        },
        {
          property: 'Flexible Checkout',
          value: 'Available'
        },
        {
          property: 'Type',
          value: 'Amount per night'
        },
        {
          property: 'Amount',
          value: '$100.00'
        }
      ]
    },
    {
      name: 'Cancellation Policy',
      data: [
        {
          property: 'Type',
          value: 'Optimal refund'
        },
        {
          property: 'Full refund',
          value: 'No'
        },
        {
          property: 'Partial refund',
          value: 'No'
        }
      ]
    },
    {
      name: 'Pet Policy',
      data: [
        {
          property: 'Type',
          value: 'Allowed'
        },
        {
          property: 'Pet Restricted Zones',
          value: 'Not-Available'
        },
        {
          property: 'Additional Charges',
          value: 'No'
        }
      ]
    },
    {
      name: 'Child Policy',
      data: [
        {
          property: 'Age Segment 1',
          value: '0 - 7 Years'
        },
        {
          property: 'Age Segment 2',
          value: '7 -12 Years'
        },
        {
          property: 'Age Segment 3',
          value: '12 -18 Years'
        },
        {
          property: 'Documentation Requirement',
          value: 'Not-Available'
        }
      ]
    },
    {
      name: 'Included Taxes in your rate',
      data: [
        {
          property: 'Vat',
          value: 'Available'
        },
        {
          property: 'Type',
          value: 'Amount per night'
        },
        {
          property: 'Amount',
          value: '$100.00'
        },
        {
          property: 'Deposit at Check-in',
          value: 'No'
        },
        {
          property: 'GST',
          value: 'No'
        },
        {
          property: 'Hotel tax',
          value: 'No'
        },
        {
          property: 'City / District tax',
          value: 'No'
        },
        {
          property: 'Tourist tax',
          value: 'No'
        }
      ]
    },
    {
      name: 'Your Documentations',
      data: [
        {
          property: 'Property Registration No.',
          value: 'Null'
        },
        {
          property: 'Business Registration No.',
          value: 'Null'
        },
        {
          property: 'Taxpayer Identification No.',
          value: 'Null'
        }
      ]
    }
  ];

  return (
    <>
      <h3 className="mb-2">We’re building your property</h3>
      <p className="mb-8 text-subtle">
        We're working on getting your property set up and ready for guests. Stay
        tuned for updates and start accepting bookings soon!
      </p>
      {show && (
        <div
          className="alert alert-subtle-success alert-dismissible items-start fade show gap-6 mb-8"
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
      <Accordion
        type="single"
        collapsible
        defaultValue="0"
        className="accordion-button-arrow-icon mt-2"
        id="previewAccordion"
      >
        <AccordionItem
          img1={info}
          img2={infoDark}
          title="Basic Information"
          eventKey="0"
          editLabel="Edit info"
        >
          <SummaryTable tableData={basicInfo} thirdColClassName="min-w-75" />
        </AccordionItem>
        <AccordionItem
          img1={locationImg}
          img2={locationDark}
          title="Location"
          eventKey="1"
          editLabel="Edit location"
        >
          <SummaryTable tableData={location} />
        </AccordionItem>
        <AccordionItem
          img1={bedDouble}
          img2={bedDoubleDark}
          title="General Amenities"
          eventKey="2"
          editLabel="Edit amenities"
        >
          <SummaryTable tableData={amenities} />
        </AccordionItem>
        <AccordionItem
          img1={picture}
          img2={pictureDark}
          title="Picture"
          eventKey="3"
          editLabel="Edit pictures"
        >
          <Row className="g-2 sm:g-4">
            {formData?.photos?.map((item, index) => (
              <div className="sm:col-4" key={index}>
                <img
                  src={URL.createObjectURL(item)}
                  alt=""
                  className="rounded-md w-full h-40 object-cover"
                />
              </div>
            ))}
          </Row>
        </AccordionItem>
        <AccordionItem
          img1={dollarAlt}
          img2={dollarAltDark}
          title="Finance"
          eventKey="4"
          editLabel="Edit finance"
        >
          {financeData.map(({ name, data }, index) => (
            <div key={index}>
              <h5 className={cn('font-black mb-4', { 'mt-4': index !== 0 })}>
                {name}
              </h5>
              <div className="scrollbar">
                <SummaryTable tableData={data} />
              </div>
            </div>
          ))}
        </AccordionItem>
        <AccordionItem
          img1={fileCheckAlt}
          img2={fileCheckAltDark}
          title="Policy"
          eventKey="5"
          editLabel="Edit policies"
        >
          {policiesData.map(({ name, data }, index) => (
            <div key={index}>
              <h5 className={cn('mb-4 font-black', { 'mt-4': index !== 0 })}>
                {name}
              </h5>
              <div className="scrollbar">
                <SummaryTable tableData={data} />
              </div>
            </div>
          ))}
        </AccordionItem>
      </Accordion>
      <div className="mt-10">
        <Button type="submit" variant="primary" className="px-10 sm:px-20">
          Done
        </Button>
      </div>
    </>
  );
};

export default Preview;
