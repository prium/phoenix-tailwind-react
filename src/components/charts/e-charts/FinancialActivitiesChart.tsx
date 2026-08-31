import { CSSProperties, useCallback, useEffect, useMemo } from 'react';
import ReactEChartsCore from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { tooltipFormatterDefault } from 'helpers/echart-utils';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { CallbackDataParams } from 'echarts/types/dist/shared';
echarts.use([TooltipComponent, BarChart]);

interface ChartData {
  profit: number[];
  revenue: number[];
  expenses: number[];
}
interface FinancialActivitiesChartProps {
  style?: CSSProperties;
  ref?: React.RefObject<EChartsReactCore | null>;
  chartData: ChartData;
}

const FinancialActivitiesChart = ({
  style,
  ref,
  chartData
}: FinancialActivitiesChartProps) => {
  const {
    getThemeColor,
    config: { isDark }
  } = useAppContext();

  const chartRef = ref as React.RefObject<EChartsReactCore | null>;

  const getDefaultOptions = useMemo(
    () => ({
      color: [
        getThemeColor('color-primary'),
        getThemeColor('background-color-highlight')
      ],
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
        // revenue/expanses are plotted negative for the diverging layout;
        // show absolute values like the axis labels
        formatter: (params: CallbackDataParams[]) =>
          tooltipFormatterDefault(
            params.map(el => ({
              ...el,
              value: Math.abs(
                (Array.isArray(el.value) ? el.value[1] : el.value) as number
              )
            })),
            'MMM DD',
            'color'
          )
      },
      legend: {
        data: ['Profit', 'Revenue', 'Expanses'], // gold copy really says Expanses
        show: false
      },

      xAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          margin: 12,
          color: getThemeColor('text-color-muted'),
          formatter: (value: number) =>
            `${Math.abs(Math.round((value / 1000) * 10) / 10)}k`,
          fontFamily: 'Nunito Sans',
          fontWeight: 700
        },
        splitLine: {
          lineStyle: {
            color: getThemeColor('border-color-subtle')
          }
        }
      },

      yAxis: {
        type: 'category',
        axisTick: {
          show: false
        },
        data: [
          'NOV-DEC',
          'SEP-OCT',
          'JUL-AUG',
          'MAY-JUN',
          'MAR-APR',
          'JAN-FEB'
        ],
        axisLabel: {
          show: true,
          color: getThemeColor('text-color-muted'),
          margin: 8,
          fontFamily: 'Nunito Sans',
          fontWeight: 700
        },
        axisLine: {
          lineStyle: {
            color: getThemeColor('border-color-subtle')
          }
        }
      },
      series: [
        {
          name: 'Profit',
          stack: 'Total',
          type: 'bar',
          barWidth: 8,
          roundCap: true,
          emphasis: {
            focus: 'series'
          },
          itemStyle: {
            borderRadius: [0, 4, 4, 0],
            color: isDark
              ? getThemeColor('color-primary')
              : getThemeColor('color-primary-light')
          },
          data: chartData.profit
        },
        {
          name: 'Revenue',
          type: 'bar',
          barWidth: 8,
          barGap: '100%',
          stack: 'Total',
          emphasis: {
            focus: 'series'
          },
          itemStyle: {
            borderRadius: [4, 0, 0, 4],
            color: isDark
              ? getThemeColor('color-success')
              : getThemeColor('color-success-light')
          },
          data: chartData.revenue
        },
        {
          name: 'Expanses',
          type: 'bar',
          barWidth: 8,
          emphasis: {
            focus: 'series'
          },
          itemStyle: {
            borderRadius: [4, 0, 0, 4],
            color: isDark
              ? getThemeColor('color-info')
              : getThemeColor('color-info-light')
          },
          data: chartData.expenses
        }
      ],
      grid: {
        right: 3,
        left: -10,
        bottom: 0,
        top: 16,
        outerBoundsMode: 'same',
        outerBoundsContain: 'axisLabel'
      },
      animation: false
    }),
    [getThemeColor, isDark, chartData]
  );

  const updateDimensions = useCallback(() => {
    if (!chartRef.current) return;

    const chartInstance = chartRef.current.getEchartsInstance();

    if (!chartInstance) return;

    const setSafeOption = (option: any) => {
      chartInstance.setOption(option, { notMerge: false, lazyUpdate: true });
    };

    if (window.innerWidth < 576) {
      setSafeOption({
        yAxis: {
          axisLabel: {
            show: false
          }
        },
        grid: {
          left: 15
        }
      });
    } else if (window.innerWidth < 768) {
      setSafeOption({
        yAxis: {
          axisLabel: {
            margin: 32,
            show: true
          }
        },
        grid: {
          left: 3
        }
      });
    } else if (window.innerWidth <= 1540) {
      setSafeOption({
        yAxis: {
          axisLabel: {
            show: false
          }
        },
        grid: {
          left: -2
        }
      });
    } else {
      setSafeOption({
        yAxis: {
          axisLabel: {
            show: true
          }
        },
        grid: {
          left: 0
        }
      });
    }
  }, []);

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

  return (
    <ReactEChartsCore
      echarts={echarts}
      ref={chartRef}
      option={getDefaultOptions}
      style={style}
    />
  );
};

export default FinancialActivitiesChart;
