import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Dialog, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import { ReactNode } from 'react';

interface AddDealModalProps {
  show: boolean;
  handleClose: () => void;
}

const currencies = [
  'USD',
  'GBP',
  'EUR',
  'JPY',
  'CAD',
  'AUD',
  'CNY',
  'CHF',
  'ZAR',
  'BRL',
  'RUB',
  'INR',
  'MXN',
  'NZD',
  'SGD',
  'HKD',
  'KRW',
  'SEK',
  'NOK',
  'TRY'
];

const timeZones = [
  'GMT-12:00 Etc/GMT-12',
  'GMT-11:00 Etc/GMT-11',
  'GMT-11:00 Pacific/Midway',
  'GMT-10:00 America/Adak',
  'GMT-09:00 America/Anchorage',
  'GMT-09:00 Pacific/Gambier',
  'GMT-08:00 America/Dawson_Creek',
  'GMT-08:00 America/Ensenada',
  'GMT-08:00 America/Los_Angeles',
  'GMT-07:00 America/Chihuahua',
  'GMT-07:00 America/Denver',
  'GMT-06:00 America/Belize',
  'GMT-06:00 America/Cancun',
  'GMT-06:00 America/Chicago',
  'GMT-06:00 Chile/EasterIsland',
  'GMT-05:00 America/Bogota',
  'GMT-05:00 America/Havana',
  'GMT-05:00 America/New_York',
  'GMT-04:30 America/Caracas',
  'GMT-04:00 America/Campo_Grande',
  'GMT-04:00 America/Glace_Bay',
  'GMT-04:00 America/Goose_Bay',
  'GMT-04:00 America/Santiago',
  'GMT-04:00 America/La_Paz',
  'GMT-03:00 America/Argentina/Buenos_Aires',
  'GMT-03:00 America/Montevideo',
  'GMT-03:00 America/Araguaina',
  'GMT-03:00 America/Godthab',
  'GMT-03:00 America/Miquelon',
  'GMT-03:00 America/Sao_Paulo',
  'GMT-03:30 America/St_Johns',
  'GMT-02:00 America/Noronha',
  'GMT-01:00 Atlantic/Cape_Verde',
  'GMT Europe/Belfast',
  'GMT Africa/Abidjan',
  'GMT Europe/Dublin',
  'GMT Europe/Lisbon',
  'GMT Europe/London',
  'UTC UTC',
  'GMT+01:00 Africa/Algiers',
  'GMT+01:00 Africa/Windhoek',
  'GMT+01:00 Atlantic/Azores',
  'GMT+01:00 Atlantic/Stanley',
  'GMT+01:00 Europe/Amsterdam',
  'GMT+01:00 Europe/Belgrade',
  'GMT+01:00 Europe/Brussels',
  'GMT+02:00 Africa/Cairo',
  'GMT+02:00 Africa/Blantyre',
  'GMT+02:00 Asia/Beirut',
  'GMT+02:00 Asia/Damascus',
  'GMT+02:00 Asia/Gaza',
  'GMT+02:00 Asia/Jerusalem',
  'GMT+03:00 Africa/Addis_Ababa',
  'GMT+03:00 Asia/Riyadh89',
  'GMT+03:00 Europe/Minsk',
  'GMT+03:30 Asia/Tehran',
  'GMT+04:00 Asia/Dubai',
  'GMT+04:00 Asia/Yerevan',
  'GMT+04:00 Europe/Moscow',
  'GMT+04:30 Asia/Kabul',
  'GMT+05:00 Asia/Tashkent',
  'GMT+05:30 Asia/Kolkata',
  'GMT+05:45 Asia/Katmandu',
  'GMT+06:00 Asia/Dhaka',
  'GMT+06:00 Asia/Yekaterinburg',
  'GMT+06:30 Asia/Rangoon',
  'GMT+07:00 Asia/Bangkok',
  'GMT+07:00 Asia/Novosibirsk',
  'GMT+08:00 Etc/GMT+8',
  'GMT+08:00 Asia/Hong_Kong',
  'GMT+08:00 Asia/Krasnoyarsk',
  'GMT+08:00 Australia/Perth',
  'GMT+08:45 Australia/Eucla',
  'GMT+09:00 Asia/Irkutsk',
  'GMT+09:00 Asia/Seoul',
  'GMT+09:00 Asia/Tokyo',
  'GMT+09:30 Australia/Adelaide',
  'GMT+09:30 Australia/Darwin',
  'GMT+09:30 Pacific/Marquesas',
  'GMT+10:00 Etc/GMT+10',
  'GMT+10:00 Australia/Brisbane',
  'GMT+10:00 Australia/Hobart',
  'GMT+10:00 Asia/Yakutsk',
  'GMT+10:30 Australia/Lord_Howe',
  'GMT+11:00 Asia/Vladivostok',
  'GMT+11:30 Pacific/Norfolk',
  'GMT+12:00 Etc/GMT+12',
  'GMT+12:00 Asia/Anadyr',
  'GMT+12:00 Asia/Magadan',
  'GMT+12:00 Pacific/Auckland',
  'GMT+12:45 Pacific/Chatham',
  'GMT+13:00 Pacific/Tongatapu',
  'GMT+14:00 Pacific/Kiritimati'
];

