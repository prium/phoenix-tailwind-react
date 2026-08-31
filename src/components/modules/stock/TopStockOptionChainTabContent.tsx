import { cn } from '@hummingbirdui/react';
import Swiper from 'components/base/Swiper';
import { SwiperSlide } from 'swiper/react';
import { optionChainHeader } from 'data/stock/optionChainTableData';
import type { OptionTableRow } from 'data/stock/optionChainTableData';
import type { TopStockItem } from 'data/stock/dashboardTopStocks';

interface TopStockOptionChainTabContentProps {
  topStockItem: TopStockItem;
}

/** `+OptionChainTable` — mixins/dashboard/stock/OptionChainTable.pug */
const OptionChainTable = ({ data }: { data: OptionTableRow[] }) => (
  <div className="table-responsive scrollbar">
    <table className="table text-center mb-0">
      <thead>
        <tr>
          <th className="text-center" colSpan={5}>
            Calls
          </th>
          <th className="bg-subtle border-x border-subtle text-center">
            Strike Price{' '}
          </th>
          <th className="text-center" colSpan={5}>
            Puts
          </th>
        </tr>
        <tr className="text-sm uppercase">
          <th className="min-w-26.75 text-center">BID</th>
          <th className="min-w-26.75 text-center">ASK </th>
          <th className="min-w-26.75 text-center">last </th>
          <th className="min-w-26.75 text-center">delta </th>
          <th className="min-w-26.75 text-center">gamma</th>
          <th className="bg-subtle border-x border-subtle min-w-30 text-center">
            IV 19.4%
          </th>
          <th className="min-w-26.75 text-center">BID</th>
          <th className="min-w-26.75 text-center">ASK </th>
          <th className="min-w-26.75 text-center">last </th>
          <th className="min-w-26.75 text-center">delta </th>
          <th className="min-w-26.75 text-center">gamma</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr className="text-md font-semibold" key={row.id}>
            <td className="text-info-dark leading-sm">
              {row.callsBid.toFixed(2)}
            </td>
            <td className="text-info-dark leading-sm">
              {row.callsAsk.toFixed(2)}
            </td>
            <td className="leading-sm">{row.callsLast.toFixed(2)}</td>
            <td className="leading-sm">{row.callsDelta.toFixed(3)}</td>
            <td className="leading-sm">{row.callsGamma.toFixed(3)}</td>
            <td className="bg-subtle border-x border-subtle text-subtle font-bold leading-sm">
              {row.strikePrice}
            </td>
            <td className="text-info-dark leading-sm">
              {row.putsBid.toFixed(2)}{' '}
            </td>
            <td className="text-info-dark leading-sm">
              {row.putsAsk.toFixed(2)}{' '}
            </td>
            <td className="leading-sm">{row.putsLast.toFixed(2)} </td>
            <td className="leading-sm">{row.putsDelta.toFixed(3)} </td>
            <td className="leading-sm">{row.putsGamma.toFixed(3)} </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/** `+OptionChainTableHeader` swiper tabs — mixins/dashboard/stock/OptionChainTableHeader.pug */
const TopStockOptionChainTabContent = ({
  topStockItem
}: TopStockOptionChainTabContentProps) => {
  return (
    <>
      <Swiper
        parentClassName="optionChainTableHeader nav nav-underline"
        loop={true}
        slidesPerView={5}
        breakpoints={{
          0: {
            slidesPerView: 1.5
          },
          560: {
            slidesPerView: 2.5
          },
          768: {
            slidesPerView: 3.5
          },
          1200: {
            slidesPerView: 3
          },
          1560: {
            slidesPerView: 4
          },
          1800: {
            slidesPerView: 5
          }
        }}
        grabCursor={true}
      >
        {optionChainHeader.map(item => (
          <SwiperSlide key={item.id} className="nav-item">
            <button
              type="button"
              className={cn(
                'nav-link text-center text-nowrap w-full',
                item.className
              )}
            >
              <span className="text-base">{item.date} </span>
              <span className="text-subtle text-md font-semibold">
                ({item.daysCount} Days)
              </span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <OptionChainTable data={topStockItem.tableData} />
    </>
  );
};

export default TopStockOptionChainTabContent;
