import Scrollbar from 'components/base/Scrollbar';

const EcomInvoiceTable = () => {
  return (
    <Scrollbar style={{ maxHeight: '100%' }}>
      <table className="table text-md text-default mb-0">
        <thead className="bg-muted">
          <tr>
            <th scope="col" style={{ width: 24 }} />
            <th scope="col" style={{ minWidth: 60 }}>
              SL NO.
            </th>
            <th scope="col" style={{ minWidth: 360 }}>
              Products
            </th>
            <th className="ps-8" scope="col" style={{ minWidth: 150 }}>
              Color
            </th>
            <th scope="col" style={{ width: 60 }}>
              Size
            </th>
            <th className="text-end" scope="col" style={{ width: 80 }}>
              Quantity
            </th>
            <th className="text-end" scope="col" style={{ width: 100 }}>
              Price
            </th>
            <th className="text-end" scope="col" style={{ width: 138 }}>
              Tax Rate
            </th>
            <th className="text-center" scope="col" style={{ width: 80 }}>
              Tax Type
            </th>
            <th className="text-end" scope="col" style={{ minWidth: 92 }}>
              Tax
            </th>
            <th className="text-end" scope="col" style={{ minWidth: 60 }}>
              Total
            </th>
            <th scope="col" style={{ width: 24 }} />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-0" />
            <td className="align-middle">1</td>
            <td className="align-middle">
              <p className="line-clamp-1 mb-0 font-semibold">
                Fitbit Sense Advanced Smartwatch with Tools for Heart Health,
                Stress Management &amp; Skin Temperature Trends,
                Carbon/Graphite, One Size (S &amp; L Bands)
              </p>
            </td>
            <td className="align-middle ps-8">Glossy black</td>
            <td className="align-middle text-subtle font-semibold">XL</td>
            <td className="align-middle text-end text-highlight font-semibold">
              2
            </td>
            <td className="align-middle text-end font-semibold">$299</td>
            <td className="align-middle text-end">2.5%</td>
            <td className="align-middle text-center font-semibold">VAT</td>
            <td className="align-middle text-end font-semibold">$199</td>
            <td className="align-middle text-end font-semibold">$398</td>
            <td className="border-0" />
          </tr>
          <tr>
            <td className="border-0" />
            <td className="align-middle">2</td>
            <td className="align-middle">
              <p className="line-clamp-1 mb-0 font-semibold">
                2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray
              </p>
            </td>
            <td className="align-middle ps-8">Black</td>
            <td className="align-middle text-subtle font-semibold">Pro</td>
            <td className="align-middle text-end text-highlight font-semibold">
              1
            </td>
            <td className="align-middle text-end font-semibold">$199</td>
            <td className="align-middle text-end">2.75%</td>
            <td className="align-middle text-center font-semibold">VAT</td>
            <td className="align-middle text-end font-semibold">$199</td>
            <td className="align-middle text-end font-semibold">$398</td>
            <td className="border-0" />
          </tr>
          <tr>
            <td className="border-0" />
            <td className="align-middle border-0">1</td>
            <td className="align-middle border-0">
              <p className="line-clamp-1 mb-0 font-semibold">
                PlayStation 5 DualSense Wireless Controller
              </p>
            </td>
            <td className="align-middle ps-8 border-0">White</td>
            <td className="align-middle text-subtle font-semibold border-0">
              Regular
            </td>
            <td className="align-middle text-end text-highlight font-semibold border-0">
              1
            </td>
            <td className="align-middle text-end font-semibold border-0">$185</td>
            <td className="align-middle text-end border-0">3.5%</td>
            <td className="align-middle text-center font-semibold border-0">
              VAT
            </td>
            <td className="align-middle text-end font-semibold border-0">$199</td>
            <td className="align-middle text-end font-semibold border-0">$398</td>
            <td className="border-0" />
          </tr>
          <tr className="bg-muted">
            <td />
            <td className="align-middle font-semibold" colSpan={9}>
              Subtotal
            </td>
            <td className="align-middle text-end font-bold">$398</td>
            <td />
          </tr>
          <tr>
            <td className="border-0" />
            <td colSpan={6} />
            <td className="align-middle font-bold ps-30" colSpan={2}>
              Shipping Cost
            </td>
            <td className="align-middle text-end font-semibold" colSpan={2}>
              $50
            </td>
            <td className="border-0" />
          </tr>
          <tr>
            <td />
            <td colSpan={6} />
            <td className="align-middle font-bold ps-30" colSpan={2}>
              Discount/Voucher
            </td>
            <td
              className="align-middle text-end font-semibold text-danger"
              colSpan={2}
            >
              -$50
            </td>
            <td />
          </tr>
          <tr className="bg-muted">
            <td
              className="align-middle ps-6 font-bold text-highlight"
              colSpan={3}
            >
              Grand Total
            </td>
            <td
              className="align-middle font-bold text-highlight"
              colSpan={7}
            >
              Three Hundred and Ninenty Eight USD
            </td>
            <td className="align-middle text-end font-bold">$398</td>
            <td />
          </tr>
        </tbody>
      </table>
    </Scrollbar>
  );
};

export default EcomInvoiceTable;
