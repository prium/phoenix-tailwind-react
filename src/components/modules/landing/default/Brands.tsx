import { cn } from '@hummingbirdui/react';

import netflix from 'assets/img/brand2/netflix-n.png';
import blender from 'assets/img/brand2/blender.png';
import upwork from 'assets/img/brand2/upwork.png';
import facebook from 'assets/img/brand2/facebook-f.png';
import pocket from 'assets/img/brand2/pocket.png';
import mailBluster from 'assets/img/brand2/mail-bluster-1.png';
import discord from 'assets/img/brand2/discord.png';
import google from 'assets/img/brand2/google-g.png';

/** Cell border classes, copied verbatim from the gold `+Brand` calls. */
const brands = [
  {
    image: netflix,
    className: 'border-dashed border-b border-subtle border-e'
  },
  {
    image: blender,
    className: 'border-dashed border-b border-subtle md:border-e'
  },
  {
    image: upwork,
    className: 'border-dashed border-b border-subtle border-e md:border-e'
  },
  {
    image: facebook,
    className: 'border-dashed border-b border-subtle lg:border-e-0'
  },
  {
    image: pocket,
    className: 'border-dashed border-e border-b border-subtle md:border-b-0'
  },
  {
    image: mailBluster,
    className: 'border-dashed md:border-e border-b border-subtle md:border-b-0'
  },
  { image: discord, className: 'border-dashed border-e border-subtle' },
  { image: google, className: 'border-dashed lg:border-e-0 border-subtle' }
];

export interface BrandsProps {
  /** section classes — the default landing adds `py-8 xl:pt-26 bg-soft` */
  className?: string;
  /** the default landing stretches the logos (`w-full`), the alternate does not */
  imageClassName?: string;
}

/** `+Brands` in landing-1/Brands.pug and landing-2/Brands.pug. */
const Brands = ({ className, imageClassName }: BrandsProps) => (
  <section className={className}>
    <div className="container-small lg:px-12 2xl:px-4">
      <div className="row g-0">
        {brands.map(brand => (
          <div className="col-6 md:col-3" key={brand.image}>
            <div
              className={cn(
                'p-2 lg:p-8 flex flex-center h-full',
                brand.className
              )}
            >
              <img src={brand.image} alt="" className={imageClassName} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Brands;
