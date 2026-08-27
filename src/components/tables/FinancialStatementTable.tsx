import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Table, Collapse } from 'react-bootstrap';
import Button from 'components/base/Button';

const FinancialStatementTable = () => {
  const [openOperating, setOpenOperating] = useState(true);
  return (
    <div className="scrollbar table-responsive">
      <Table className=" border-t border-light text-md mb-0">
        <thead>
          <tr className="uppercase">
            <th className="font-bold py-4" style={{ minWidth: '22rem' }}>
              Breakdown
            </th>
            <th
              className="font-bold text-center bg-subtle py-4"
              style={{ minWidth: '7.5rem' }}
            >
              ttm
            </th>
            <th
              className="font-bold text-center py-4"
              style={{ minWidth: '7.5rem' }}
            >
              2023-12-31
            </th>
            <th
              className="font-bold text-center bg-subtle py-4"
              style={{ minWidth: '7.5rem' }}
            >
              2022-12-31
            </th>
            <th
              className="font-bold text-center py-4"
              style={{ minWidth: '7.5rem' }}
            >
              2021-12-31
            </th>
            <th
              className="font-bold text-center bg-subtle py-4"
              style={{ minWidth: '7.5rem' }}
            >
              2020-12-31
            </th>
          </tr>
        </thead>
        <tbody className="text-center font-semibold">
          <tr>
            <td className="text-start">Total Revenue</td>
            <td className="bg-subtle">5,40,512</td>
            <td>5,21,250</td>
            <td className="bg-subtle">4,55,579</td>
            <td>3,93,488</td>
            <td className="bg-subtle">3,40,199</td>
          </tr>

          <tr>
            <td className="text-start">Cost of Revenue</td>
            <td className="bg-subtle">90,010</td>
            <td>86,012</td>
            <td className="bg-subtle">75,221</td>
            <td>60,812</td>
            <td className="bg-subtle">47,164</td>
          </tr>

          <tr>
            <td className="text-start">Gross Profit</td>
            <td className="bg-subtle">4,50,502</td>
            <td>4,35,238</td>
            <td className="bg-subtle">3,80,358</td>
            <td>3,32,676</td>
            <td className="bg-subtle">2,93,035</td>
          </tr>

          <tr>
            <td className="text-start font-bold">
              <Button
                className="btn px-0 block collapse-indicator py-0"
                onClick={() => setOpenOperating(!openOperating)}
                aria-expanded={openOperating}
                aria-controls="collapseOperating"
              >
                <div className="flex items-center gap-1">
                  <div className="text-md text-highlight">
                    Operating Expenses
                  </div>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="toggle-icon text-muted"
                  />
                </div>
              </Button>
            </td>
            <td className="bg-subtle"></td>
            <td></td>
            <td className="bg-subtle"></td>
            <td></td>
            <td className="bg-subtle"></td>
          </tr>

          <tr>
            <td colSpan={6} className="py-0 border-b-0">
              <Collapse in={openOperating}>
                <div id="collapseOperating">
                  <Table className="mb-0">
                    <tbody>
                      <tr className="bg-primary-subtle">
                        <td
                          className="text-start ps-4 xl:ps-6"
                          style={{ minWidth: '22rem' }}
                        >
                          Selling General and Administration
                        </td>
                        <td
                          className="bg-subtle"
                          style={{ minWidth: '7.5rem' }}
                        >
                          33,981
                        </td>
                        <td style={{ minWidth: '7.5rem' }}>40,445</td>
                        <td
                          className="bg-subtle"
                          style={{ minWidth: '7.5rem' }}
                        >
                          28,598
                        </td>
                        <td style={{ minWidth: '7.5rem' }}>37,770</td>
                        <td
                          className="bg-subtle"
                          style={{ minWidth: '7.5rem' }}
                        >
                          31,635
                        </td>
                      </tr>

                      <tr className="font-bold bg-primary-subtle">
                        <td className="text-start font-black ps-4 xl:ps-6">
                          Total Operating Expenses
                        </td>
                        <td className="bg-subtle">35,464</td>
                        <td>42,712</td>
                        <td className="bg-subtle">31,063</td>
                        <td>39,720</td>
                        <td className="bg-subtle">33,354</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Collapse>
            </td>
          </tr>

          <tr className="font-bold">
            <td className="text-start font-black">Operating Income or Loss</td>
            <td className="bg-subtle">4,15,038</td>
            <td>3,92,526</td>
            <td className="bg-subtle">3,49,295</td>
            <td>2,92,956</td>
            <td className="bg-subtle">2,59,681</td>
          </tr>

          <tr>
            <td className="text-start">Interest Expense</td>
            <td className="bg-subtle">81,305</td>
            <td>72,864</td>
            <td className="bg-subtle">45,183</td>
            <td>39,393</td>
            <td className="bg-subtle">33,610</td>
          </tr>

          <tr>
            <td className="text-start">Total Other Income/Expenses Net</td>
            <td className="bg-subtle">-98,893</td>
            <td>-1,92,510</td>
            <td className="bg-subtle">-2,07,796</td>
            <td>12,98,095</td>
            <td className="bg-subtle">2,72,800</td>
          </tr>

          <tr>
            <td className="text-start">Income Before Tax</td>
            <td className="bg-subtle">2,36,758</td>
            <td>1,25,632</td>
            <td className="bg-subtle">88,256</td>
            <td>1,45,256</td>
            <td className="bg-subtle">2,45,563</td>
          </tr>

          <tr>
            <td className="text-start">Income Tax Expense</td>
            <td className="bg-subtle">7,256</td>
            <td>-9,653</td>
            <td className="bg-subtle">-69,586</td>
            <td>2,41,012</td>
            <td className="bg-subtle">4,25,365</td>
          </tr>

          <tr>
            <td className="text-start">Income from Continuing Operations</td>
            <td className="bg-subtle">2,12,356</td>
            <td>1,45,258</td>
            <td className="bg-subtle">25,365</td>
            <td>45,362</td>
            <td className="bg-subtle">4,16,259</td>
          </tr>

          <tr className="font-bold">
            <td className="text-start font-black">Net Income</td>
            <td className="bg-subtle">2,25,653</td>
            <td>4,58,693</td>
            <td className="bg-subtle">1,25,489</td>
            <td>5,36,125</td>
            <td className="bg-subtle">47,852</td>
          </tr>

          <tr>
            <td className="text-start">Net Income Available to Common</td>
            <td className="bg-subtle">2,25,235</td>
            <td>1,36,665</td>
            <td className="bg-subtle">1,55,256</td>
            <td>1,25,365</td>
            <td className="bg-subtle">3,65,259</td>
          </tr>

          <tr>
            <td className="text-start">Basic EPS</td>
            <td className="bg-subtle">-0.25</td>
            <td>2.15</td>
            <td className="bg-subtle">2.36</td>
            <td>20.47</td>
            <td className="bg-subtle">6.85</td>
          </tr>

          <tr>
            <td className="text-start">Diluted EPS</td>
            <td className="bg-subtle">-0.25</td>
            <td>2.14</td>
            <td className="bg-subtle">2.36</td>
            <td>20.47</td>
            <td className="bg-subtle">6.97</td>
          </tr>

          <tr>
            <td className="text-start">Basic Average Shares</td>
            <td className="bg-subtle">63,785</td>
            <td>63,700</td>
            <td className="bg-subtle">64,582</td>
            <td>64,142</td>
            <td className="bg-subtle">63,125</td>
          </tr>

          <tr>
            <td className="text-start">Diluted Average Shares</td>
            <td className="bg-subtle">63,455</td>
            <td>63,900</td>
            <td className="bg-subtle">65,256</td>
            <td>64,400</td>
            <td className="bg-subtle">61,475</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default FinancialStatementTable;
