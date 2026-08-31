import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons';

interface HotelCompareAmenityRowProps {
  title: string;
  reviewField: boolean[];
}

/** Popular-amenities row of `+RoomDetailsTable` (HotelCompare.pug) */
const HotelCompareAmenityRow = ({
  title,
  reviewField
}: HotelCompareAmenityRowProps) => {
  return (
    <tr>
      <td className="px-6 align-middle lg:border-e border-subtle bg-subtle">
        <h6 className="text-default font-extrabold uppercase mb-0">{title}</h6>
      </td>
      {reviewField.map((item, index) => (
        <td key={index} className="px-4 align-middle lg:border-e border-subtle">
          {item ? (
            <h6 className="text-default">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-success me-2"
              />
              Available
            </h6>
          ) : (
            <h6 className="text-default">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="text-secondary-light me-2"
              />
              Not Available
            </h6>
          )}
        </td>
      ))}
    </tr>
  );
};

export default HotelCompareAmenityRow;
