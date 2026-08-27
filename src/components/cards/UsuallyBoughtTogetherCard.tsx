import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SuggestedProductType } from 'data/e-commerce/products';
import { currencyFormat } from 'helpers/utils';
import { useState } from 'react';
import { Card, cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { Link } from 'react-router';

const ProductListItem = ({
  product,
  className
}: {
  product: SuggestedProductType;
  className?: string;
}) => {
  const [checked, setChecked] = useState(product.checked);
  return (
    <div className={cn('flex items-center', className)}>
      <div className="form-check mb-0">
        <input
          type="checkbox"
          className="form-check-input"
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        />
      </div>
      <Link to="/apps/e-commerce/customer/product-details" className="shrink-0">
        <img
          className="border border-dashed border-light rounded-md"
          src={product.img}
          width="53"
          alt=""
        />
      </Link>
      <div className="ms-2">
        <Link className="text-md font-bold line-clamp-2 mb-2" to="#!">
          {product.name}
        </Link>
        <h5>{currencyFormat(product.price)}</h5>
      </div>
    </div>
  );
};

/** `+ProductDetailsCard` in phoenix-tailwind product-details/ProductDetailsCard.pug */
const UsuallyBoughtTogetherCard = ({
  className,
  products
}: {
  className?: string;
  products: SuggestedProductType[];
}) => {
  return (
    <Card className={className}>
      <Card.Body>
        <h5 className="text-emphasis">Usually Bought Together</h5>
        <div className="w-3/4">
          <p className="text-subtle text-md font-bold line-clamp-1">
            with 24" iMac® with Retina 4.5K display - Apple M1 8GB Memory -
            256GB SSD - w/Touch ID (Latest Model) - Blue
          </p>
        </div>
        <div className="border-dashed border-y border-light py-6">
          {products.map((product, index) => (
            <ProductListItem
              product={product}
              key={product.id}
              className={index === products.length - 1 ? 'mb-0' : 'mb-8'}
            />
          ))}
        </div>
        <div className="flex items-end justify-between pt-4">
          <div>
            <h5 className="mb-2 text-subtle/85">Total</h5>
            <h4 className="mb-0 text-emphasis">{currencyFormat(958.99)}</h4>
          </div>
          <Button variant="outline" color="warning">
            Add 3 items to cart
            <FontAwesomeIcon icon={faShoppingCart} className="ms-2" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UsuallyBoughtTogetherCard;
