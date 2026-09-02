import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaqCategory } from 'data/faq';
import { useFaqTabContext } from 'providers/FaqTabProvider';
import React from 'react';
import { Nav } from 'react-bootstrap';

const FaqCategoryCard = ({ category }: { category: FaqCategory }) => {
  const { subCategoryActiveKey } = useFaqTabContext();
  return (
    <Nav.Link
      eventKey={category.id}
      className={`btn bg-soft w-full px-4 pt-6 pb-4 text-base ${
        subCategoryActiveKey === category.id && 'active'
      }`}
    >
      <FontAwesomeIcon
        icon={category.icon}
        className="category-icon text-muted text-xl"
      />
      <span className="block text-xl font-black leading-none text-default mt-4 mb-2">
        {category.name}
      </span>
      <span className="block text-default font-normal mb-0 text-md">
        {category.description}
      </span>
    </Nav.Link>
  );
};

export default FaqCategoryCard;
