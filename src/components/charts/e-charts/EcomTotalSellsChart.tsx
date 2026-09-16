import ReactEChartsCore from 'echarts-for-react/lib/core';
import { cn } from '@hummingbirdui/react';
import * as echarts from 'echarts/core';
import { getDates } from 'helpers/utils';
import dayjs from 'dayjs';
import { useAppContext } from 'providers/AppProvider';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { tooltipFormatterList } from 'helpers/echart-utils';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  LegendComponent
]);

const dates = getDates(
  new Date('5/1/2022'),
  new Date('5/30/2022'),
  1000 * 60 * 60 * 24
);

const currentMonthData = [
  100, 200, 300, 300, 300, 250, 200, 200, 200, 200, 200, 500, 500, 500, 600,
  700, 800, 900, 1000, 1100, 850, 600, 600, 600, 400, 200, 200, 300, 300, 300
];

const prevMonthData = [
  200, 200, 100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 200, 400, 600, 600,
  600, 800, 1000, 700, 400, 450, 500, 600, 700, 650, 600, 550
];

const getDefaultOptions = (
  isDark: boolean,
  getThemeColor: (name: string) => string
) => ({
  color: [getThemeColor('color-primary'), getThemeColor('color-info')],
  tooltip: {
    trigger: 'axis',
    padding: 10,
    backgroundColor: getThemeColor('background-color-subtle'),
    borderColor: getThemeColor('border-color-default'),
    textStyle: { color: getThemeColor('text-color-emphasis') },
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none',
      z: 0
    },
    formatter: tooltipFormatterList,
    extraCssText: 'z-index: 1000'
  },
  xAxis: [
    {
      type: 'category',
      data: dates,
      axisLabel: {
        formatter: (value: Date) => dayjs(value).format('DD MMM'),
        interval: 13,
        showMinLabel: true,
        showMaxLabel: false,
        color: getThemeColor('text-color-muted'),
        align: 'left',
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        fontSize: 12.8
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: getThemeColor('background-color-muted')
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        interval: 0,
        lineStyle: {
          color: isDark
            ? getThemeColor('background-color-subtle')
            : getThemeColor('background-color-muted')
        }
      },
      boundaryGap: false
    },
    {
      type: 'category',
      position: 'bottom',
      data: dates,
      axisLabel: {
        formatter: (value: Date) => dayjs(value).format('DD MMM'),
        interval: 130,
        showMaxLabel: true,
        showMinLabel: false,
        color: getThemeColor('text-color-muted'),
        align: 'right',
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        fontSize: 12.8
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      boundaryGap: false
    }
  ],
  yAxis: {
    position: 'right',
    axisPointer: { type: 'none' },
    axisTick: 'none',
    splitLine: {
      show: false
    },
    axisLine: { show: false },
    axisLabel: { show: false }
  },
  series: [
    {
      type: 'line',
      data: currentMonthData,
      showSymbol: false,
      symbol: 'circle',
      zlevel: 2
    },
    {
      type: 'line',
      data: prevMonthData,
      lineStyle: {
        type: 'dashed',
        width: 1,
        color: getThemeColor('color-info')
      },
      showSymbol: false,
      symbol: 'circle',
      zlevel: 1
    }
  ],
  // Verbatim from the gold's total-sales-chart.js. With outerBoundsMode 'same'
  // echarts shrinks the grid until every label fits, so the first axis' last
  // label (29 May) stayed visible under the second axis' 30 May; 'none' lets it
  // overflow the canvas and be clipped, as in the gold.
  grid: {
    right: 2,
    left: 5,
    bottom: '20px',
    top: '2%',
    outerBoundsMode: 'none'
  },
  animation: false
});

/** `.echart-total-sales-chart.h-80.w-full` in phoenix-tailwind */
const EcomTotalSellsChart = ({ className }: { className?: string }) => {
  const {
    config: { isDark },
    getThemeColor
  } = useAppContext();

  return (
    <div className={cn('h-80 w-full', className)}>
      <ReactEChartsCore
        echarts={echarts}
        option={getDefaultOptions(isDark, getThemeColor)}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default EcomTotalSellsChart;
