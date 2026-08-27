import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import Rating from 'components/base/Rating';
import ProductColorNav from 'components/navs/ProductColorNav';
import { productColorVariants } from 'data/e-commerce';
import { currencyFormat } from 'helpers/utils';
import ProductGallery from 'components/modules/e-commerce/ProductGallery';
import { useMemo, useState } from 'react';
import { Col, Row } from '@hummingbirdui/react';
import { Link } from 'react-router';
import QuantityButtons from 'components/common/QuantityButtons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShareAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductDescription = () => {
  const [selectedVariantKey, setSelectedVariantKey] = useState('blue');
  const [quantity, setQuantity] = useState(1);

  const selectedVariant = useMemo(() => {
    return productColorVariants.find(
      variant => variant.id === selectedVariantKey
    );
  }, [selectedVariantKey]);

  return (
    <Row className="g-8 mb-8 lg:mb-14">
      <Col xs={12} lg={6}>
        {selectedVariant && <ProductGallery images={selectedVariant.images} />}
        <div className="flex">
          <Button
            variant="outline-warning"
            size="lg"
            className="rounded-full w-full me-4 px-2 sm:px-6 text-md sm:text-base"
          >
            <FontAwesomeIcon icon={faHeart} className="me-2" />
            Add to wishlist
          </Button>
          <Button
            variant="warning"
            size="lg"
            className="rounded-full w-full text-md sm:text-base"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
            Add to cart
          </Button>
        </div>
      </Col>
      <Col xs={12} lg={6}>
        <div className="flex flex-col justify-between h-full">
          <div className="mb-4">
            <div className="flex flex-wrap">
              <div className="me-2">
                <Rating readonly initialValue={5} />
              </div>
              <p className="text-primary font-semibold mb-2">
                6548 People rated and reviewed
              </p>
            </div>
            <h3 className="mb-4 leading-sm">
              24" iMac® with Retina 4.5K display - Apple M1 8GB Memory - 256GB
              SSD - w/Touch ID (Latest Model) - Blue
            </h3>
            <div className="flex flex-wrap items-start mb-4">
              <span className="badge bg-success text-md rounded-full me-2 font-semibold">
                #1 Best seller
              </span>
              <Link to="#!" className="font-semibold">
                in Phoenix sell analytics 2021
              </Link>
            </div>
            <div className="flex flex-wrap items-center">
              <h1 className="me-4">{currencyFormat(1349.99)}</h1>
              <p className="text-soft line-through text-xl mb-0 me-4">
                {currencyFormat(1499.99)}
              </p>
              <p className="text-warning font-extrabold text-xl mb-0">10% off</p>
            </div>
            <p className="text-success font-semibold text-lg mb-2"> In stock</p>
            <p className="mb-2 text-muted">
              <strong className="text-highlight">
                Do you want it on Saturday, July 29th?
              </strong>{' '}
              Choose{' '}
              <strong className="text-highlight">
                Saturday Delivery{' '}
              </strong>
              at checkout if you want your order delivered within 12 hours 43
              minutes,{' '}
              <Link className="font-bold" to="#!">
                Details.{' '}
              </Link>
              <strong className="text-highlight">
                Gift wrapping is available.
              </strong>
            </p>
            <p className="text-danger-dark font-bold mb-8 lg:mb-0">
              Special offer ends in 23:00:45 hours
            </p>
          </div>

          <div>
            <div className="mb-4">
              <p className="font-semibold mb-2 text-default">
                Color :{' '}
                <span className="text-emphasis">
                  {selectedVariant?.name}
                </span>
              </p>
              <ProductColorNav
                selectedVariantKey={selectedVariantKey}
                setSelectedVariantKey={setSelectedVariantKey}
              />
            </div>
            <div className="row g-4 sm:g-8 items-end">
              <div className="col-12 sm:col-auto">
                <p className="font-semibold mb-2 text-default">Size : </p>
                <div className="flex items-center">
                  <select className="form-select w-auto">
                    <option value="44">44</option>
                    <option value="22">22</option>
                    <option value="18">18</option>
                  </select>
                  <a className="ms-2 text-md font-semibold" href="#!">
                    Size chart
                  </a>
                </div>
              </div>
              <div className="col-12 sm:col-auto flex-1">
                <p className="font-semibold mb-2 text-default">Quantity : </p>
                <div className="flex justify-between items-end">
                  <QuantityButtons
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                  <Button variant="phoenix" color="primary" className="px-4 border-0">
                    <FontAwesomeIcon icon={faShareAlt} className="text-lg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDescription;
