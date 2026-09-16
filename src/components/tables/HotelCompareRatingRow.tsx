import { cn, Progress } from '@hummingbirdui/react';
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
            <Progress
              value={value * 20}
              aria-label="review"
              className="w-full bg-subtle h-2"
            >
              <Progress.Bar className="rounded-md" />
            </Progress>
          </div>
        </td>
      ))}
    </tr>
  );
};

export default HotelCompareRatingRow;
