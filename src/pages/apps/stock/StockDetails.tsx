import { useState } from 'react';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import StockDetailsMainContent from 'components/modules/stock/stock-details/StockDetailsMainContent';
import StockDetailsSidebarOffcanvas from 'components/modules/stock/stock-details/StockDetailsSidebarOffcanvas';
import { defaultBreadcrumbItems } from 'data/commonData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye } from '@fortawesome/free-solid-svg-icons';

/** Gold: ../phoenix-tailwind/src/pug/apps/stock/stock-details.pug */
const StockDetails = () => {
  const [openOffcanvas, setOpenOffcanvas] = useState(false);
  return (
    <>
      <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
      <h2 className="mb-6 text-emphasis">Stock Details</h2>
      <div className="row pb-16 gx-6">
        <div className="xl:col-7 lg:pe-2 flex-1">
          <h4>Apple Inc. (AAPL)</h4>
          <h6 className="font-semibold mb-6">
            NASDAQ: AAPL · Real-Time Price · USD
          </h6>
          <StockDetailsMainContent />
          <div className="row gap-4 g-0 flex-between-center -mx-6 px-6 lg:-mx-10 lg:px-10 bg-muted py-4 border-y mt-6 sticky bottom-0 z-3 xl:hidden stock-details-footer">
            <div className="col-auto">
              <div className="flex items-center gap-2">
                <h3 className="mb-0 text-default">$226.51</h3>
                <div className="badge badge-phoenix-success">+0.62 (0.27%)</div>
              </div>
            </div>
            <div className="col-12 sm:col-auto">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-primary flex-1"
                  id="offcanvasStockDetails"
                  aria-controls="stockDetailsSidebar"
                  onClick={() => setOpenOffcanvas(true)}
                >
                  Buy Share
                </button>
                <button type="button" className="btn btn-phoenix-secondary">
                  <FontAwesomeIcon icon={faClock} />
                </button>
                <button type="button" className="btn btn-phoenix-secondary">
                  <FontAwesomeIcon icon={faEye} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-5 top-stock-card-container">
          <StockDetailsSidebarOffcanvas
            open={openOffcanvas}
            setOpen={setOpenOffcanvas}
          />
        </div>
      </div>
    </>
  );
};

export default StockDetails;
