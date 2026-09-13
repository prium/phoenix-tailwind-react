import { CSSProperties } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { contactSourceData } from 'data/crm/dashboardData';

echarts.use([TooltipComponent, PieChart, CanvasRenderer]);

const getDefaultOptions = (
  getThemeColor: (name: string) => string,
  isDark: boolean
) => ({
  color: [
    getThemeColor('color-primary'),
    getThemeColor('color-success'),
    getThemeColor('color-info'),
    getThemeColor('color-info-light'),
    !isDark
      ? getThemeColor('color-danger-lighter')
      : getThemeColor('color-danger-darker'),
    !isDark
      ? getThemeColor('color-warning-light')
      : getThemeColor('color-warning-dark')
  ],
  tooltip: {
    trigger: 'item',
    backgroundColor: getThemeColor('background-color-default'),
    borderColor: getThemeColor('background-color-muted'),
    textStyle: {
      color: getThemeColor('text-color-subtle')
    },
    borderWidth: 0
  },
  responsive: true,
  maintainAspectRatio: false,

  series: [
    {
      name: 'Contacts by Source',
      type: 'pie',
      radius: ['55%', '90%'],
      startAngle: 90,
      avoidLabelOverlap: false,
      itemStyle: {
        borderColor: getThemeColor('background-color-default'),
        borderWidth: 3
      },

      label: {
        show: false
      },
      emphasis: {
        label: {
          show: false
        }
      },
      labelLine: {
        show: false
      },
      data: contactSourceData
    }
  ],
  grid: {
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    outerBoundsMode: 'none'
  }
});

const ContactsBySourceChart = ({
  className,
  style
}: {
  className?: string;
  style?: CSSProperties;
}) => {
  const {
    getThemeColor,
    config: { isDark }
  } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor, isDark)}
      className={className}
      style={style}
    />
  );
};

export default ContactsBySourceChart;
