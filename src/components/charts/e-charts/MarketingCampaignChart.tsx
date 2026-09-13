import { CSSProperties, useEffect, useRef } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { rgbaColor } from 'helpers/utils';
import { useAppContext } from 'providers/AppProvider';
import { RadarComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { RadarChart } from 'echarts/charts';
import EChartsReactCore from 'echarts-for-react/lib/core';

echarts.use([TooltipComponent, RadarComponent, RadarChart, CanvasRenderer]);

const getDefaultOptions = (
  getThemeColor: (name: string) => string,
  isDark: boolean
) => ({
  color: [
    getThemeColor('color-primary-light'),
    getThemeColor('color-warning-light')
  ],
  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getThemeColor('background-color-subtle'),
    borderColor: getThemeColor('background-color-highlight'),
    textStyle: {
      color: getThemeColor('text-color-default'),
      fontSize: 12.8,
      fontFamily: 'Nunito Sans'
    },
    borderWidth: 1,
    transitionDuration: 0
  },
  radar: {
    splitNumber: 5,
    axisNameGap: 10,
    radius: '85%',
    splitLine: {
      lineStyle: {
        color: getThemeColor('background-color-muted')
      }
    },
    splitArea: {
      show: true,
      areaStyle: {
        shadowBlur: 0.5,
        color: [
          !isDark
            ? getThemeColor('background-color-subtle')
            : getThemeColor('background-color-subtle'),
          !isDark
            ? getThemeColor('background-color-default')
            : getThemeColor('background-color-muted')
        ]
      }
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: getThemeColor('background-color-muted')
      }
    },
    axisName: {
      color: getThemeColor('text-color-subtle'),
      fontWeight: 800,
      fontSize: 10.2
    },
    indicator: [
      { name: 'SAT', max: 5000 },
      { name: 'FRI', max: 5000 },
      { name: 'THU', max: 5000 },
      { name: 'WED', max: 5000 },
      { name: 'TUE', max: 5000 },
      { name: 'MON', max: 5000 },
      { name: 'SUN', max: 5000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      symbol: 'emptyCircle',
      symbolSize: 6,

      data: [
        {
          value: [2100, 2300, 1600, 3700, 3000, 2500, 2500],
          name: 'Offline Marketing',
          itemStyle: {
            color: getThemeColor('color-primary-light')
          },
          areaStyle: {
            color: rgbaColor(getThemeColor('color-primary-light'), 0.3)
          }
        },
        {
          value: [3000, 1600, 3700, 500, 3700, 3000, 3200],
          name: 'Online Marketing',
          areaStyle: {
            color: rgbaColor(getThemeColor('color-warning-light'), 0.3)
          },
          itemStyle: {
            color: getThemeColor('color-warning-light')
          }
        }
      ]
    }
  ],
  grid: {
    top: 10,
    left: 0,
    outerBoundsMode: 'none'
  }
});

const MarketingCampaignChart = ({
  className,
  style
}: {
  className?: string;
  style?: CSSProperties;
}) => {
  const chartRef = useRef<null | EChartsReactCore>(null);
  const updateDimensions = () => {
    if (window.innerWidth < 1200) {
      chartRef.current?.getEchartsInstance()?.setOption({
        radar: {
          radius: '74%'
        }
      });
    } else if (window.innerWidth > 1200) {
      chartRef.current?.getEchartsInstance().setOption({
        radar: {
          radius: '85%'
        }
      });
    }
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  useEffect(() => {
    updateDimensions();
  }, [chartRef.current]);

  const {
    getThemeColor,
    config: { isDark }
  } = useAppContext();

  return (
    <ReactEChartsCore
      ref={chartRef}
      echarts={echarts}
      option={getDefaultOptions(getThemeColor, isDark)}
      className={className}
      style={style}
    />
  );
};

export default MarketingCampaignChart;
