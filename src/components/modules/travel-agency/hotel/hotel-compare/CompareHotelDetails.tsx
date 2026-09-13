import { SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import type {
  HotelInfo,
  Rating,
  ReviewField
} from 'data/travel-agency/customer/hotelCompare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { cn } from '@hummingbirdui/react';
import Swiper from 'components/base/Swiper';
import { numberFormat } from 'helpers/utils';
import HotelCompareRatingRow from 'components/tables/HotelCompareRatingRow';

interface CompareHotelDetailsProps {
  hotelInfo: HotelInfo[];
  reviewFields: ReviewField[];
}

/** `+HotelDetailsTable` in mixins/travel-agency/hotel/HotelCompare.pug */
const CompareHotelDetails = ({
  hotelInfo,
  reviewFields
}: CompareHotelDetailsProps) => {
  return (
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
          <td className="ps-6 pt-6 pb-4 font-bold border-0">Hotel picture</td>
        </tr>
        <tr>
          <td className="border-0 bg-subtle py-0"></td>
          {hotelInfo.map((item, index) => (
            <td
              className={cn(
                'border-0 py-0 min-w-62.5',
                index !== hotelInfo.length - 1 ? 'ps-4 pe-0' : 'ps-4'
              )}
              key={index}
            >
              <div className="relative">
                <Swiper
                  parentClassName="rounded-md overflow-hidden"
                  navigation={false}
                  loop
                  autoplay
                  pagination={{ clickable: true }}
                  modules={[Autoplay, Pagination]}
                >
                  {item.images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <img src={image} alt="" className="size-full" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <span className="badge text-sm badge-phoenix-warning absolute top-0 start-0 ms-4 mt-4 z-10">
                  <FontAwesomeIcon icon={faStar} className="me-1" />
                  {numberFormat(item.overallRating, 'standard', {
                    minimumFractionDigits: 1
                  })}
                </span>
                <button className="btn btn-wish absolute top-0 end-0 mt-4 me-4 z-10">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <div className="relative">
                <input
                  type="text"
                  defaultValue={item.name}
                  placeholder="Enter hotel name"
                  className="form-control form-control-lg mt-2 pe-8"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-md text-soft absolute top-0 end-0 mt-4 me-4"
                  transform="down-2"
                />
              </div>
            </td>
          ))}
        </tr>
        <tr>
          <td colSpan={4} className="pt-6 pb-4 ps-6 font-bold">
            Hotel Review
          </td>
        </tr>
        {reviewFields.map(review => (
          <HotelCompareRatingRow
            key={review.id}
            title={review.title}
            ratingValues={hotelInfo.map(
              hotel => hotel.ratings[review.field as keyof Rating]
            )}
          />
        ))}
        <tr>
          <td colSpan={4} className="pt-6 pb-4 ps-6 font-bold">
            Facilities at a Glance
          </td>
        </tr>
        <tr>
          <td className="px-6 align-middle lg:border-e border-subtle bg-subtle">
            <h6 className="text-default font-extrabold uppercase mb-0">
              Hotel facilities
            </h6>
          </td>
          {hotelInfo.map((item, index) => (
            <td
              className={cn(
                'border border-subtle px-4',
                index === hotelInfo.length - 1 ? 'lg:border-e' : 'border-e'
              )}
              key={item.id}
            >
              <ul className="columns-xl-2 p-0 mb-0 list-none">
                {item.facilities.map((facility, idx) => (
                  <li className="text-highlight text-md" key={idx}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-success me-2"
                    />
                    {facility}
                  </li>
                ))}
              </ul>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default CompareHotelDetails;
