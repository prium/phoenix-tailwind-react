import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { cn } from '@hummingbirdui/react';
import { getDates } from 'helpers/utils';
import dayjs from 'dayjs';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { tooltipFormatterList } from 'helpers/echart-utils';

echarts.use([TooltipComponent, BarChart]);

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
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
    formatter: tooltipFormatterList,
    extraCssText: 'z-index: 1000'
  },
  xAxis: [
    {
      type: 'category',
      data: getDates(
        new Date('5/1/2022'),
        new Date('5/7/2022'),
        1000 * 60 * 60 * 24
      ),
      show: true,
      boundaryGap: 0,
      axisLine: {
        show: true,
        lineStyle: { color: getThemeColor('background-color-muted') }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        formatter: (value: Date) => dayjs(value).format('DD MMM'),
        showMinLabel: true,
        showMaxLabel: false,
        color: getThemeColor('text-color-muted'),
        align: 'left',
        interval: 5,
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        fontSize: 12.8
      }
    },
    {
      type: 'category',
      position: 'bottom',
      show: true,
      data: getDates(
        new Date('5/1/2022'),
        new Date('5/7/2022'),
        1000 * 60 * 60 * 24
      ),
      axisLabel: {
        formatter: (value: Date) => dayjs(value).format('DD MMM'),
        interval: 130,
        showMaxLabel: true,
        showMinLabel: false,
        color: getThemeColor('text-color-muted'),
        align: 'right',
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
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
    show: false,
    type: 'value',
    boundaryGap: 0
  },
  series: [
    {
      type: 'line',
      data: [150, 100, 300, 200, 250, 180, 250],
      showSymbol: false,
      symbol: 'circle',
      lineStyle: {
        width: 2,
        color: getThemeColor('background-color-muted')
      },
      emphasis: {
        lineStyle: {
          color: getThemeColor('background-color-muted')
        }
      },
      itemStyle: {
        color: getThemeColor('background-color-muted')
      }
    },
    {
      type: 'line',
      data: [200, 150, 250, 100, 500, 400, 600],
      lineStyle: {
        width: 2,
        color: getThemeColor('color-primary')
      },
      showSymbol: false,
      symbol: 'circle',
      itemStyle: {
        color: getThemeColor('color-primary')
      }
    }
  ],
  grid: { left: 0, right: 0, top: 5, bottom: 20, outerBoundsMode: 'none' }
});

/** `.echarts-new-customers.h-45.w-full` in phoenix-tailwind */
const EcomNewCustomersChart = ({ className }: { className?: string }) => {
  const { getThemeColor } = useAppContext();

  return (
    <div className={cn('h-45 w-full', className)}>
      <ReactEChartsCore
        echarts={echarts}
        option={getDefaultOptions(getThemeColor)}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default EcomNewCustomersChart;
