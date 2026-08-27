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
      className={`btn bg-soft w-100 px-3 pt-4 pb-3 text-base ${
        subCategoryActiveKey === category.id && 'active'
      }`}
    >
      <FontAwesomeIcon
        icon={category.icon}
        className="category-icon text-muted text-xl"
      />
      <span className="block text-xl font-black lh-1 text-default mt-3 mb-2">
        {category.name}
      </span>
      <span className="block text-default font-normal mb-0 text-md">
        {category.description}
      </span>
    </Nav.Link>
  );
};

export default FaqCategoryCard;