const CurrencySelect = () => (
  <select className="form-select" defaultValue="USD">
    {currencies.map(currency => (
      <option key={currency}>{currency}</option>
    ))}
  </select>
);

const FieldLabel = ({
  children,
  addNew
}: {
  children: ReactNode;
  addNew?: boolean;
}) => (
  <label className="text-highlight font-bold mb-2">
    {children}
    {addNew && (
      <Button variant="link" className="p-0 ms-4">
        <FontAwesomeIcon icon={faPlus} className="me-1" />
        <span>Add new</span>
      </Button>
    )}
  </label>
);

/** `+AddDealModal` in mixins/crm/Deals.pug */
const AddDealModal = ({ show, handleClose }: AddDealModalProps) => {
  return (
    <Dialog open={show} onOpenChange={open => !open && handleClose()}>
      <Dialog.Content
        size="xl"
        centered
        scrollable
        className="bg-subtle"
        aria-describedby={undefined}
      >
        {/* gold's h3 has no `.modal-title` styling, so keep the a11y title visually hidden */}
        <Dialog.Title className="sr-only">Deal Informations</Dialog.Title>
        <div className="modal-header justify-between border-0 px-10 pt-10 mb-2">
          <h3 className="mb-0">Deal Informations</h3>
          <Button variant="phoenix-secondary" size="sm" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} className="text-danger" />
          </Button>
        </div>
        <div className="modal-body px-10">
          <Row className="g-6">
            <Col lg={6}>
              <div className="mb-6">
                <FieldLabel>Deal Owner</FieldLabel>
                <select className="form-select" defaultValue="Select">
                  <option>Select</option>
                  <option>Ally Aagaard</option>
                  <option>Aida Moen</option>
                  <option>Niko Koss</option>
                  <option>Alec Haag</option>
                  <option>Lonnie Kub</option>
                  <option>Ola Smith</option>
                </select>
              </div>
              <div className="mb-6">
                <FieldLabel>Deal Name</FieldLabel>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter deal name"
                />
              </div>
              <div className="mb-6">
                <Row className="g-4">
                  <Col sm={6} lg={12} xl={6}>
                    <FieldLabel>Deal Amount</FieldLabel>
                    <Row className="g-2">
                      <Col>
                        <input
                          className="form-control"
                          type="number"
                          placeholder="$ Enter amount"
                        />
                      </Col>
                      <Col xs="auto">
                        <CurrencySelect />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="mb-6">
                <FieldLabel>Deal Code</FieldLabel>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter deals code"
                />
              </div>
              <div className="mb-6">
                <FieldLabel addNew>Deal Type</FieldLabel>
                <select className="form-select" defaultValue="Select">
                  <option>Select</option>
                  <option>Buy One Get One Free</option>
                  <option>Clearance sale</option>
                  <option>Bundle deals</option>
                  <option>Free shipping</option>
                  <option>Loyalty programs</option>
                  <option>Limited-time offers</option>
                  <option>Refer-a-friend discounts</option>
                  <option>Seasonal sales</option>
                  <option>Membership discounts</option>
                </select>
              </div>
              <div className="mb-6">
                <FieldLabel addNew>Category</FieldLabel>
                <select className="form-select" defaultValue="Select">
                  <option>Select</option>
                  <option>Financial</option>
                  <option>Marketplace</option>
                  <option>Travel</option>
                  <option>E-commerce</option>
                  <option>Cloud Computing</option>
                </select>
              </div>
              <div className="mb-6">
                <FieldLabel>Probability (%)</FieldLabel>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter value"
                />
              </div>
              <div className="mb-6">
                <FieldLabel>Expected Revenue</FieldLabel>
                <Row className="g-2">
                  <Col>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="$ Enter amount"
                    />
                  </Col>
                  <Col xs="auto">
                    <CurrencySelect />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mb-6">
                <FieldLabel>Contact Name</FieldLabel>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter contact name"
                />
              </div>
              <div className="mb-6">
                <Row className="g-4">
                  <Col xs={6}>
                    <FieldLabel>Phone Number</FieldLabel>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter phone number"
                    />
                  </Col>
                  <Col xs={6}>
                    <FieldLabel>Email Address</FieldLabel>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter email address"
                    />
                  </Col>
                </Row>
              </div>
              <div className="mb-6">
                <FieldLabel addNew>Lead Source</FieldLabel>
                <select className="form-select" defaultValue="Select">
                  <option>Select</option>
                  <option>Referrals</option>
                  <option>Former Clients</option>
                  <option>Competitors</option>
                  <option>Business &amp; sales</option>
                  <option>Google resources</option>
                  <option>Linkedin</option>
                  <option>Marketing</option>
                </select>
              </div>
              <div className="mb-6">
                <FieldLabel addNew>Campaign Source</FieldLabel>
                <select className="form-select" defaultValue="Select">
                  <option>Select</option>
                  <option>Online Campaign</option>
                  <option>Offline Campaign</option>
                </select>
              </div>
              <div className="mb-6">
                <FieldLabel>Time Zone</FieldLabel>
                <select className="form-select">
                  {timeZones.map(zone => (
                    <option key={zone}>{zone}</option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <Row className="g-4">
                  <Col xs={6}>
                    <FieldLabel>Create Date</FieldLabel>
                    <DatePicker placeholder="dd / mm / yyyy" hideIcon />
                  </Col>
                  <Col xs={6}>
                    <FieldLabel>Start Time</FieldLabel>
                    <DatePicker
                      options={{
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: 'H:i'
                      }}
                      placeholder="H:i"
                      hideIcon
                    />
                  </Col>
                </Row>
              </div>
              <div className="mb-6">
                <Row className="g-4">
                  <Col xs={6}>
                    <FieldLabel>Closing Date</FieldLabel>
                    <DatePicker placeholder="dd / mm / yyyy" hideIcon />
                  </Col>
                  <Col xs={6}>
                    <FieldLabel>Closing Time</FieldLabel>
                    <DatePicker
                      options={{
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: 'H:i'
                      }}
                      placeholder="H:i"
                      hideIcon
                    />
                  </Col>
                </Row>
              </div>
              <Row className="g-4">
                <Col xs={6}>
                  <FieldLabel>Stage</FieldLabel>
                  <select className="form-select" defaultValue="Select">
                    <option>Select</option>
                    <option>New</option>
                    <option>In Progress</option>
                    <option>Pending</option>
                    <option>Canceled</option>
                    <option>Completed</option>
                  </select>
                </Col>
                <Col xs={6}>
                  <FieldLabel>Priority</FieldLabel>
                  <select className="form-select" defaultValue="Urgent">
                    <option>Urgent</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {/* gold has the (sic) `border-0pt-4` class typo — kept verbatim */}
        <div className="modal-footer border-0pt-4 px-10 pb-10">
          <Button
            variant="link"
            className="text-danger px-4 my-0"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button variant="primary" className="my-0">
            Create Deal
          </Button>
        </div>
      </Dialog.Content>
    </Dialog>
  );
};

export default AddDealModal;
