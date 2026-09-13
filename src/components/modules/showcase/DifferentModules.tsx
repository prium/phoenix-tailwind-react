import { Row, cn } from '@hummingbirdui/react';
import spotIllustration31 from 'assets/img/spot-illustrations/31.png';
import module1 from 'assets/img/sections/module-1.png';
import module2 from 'assets/img/sections/module-2.png';
import module3 from 'assets/img/sections/module-3.png';
import module4 from 'assets/img/sections/module-4.png';
import module5 from 'assets/img/sections/module-5.png';
import module6 from 'assets/img/sections/module-6.png';
import module7 from 'assets/img/sections/module-7.png';
import module8 from 'assets/img/sections/module-8.png';
import module9 from 'assets/img/sections/module-9.png';
import module10 from 'assets/img/sections/module-10.png';
import module11 from 'assets/img/sections/module-11.png';
import module12 from 'assets/img/sections/module-12.png';
import module13 from 'assets/img/sections/module-13.png';
import module14 from 'assets/img/sections/module-14.png';
import module15 from 'assets/img/sections/module-15.png';
import module16 from 'assets/img/sections/module-16.png';
import module17 from 'assets/img/sections/module-17.png';
import module18 from 'assets/img/sections/module-18.png';
import module19 from 'assets/img/sections/module-19.png';
import module20 from 'assets/img/sections/module-20.png';
import module21 from 'assets/img/sections/module-21.png';
import module22 from 'assets/img/sections/module-22.png';
import module23 from 'assets/img/sections/module-23.png';
import module24 from 'assets/img/sections/module-24.png';
import { BadgeBg } from 'components/base/Badge';
import { Link } from 'react-router';

interface Badge {
  label: string;
  bg: BadgeBg;
}

interface Module {
  name: string;
  images: string[];
  badge?: Badge;
  path?: string;
}

const modules: Module[] = [
  {
    name: 'E commerce',
    images: [module4, module3, module2, module1],
    path: '/'
  },
  {
    name: 'Project Management',
    images: [module8, module7, module6, module5],
    path: '/dashboard/project-management'
  },
  {
    name: 'CRM',
    images: [module12, module11, module10, module9],
    path: '/dashboard/crm'
  },
  {
    name: 'Booking',
    images: [module16, module15, module14, module13],
    path: '/dashboard/travel-agency'
  },
  {
    name: 'Social',
    images: [module24, module23, module22, module21],
    path: '/apps/social/feed'
  },
  {
    name: 'Stock',
    images: [module20, module19, module18, module17],
    path: '/dashboard/stock',
    badge: {
      label: 'New',
      bg: 'warning'
    }
  }
];

const ModulesItem = ({ item }: { item: Module }) => (
  <Link
    to={item.path || '#!'}
    className={cn(
      item.badge && 'new',
      'lg:col-6 module-variant-container no-underline'
    )}
  >
    {item.badge && <h1 className="module-badge">{item.badge.label}</h1>}
    <h2 className="module-title relative">{item.name}</h2>
    <div className="image-container">
      {item.images.map((image, idx) => (
        <div className="image" key={idx}>
          <img src={image} alt="" className="w-full" />
        </div>
      ))}
    </div>
  </Link>
);

const DifferentModules = () => {
  return (
    <section className="pt-18">
      <div className="container-fluid">
        <h2 className="text-highlight font-normal leading-sm text-center mb-20">
          Different
          <span className="text-primary relative font-black inline-flex ms-2">
            modules
            <img
              src={spotIllustration31}
              alt=""
              className="text-illustration-underline"
            />
          </span>{' '}
          dedicated for different purposes
        </h2>
        <Row>
          {modules.map((item, index) => (
            <ModulesItem key={index} item={item} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default DifferentModules;
