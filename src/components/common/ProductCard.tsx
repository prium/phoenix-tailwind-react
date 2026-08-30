import { faCheck, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import Badge from 'components/base/Badge';
import Rating from 'components/base/Rating';
import { Product as ProductType } from 'data/e-commerce/products';
import { currencyFormat } from 'helpers/utils';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router';

/** `+Product` in phoenix-tailwind mixins/e-commerce/homepage/common.pug */
const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="relative no-underline product-card h-full group">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="border border-1 border-subtle rounded-lg relative mb-4">
            <button
              type="button"
              title={product.wishListed ? 'Remove from wishlist' : 'Add to wishlist'}
              className={cn(
                'btn btn-wish btn-wish-primary z-2 d-toggle-container absolute top-3 end-3',
                { active: product.wishListed }
              )}
            >
              {product.wishListed ? (
                <FontAwesomeIcon icon={faHeart} transform="down-1" />
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="d-block-hover"
                    transform="down-1"
                  />
                  <FontAwesomeIcon
                    icon={farHeart}
                    className="d-none-hover"
                    transform="down-1"
                  />
                </>
              )}
            </button>
            <img src={product.image} alt="" className="w-full rounded-lg" />
            {product.verified && (
              <Badge
                color="success"
                className="text-sm absolute bottom-3 start-3"
              >
                Verified
                <FontAwesomeIcon icon={faCheck} className="ms-1" />
              </Badge>
            )}
          </div>
          <Link
            to="/apps/e-commerce/customer/product-details"
            className="stretched-link"
          >
            <h6 className="mb-2 leading-sm line-clamp-3 group-hover:text-primary">
              {product.name}
            </h6>
          </Link>
          {product.rating && (
            <p className="text-md">
              <Rating readonly initialValue={product.rating} />
              {product.rated && (
                <span className="text-soft font-semibold ms-1">
                  ({product.rated} people rated)
                </span>
              )}
            </p>
          )}
        </div>
        <div>
          {product.extra && (
            <p className={cn(product.extraClass, 'text-md')}>{product.extra}</p>
          )}
          {product.extra2 && (
            <p className={cn(product.extra2Class, 'text-md')}>
              {product.extra2}
            </p>
          )}

          {product.salePrice && (
            <>
              {product.price ? (
                <div className="flex items-center mb-1">
                  <p className="me-2 text-default line-through mb-0">
                    {currencyFormat(product.price)}
                  </p>
                  <h3 className="text-emphasis mb-0">
                    {currencyFormat(product.salePrice)}
                  </h3>
                </div>
              ) : (
                <h3 className="text-emphasis">
                  {currencyFormat(product.salePrice)}
                </h3>
              )}
            </>
          )}

          {product.colors && (
            <p
              className={cn('text-subtle font-semibold text-md leading-none', {
                'mb-0': !product.dealEndTime
              })}
            >
              {product.colors} colors
            </p>
          )}

          {product.dealEndTime && (
            <p className="text-success font-bold text-md leading-none mb-0">
              Deal time ends in {product.dealEndTime}
            </p>
          )}

          {product.offer && (
            <h6 className="text-success leading-none mb-0">{product.offer} off</h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
