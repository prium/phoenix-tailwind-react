import { CSSProperties } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { getPastDates } from 'helpers/utils';
import { useAppContext } from 'providers/AppProvider';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import { tooltipFormatterList } from 'helpers/echart-utils';

echarts.use([TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

const dates = getPastDates(4);

const getDefaultOptions = (
  getThemeColor: (name: string) => string,
  isDark: boolean
) => ({
  color: [
    getThemeColor('color-primary'),
    getThemeColor('background-color-highlight')
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
    formatter: tooltipFormatterList
  },
  xAxis: {
    type: 'value',
    inverse: true,
    axisLabel: {
      show: false
    },
    show: false,
    data: dates,
    axisLine: {
      lineStyle: {
        color: getThemeColor('background-color-highlight')
      }
    },
    axisTick: false
  },
  yAxis: {
    data: ['Closed Won', 'Objection', 'Offer', 'Qualify Lead', 'Created'],
    type: 'category',
    axisPointer: { type: 'none' },
    axisTick: 'none',
    splitLine: {
      interval: 5,
      lineStyle: {
        color: getThemeColor('background-color-muted')
      }
    },
    axisLine: { show: false },
    axisLabel: {
      show: true,
      align: 'left',
      margin: 100,
      color: getThemeColor('text-color-default')
    }
  },
  series: {
    name: 'Lead Conversion',
    type: 'bar',
    barWidth: '20px',
    showBackground: true,
    backgroundStyle: {
      borderRadius: [4, 0, 0, 4]
    },
    data: [
      {
        value: 1060,
        itemStyle: {
          color: !isDark
            ? getThemeColor('color-success-lighter')
            : getThemeColor('color-success-dark'),
          borderRadius: [4, 0, 0, 4]
        },
        emphasis: {
          itemStyle: {
            color: !isDark
              ? getThemeColor('color-success-light')
              : getThemeColor('color-success-dark')
          },
          label: {
            formatter: () => `{b| 53% }`,
            rich: {
              b: {
                color: getThemeColor('color-white')
              }
            }
          }
        },
        label: {
          show: true,
          position: 'inside',
          formatter: () => `{b| 53%}`,
          rich: {
            b: {
              color: !isDark
                ? getThemeColor('color-success-dark')
                : getThemeColor('color-success-subtle'),
              fontWeight: 500,
              padding: [0, 5, 0, 0]
            }
          }
        }
      },
      {
        value: 1200,
        itemStyle: {
          color: !isDark
            ? getThemeColor('color-info-lighter')
            : getThemeColor('color-info-dark'),
          borderRadius: [4, 0, 0, 4]
        },
        emphasis: {
          itemStyle: {
            color: !isDark
              ? getThemeColor('color-info-light')
              : getThemeColor('color-info-dark')
          },
          label: {
            formatter: () => `{b| 60% }`,
            rich: {
              b: {
                color: getThemeColor('color-white')
              }
            }
          }
        },
        label: {
          show: true,
          position: 'inside',
          formatter: () => `{b| 60%}`,
          rich: {
            b: {
              color: !isDark
                ? getThemeColor('color-info-dark')
                : getThemeColor('color-info-subtle'),
              fontWeight: 500,
              padding: [0, 5, 0, 0]
            }
          }
        }
      },
      {
        value: 1600,
        itemStyle: {
          color: !isDark
            ? getThemeColor('color-primary-lighter')
            : getThemeColor('color-primary-dark'),
          borderRadius: [4, 0, 0, 4]
        },
        emphasis: {
          itemStyle: {
            color: !isDark
              ? getThemeColor('color-primary-light')
              : getThemeColor('color-primary-dark')
          },
          label: {
            formatter: () => `{b| 80% }`,
            rich: {
              b: {
                color: getThemeColor('color-white')
              }
            }
          }
        },
        label: {
          show: true,
          position: 'inside',
          formatter: () => `{b| 80% }`,
          rich: {
            b: {
              color: !isDark
                ? getThemeColor('color-primary-dark')
                : getThemeColor('color-primary-subtle'),
              fontWeight: 500,
              padding: [0, 5, 0, 0]
            }
          }
        }
      },
      {
        value: 1800,
        itemStyle: {
          color: !isDark
            ? getThemeColor('color-warning-lighter')
            : getThemeColor('color-warning-dark'),
          borderRadius: [4, 0, 0, 4]
        },
        emphasis: {
          itemStyle: {
            color: !isDark
              ? getThemeColor('color-warning-light')
              : getThemeColor('color-warning-dark')
          },
          label: {
            formatter: () => `{b| 90% }`,
            rich: {
              b: {
                color: getThemeColor('color-white')
              }
            }
          }
        },
        label: {
          show: true,
          position: 'inside',
          formatter: () => `{b|90%}`,
          rich: {
            b: {
              color: !isDark
                ? getThemeColor('color-warning-dark')
                : getThemeColor('color-warning-subtle'),
              fontWeight: 500,
              padding: [0, 5, 0, 0]
            }
          }
        }
      },
      {
        value: 2000,
        itemStyle: {
          color: !isDark
            ? getThemeColor('color-danger-lighter')
            : getThemeColor('color-danger-dark'),
          borderRadius: [4, 0, 0, 4]
        },
        emphasis: {
          itemStyle: {
            color: !isDark
              ? getThemeColor('color-danger-light')
              : getThemeColor('color-danger-dark')
          },
          label: {
            formatter: () => `{a|100%}`,
            rich: {
              a: {
                color: getThemeColor('color-white')
              }
            }
          }
        },
        label: {
          show: true,
          position: 'inside',
          formatter: () => `{a|100%}`,
          rich: {
            a: {
              color: !isDark
                ? getThemeColor('color-danger-dark')
                : getThemeColor('color-danger-subtle'),
              fontWeight: 500
            }
          }
        }
      }
    ],
    barGap: '50%'
  },
  grid: {
    right: 5,
    left: 100,
    bottom: 0,
    top: '5%',
    outerBoundsMode: 'none'
  },
  animation: false
});

const LeadConversationChart = ({
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

export default LeadConversationChart;
