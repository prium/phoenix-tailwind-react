import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import Section from 'components/base/Section';
import EcomInvoiceTable from 'components/tables/EcomInvoiceTable';
import { Col, Row } from '@hummingbirdui/react';
import phoenixMart from 'assets/img/logos/phoenix-mart.png';
import { defaultBreadcrumbItems } from 'data/commonData';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import {
  faBagShopping,
  faDownload,
  faPrint
} from '@fortawesome/free-solid-svg-icons';
const Invoice = () => {
  return (
    <div className="pt-8 pb-16 bg-soft dark:bg-default border-t">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <div className="flex justify-between items-end mb-6">
          <h2 className="mb-0">Invoice</h2>
          <div>
            <Button variant="phoenix" color="secondary" className="me-2">
              <FontAwesomeIcon icon={faDownload} className="sm:me-2" />
              <span className="hidden sm:inline-block">Download Invoice</span>
            </Button>
            <Button variant="phoenix" color="secondary">
              <FontAwesomeIcon icon={faPrint} className="sm:me-2" />
              <span className="hidden sm:inline-block">Print</span>
            </Button>
          </div>
        </div>

        <div className="bg-default dark:bg-soft p-6 mb-6 rounded-md">
          <Row className="g-6">
            <Col xs={12} lg={3}>
              <Row className="g-6 lg:g-2">
                <Col xs={12} sm={6} lg={12}>
                  <Row className=" items-center g-0">
                    <Col xs="auto" lg={6} xl={5}>
                      <h6 className="mb-0 me-4">Invoice No :</h6>
                    </Col>
                    <Col xs="auto" lg={6} xl={7}>
                      <p className="text-md text-muted font-semibold mb-0">
                        #FLR978282
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={6} lg={12}>
                  <Row className=" items-center g-0">
                    <Col xs="auto" lg={6} xl={5}>
                      <h6 className="me-4">Invoice Date :</h6>
                    </Col>
                    <Col xs="auto" lg={6} xl={7}>
                      <p className="text-md text-muted font-semibold mb-0">
                        19.06.2019
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={6} lg={5}>
              <Row className="g-6 lg:gy-8">
                <Col xs={12} lg={8}>
                  <h6 className="mb-2 me-4">Sold by :</h6>
                  <p className="text-md text-muted font-semibold mb-0">
                    PhoenixMart
                    <br />
                    36 greendowm road, California, Usa
                  </p>
                </Col>
                <Col xs={12} lg={4}>
                  <h6 className="mb-2"> PAN No :</h6>
                  <p className="text-md text-muted font-semibold mb-0">
                    XVCJ963782008
                  </p>
                </Col>
                <Col xs={12} lg={4}>
                  <h6 className="mb-2"> GST Reg No :</h6>
                  <p className="text-md text-muted font-semibold mb-0">
                    IX9878123TC
                  </p>
                </Col>
                <Col xs={12} lg={4}>
                  <h6 className="mb-2"> Order No :</h6>
                  <p className="text-md text-muted font-semibold mb-0">
                    A-8934792734
                  </p>
                </Col>
                <Col xs={12} lg={4}>
                  <h6 className="mb-2"> Order Date :</h6>
                  <p className="text-md text-muted font-semibold mb-0">
                    19.06.2019
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Row className="g-6">
                <Col xs={12} lg={6}>
                  <h6 className="mb-2"> Billing Address :</h6>
                  <div className="text-md text-muted font-semibold mb-0">
                    <p className="mb-2">John Doe,</p>
                    <p className="mb-2">
                      36, Gree Donwtonwn,
                      <br />
                      Golden road, FL,
                    </p>
                    <p className="mb-2">johndoe@jeemail.com</p>
                    <p className="mb-0">+334933029030</p>
                  </div>
                </Col>
                <Col xs={12} lg={6}>
                  <h6 className="mb-2"> Shipping Address :</h6>
                  <div className="text-md text-muted font-semibold mb-0">
                    <p className="mb-2">John Doe,</p>
                    <p className="mb-2">
                      36, Gree Donwtonwn,
                      <br />
                      Golden road, FL,
                    </p>
                    <p className="mb-2">johndoe@jeemail.com</p>
                    <p className="mb-0">+334933029030</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <EcomInvoiceTable />

        <div className="text-end py-16 border-b">
          <img className="mb-4" src={phoenixMart} alt="phoenix-mart" />
          <h4>Authorized Signatory</h4>
        </div>

        <div className="text-center py-6 mb-16">
          <p className="mb-0">
            Thank you for buying with Phoenix | 2022 ©{' '}
            <a href="https://themewagon.com/">Themewagon</a>
          </p>
        </div>

        <div className="flex justify-between">
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faBagShopping} className="me-2" />
            Browse more items
          </button>
          <div>
            <button className="btn btn-phoenix-secondary me-2">
              <FontAwesomeIcon icon={faDownload} className="sm:me-2" />
              <span className="hidden sm:inline-block">Download Invoice</span>
            </button>
            <button className="btn btn-phoenix-secondary">
              <FontAwesomeIcon icon={faPrint} className="sm:me-2" />
              <span className="hidden sm:inline-block">Print</span>
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Invoice;
