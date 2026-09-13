import { Link } from 'react-router';
import { CompanyProfileDescriptionItem } from 'data/stock/stockDetails';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CompanyProfileDescriptionCardProps {
  companyDetails: CompanyProfileDescriptionItem[];
  stockDetails: CompanyProfileDescriptionItem[];
}

/** Gold: `+DetailsView` in mixins/stock/stock-details/CompanyProfileTabContent.pug */
const DetailsItem = ({ item }: { item: CompanyProfileDescriptionItem }) => {
  return (
    <div className={classNames(item.className)}>
      <div className="flex items-center mb-1">
        <FontAwesomeIcon icon={item.icon} className="text-base w-4" />
        <h5 className="my-2 line-clamp-1 ms-2">{item.title}</h5>
      </div>
      <div className="ps-6">
        {item.link ? (
          <Link to={item.link}>{item.content}</Link>
        ) : item.image ? (
          <div className="flex items-center gap-2">
            <img src={item.image} alt="img" className="dark:hidden" />
            {item.darkImage && (
              <img
                src={item.darkImage}
                alt="dark-image"
                className="hidden dark:block"
              />
            )}
            <p className="mb-0 text-muted">{item.content}</p>
          </div>
        ) : (
          <p className="mb-0 text-muted">{item.content}</p>
        )}
      </div>
    </div>
  );
};

const CompanyProfileDescriptionCard = ({
  companyDetails,
  stockDetails
}: CompanyProfileDescriptionCardProps) => {
  return (
    <div className="card mb-6">
      <div className="card-body">
        <h4 className="mb-4 text-default">Company Description</h4>
        <p className="mb-2">
          Apple Inc. creates, produces, and sells wearable technology, tablets,
          smartphones, PCs, and accessories all over the world.
        </p>
        <p className="mb-0">
          The company sells wearables, home goods, and accessories like AirPods,
          Apple TV, Apple Watch, Beats devices, and HomePod. It also offers a
          line of cellphones called iPhone, a line of personal computers called
          Mac, and a line of tablets called iPad...
          <Link to="#!">read more</Link>
        </p>
        <hr className="my-6" />
        <div className="row g-0">
          <div className="col-12 md:col-6 md:pe-6 pb-6 md:pb-0">
            <h4 className="text-default mb-4">Company Details</h4>
            <div className="row gx-8 md:gx-4 lg:gx-1 xl:gx-4 2xl:gx-8">
              <div className="sm:col-6 md:col-6 xl:col-12 2xl:col-6 md:pe-2">
                {companyDetails.slice(0, 6).map(item => (
                  <DetailsItem item={item} key={item.id} />
                ))}
              </div>
              <div className="sm:col-6 md:col-6 xl:col-12 2xl:col-6 md:ps-2">
                {companyDetails.slice(6).map(item => (
                  <DetailsItem item={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 md:col-6 md:ps-6 pt-6 md:pt-0 border-t md:border-t-0 md:border-s">
            <h4 className="text-default mb-4">Stock Details</h4>
            <div className="row gx-8 md:gx-4 lg:gx-1 xl:gx-4 2xl:gx-8">
              <div className="sm:col-6 md:col-6 xl:col-12 2xl:col-6">
                {stockDetails.slice(0, 6).map(item => (
                  <DetailsItem item={item} key={item.id} />
                ))}
              </div>
              <div className="sm:col-6 md:col-6 xl:col-12 2xl:col-6">
                {stockDetails.slice(6).map(item => (
                  <DetailsItem item={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileDescriptionCard;
