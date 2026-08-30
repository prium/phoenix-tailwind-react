import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';

echarts.use([TooltipComponent, BarChart]);

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: [getThemeColor('color-primary'), getThemeColor('background-color-highlight')],
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    backgroundColor: getThemeColor('background-color-subtle'),
    borderColor: getThemeColor('border-color-default'),
    textStyle: { color: getThemeColor('text-color-emphasis') },
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    }
  },
  xAxis: {
    data: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    splitLine: { show: false },
    splitArea: { show: false },

    axisLabel: {
      color: getThemeColor('text-color-default')
    },
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: getThemeColor('border-color-light')
      }
    }
  },
  yAxis: {
    position: 'right',
    splitLine: {
      lineStyle: {
        color: getThemeColor('background-color-muted')
      }
    },
    axisLabel: {
      color: getThemeColor('text-color-subtle'),
      formatter: (value: number) => `${value}%`
    }
  },
  series: [
    {
      name: 'Total',
      type: 'bar',
      data: [
        {
          value: 4
        },
        {
          value: -12,
          lineStyle: { color: getThemeColor('color-info-light') },
          itemStyle: {
            color: getThemeColor('color-info-light'),
            borderRadius: [0, 0, 3, 3]
          }
        },
        {
          value: -15,
          lineStyle: { color: getThemeColor('color-info-light') },
          itemStyle: {
            color: getThemeColor('color-info-light'),
            borderRadius: [0, 0, 3, 3]
          }
        },
        {
          value: 15
        },
        {
          value: 22
        },
        {
          value: 15
        },
        {
          value: 20
        },
        {
          value: 18
        }
      ],
      lineStyle: {
        color: getThemeColor('color-primary-light')
      },
      itemStyle: {
        color: getThemeColor('color-primary-light'),
        borderRadius: [3, 3, 0, 0]
      },
      barWidth: 24,
      showSymbol: false,
      symbol: 'circle',
      smooth: false,
      emphasis: {
        scale: false
      }
    }
  ],
  grid: {
    top: '8%',
    bottom: 11,
    left: 5,
    right: 4,
    outerBoundsMode: 'same',
    outerBoundsContain: 'axisLabel'
  }
});

const GrowthInRevenueChart = () => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
      style={{ width: '100%', height: '300px' }}
    />
  );
};

export default GrowthInRevenueChart;
