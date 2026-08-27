import React, { CSSProperties } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { getPastDates, rgbaColor } from 'helpers/utils';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { tooltipFormatterDefault } from 'helpers/echart-utils';
import dayjs from 'dayjs';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { bookingsData } from 'data/travel-agency/travelAgency';

interface BookingsChartProps {
  style?: CSSProperties;
  ref?: React.RefObject<EChartsReactCore | null>;
}

echarts.use([TooltipComponent, LineChart]);

const getDefaultOptions = (
  getThemeColor: (name: string) => string,
  isDark: boolean
) => ({
  color: getThemeColor('background-color-subtle'),
  legend: {
    data: ['Fulfilled', 'Cancelled'],
    itemWidth: 16,
    itemHeight: 16,
    icon: 'circle',
    itemGap: 32,
    left: 0,
    top: 0,
    inactiveColor: getThemeColor('text-color-soft'),
    textStyle: {
      color: getThemeColor('text-color-muted'),
      fontWeight: 600,
      fontFamily: 'Nunito Sans'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none'
    },
    padding: [7, 10],
    backgroundColor: getThemeColor('background-color-subtle'),
    borderColor: getThemeColor('border-color-base'),
    textStyle: { color: getThemeColor('text-color-emphasis') },
    borderWidth: 1,
    transitionDuration: 0,
    formatter: (params: CallbackDataParams[]) => tooltipFormatterDefault(params)
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      color: getThemeColor('secondary-text-emphasis'),
      formatter: (value: number) => dayjs(value).format('MMM DD'),

      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      fontSize: 12.8
    },
    data: getPastDates(8),
    axisLine: {
      lineStyle: {
        color: getThemeColor('border-color-light')
      }
    },
    axisTick: false
  },
  yAxis: {
    axisLabel: {
      color: getThemeColor('text-color-default'),
      formatter: (value: number) => `${Math.abs(Math.round(value / 1000))}K`,
      fontWeight: 700,
      fontFamily: 'Nunito Sans'
    },
    splitLine: {
      interval: 10,
      lineStyle: {
        color: getThemeColor('border-color-light')
      }
    }
  },
  series: [
    {
      name: 'Fulfilled',
      type: 'bar',
      stack: 'one',
      data: bookingsData.fullfilledData[0],
      barWidth: '27%',
      itemStyle: {
        borderRadius: [4, 4, 0, 0],
        color: isDark ? getThemeColor('color-info') : getThemeColor('color-info-light')
      }
    },
    {
      name: 'Cancelled',
      type: 'bar',
      stack: 'one',
      barWidth: '27%',
      data: bookingsData.cencelledData[0],
      itemStyle: {
        borderRadius: [0, 0, 4, 4],
        color: isDark
          ? rgbaColor(getThemeColor('color-info'), 0.5)
          : getThemeColor('color-info-lighter')
      }
    }
  ],
  grid: { 
    left: -3,
    right: 8,
    top: 46,
    bottom: 0,
    outerBoundsMode: 'same',
    outerBoundsContain: 'axisLabel' 
  }
});

const BookingsChart = ({ style, ref }: BookingsChartProps) => {
  const {
    getThemeColor,
    config: { isDark }
  } = useAppContext();
  const chartRef = ref;

  return (
    <ReactEChartsCore
      echarts={echarts}
      ref={chartRef}
      option={getDefaultOptions(getThemeColor, isDark)}
      style={style}
    />
  );
};

export default BookingsChart;
