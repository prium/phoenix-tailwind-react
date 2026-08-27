import { CSSProperties } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { getPastDates, rgbaColor } from 'helpers/utils';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart, LineChart } from 'echarts/charts';
import dayjs from 'dayjs';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { tooltipFormatterDefault } from 'helpers/echart-utils';

echarts.use([TooltipComponent, BarChart, LineChart]);

const dates = getPastDates(7);

const data1 = [2000, 5700, 3700, 5500, 8000, 4000, 5500];
const data2 = [10500, 9000, 7000, 9000, 10400, 7500, 9300];

const getDefaultOptions = (
  getThemeColor: (name: string) => string,
  isDark: boolean
) => ({
  color: [getThemeColor('color-primary-lighter'), getThemeColor('color-info-light')],
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    backgroundColor: getThemeColor('background-color-subtle'),
    borderColor: getThemeColor('border-color-base'),
    textStyle: { color: getThemeColor('text-color-emphasis') },
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    },
    formatter: (params: CallbackDataParams[]) =>
      tooltipFormatterDefault(params, 'MMM DD, YYYY', 'color')
  },
  xAxis: {
    type: 'category',
    data: dates,
    axisLabel: {
      color: getThemeColor('text-color-default'),
      formatter: (value: number) => dayjs(value).format('ddd'),
      fontFamily: 'Nunito Sans',
      fontWeight: 400,
      fontSize: 12.8,
      margin: 16
    },
    axisLine: {
      lineStyle: {
        color: getThemeColor('background-color-muted')
      }
    },
    axisTick: false
  },
  yAxis: {
    type: 'value',
    splitLine: {
      lineStyle: {
        color: getThemeColor('background-color-muted')
      }
    },
    axisLabel: {
      color: getThemeColor('text-color-default'),
      fontFamily: 'Nunito Sans',
      fontWeight: 700,
      fontSize: 12.8,
      margin: 24,
      formatter: (value: number) => `${value / 1000}k`
    }
    // interval: 1000,
  },
  series: [
    {
      name: 'Revenue',
      type: 'bar',
      barWidth: '16px',
      label: {
        show: false
      },
      itemStyle: {
        color: !isDark
          ? getThemeColor('color-primary-lighter')
          : getThemeColor('color-primary'),

        borderRadius: [4, 4, 0, 0]
      },
      data: data2
    },
    {
      name: 'Profit',
      type: 'line',
      symbol: 'circle',
      symbolSize: 11,
      itemStyle: {
        color: getThemeColor('color-info-light'),
        borderColor: !isDark
          ? getThemeColor('color-white')
          : getThemeColor('text-color-emphasis'),
        borderWidth: 2
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: rgbaColor(getThemeColor('color-info-light'), 0.2)
            },
            {
              offset: 1,
              color: rgbaColor(getThemeColor('color-info-light'), 0.2)
            }
          ]
        }
      },
      data: data1
    }
  ],
  grid: {
    right: 0,
    left: -3,
    bottom: 0,
    top: 3,
    outerBoundsMode: 'same',
    outerBoundsContain: 'axisLabel'
  },
  animation: false
});

const AnalyticsSalesTrendsChart = ({ style }: { style: CSSProperties }) => {
  const {
    getThemeColor,
    config: { isDark }
  } = useAppContext();
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor, isDark)}
      style={style}
    />
  );
};

export default AnalyticsSalesTrendsChart;
