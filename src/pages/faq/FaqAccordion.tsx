import { Accordion, cn } from '@hummingbirdui/react';
import FaqCta from 'components/cta/FaqCta';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import { faqBreadcrumbItems, faqs } from 'data/faq';
import { Fragment, useState } from 'react';
import { Link } from 'react-router';

const FaqAccordion = () => {
  // The gold opens the first panel and lets it be closed again
  // (`data-bs-parent` + `.collapse.show`).
  const [openItem, setOpenItem] = useState(faqs[0].id);

  return (
    <div>
      <PageBreadcrumb items={faqBreadcrumbItems} />
      <h2 className="mb-8">FAQ</h2>
      <h5 className="mb-4">How can we help?</h5>
      <p className="text-subtle">
        Search for the topic you need help with or{' '}
        <Link to="#!">contact our support</Link>
      </p>
      <SearchBox placeholder="Search" className="mb-14 w-full! max-w-100" />
      <Accordion
        type="single"
        collapsible
        id="faqAccordion"
        value={openItem}
        onValueChange={setOpenItem}
      >
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={faq.id}
            value={faq.id}
            className={cn({ 'border-t': index === 0 })}
          >
            <Accordion.Header asChild>
              <h2 id={`heading${faq.id}`}>
                <Accordion.Trigger
                  className={cn('after:size-5 after:bg-center', {
                    // phoenix keys the active icon on `:not(.collapsed)`
                    collapsed: openItem !== faq.id
                  })}
                >
                  {faq.title.map((segment, i) => (
                    <Fragment key={segment}>
                      {i > 0 && <br className="sm:hidden" />}
                      {segment}
                    </Fragment>
                  ))}
                </Accordion.Trigger>
              </h2>
            </Accordion.Header>
            <Accordion.Content className="pt-0" id={`collapse${faq.id}`}>
              <span dangerouslySetInnerHTML={{ __html: faq.details }} />
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
      <FaqCta />
    </div>
  );
};

export default FaqAccordion;
