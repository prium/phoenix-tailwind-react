import { SwiperSlide } from 'swiper/react';
import classNames from 'classnames';
import Swiper from 'components/base/Swiper';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import {
  sidebarOptionChainDates,
  sidebarOptionChainTable
} from 'data/stock/stockDetails';

/** Gold: `+StockDetailsSideBarTable` in mixins/stock/stock-details/StockDetailsSideBarTable.pug */
const StockDetailsSideBarTable = () => (
  <div className="table-responsive scrollbar mb-4">
    <table className="table text-center">
      <thead>
        <tr className="text-md border-t border-subtle">
          <th colSpan={2} className="text-center">
            Calls
          </th>
          <th className="border-x border-subtle text-center">Strike Price</th>
          <th colSpan={2} className="text-center">
            Puts
          </th>
        </tr>
        <tr className="text-sm uppercase">
          <th className="text-center">BID</th>
          <th className="text-center">ASK</th>
          <th className="border-x border-subtle text-center">Strike</th>
          <th className="text-center">BID</th>
          <th className="text-center">ASK</th>
        </tr>
      </thead>
      <tbody>
        {sidebarOptionChainTable.calls.map((call, callIndex) => (
          <tr className="text-md font-semibold" key={callIndex}>
            <td className="text-info-dark">{call.bid}</td>
            <td className="text-info-dark">{call.ask}</td>
            <td className="border-x border-subtle text-subtle font-bold">
              {sidebarOptionChainTable.strikePrices[callIndex]}
            </td>
            {sidebarOptionChainTable.puts[callIndex] && (
              <>
                <td className="text-info-dark">
                  {sidebarOptionChainTable.puts[callIndex].bid || '-'}
                </td>
                <td className="text-info-dark">
                  {sidebarOptionChainTable.puts[callIndex].ask || '-'}
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/** Gold: swiper + table + link in mixins/stock/stock-details/StockDetailsSideBar.pug */
const StockDetailsOptionChain = () => {
  return (
    <>
      <Swiper
        parentClassName="nav tabDetailsOptionChainTab"
        loop={true}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 2.8
          },
          1400: {
            slidesPerView: 3
          }
        }}
        grabCursor={true}
      >
        {sidebarOptionChainDates.map(item => (
          <SwiperSlide key={item.id} className="nav-item">
            <button
              type="button"
              className={classNames(
                item.className,
                'nav-link text-center text-md leading-sm w-full'
              )}
            >
              {item.date}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <StockDetailsSideBarTable />
      <Button
        variant="phoenix-primary"
        size="sm"
        className="w-full text-center"
        asChild
      >
        <Link to="#!">
          View full stock details
          <FontAwesomeIcon icon={faUpRightFromSquare} className="ms-2" />
        </Link>
      </Button>
    </>
  );
};

export default StockDetailsOptionChain;
