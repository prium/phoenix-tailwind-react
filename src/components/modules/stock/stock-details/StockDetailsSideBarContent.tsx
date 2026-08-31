import { Dispatch, SetStateAction } from 'react';
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';
import Button from 'components/base/Button';
import Badge from 'components/base/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpRightFromSquare,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { currencyFormat, numberFormat } from 'helpers/utils';
import StockDetailsBuyAndSellForm from './StockDetailsBuyAndSellForm';
import { Link } from 'react-router';
import StockDetailsOptionChain from './StockDetailsOptionChain';

interface StockDetailsSideBarContentProps {
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const StockDetailsSideBarContent = ({
  setOpen
}: StockDetailsSideBarContentProps) => {
  return (
    <Card className="border-0 xl:border border-gray-300">
      <Card.Body>
        <Row className="g-0 flex-between-center mb-6">
          <Col xs="auto">
            <h4 className="text-highlight font-bold mb-0 text-center">
              Stock Details
            </h4>
          </Col>
          <Col xs="auto" className="xl:hidden">
            <Button
              variant="link"
              size="sm"
              className="text-base text-default"
              onClick={() => setOpen && setOpen(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          </Col>
        </Row>
        <Card className="border text-center bg-default mb-4">
          <Card.Body className="p-4">
            <h3 className="mb-2 leading-sm text-default flex items-center gap-2 justify-center">
              {currencyFormat(226.51, {
                minimumFractionDigits: 2
              })}
              <Badge variant="phoenix" bg="success" className="text-sm">
                +
                {numberFormat(0.62, 'standard', {
                  minimumFractionDigits: 2
                })}{' '}
                (
                {numberFormat(0.27, 'standard', {
                  minimumFractionDigits: 2
                })}
                %)
              </Badge>
            </h3>
            <h6 className="leading-sm text-default mb-2">
              Real time quote: Sep 24, 2024,{' '}
              <span className="whitespace-nowrap">1:34 PM</span>
            </h6>
            <Row className="py-4">
              <Col xs={6} className="border-e">
                <h6 className="leading-sm text-default">Bid x Size</h6>
                <h5 className="font-semibold text-default mb-0">
                  {numberFormat(226.51, 'standard', {
                    minimumFractionDigits: 2
                  })}
                  <span className="text-md">x 100</span>
                </h5>
              </Col>
              <Col xs={6}>
                <h6 className="leading-sm text-default">Ask x Size</h6>
                <h5 className="font-semibold text-default mb-0">
                  {numberFormat(226.51, 'standard', {
                    minimumFractionDigits: 2
                  })}
                  <span className="text-md">x 100</span>
                </h5>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Tab.Container defaultActiveKey="buy">
          <Nav variant="underline text-center gap-0 optionChainTableHeader mb-3">
            <Nav.Item className="w-1/2">
              <Nav.Link eventKey="buy">Buy</Nav.Link>
            </Nav.Item>
            <Nav.Item className="w-1/2">
              <Nav.Link eventKey="sell">Sell</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="mb-4">
            <Tab.Pane eventKey="buy">
              <StockDetailsBuyAndSellForm title="buy" />
            </Tab.Pane>
            <Tab.Pane eventKey="sell">
              <StockDetailsBuyAndSellForm title="sell" />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        <div className="flex flex-between-center border-y py-4 mb-6">
          <h5 className="text-default mb-0">Stock available</h5>
          <Link
            to="#!"
            className="flex items-center gap-2 link link-primary font-bold"
          >
            {numberFormat(32432234, 'standard')}
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </Link>
        </div>
        <h5 className="leading-sm text-center font-black">Options Chain</h5>
        <StockDetailsOptionChain />
      </Card.Body>
    </Card>
  );
};

export default StockDetailsSideBarContent;
