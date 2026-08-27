import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { DividendChartData } from 'data/stock/dividend';

echarts.use([TooltipComponent, BarChart]);

const getDefaultOptions = (
  getThemeColor: (name: string) => string,
  data: DividendChartData[]
) => ({
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
    }
  },
  xAxis: {
    type: 'category',
    data: data.map(item => item.year),
    axisLine: {
      lineStyle: {
        color: getThemeColor('background-color-highlight'),
        type: 'solid'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: getThemeColor('text-color-default'),
      margin: 15
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    boundaryGap: 0,
    axisLabel: {
      show: true,
      color: getThemeColor('text-color-default'),
      fontWeight: 700,
      formatter: (value: number) => `0.${value}`,
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
    max: 60
  },
  series: [
    {
      name: 'Total',
      type: 'bar',
      data: data.map(item => item.value),
      lineStyle: {
        color: getThemeColor('color-info-lighter')
      },
      itemStyle: {
        color: getThemeColor('color-info-lighter'),
        borderRadius: [4, 4, 0, 0]
      },
      barMaxWidth: 24,
      showSymbol: false,
      symbol: 'circle',
      smooth: false,
      emphasis: {
        scale: false
      }
    }
  ],
  grid: {
    right: 10,
    left: 2,
    bottom: 5,
    top: 2,
    outerBoundsMode: 'same',
    outerBoundsContain: 'axisLabel'
  }
});

const DividendBarChart = ({ data }: { data: DividendChartData[] }) => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor, data)}
      style={{ width: '100%', height: '300px' }}
    />
  );
};

export default DividendBarChart;
