import { useEffect, useRef, CSSProperties, useCallback } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { getPastDates, rgbaColor } from 'helpers/utils';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent, GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { tooltipFormatterDefault } from 'helpers/echart-utils';
import dayjs from 'dayjs';
import EChartsReactCore from 'echarts-for-react/lib/core';

echarts.use([TooltipComponent, GridComponent, LineChart, CanvasRenderer]);

const dates = getPastDates(7);

const data1 = [8000, 7700, 5900, 10100, 5100, 6000, 4300];

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
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
  xAxis: [
    {
      type: 'category',
      data: dates,
      boundaryGap: 0,
      splitLine: {
        show: true,
        lineStyle: {
          color: getThemeColor('background-color-muted')
        }
      },
      axisLabel: {
        color: getThemeColor('text-color-default'),
        // interval: 1,
        showMaxLabel: false,
        showMinLabel: true,
        align: 'left',
        formatter: (value: number) => dayjs(value).format('ddd'),
        fontFamily: 'Nunito Sans',
        fontWeight: 400,
        fontSize: 12.8,
        margin: 16
      },
      axisLine: {
        lineStyle: {
          color: getThemeColor('background-color-muted')
        }
      },
      axisTick: false
    },
    {
      type: 'category',
      data: dates,
      boundaryGap: 0,
      splitLine: {
        show: true,
        lineStyle: {
          color: getThemeColor('background-color-muted')
        }
      },
      axisLabel: {
        color: getThemeColor('text-color-default'),
        interval: 130,
        showMaxLabel: true,
        showMinLabel: false,
        align: 'right',
        formatter: (value: number) => dayjs(value).format('ddd'),
        fontFamily: 'Nunito Sans',
        fontWeight: 400,
        fontSize: 12.8,
        margin: 16
      },
      position: 'bottom',
      axisLine: {
        lineStyle: {
          color: getThemeColor('background-color-muted')
        }
      },
      axisTick: false
    }
  ],
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: getThemeColor('background-color-muted')
      }
    },
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
      margin: 16,
      formatter: (value: number) => `${value / 1000}k`
    }
    // interval: 150,
  },
  series: [
    {
      name: 'Campaign',
      type: 'line',
      smooth: 0.4,
      symbolSize: 11,
      itemStyle: {
        color: getThemeColor('background-color-subtle'),
        borderColor: getThemeColor('color-primary')
      },
      lineStyle: {
        color: getThemeColor('color-primary')
      },
      symbol: 'circle',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: rgbaColor(getThemeColor('color-primary-light'), 0.2)
            },
            {
              offset: 1,
              color: rgbaColor(getThemeColor('color-primary-light'), 0.2)
            }
          ]
        }
      },
      data: data1
    }
  ],
  grid: {
    right: 5,
    left: 3,
    bottom: 19,
    top: 4,
    outerBoundsMode: 'same',
    outerBoundsContain: 'axisLabel'
  },
  animation: false
});

const AnalyticsCallCampaignChart = ({
  className,
  style
}: {
  className?: string;
  style?: CSSProperties;
}) => {
  const chartRef = useRef<null | EChartsReactCore>(null);
  const updateDimensions = useCallback(() => {
    if (!chartRef.current) return;

    const chartInstance = chartRef.current.getEchartsInstance();

    if (!chartInstance) return;

    const setSafeOption = (option: any) => {
      chartInstance.setOption(option, { notMerge: false, lazyUpdate: true });
    };

    if (window.innerWidth < 576) {
      setSafeOption({
        xAxis: [
          {},
          {
            axisLabel: {
              showMaxLabel: false
            }
          }
        ]
      });
    } else if (window.innerWidth > 576) {
      setSafeOption({
        xAxis: [
          {},
          {
            axisLabel: {
              showMaxLabel: true
            }
          }
        ]
      });
    }
  }, [chartRef]);
  useEffect(() => {
    const initialRun = setTimeout(() => {
      if (chartRef.current) {
        updateDimensions();
      }
    }, 0);
    window.addEventListener('resize', updateDimensions);
    return () => {
      clearTimeout(initialRun);
      window.removeEventListener('resize', updateDimensions);
    };
  }, [updateDimensions]);

  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      ref={chartRef}
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
      className={className}
      style={style}
    />
  );
};

export default AnalyticsCallCampaignChart;
