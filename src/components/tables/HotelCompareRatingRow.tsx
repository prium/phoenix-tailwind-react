import Badge from 'components/base/Badge';
import { numberFormat } from 'helpers/utils';
import { ProgressBar } from 'react-bootstrap';

interface HotelCompareRatingRowProps {
  title: string;
  ratingValues: number[];
}

const HotelCompareRatingRow = ({
  title,
  ratingValues
}: HotelCompareRatingRowProps) => {
  return (
    <tr>
      <td className="px-6 align-middle bg-subtle lg:border-e border-light">
        <h6 className="text-default font-black uppercase mb-0">{title}</h6>
      </td>
      {ratingValues.map((value, index) => (
        <td className="px-4 border-e border-light" key={index}>
          <div className="flex items-center gap-2">
            <Badge bg="primary" className="text-base">
              {numberFormat(value, 'standard', {
                minimumFractionDigits: 1
              })}
            </Badge>
            <ProgressBar
              now={parseFloat(value.toString()) * 20}
              style={{ height: 8 }}
              className="bg-subtle w-full"
            />
          </div>
        </td>
      ))}
    </tr>
  );
};

export default HotelCompareRatingRow;
