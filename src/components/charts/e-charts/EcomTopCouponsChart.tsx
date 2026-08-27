import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { cn } from '@hummingbirdui/react';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import {
  CallbackDataParams,
  TooltipPositionCallbackParams
} from 'echarts/types/dist/shared';
import { type Size, TopCouponChartTooltip } from 'helpers/echart-utils';

echarts.use([TooltipComponent, PieChart]);
const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: [
    getThemeColor('color-primary'),
    getThemeColor('color-primary-lighter'),
    getThemeColor('color-info-dark')
  ],

  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getThemeColor('background-color-subtle'),
    borderColor: getThemeColor('border-color-base'),
    textStyle: { color: getThemeColor('text-color-emphasis') },
    borderWidth: 1,
    transitionDuration: 0,
    position: (
      point: number[],
      params: TooltipPositionCallbackParams,
      el: HTMLDivElement,
      rect: null,
      size: Size
    ) => TopCouponChartTooltip(point, params, el, rect, size),
    formatter: (params: CallbackDataParams) =>
      `<strong>${params.name}:</strong> ${params.percent}%`
  },
  legend: { show: false },
  series: [
    {
      name: '72%',
      type: 'pie',
      radius: ['100%', '87%'],
      avoidLabelOverlap: false,
      emphasis: {
        scale: false,
        itemStyle: {
          color: 'inherit'
        }
      },
      itemStyle: {
        borderWidth: 2,
        borderColor: getThemeColor('background-color-default')
      },
      label: {
        show: true,
        position: 'center',
        formatter: '{a}',
        fontSize: 23,
        color: getThemeColor('text-color-emphasis')
      },
      data: [
        { value: 7200000, name: 'Percentage discount' },
        { value: 1800000, name: 'Fixed card discount' },
        { value: 1000000, name: 'Fixed product discount' }
      ]
    }
  ],
  grid: { outerBoundsMode: 'same', outerBoundsContain: 'axisLabel' }
});

/** `.echart-top-coupons.h-28.75.w-full` in phoenix-tailwind */
const EcomTopCouponsChart = ({ className }: { className?: string }) => {
  const { getThemeColor } = useAppContext();

  return (
    <div className={cn('h-28.75 w-full', className)}>
      <ReactEChartsCore
        echarts={echarts}
        option={getDefaultOptions(getThemeColor)}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default EcomTopCouponsChart;
