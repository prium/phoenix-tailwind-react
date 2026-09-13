import { DealDetailsInfoType } from 'data/crm/dealDetailsInfo';
import FeatherIcon from 'feather-icons-react';
import { cn } from '@hummingbirdui/react';

interface DealDetailsInfoProps {
  data: DealDetailsInfoType[][];
  className?: string;
}

/** gold border classes per quadrant (`+DealsDetailsInfo` in mixins/crm/DealDetails.pug) */
const quadrantClasses = [
  'sm:col-12 2xl:col-6 border-b 2xl:border-e border-subtle py-4 mt-0',
  'sm:col-12 2xl:col-6 border-b border-subtle py-4 mt-0',
  'sm:col-12 2xl:col-6 2xl:border-e border-b 2xl:border-b-0 py-4 mt-0 border-subtle',
  'sm:col-12 2xl:col-6 py-4 mt-0'
];

const DealDetailsInfo = ({ data, className }: DealDetailsInfoProps) => {
  return (
    <div className={cn('xl:px-6', className)}>
      <div className="row mx-0 sm:mx-4 lg:mx-0 lg:px-0">
        {data.map((category, index) => (
          <div key={index} className={quadrantClasses[index]}>
            {/* the mobile stacking comes from `.table-stats` in crm.css */}
            <table className="w-full table-stats">
              <tbody>
                <tr>
                  <th />
                  <th />
                  <th />
                </tr>
                {category.map((item, itemIndex) => (
                  <InfoItem key={item.id} data={item} index={itemIndex} />
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

const InfoItem = ({
  data,
  index
}: {
  data: DealDetailsInfoType;
  index: number;
}) => {
  const valueClass = cn('ps-10 sm:ps-0 font-semibold mb-0', {
    'pb-4 sm:pb-0': index === 0
  });
  return (
    <tr>
      <td className="py-2">
        <div
          className={cn('items-center', index === 0 ? 'inline-flex' : 'flex')}
        >
          <div
            className={`flex ${data.bgClass} rounded-full flex-center me-4 size-6`}
          >
            <FeatherIcon
              icon={data.icon}
              size={16}
              className={`size-4 ${data.textClass}`}
            />
          </div>
          <p className="font-bold mb-0">{data.title}</p>
        </div>
      </td>
      <td className="py-2 hidden sm:block sm:pe-2">:</td>
      <td className="py-2">
        {data.href ? (
          <a href={data.href} className={cn(valueClass, 'text-default')}>
            {data.value}
          </a>
        ) : (
          <div className={valueClass}>{data.value}</div>
        )}
      </td>
    </tr>
  );
};

export default DealDetailsInfo;
