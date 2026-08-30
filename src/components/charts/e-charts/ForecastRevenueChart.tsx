import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';

echarts.use([TooltipComponent, BarChart]);

const months = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
const data = [159, 185, 170, 190, 205, 220, 235];

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: [getThemeColor('color-info-lighter'), getThemeColor('background-color-highlight')],
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
    type: 'value',
    boundaryGap: 0,
    axisLine: {
      show: true,
      lineStyle: {
        color: getThemeColor('border-color-light')
      }
    },
    axisTick: {
      show: true
    },
    axisLabel: {
      color: getThemeColor('text-color-subtle'),
      formatter: (value: number) => `${value}B`
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: getThemeColor('border-color-light')
      }
    },
    min: 100,
    max: 260,
    interval: 20
  },
  yAxis: {
    type: 'category',
    data: months,
    boundaryGap: 1,
    axisLabel: {
      color: getThemeColor('text-color-default'),
      margin: 20
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: getThemeColor('border-color-light')
      }
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
  series: [
    {
      name: 'Total',
      type: 'bar',
      data,
      barWidth: 20,
      lineStyle: {
        color: getThemeColor('color-info-lighter')
      },
      itemStyle: {
        color: getThemeColor('color-info-lighter'),
        borderRadius: [0, 3, 3, 0]
      },
      showSymbol: false,
      symbol: 'circle',
      smooth: false,
      emphasis: {
        scale: true
      }
    }
  ],
  grid: {
    right: -2,
    left: 2,
    bottom: 5,
    top: 24,
    outerBoundsMode: 'same',
    outerBoundsContain: 'axisLabel'
  }
});

const ForecastRevenueChart = () => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
      style={{width: '100%', height: '300px'}}
    />
  );
};

export default ForecastRevenueChart;
