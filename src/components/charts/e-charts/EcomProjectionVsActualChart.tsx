import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { cn } from '@hummingbirdui/react';
import { getPastDates } from 'helpers/utils';
import dayjs from 'dayjs';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import {
  CallbackDataParams,
  TooltipPositionCallbackParams
} from 'echarts/types/dist/shared';
import {
  type Size,
  handleTooltipPosition,
  tooltipFormatterDefault
} from 'helpers/echart-utils';

echarts.use([TooltipComponent, BarChart]);

const dates = getPastDates(10);

const data1 = [
  44485, 20428, 47302, 45180, 31034, 46358, 26581, 36628, 38219, 43256
];

const data2 = [
  38911, 29452, 31894, 47876, 31302, 27731, 25490, 30355, 27176, 30393
];

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: [getThemeColor('color-primary'), getThemeColor('background-color-highlight')],
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
    position: (
      point: number[],
      params: TooltipPositionCallbackParams,
      el: HTMLDivElement,
      rect: null,
      size: Size
    ) => handleTooltipPosition(point, params, el, rect, size),
    formatter: (params: CallbackDataParams[]) =>
      tooltipFormatterDefault(params, 'MMM DD', 'color'),
    extraCssText: 'z-index: 1000'
  },
  legend: {
    data: ['Projected revenue', 'Actual revenue'],
    right: 'right',
    width: '100%',
    itemWidth: 16,
    itemHeight: 8,
    itemGap: 20,
    top: 3,
    inactiveColor: getThemeColor('text-color-soft'),
    textStyle: {
      color: getThemeColor('text-color-default'),
      fontWeight: 600,
      fontFamily: 'Nunito Sans'
      // fontSize: '12.8px'
    }
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      color: getThemeColor('text-color-muted'),
      formatter: (value: Date) => dayjs(value).format('MMM DD'),
      interval: 3,
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      fontSize: 12.8
    },
    data: dates,
    axisLine: {
      lineStyle: {
        color: getThemeColor('background-color-highlight')
      }
    },
    axisTick: false
  },
  yAxis: {
    axisPointer: { type: 'none' },
    axisTick: 'none',
    splitLine: {
      interval: 5,
      lineStyle: {
        color: getThemeColor('background-color-muted')
      }
    },
    axisLine: { show: false },
    axisLabel: {
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      fontSize: 12.8,
      color: getThemeColor('text-color-muted'),
      margin: 20,
      verticalAlign: 'bottom',
      formatter: (value: number) => `$${value.toLocaleString()}`
    }
  },
  series: [
    {
      name: 'Projected revenue',
      type: 'bar',
      barWidth: '6px',
      data: data2,
      barGap: '30%',
      label: { show: false },
      itemStyle: {
        borderRadius: [2, 2, 0, 0],
        color: getThemeColor('color-primary')
      }
    },
    {
      name: 'Actual revenue',
      type: 'bar',
      data: data1,
      barWidth: '6px',
      barGap: '30%',
      label: { show: false },
      z: 10,
      itemStyle: {
        borderRadius: [2, 2, 0, 0],
        color: getThemeColor('color-info-subtle')
      }
    }
  ],
  grid: {
    right: 0,
    left: 0,
    bottom: 0,
    top: '10.4%',
    outerBoundsMode: 'same',
    outerBoundsContain: 'axisLabel'
  },
  animation: false
});

/** `.echart-projection-actual.h-75.w-full` in phoenix-tailwind */
const EcomProjectionVsActualChart = ({
  className
}: {
  className?: string;
}) => {
  const { getThemeColor } = useAppContext();

  return (
    <div className={cn('h-75 w-full', className)}>
      <ReactEChartsCore
        echarts={echarts}
        option={getDefaultOptions(getThemeColor)}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default EcomProjectionVsActualChart;
