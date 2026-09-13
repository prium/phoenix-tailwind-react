import { CSSProperties } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { tooltipFormatterDefault } from 'helpers/echart-utils';
import { CallbackDataParams } from 'echarts/types/dist/shared';
echarts.use([TooltipComponent, BarChart]);

// gold: src/js/theme/charts/echarts/reports-details-chart.js
const reportStages = [
  'Analysis',
  'Statement',
  'Action',
  'Offering',
  'Interlocution'
];
const data = [64, 40, 45, 62, 82];

const getDefaultOptions = (
  getThemeColor: (name: string) => string,
  isDark: boolean
) => ({
  color: [
    getThemeColor('color-primary-lighter'),
    getThemeColor('color-info-light')
  ],
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
    },
    formatter: (params: CallbackDataParams[]) =>
      tooltipFormatterDefault(params, 'MMM DD, YYYY', 'color')
  },
  xAxis: {
    type: 'category',
    data: reportStages,
    axisLabel: {
      color: getThemeColor('text-color-default'),
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      fontSize: 12.8,
      rotate: 30,
      formatter: (value: string) => `${value.slice(0, 5)}...`
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
      formatter: (value: string) => `${value}%`
    }
  },
  series: [
    {
      name: 'Revenue',
      type: 'bar',
      barWidth: '32px',
      barGap: '48%',
      showBackground: true,
      backgroundStyle: {
        color: !isDark
          ? getThemeColor('color-primary-subtle')
          : getThemeColor('background-color-subtle')
      },
      label: {
        show: false
      },
      itemStyle: {
        color: !isDark
          ? getThemeColor('color-primary-light')
          : getThemeColor('color-primary')
      },
      data
    }
  ],
  grid: {
    right: '0',
    left: -3,
    bottom: 3,
    top: 3,
    outerBoundsMode: 'same',
    outerBoundsContain: 'axisLabel'
  },
  animation: false
});

const ReportDetailsChart = ({ style }: { style: CSSProperties }) => {
  const {
    config: { isDark },
    getThemeColor
  } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor, isDark)}
      style={style}
    />
  );
};

export default ReportDetailsChart;
