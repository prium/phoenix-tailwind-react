import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent, DataZoomComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { Range } from 'data/stock/portfolio';
import dayjs from 'dayjs';
import { WatchlistReportChartDataItem } from 'data/stock/watchlist';
import { handleTooltipPosition } from 'helpers/echart-utils';

interface WatchlistReportChartProps {
  data: WatchlistReportChartDataItem;
  range: Range;
}

echarts.use([TooltipComponent, BarChart, DataZoomComponent]);

const formatAxisLabel = (range: Range, value: number) => {
  switch (range) {
    case '1d':
      return value;
    case '5d':
    case '1m':
    case '3m':
      return dayjs(value).format('MMM DD');
    case 'all':
      return dayjs(value).format('YYYY');
    default:
      return dayjs(value).format('MMM');
  }
};
const getDefaultOptions = (
  getThemeColor: (name: string) => string,
  data: [string, number][],
  range: Range
) => ({
  color: [getThemeColor('color-primary'), getThemeColor('background-color-highlight')],
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    backgroundColor: getThemeColor('background-color-subtle'),
    borderColor: getThemeColor('border-color-default'),
    textStyle: { color: getThemeColor('text-color-emphasis') },
    borderWidth: 1,
    transitionDuration: 0,
    position: handleTooltipPosition,
    axisPointer: {
      type: 'none'
    }
  },
  dataZoom: {
    type: 'inside',
    start: 30,
    end: 100,
    minValueSpan: 10,
    disabled: data.length < 25
  },
  xAxis: {
    type: 'category',
    data: data.map(item => item[0]),
    axisLine: {
      lineStyle: {
        color: getThemeColor('border-color-light'),
        type: 'solid'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: getThemeColor('text-color-subtle'),
      formatter: (value: number) => formatAxisLabel(range, value),
      margin: 15
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    position: 'right',
    boundaryGap: 1,
    axisLabel: {
      show: true,
      color: getThemeColor('text-color-default'),
      formatter: (value: number) => `$${value}`,
      margin: 15
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: getThemeColor('background-color-muted')
      }
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    min: 0,
    max: 400,
    interval: 80
  },
  series: [
    {
      type: 'bar',
      name: 'Total',
      data: data.map(item => item[1]),
      itemStyle: {
        color: getThemeColor('color-primary-light'),
        borderRadius: [3, 3, 0, 0]
      },
      lineStyle: {
        color: getThemeColor('color-primary-light')
      },
      showSymbol: false,
      symbol: 'circle',
      symbolSize: 10,
      smooth: false,
      emphasis: {
        scale: true
      },
      barWidth: 16
    }
  ],
  grid: {
    right: 2,
    left: 8,
    bottom: 5,
    top: 4,
    outerBoundsMode: 'same',
    outerBoundsContain: 'axisLabel'
  }
});

const WatchlistReportChart = ({ data, range }: WatchlistReportChartProps) => {
  const { getThemeColor } = useAppContext();
  const chartData = data[range] || [];

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor, chartData, range)}
      notMerge={true}
      lazyUpdate={true}
      style={{ height: 250, width: '100%' }}
    />
  );
};

export default WatchlistReportChart;
