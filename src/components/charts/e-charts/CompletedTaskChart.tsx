import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { cn } from '@hummingbirdui/react';
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
  50, 115, 180, 180, 180, 150, 120, 120, 120, 120, 120, 240, 240, 240, 240, 270,
  300, 330, 360, 390, 340, 290, 310, 330, 350, 320, 290, 330, 370, 350
];

const prevMonthData = [
  130, 130, 130, 90, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 110, 170, 230,
  230, 230, 270, 310, 270, 230, 260, 290, 320, 280, 280, 280
];

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
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
      type: 'none'
    },
    formatter: tooltipFormatterList
  },
  xAxis: [
    {
      type: 'category',
      data: dates,
      axisLabel: {
        formatter: (value: string) => dayjs(value).format('DD MMM'),
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
          color: getThemeColor('background-color-muted')
        }
      },
      boundaryGap: 0
    },
    {
      type: 'category',
      position: 'bottom',
      data: dates,
      axisLabel: {
        formatter: (value: string) => dayjs(value).format('DD MMM'),
        interval: 130,
        showMaxLabel: true,
        showMinLabel: false,
        color: getThemeColor('text-color-muted'),
        align: 'right',
        fontFamily: 'Nunito Sans',
        fontWeight: 400,
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
      boundaryGap: 0
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
      name: 'd',
      type: 'line',
      data: currentMonthData,
      showSymbol: false,
      symbol: 'circle'
    },
    {
      name: 'e',
      type: 'line',
      data: prevMonthData,
      lineStyle: {
        type: 'dashed',
        width: 1,
        color: getThemeColor('color-info')
      },
      showSymbol: false,
      symbol: 'circle'
    }
  ],
  grid: {
    right: 2,
    left: 5,
    bottom: '20px',
    top: '2%',
    outerBoundsMode: 'none'
  },
  animation: false
});

/** `.echart-completed-task-chart.min-h-50.w-full` in phoenix-tailwind (chart fills the wrapper) */
const CompletedTaskChart = ({ className }: { className?: string }) => {
  const { getThemeColor } = useAppContext();

  return (
    <div className={cn('min-h-50 w-full', className)}>
      <ReactEChartsCore
        echarts={echarts}
        option={getDefaultOptions(getThemeColor)}
        style={{ height: '200px', width: '100%' }}
      />
    </div>
  );
};

export default CompletedTaskChart;
