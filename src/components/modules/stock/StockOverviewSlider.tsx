import Swiper from 'components/base/Swiper';
import { SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import type { StockDashboardOverviewItemProps } from 'data/stock/stockDashboard';
import Badge from 'components/base/Badge';
import { Card } from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { currencyFormat } from 'helpers/utils';
import StockOverviewChart from 'components/charts/e-charts/StockOverviewChart';
import StockOverviewInvertedChart from 'components/charts/e-charts/StockOverviewInvertedChart';
import StockOverviewMixedChart from 'components/charts/e-charts/StockOverviewMixedChart';

interface StockOverViewSliderProps {
  overviewItems: StockDashboardOverviewItemProps[];
}

/** `+OverviewCards` continuous-autoplay slider — mixins/dashboard/stock/Stat.pug */
const StockOverViewSlider = ({ overviewItems }: StockOverViewSliderProps) => {
  // gold `.overview-echart` is sized by assets/css/components/stock.css;
  // the echarts div fills it (skill: wrapper carries the size)
  const chartStyle = { height: '100%', width: '100%' };
  return (
    <Swiper
      parentClassName="w-full"
      wrapperClass="swiper-wrapper swiper-continuous-autoplay"
      modules={[Autoplay, FreeMode]}
      loop={true}
      spaceBetween={24}
      centeredSlides={true}
      slidesPerView="auto"
      speed={6500}
      freeMode={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false
      }}
      grabCursor={true}
      navigation={false}
    >
      {overviewItems.map(item => (
        <SwiperSlide key={item.id} className="stock-overview-card">
          <Card>
            <Card.Body>
              <div className="flex flex-between-center gap-2 lg:gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h5 className="mb-0 text-subtle text-nowrap">
                      {item.title}
                    </h5>
                    <Badge
                      variant="phoenix"
                      bg={item.isPositive ? 'success' : 'danger'}
                      className="text-sm flex items-center"
                      iconPosition="end"
                      icon={
                        <FontAwesomeIcon
                          icon={item.isPositive ? faChevronUp : faChevronDown}
                          className="ms-1"
                        />
                      }
                    >
                      {item.isPositive ? '+' : '-'}
                      {item.stockValue}%
                    </Badge>
                  </div>
                  <h4 className="mb-0">
                    {currencyFormat(item.totalValue, {
                      minimumFractionDigits: 2
                    })}
                  </h4>
                </div>
                {item.chartType === 'inverted' && (
                  <div className="overview-echart">
                    <StockOverviewInvertedChart
                      data={item.echartsData}
                      style={chartStyle}
                    />
                  </div>
                )}
                {item.chartType === 'mixed' && (
                  <div className="overview-echart">
                    <StockOverviewMixedChart
                      data={item.echartsData}
                      style={chartStyle}
                    />
                  </div>
                )}
                {item.chartType === 'default' && (
                  <div className="overview-echart">
                    <StockOverviewChart
                      data={item.echartsData}
                      style={chartStyle}
                    />
                  </div>
                )}
              </div>
            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StockOverViewSlider;
