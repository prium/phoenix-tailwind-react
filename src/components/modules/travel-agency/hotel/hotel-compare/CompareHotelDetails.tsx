import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import type {
  HotelInfo,
  Rating,
  ReviewField
} from 'data/travel-agency/customer/hotelCompare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from 'components/base/Button';
import Badge from 'components/base/Badge';
import { Form } from 'react-bootstrap';
import { numberFormat } from 'helpers/utils';
import classNames from 'classnames';
import HotelCompareRatingRow from 'components/tables/HotelCompareRatingRow';

interface CompareHotelDetailsProps {
  hotelInfo: HotelInfo[];
  reviewFields: ReviewField[];
}

const CompareHotelDetails = ({
  hotelInfo,
  reviewFields
}: CompareHotelDetailsProps) => {
  return (
    <table className="table table-layout-fixed table-compare mb-0">
      <thead>
        <tr>
          <th className="p-0 border-0" style={{ width: 225 }}></th>
          <th className="p-0 border-0"></th>
          <th className="p-0 border-0"></th>
          <th className="p-0 border-0"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={4} className="ps-6 pt-6 pb-4 font-bold border-0">
            Hotel picture
          </td>
        </tr>
        <tr>
          <td className="border-0 bg-subtle py-0"></td>
          {hotelInfo.map((item, index) => (
            <td
              className={classNames('border-0 py-0', {
                'ps-6 pe-0': index !== hotelInfo.length - 1,
                'ps-6': index === hotelInfo.length - 1
              })}
              key={index}
              style={{
                minWidth: 250
              }}
            >
              <div className="relative swiper-theme-container overflow-hidden rounded-md">
                <Swiper
                  slidesPerView={1}
                  loop
                  autoplay
                  pagination={{
                    clickable: true
                  }}
                  modules={[Autoplay, Pagination]}
                  className="theme-slider"
                >
                  {item.images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <img src={image} alt="" className="w-full h-full" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Badge
                  variant="phoenix"
                  bg="warning"
                  className="text-sm absolute top-0 start-0 ms-4 mt-4 z-1"
                >
                  <FontAwesomeIcon icon={faStar} className="me-1" />
                  {numberFormat(item.overallRating, 'standard', {
                    minimumFractionDigits: 1
                  })}
                </Badge>
                <Button className="btn-wish absolute top-0 end-0 me-4 mt-4 z-1">
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
              </div>
              <div className="relative">
                <Form.Control
                  type="text"
                  defaultValue={item.name}
                  placeholder="Enter hotel name"
                  className="form-control-lg mt-2 pe-8"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-md text-soft absolute top-0 end-0 me-4 mt-4"
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
          <td colSpan={4} className="ps-6 pt-6 pb-4 font-bold">
            Facilities at a Glance
          </td>
        </tr>
        <tr>
          <td className="px-6 align-middle bg-subtle lg:border-e border-subtle">
            <h6 className="text-default font-black uppercase mb-0">
              Hotel facilities
            </h6>
          </td>
          {hotelInfo.map((item, index) => (
            <td
              className={classNames('border-subtle px-6', {
                'lg:border-e': index === hotelInfo.length - 1,
                'border-e': index !== hotelInfo.length - 1
              })}
              key={item.id}
            >
              <ul className="mb-0 list-unstyled">
                {item.facilities.map((facility, idx) => (
                  <li className="text-highlight text-md" key={idx}>
                    <span>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-success me-2"
                      />
                    </span>
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
