import { Col } from 'react-bootstrap';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { CompanyProfileDescriptionItem } from 'data/stock/stockDetails';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CompanyProfileDescriptionCardProps {
  companyDetails: CompanyProfileDescriptionItem[];
  stockDetails: CompanyProfileDescriptionItem[];
}

const DetailsItem = ({ item }: { item: CompanyProfileDescriptionItem }) => {
  return (
    <div className={classNames(item.className)}>
      <div className="flex items-center mb-1">
        <FontAwesomeIcon icon={item.icon} style={{ width: 16 }} />
        <h5 className="my-2 ms-2 line-clamp-1">{item.title}</h5>
      </div>
      <div className="ps-6">
        {item.link ? (
          <Link to={item.link}>{item.content}</Link>
        ) : item.image ? (
          <div className="flex items-center gap-2">
            <img
              src={item.image}
              alt={item.title}
              className="img-fluid dark:hidden"
            />
            {item.darkImage && (
              <img
                src={item.darkImage}
                alt={item.title}
                className="img-fluid hidden dark:block"
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
    <Card className="mb-6">
      <Card.Body>
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
        <Row className="g-0">
          <Col xs={12} md={6} className="md:pe-6 pb-6 md:pb-0">
            <h4 className="text-default mb-4">Company Details</h4>
            <Row className="gx-8 md:gx-4 lg:gx-1 xl:gx-4 2xl:gx-8">
              <Col sm={6} xl={12} xxl={6} className="md:pe-2">
                {companyDetails.slice(0, 6).map(item => (
                  <DetailsItem item={item} key={item.id} />
                ))}
              </Col>
              <Col sm={6} xl={12} xxl={6} className="md:ps-2">
                {companyDetails.slice(6).map(item => (
                  <DetailsItem item={item} key={item.id} />
                ))}
              </Col>
            </Row>
          </Col>
          <Col
            xs={12}
            md={6}
            className="md:ps-6 pt-6 md:pt-0 border-t md:border-t-0 md:border-s"
          >
            <h4 className="text-default mb-4">Stock Details</h4>
            <Row className="gx-8 md:gx-4 lg:gx-1 xl:gx-4 2xl:gx-8">
              <Col sm={6} xl={12} xxl={6}>
                {stockDetails.slice(0, 6).map(item => (
                  <DetailsItem item={item} key={item.id} />
                ))}
              </Col>
              <Col sm={6} xl={12} xxl={6}>
                {stockDetails.slice(6).map(item => (
                  <DetailsItem item={item} key={item.id} />
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CompanyProfileDescriptionCard;
