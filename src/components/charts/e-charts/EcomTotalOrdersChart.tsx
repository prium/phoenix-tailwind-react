import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { cn } from '@hummingbirdui/react';
import { getDates } from 'helpers/utils';
import dayjs from 'dayjs';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import {
  CallbackDataParams,
  TooltipPositionCallbackParams
} from 'echarts/types/dist/shared';
import { type Size, handleTooltipPosition } from 'helpers/echart-utils';
echarts.use([TooltipComponent, BarChart]);

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: getThemeColor('color-primary'),
  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getThemeColor('background-color-subtle'),
    borderColor: getThemeColor('border-color-base'),
    textStyle: { color: getThemeColor('text-color-emphasis') },
    borderWidth: 1,
    transitionDuration: 0,
    position: (
      point: number[],
      params: TooltipPositionCallbackParams,
      el: HTMLDivElement,
      rect: null,
      size: Size
    ) => handleTooltipPosition(point, params, el, rect, size),
    formatter: (params: CallbackDataParams) =>
      `<strong>${dayjs(params.name).format('DD MMM')}:</strong> ${params.value}`,
    extraCssText: 'z-index: 1000'
  },
  xAxis: {
    type: 'category',
    data: getDates(
      new Date('5/1/2022'),
      new Date('5/7/2022'),
      1000 * 60 * 60 * 24
    ),
    show: true,
    boundaryGap: 0,
    axisLine: {
      show: true,
      lineStyle: { color: getThemeColor('background-color-muted') }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false,
      formatter: (value: string) => dayjs(value).format('DD MMM'),
      interval: 6,
      showMinLabel: true,
      showMaxLabel: true,
      color: getThemeColor('text-color-muted')
    }
  },
  yAxis: {
    show: false,
    type: 'value',
    boundaryGap: 0
  },
  series: [
    {
      type: 'bar',
      barWidth: '5px',
      data: [120, 200, 150, 80, 70, 110, 120],
      showBackground: true,
      symbol: 'none',
      itemStyle: {
        borderRadius: 10
      },
      backgroundStyle: {
        borderRadius: 10,
        color: getThemeColor('color-primary-subtle')
      }
    }
  ],
  grid: { right: 10, left: 10, bottom: 0, top: 0 }
});

/** `.echart-total-orders.h-21.25.w-28.75` in phoenix-tailwind */
const EcomTotalOrdersChart = ({ className }: { className?: string }) => {
  const { getThemeColor } = useAppContext();

  return (
    <div className={cn('h-21.25 w-28.75', className)}>
      <ReactEChartsCore
        echarts={echarts}
        option={getDefaultOptions(getThemeColor)}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default EcomTotalOrdersChart;
