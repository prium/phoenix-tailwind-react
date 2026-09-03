import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
echarts.use([TooltipComponent, PieChart]);

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: [
    getThemeColor('color-info-light'),
    getThemeColor('color-warning-light'),
    getThemeColor('color-danger-light'),
    getThemeColor('color-success-light'),
    getThemeColor('color-primary')
  ],
  tooltip: {
    trigger: 'item'
  },
  responsive: true,
  maintainAspectRatio: false,

  series: [
    {
      name: 'Tasks assigned to me',
      type: 'pie',
      radius: ['50%', '90%'],
      startAngle: 30,
      avoidLabelOverlap: false,

      label: {
        show: false,
        position: 'center',
        formatter: '{x|{d}%} \n {y|{b}}',
        rich: {
          x: {
            fontSize: 31.25,
            fontWeight: 800,
            color: getThemeColor('text-color-subtle'),
            padding: [0, 0, 5, 15]
          },
          y: {
            fontSize: 12.8,
            color: getThemeColor('text-color-subtle'),
            fontWeight: 600
          }
        }
      },
      emphasis: {
        label: {
          show: true
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
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

/** Gold `.echart-doughnut-chart-example.min-h-80` on modules/echarts/pie-charts. */
const DoughnutPieChart = () => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
      className="w-full min-h-80"
      style={{ height: 'auto', width: '100%' }}
    />
  );
};

export default DoughnutPieChart;
