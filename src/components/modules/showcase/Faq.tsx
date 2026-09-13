import classNames from 'classnames';
import { showcaseFaqs } from 'data/showcase';
import { Accordion, Col, Row } from 'react-bootstrap';

const Faq = () => {
  return (
    <section className="pt-16 sm:pt-28">
      <div className="container-small">
        <Row className="flex-center">
          <Col xs={12} xl={7}>
            <h2 className="text-center mb-10 sm:mb-18">
              Frequently asked questions
            </h2>
            <Accordion
              className="border-to border-translucentp"
              defaultActiveKey="0"
            >
              {showcaseFaqs.map((faq, index) => (
                <Accordion.Item
                  className={classNames('border-b border-subtle')}
                  eventKey={String(index)}
                  key={faq.id}
                >
                  <Accordion.Button className="text-lg">
                    {faq.question}
                  </Accordion.Button>
                  <Accordion.Body className="pt-0">{faq.answer}</Accordion.Body>
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
