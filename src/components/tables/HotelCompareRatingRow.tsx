import { cn } from '@hummingbirdui/react';
import { numberFormat } from 'helpers/utils';

interface HotelCompareRatingRowProps {
  title: string;
  ratingValues: number[];
}

/** Review row of `+HotelDetailsTable` in mixins/travel-agency/hotel/HotelCompare.pug */
const HotelCompareRatingRow = ({
  title,
  ratingValues
}: HotelCompareRatingRowProps) => {
  return (
    <tr>
      <td className="px-6 align-middle bg-subtle lg:border-e border-subtle">
        <h6 className="text-default font-extrabold uppercase mb-0">{title}</h6>
      </td>
      {ratingValues.map((value, index) => (
        <td
          className={cn(
            'px-4 border-subtle',
            index === ratingValues.length - 1 ? 'lg:border-e' : 'border-e'
          )}
          key={index}
        >
          <div className="flex items-center gap-2">
            <span className="badge bg-primary text-base">
              {numberFormat(value, 'standard', {
                minimumFractionDigits: 1
              })}
            </span>
            <div
              className="progress w-full bg-subtle h-2"
              role="progressbar"
              aria-label="review"
              aria-valuenow={0}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="progress-bar rounded-md"
                style={{ width: `${value * 20}%` }}
              />
            </div>
          </div>
        </td>
      ))}
    </tr>
  );
};

export default HotelCompareRatingRow;
