import {
  faChevronLeft,
  faCircle,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { FaqType, faqCategories } from 'data/faq';
import { useFaqTabContext } from 'providers/FaqTabProvider';

/** Gold: `.faq-subcategory-content.tab-content` and its `.tab-pane`s. */
const SubCategoryContent = () => {
  const { subCategoryActiveKey, setIsOpenOffcanvas } = useFaqTabContext();
  return (
    <div className="faq-subcategory-content tab-content">
      <div className="empty-header hidden md:block" />
      <Button
        variant="link"
        className="md:hidden my-10 text-base ps-0"
        onClick={() => setIsOpenOffcanvas(true)}
      >
        {' '}
        <FontAwesomeIcon
          icon={faChevronLeft}
          transform="up-2"
          className="text-md me-2"
        />
        Categories
      </Button>
      {faqCategories.map(category => (
        <div
          key={category.id}
          id={category.id}
          className={cn('tab-pane fade', {
            'active show': subCategoryActiveKey === category.id
          })}
        >
          <ul className="ps-0 list-none mb-0">
            {category.topFaqs.map(item => (
              <FaqItem key={item.question} item={item} type="topFaq" />
            ))}
          </ul>
          <hr className="border-t" />
          <ul className="faq-list ps-0 list-none">
            {category.faqs.map(item => (
              <FaqItem key={item.question} item={item} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const FaqItem = ({ item, type }: { item: FaqType; type?: string }) => {
  const topFaq = type === 'topFaq';
  return (
    <li className={topFaq ? 'flex gap-2 mb-10' : 'flex mt-10'}>
      <FontAwesomeIcon
        icon={topFaq ? faStar : faCircle}
        className={topFaq ? 'text-base text-primary' : undefined}
      />
      <div>
        <h4 className="mb-4 text-highlight">{item.question}</h4>
        <p
          className="mb-0 text-subtle"
          dangerouslySetInnerHTML={{ __html: item.answer }}
        />
      </div>
    </li>
  );
};

export default SubCategoryContent;
