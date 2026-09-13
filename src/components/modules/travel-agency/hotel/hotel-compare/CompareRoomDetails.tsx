import { useState } from 'react';
import {
  roomTypes,
  type HotelInfo,
  ReviewField,
  PopularAmenities
} from 'data/travel-agency/customer/hotelCompare';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faUser,
  faBaby,
  faBath
} from '@fortawesome/free-solid-svg-icons';
import HotelChangeRoomModal from 'components/modals/HotelChangeRoomModal';
import Swiper from 'components/base/Swiper';
import { SwiperSlide } from 'swiper/react';
import { cn } from '@hummingbirdui/react';
import { currencyFormat, numberFormat } from 'helpers/utils';
import HotelCompareAmenityRow from 'components/tables/HotelCompareAmenityRow';

interface CompareRoomDetailsProps {
  hotelInfo: HotelInfo[];
  reviewFields: ReviewField[];
}

const cellClass = (index: number, length: number, extra?: string) =>
  cn(
    'border-subtle px-4',
    index === length - 1 ? 'lg:border-e' : 'border-e',
    extra
  );

const padTwo = (value: number) =>
  numberFormat(value, 'standard', { minimumIntegerDigits: 2 });

/** `+RoomDetailsTable` in mixins/travel-agency/hotel/HotelCompare.pug */
const CompareRoomDetails = ({
  hotelInfo,
  reviewFields
}: CompareRoomDetailsProps) => {
  const [showChangeRoomModal, setShowChangeRoomModal] = useState(false);
  return (
    <>
      <table className="table table-layout-fixed table-compare mb-0">
        <thead>
          <tr>
            <th className="p-0 border-0 w-56.25"></th>
            <th className="p-0 border-0"></th>
            <th className="p-0 border-0"></th>
            <th className="p-0 border-0"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4} className="ps-6 pt-6 pb-4 font-bold">
              Accommodation
            </td>
          </tr>
          <tr>
            <td className="px-6 align-middle lg:border-e border-subtle bg-subtle">
              <h6 className="text-default font-extrabold uppercase mb-0">
                room type
              </h6>
            </td>
            {hotelInfo.map((info, index) =>
              info.rooms.map(item => (
                <td
                  className={cellClass(index, hotelInfo.length)}
                  key={item.id}
                >
                  <div className="flex flex-wrap flex-between-center gap-2">
                    <h4 className="mb-0">{item.type}</h4>
                    <Button
                      variant="phoenix-primary"
                      onClick={() => setShowChangeRoomModal(true)}
                    >
                      Change Room
                    </Button>
                  </div>
                </td>
              ))
            )}
          </tr>
          <tr>
            <td className="px-6 align-middle lg:border-e border-subtle bg-subtle">
              <h6 className="text-default font-extrabold uppercase mb-0">
                Room price
              </h6>
            </td>
            {hotelInfo.map((info, index) =>
              info.rooms.map(item => (
                <td
                  className={cellClass(index, hotelInfo.length)}
                  key={item.id}
                >
                  <h3 className="flex items-center gap-2">
                    <span className="text-md text-soft font-normal line-through">
                      {currencyFormat(item.price)}
                    </span>
                    {currencyFormat(item.discountPrice)}
                    <span className="text-md font-bold">/ night</span>
                  </h3>
                  <p className="mb-0">Inclusive of all taxes and fees</p>
                </td>
              ))
            )}
          </tr>
          <tr>
            <td className="px-6 align-middle lg:border-e border-subtle bg-subtle">
              <h6 className="text-default font-black uppercase mb-0">
                Room picture
              </h6>
            </td>
            {hotelInfo.map((info, index) =>
              info.rooms.map(item => (
                <td
                  className={cellClass(index, hotelInfo.length, 'min-w-62.5')}
                  key={item.id}
                >
                  <Swiper
                    loop
                    spaceBetween={8}
                    slidesPerView={3}
                    grabCursor
                    navClassName="swiper-nav-inside"
                    navButtonClassName="bg-transparent! border-0!"
                    navIconClassName="text-white"
                    navIconTransform="shrink-3"
                  >
                    {item.images.map((image, idx) => (
                      <SwiperSlide key={idx}>
                        <img src={image} alt="" className="rounded-md" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </td>
              ))
            )}
          </tr>
          <tr>
            <td className="px-6 align-middle lg:border-e border-subtle bg-subtle">
              <h6 className="text-default font-extrabold uppercase mb-0">
                Room Details
              </h6>
            </td>
            {hotelInfo.map((info, index) =>
              info.rooms.map(item => (
                <td
                  key={item.id}
                  className={cellClass(index, hotelInfo.length)}
                >
                  <h6 className="font-semibold text-highlight mb-2">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="me-2 text-primary"
                    />
                    {padTwo(item.beds)} Double Bed
                  </h6>
                  <h6 className="font-semibold text-highlight mb-2">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="me-2 text-primary"
                    />
                    {padTwo(item.adults)} Adults
                  </h6>
                  <h6 className="font-semibold text-highlight mb-2">
                    <FontAwesomeIcon
                      icon={faBaby}
                      className="me-2 text-primary"
                    />
                    {padTwo(item.child)} Child
                  </h6>
                  <h6 className="font-semibold text-highlight">
                    <FontAwesomeIcon
                      icon={faBath}
                      className="me-2 text-primary"
                    />
                    {padTwo(item.bathrooms)} Bathroom
                  </h6>
                </td>
              ))
            )}
          </tr>
          <tr>
            <td className="pt-6 pb-4 ps-6 font-bold" colSpan={4}>
              Popular Amenities
            </td>
          </tr>
          {reviewFields.map(review => (
            <HotelCompareAmenityRow
              key={review.id}
              title={review.title}
              reviewField={hotelInfo.map(
                hotel =>
                  hotel.popularAmenities[review.field as keyof PopularAmenities]
              )}
            />
          ))}
          <tr>
            <td className="border-0 pb-0"></td>
            {hotelInfo.map(info => (
              <td className="border-0 px-4 pb-0" key={info.id}>
                <a
                  href="#!"
                  className="btn btn-outline-primary text-center w-full"
                >
                  View room details
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <HotelChangeRoomModal
        show={showChangeRoomModal}
        handleClose={() => setShowChangeRoomModal(false)}
        roomTypes={roomTypes}
      />
    </>
  );
};

export default CompareRoomDetails;
