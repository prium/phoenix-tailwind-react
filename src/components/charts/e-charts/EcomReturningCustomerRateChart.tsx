import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { cn } from '@hummingbirdui/react';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { months } from 'data/commonData';
import { tooltipFormatterDefault } from 'helpers/echart-utils';

echarts.use([TooltipComponent, BarChart]);

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: getThemeColor('background-color-subtle'),
  legend: {
    data: [
      {
        name: 'Fourth time',
        icon: 'roundRect',
        itemStyle: {
          color: getThemeColor('color-primary-light'),
          borderWidth: 0
        }
      },
      {
        name: 'Third time',
        icon: 'roundRect',
        itemStyle: { color: getThemeColor('color-info-lighter'), borderWidth: 0 }
      },
      {
        name: 'Second time',
        icon: 'roundRect',
        itemStyle: { color: getThemeColor('color-primary'), borderWidth: 0 }
      }
    ],

    right: 'right',
    width: '100%',
    itemWidth: 16,
    itemHeight: 8,
    itemGap: 20,
    top: 3,
    inactiveColor: getThemeColor('text-color-soft'),
    inactiveBorderWidth: 0,
    textStyle: {
      color: getThemeColor('text-color-default'),
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
    data: months,
    show: true,
    boundaryGap: 0,
    axisLine: {
      show: true,
      lineStyle: { color: getThemeColor('background-color-highlight') }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      showMinLabel: false,
      showMaxLabel: false,
      color: getThemeColor('text-color-muted'),
      formatter: (value: string) => value.slice(0, 3),
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      fontSize: 12.8
    },
    splitLine: {
      show: true,
      lineStyle: { color: getThemeColor('background-color-muted'), type: 'dashed' }
    }
  },
  yAxis: {
    type: 'value',
    boundaryGap: 0,
    axisLabel: {
      showMinLabel: true,
      showMaxLabel: true,
      color: getThemeColor('text-color-muted'),
      formatter: (value: number) => `${value}%`,
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      fontSize: 12.8
    },
    splitLine: {
      show: true,
      lineStyle: { color: getThemeColor('background-color-muted') }
    }
  },
  series: [
    {
      name: 'Fourth time',
      type: 'line',
      data: [62, 90, 90, 90, 78, 84, 17, 17, 17, 17, 82, 95],
      showSymbol: false,
      symbol: 'circle',
      symbolSize: 10,
      emphasis: {
        lineStyle: {
          width: 1
        }
      },
      lineStyle: {
        type: 'dashed',
        width: 1,
        color: getThemeColor('color-primary-light')
      },
      itemStyle: {
        borderColor: getThemeColor('color-primary-light'),
        borderWidth: 3
      },
      zlevel: 3
    },
    {
      name: 'Third time',
      type: 'line',
      data: [50, 50, 30, 62, 18, 70, 70, 22, 70, 70, 70, 70],
      showSymbol: false,
      symbol: 'circle',
      symbolSize: 10,
      emphasis: {
        lineStyle: {
          width: 1
        }
      },
      lineStyle: {
        width: 1,
        color: getThemeColor('color-info-lighter')
      },
      itemStyle: {
        borderColor: getThemeColor('color-info-lighter'),
        borderWidth: 3
      },
      zlevel: 2
    },
    {
      name: 'Second time',
      type: 'line',
      data: [40, 78, 60, 78, 60, 20, 60, 40, 60, 40, 20, 78],
      showSymbol: false,
      symbol: 'circle',
      symbolSize: 10,
      emphasis: {
        lineStyle: {
          width: 3
        }
      },
      lineStyle: {
        width: 3,
        color: getThemeColor('color-primary')
      },
      itemStyle: {
        borderColor: getThemeColor('color-primary'),
        borderWidth: 3
      },
      zlevel: 1
    }
  ],
  grid: {
    left: -3,
    right: 8,
    top: '12%',
    bottom: 0,
    outerBoundsMode: 'same',
    outerBoundsContain: 'axisLabel' 
  }
});

/** `.echart-returning-customer.h-75` in phoenix-tailwind */
const EcomReturningCustomerRateChart = ({
  className
}: {
  className?: string;
}) => {
  const { getThemeColor } = useAppContext();

  return (
    <div className={cn('h-75', className)}>
      <ReactEChartsCore
        echarts={echarts}
        option={getDefaultOptions(getThemeColor)}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default EcomReturningCustomerRateChart;
