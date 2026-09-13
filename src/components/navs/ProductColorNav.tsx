import { Dispatch, SetStateAction } from 'react';
import { cn } from '@hummingbirdui/react';
import blueFront from 'assets/img/products/details/blue_front.png';
import blueBack from 'assets/img/products/details/blue_back.png';
import blueSide from 'assets/img/products/details/blue_side.png';
import redFront from 'assets/img/products/details/red_front.png';
import redBack from 'assets/img/products/details/red_back.png';
import redSide from 'assets/img/products/details/red_side.png';
import greenFront from 'assets/img/products/details/green_front.png';
import greenBack from 'assets/img/products/details/green_back.png';
import greenSide from 'assets/img/products/details/green_side.png';
import purpleFront from 'assets/img/products/details/purple_front.png';
import purpleBack from 'assets/img/products/details/purple_back.png';
import purpleSide from 'assets/img/products/details/purple_side.png';
import silverFront from 'assets/img/products/details/silver_front.png';
import silverBack from 'assets/img/products/details/silver_back.png';
import silverSide from 'assets/img/products/details/silver_side.png';
import yellowFront from 'assets/img/products/details/yellow_front.png';
import yellowBack from 'assets/img/products/details/yellow_back.png';
import yellowSide from 'assets/img/products/details/yellow_side.png';
import orangeFront from 'assets/img/products/details/orange_front.png';
import orangeBack from 'assets/img/products/details/orange_back.png';
import orangeSide from 'assets/img/products/details/orange_side.png';

type Variant = {
  id: string;
  variant: string;
  thumb: string;
  images: string[];
};

const colorVariants: Variant[] = [
  { id: 'blue', variant: 'Blue', thumb: blueFront, images: [blueFront, blueBack, blueSide] },
  { id: 'red', variant: 'Red', thumb: redFront, images: [redFront, redBack, redSide] },
  { id: 'green', variant: 'Green', thumb: greenFront, images: [greenFront, greenBack, greenSide] },
  { id: 'purple', variant: 'Purple', thumb: purpleFront, images: [purpleFront, purpleBack, purpleSide] },
  { id: 'silver', variant: 'Silver', thumb: silverFront, images: [silverFront, silverBack, silverSide] },
  { id: 'yellow', variant: 'Yellow', thumb: yellowFront, images: [yellowFront, yellowBack, yellowSide] },
  { id: 'orange', variant: 'Orange', thumb: orangeFront, images: [orangeFront, orangeBack, orangeSide] }
];

/** `[data-product-color-variants]` in phoenix-tailwind product-details/Details.pug */
const ProductColorNav = ({
  selectedVariantKey,
  setSelectedVariantKey
}: {
  selectedVariantKey: string;
  setSelectedVariantKey: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex">
      {colorVariants.map(variant => (
        <button
          type="button"
          key={variant.id}
          onClick={() => setSelectedVariantKey(variant.id)}
          className={cn('rounded-sm border me-2 p-0', {
            'border-primary': variant.id === selectedVariantKey,
            'border-subtle': variant.id !== selectedVariantKey
          })}
        >
          <img src={variant.thumb} width={38} alt={variant.variant} />
        </button>
      ))}
    </div>
  );
};

export default ProductColorNav;
