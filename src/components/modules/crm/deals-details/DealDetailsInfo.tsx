import { DealDetailsInfoType } from 'data/crm/dealDetailsInfo';
import { Col, Row, Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';
interface DealDetailsInfoProps {
  data: DealDetailsInfoType[][];
  className?: string;
}

const DealDetailsInfo = ({ data, className }: DealDetailsInfoProps) => {
  return (
    <div className={classNames('xl:px-6', className)}>
      <Row className="mx-0 sm:mx-4 lg:mx-0 lg:px-0">
        {data.map((category, index) => (
          <Col
            key={index}
            sm={12}
            xxl={6}
            className={classNames('py-6 border-subtle', {
              'sm:col-12 2xl:col-6 border-b 2xl:border-e': index === 0,
              'border-b': index === 1,
              '2xl:border-e border-b 2xl:border-b-0 py-6':
                index === 2
            })}
          >
            <InfoCategory category={category} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const InfoCategory = ({ category }: { category: DealDetailsInfoType[] }) => {
  return (
    <Table borderless className="w-full table-stats mb-0">
      <thead>
        <tr>
          <th className="p-0" />
          <th className="p-0" />
          <th className="p-0" />
        </tr>
      </thead>
      <tbody>
        {category.map((item, index) => (
          <InfoItem key={item.id} data={item} index={index} />
        ))}
      </tbody>
    </Table>
  );
};

const InfoItem = ({
  data,
  index
}: {
  data: DealDetailsInfoType;
  index: number;
}) => {
  return (
    <tr>
      <td className="py-2 leading-none">
        <div
          className={classNames('inline-flex items-center p-0', {
            'flex': index == 1
          })}
        >
          <div
            className={`flex bg-${data.color}-subtle rounded-full flex-center me-4`}
            style={{ width: '24px', height: '24px' }}
          >
            <FeatherIcon
              icon={data.icon}
              className={`text-${data.color}-dark`}
              width={16}
              height={16}
            />
          </div>
          <p className="font-bold mb-0">{data.title}</p>
        </div>
      </td>
      <td className="py-2 hidden sm:block sm:pe-2">:</td>
      <td className="py-2">
        {data.title === 'Email' ? (
          <a href={`mailto:${data.value}`} className="font-semibold">
            {data.value}
          </a>
        ) : data.title === 'Phone' ? (
          <a href={`tel:${data.value}`} className="font-semibold">
            {data.value}
          </a>
        ) : (
          <p
            className={classNames('ps-18 sm:ps-0 font-semibold mb-0 py-0 pe-0', {
              'pb-6 sm:pb-0': index === 0
            })}
          >
            {data.value}
          </p>
        )}
      </td>
    </tr>
  );
};

export default DealDetailsInfo;
