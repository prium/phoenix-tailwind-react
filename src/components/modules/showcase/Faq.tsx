import { Accordion, Col, Row, cn } from '@hummingbirdui/react';
import { showcaseFaqs } from 'data/showcase';
import { useState } from 'react';

/** `mixins/showcase/Faq.pug` — the gold opens the first panel. */
const Faq = () => {
  const [openItem, setOpenItem] = useState<string>(String(showcaseFaqs[0].id));

  return (
    <section className="pt-16 sm:pt-28">
      <div className="container-small">
        <Row className="flex-center">
          <Col xs={12} xl={7}>
            <h2 className="text-center mb-10 sm:mb-18">
              Frequently asked questions
            </h2>
            <Accordion
              type="single"
              collapsible
              value={openItem}
              onValueChange={setOpenItem}
            >
              {showcaseFaqs.map((faq, index) => (
                <Accordion.Item
                  key={faq.id}
                  value={String(faq.id)}
                  className={cn({ 'border-t border-subtle': index === 0 })}
                >
                  <Accordion.Header asChild>
                    <h2 id={`heading${faq.id}`}>
                      <Accordion.Trigger
                        className={cn('text-lg pb-4', {
                          // phoenix keys the active icon on `:not(.collapsed)`
                          collapsed: openItem !== String(faq.id)
                        })}
                      >
                        {faq.question}
                      </Accordion.Trigger>
                    </h2>
                  </Accordion.Header>
                  <Accordion.Content className="pt-0" id={`collapse${faq.id}`}>
                    {faq.answer}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Faq;
