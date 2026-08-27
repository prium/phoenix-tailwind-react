import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from '@hummingbirdui/react';
import QuantityButtons from 'components/common/QuantityButtons';
import { CartItemType } from 'data/e-commerce/products';
import { currencyFormat } from 'helpers/utils';
import { useMemo, useState } from 'react';
import { Link } from 'react-router';

interface EcomCartTableProps {
  products: CartItemType[];
}

/** `+CartTable` in phoenix-tailwind mixins/e-commerce/cart/CartTable.pug */
const EcomCartTable = ({ products }: EcomCartTableProps) => {
  return (
    <div className="overflow-x-auto scrollbar -mx-1 px-1">
      <Table className="text-md mb-0 border-t border-light">
        <Table.Header>
          <Table.Row>
            <Table.Head className="whitespace-nowrap align-middle text-sm min-w-[63px]" />
            <Table.Head className="min-w-62.5 whitespace-nowrap align-middle">
              PRODUCTS
            </Table.Head>
            <Table.Head className="w-20 align-middle">COLOR</Table.Head>
            <Table.Head className="w-37.5 align-middle">SIZE</Table.Head>
            <Table.Head className="w-75 align-middle text-end">PRICE</Table.Head>
            <Table.Head className="w-50 align-middle ps-8">QUANTITY</Table.Head>
            <Table.Head className="w-62.5 align-middle text-end">TOTAL</Table.Head>
            <Table.Head className="pe-0 text-end align-middle" />
          </Table.Row>
        </Table.Header>
        <Table.Body className="list" id="cart-table-body">
          {products.map(product => (
            <EcomCartTableRow product={product} key={product.id} />
          ))}

          <Table.Row className="cart-table-row btn-reveal-trigger">
            <Table.Cell
              className="text-emphasis font-semibold ps-0 text-base"
              colSpan={6}
            >
              Items subtotal :
            </Table.Cell>
            <Table.Cell className="text-emphasis font-bold text-end text-base">
              $691
            </Table.Cell>
            <Table.Cell />
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

const EcomCartTableRow = ({ product }: { product: CartItemType }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const total = useMemo(() => product.price * quantity, [quantity]);

  return (
    <Table.Row className="cart-table-row btn-reveal-trigger">
      <Table.Cell className="align-middle whitespace-nowrap py-0">
        <Link
          to="/apps/e-commerce/customer/product-details"
          className="block border border-light rounded-md"
        >
          <img src={product.image} alt={product.name} width={53} />
        </Link>
      </Table.Cell>
      <Table.Cell className="products align-middle">
        <Link className="font-semibold mb-0 line-clamp-2" to="#!">
          {product.name}
        </Link>
      </Table.Cell>
      <Table.Cell className="color align-middle whitespace-nowrap text-md text-default">
        {product.color}
      </Table.Cell>
      <Table.Cell className="size align-middle whitespace-nowrap text-subtle text-md font-semibold">
        {product.size}
      </Table.Cell>
      <Table.Cell className="price align-middle text-default text-md font-semibold text-end">
        {currencyFormat(product.price)}
      </Table.Cell>
      <Table.Cell className="quantity align-middle text-base ps-8">
        <QuantityButtons
          type="secondary"
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </Table.Cell>
      <Table.Cell className="total align-middle font-bold text-highlight text-end">
        {currencyFormat(total)}
      </Table.Cell>
      <Table.Cell className="align-middle whitespace-nowrap text-end pe-0 ps-4">
        <button
          type="button"
          className="btn btn-sm text-subtle/85 hover:text-subtle me-2"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </Table.Cell>
    </Table.Row>
  );
};

export default EcomCartTable;
