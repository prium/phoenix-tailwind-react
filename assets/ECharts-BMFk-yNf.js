import{QL as s,PA as t,QM as l,QN as n,QO as c,QP as h,QQ as u,QR as m,QS as i,QT as g,QU as f,QV as x,QW as b,QX as y,QY as C,QZ as w,Q_ as k,Q$ as v,PB as S,PC as L,PD as r,PE as D,QJ as T,QK as a}from"./index-Czji80o6.js";c([h,u]);const j=e=>({color:[e("color-info-light"),e("color-warning-light"),e("color-danger-light"),e("color-success-light"),e("color-primary")],tooltip:{trigger:"item"},responsive:!0,maintainAspectRatio:!1,series:[{name:"Tasks assigned to me",type:"pie",radius:["50%","90%"],startAngle:30,avoidLabelOverlap:!1,label:{show:!1,position:"center",formatter:`{x|{d}%} 
 {y|{b}}`,rich:{x:{fontSize:31.25,fontWeight:800,color:e("text-color-subtle"),padding:[0,0,5,15]},y:{fontSize:12.8,color:e("text-color-subtle"),fontWeight:600}}},emphasis:{label:{show:!0}},labelLine:{show:!1},data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}],grid:{bottom:0,top:0,left:0,right:0,outerBoundsMode:"none"}}),A=()=>{const{getThemeColor:e}=s();return t.jsx(l,{echarts:n,option:j(e),className:"w-full min-h-80",style:{height:"auto",width:"100%"}})};c([h,f]);const M=m(10),P=[3500,4100,5400,4e3,5e3,2e3,3e3,1e3,5500,4500],R=[2500,3e3,6e3,3500,4e3,3e3,1500,1500,4200,1e3],W=e=>({color:[e("color-primary"),e("background-color-highlight")],tooltip:{trigger:"axis",padding:[7,10],backgroundColor:e("background-color-subtle"),borderColor:e("background-color-highlight"),textStyle:{color:e("text-color-emphasis")},borderWidth:1,transitionDuration:0,axisPointer:{type:"none"},formatter:o=>g(o)},legend:{data:["Expenses","Income"],right:"right",width:"100%",itemWidth:16,itemHeight:8,itemGap:20,top:3,inactiveColor:e("text-color-soft"),textStyle:{color:e("text-color-default"),fontWeight:600,fontFamily:"Nunito Sans"}},xAxis:{type:"category",axisLabel:{color:e("text-color-muted"),formatter:o=>i(o).format("MMM DD"),interval:3,fontFamily:"Nunito Sans",fontWeight:600,fontSize:12.8},data:M,axisLine:{lineStyle:{color:e("background-color-highlight")}},axisTick:!1},yAxis:{axisPointer:{type:"none"},axisTick:"none",splitLine:{interval:5,lineStyle:{color:e("background-color-muted")}},axisLine:{show:!1},axisLabel:{fontFamily:"Nunito Sans",fontWeight:600,fontSize:12.8,color:e("text-color-muted"),margin:20,verticalAlign:"bottom"}},series:[{name:"Expenses",type:"bar",barWidth:"6px",data:R,barGap:"30%",label:{show:!1},itemStyle:{borderRadius:[2,2,0,0],color:e("color-primary")}},{name:"Income",type:"bar",data:P,barWidth:"6px",barGap:"30%",label:{show:!1},z:10,itemStyle:{borderRadius:[2,2,0,0],color:e("color-info-subtle")}}],grid:{right:0,left:0,bottom:0,top:"11%",outerBoundsMode:"same",outerBoundsContain:"axisLabel"},animation:!1}),E=()=>{const{getThemeColor:e}=s();return t.jsx(l,{echarts:n,option:W(e),className:"w-full min-h-75",style:{height:"auto",width:"100%"}})};c([y,h,C,w,k,v]);const p=x(new Date("8/1/2022"),new Date("8/30/2022"),1e3*60*60*24),B=[100,200,300,300,300,250,250,250,300,300,300,500,500,500,500,500,500,1100,1100,1100,850,700,700,700,400,250,200,300,300,250],N=[200,200,100,50,50,50,400,50,50,50,50,500,50,50,200,400,600,600,600,800,200,700,400,450,500,600,700,650,600,550],z=(e,o)=>({color:[o("color-primary"),o("color-info")],tooltip:{trigger:"axis",padding:10,backgroundColor:o("background-color-subtle"),borderColor:o("background-color-highlight"),textStyle:{color:o("text-color-emphasis")},borderWidth:1,transitionDuration:0,axisPointer:{type:"none"},formatter:b},xAxis:[{type:"category",data:p,axisLabel:{formatter:d=>i(d).format("DD MMM"),interval:13,showMinLabel:!0,showMaxLabel:!1,color:o("text-color-muted"),align:"left",fontFamily:"Nunito Sans",fontWeight:600,fontSize:12.8},axisLine:{show:!0,lineStyle:{color:o("background-color-muted")}},axisTick:{show:!1},splitLine:{show:!0,interval:0,lineStyle:{color:o(e?"background-color-subtle":"background-color-muted")}},boundaryGap:0},{type:"category",position:"bottom",data:p,axisLabel:{formatter:d=>i(d).format("DD MMM"),interval:130,showMaxLabel:!0,showMinLabel:!1,color:o("text-color-muted"),align:"right",fontFamily:"Nunito Sans",fontWeight:600,fontSize:12.8},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},boundaryGap:0}],yAxis:{position:"right",axisPointer:{type:"none"},axisTick:"none",splitLine:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}},series:[{type:"line",data:B,showSymbol:!1,symbol:"circle"},{type:"line",data:N,lineStyle:{type:"dashed",width:1,color:o("color-info")},showSymbol:!1,symbol:"circle"}],grid:{right:2,left:5,bottom:"20px",top:"2%",outerBoundsMode:"none"},animation:!1}),G=()=>{const{config:{isDark:e},getThemeColor:o}=s();return t.jsx(l,{echarts:n,option:z(e,o),className:"w-full min-h-75",style:{height:"auto",width:"100%"}})};c([h,u]);const F=e=>({color:[e("color-gray-400"),e("color-success"),e("color-info"),e("color-warning")],tooltip:{trigger:"axis",backgroundColor:e("background-color-default"),bordercolor:e("background-color-muted"),formatter:o=>g(o),axisPointer:{shadowStyle:{color:"red"}}},legend:{bottom:"10",data:[{name:"Email",icon:"roundRect"},{name:"Union Ads",icon:"roundRect"},{name:"Video Ads",icon:"roundRect"}],itemWidth:16,itemHeight:8,itemGap:10,inactiveColor:e("text-color-soft"),inactiveBorderWidth:0,textStyle:{color:e("text-color-default"),fontWeight:600,fontSize:16,fontFamily:"Nunito Sans"}},xAxis:[{show:!0,interval:2,axisLine:{lineStyle:{type:"solid",color:e("background-color-highlight")}},axisLabel:{color:e("text-color-default"),formatter:o=>i(o).format("D MMM"),interval:5,align:"left",margin:20,fontSize:12.8},axisTick:{show:!0,length:15},splitLine:{interval:0,show:!0,lineStyle:{color:e("background-color-highlight"),type:"dashed"}},type:"category",boundaryGap:0,data:m(15)},{show:!0,interval:2,axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{interval:1,show:!0,lineStyle:{color:e("background-color-highlight"),type:"solid"}},boundaryGap:0,data:m(15)}],yAxis:{show:!0,type:"value",axisLine:{lineStyle:{type:"solid",color:e("background-color-highlight")}},axisLabel:{color:e("text-color-default"),margin:20,fontSize:12.8,interval:0},splitLine:{show:!0,lineStyle:{color:e("background-color-highlight"),type:"solid"}},axisTick:{show:!0,length:15,alignWithLabel:!0,lineStyle:{color:e("background-color-highlight")}}},series:[{name:"Email",type:"line",stack:"Total",data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",data:[320,332,301,334,390,330,320]}],grid:{right:5,left:-3,bottom:"15%",top:14,outerBoundsMode:"same",outerBoundsContain:"axisLabel"}}),Q=()=>{const{getThemeColor:e}=s();return t.jsx(l,{echarts:n,option:F(e),className:"w-full min-h-80",style:{height:"auto",width:"100%"}})},O=`// import the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core';

// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';

// Import charts, all with Chart suffix
import { BarChart } from 'echarts/charts';

// import components, all suffixed with Component
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components';

// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from 'echarts/renderers';

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LegendComponent
]);

// Read the chart palette from the theme tokens, so the chart follows light/dark.
const { getThemeColor } = useAppContext();

// The chart element carries its own size, the way the static theme sizes its
// .echart-* containers (min-h-75, min-h-80 and so on).
<ReactEChartsCore
  echarts={echarts}
  option={getOption(getThemeColor)}
  className="w-full min-h-75"
  style={{ height: 'auto', width: '100%' }}
/>`,$=`
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { getDates } from 'helpers/utils';
import dayjs from 'dayjs';
import { useAppContext } from 'providers/AppProvider';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { tooltipFormatterList } from 'helpers/echart-utils';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  LegendComponent
]);

const dates = getDates(
  new Date('8/1/2022'),
  new Date('8/30/2022'),
  1000 * 60 * 60 * 24
);

const currentMonthData = [
  100, 200, 300, 300, 300, 250, 250, 250, 300, 300, 300, 500, 500, 500, 500,
  500, 500, 1100, 1100, 1100, 850, 700, 700, 700, 400, 250, 200, 300, 300, 250
];

const prevMonthData = [
  200, 200, 100, 50, 50, 50, 400, 50, 50, 50, 50, 500, 50, 50, 200, 400, 600,
  600, 600, 800, 200, 700, 400, 450, 500, 600, 700, 650, 600, 550
];

const getDefaultOptions = (
  isDark: boolean,
  getThemeColor: (name: string) => string
) => ({
  color: [getThemeColor('color-primary'), getThemeColor('color-info')],
  tooltip: {
    trigger: 'axis',
    padding: 10,
    backgroundColor: getThemeColor('background-color-subtle'),
    borderColor: getThemeColor('background-color-highlight'),
    textStyle: { color: getThemeColor('text-color-emphasis') },
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    },
    formatter: tooltipFormatterList
  },
  xAxis: [
    {
      type: 'category',
      data: dates,
      axisLabel: {
        formatter: (value: Date) => dayjs(value).format('DD MMM'),
        interval: 13,
        showMinLabel: true,
        showMaxLabel: false,
        color: getThemeColor('text-color-muted'),
        align: 'left',
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        fontSize: 12.8
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: getThemeColor('background-color-muted')
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        interval: 0,
        lineStyle: {
          color:
            isDark
              ? getThemeColor('background-color-subtle')
              : getThemeColor('background-color-muted')
        }
      },
      boundaryGap: 0
    },
    {
      type: 'category',
      position: 'bottom',
      data: dates,
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
    position: 'right',
    axisPointer: { type: 'none' },
    axisTick: 'none',
    splitLine: {
      show: false
    },
    axisLine: { show: false },
    axisLabel: { show: false }
  },
  series: [
    {
      type: 'line',
      data: currentMonthData,
      showSymbol: false,
      symbol: 'circle'
    },
    {
      type: 'line',
      data: prevMonthData,
      lineStyle: {
        type: 'dashed',
        width: 1,
        color: getThemeColor('color-info')
      },
      showSymbol: false,
      symbol: 'circle'
    }
  ],
  grid: {
    right: 2,
    left: 5,
    bottom: '20px',
    top: '2%',
    outerBoundsMode: 'none'
  },
  animation: false
});

const SimpleLineChart = () => {
  const {
    config: { isDark },
    getThemeColor
  } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(isDark, getThemeColor)}
      className="w-full min-h-75"
      style={{ height: 'auto', width: '100%' }}
    />
  );
};
`,H=`
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { getPastDates } from 'helpers/utils';
import dayjs from 'dayjs';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { tooltipFormatterDefault } from 'helpers/echart-utils';

echarts.use([TooltipComponent, BarChart]);

const dates = getPastDates(10);

const data1 = [3500, 4100, 5400, 4000, 5000, 2000, 3000, 1000, 5500, 4500];

const data2 = [2500, 3000, 6000, 3500, 4000, 3000, 1500, 1500, 4200, 1000];

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: [
    getThemeColor('color-primary'),
    getThemeColor('background-color-highlight')
  ],
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    backgroundColor: getThemeColor('background-color-subtle'),
    borderColor: getThemeColor('background-color-highlight'),
    textStyle: { color: getThemeColor('text-color-emphasis') },
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    },
    formatter: (params: CallbackDataParams[]) => tooltipFormatterDefault(params)
  },
  legend: {
    data: ['Expenses', 'Income'],
    right: 'right',
    width: '100%',
    itemWidth: 16,
    itemHeight: 8,
    itemGap: 20,
    top: 3,
    inactiveColor: getThemeColor('text-color-soft'),
    textStyle: {
      color: getThemeColor('text-color-default'),
      fontWeight: 600,
      fontFamily: 'Nunito Sans'
    }
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      color: getThemeColor('text-color-muted'),
      formatter: (value: Date) => dayjs(value).format('MMM DD'),
      interval: 3,
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      fontSize: 12.8
    },
    data: dates,
    axisLine: {
      lineStyle: {
        color: getThemeColor('background-color-highlight')
      }
    },
    axisTick: false
  },
  yAxis: {
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
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      fontSize: 12.8,
      color: getThemeColor('text-color-muted'),
      margin: 20,
      verticalAlign: 'bottom'
    }
  },
  series: [
    {
      name: 'Expenses',
      type: 'bar',
      barWidth: '6px',
      data: data2,
      barGap: '30%',
      label: { show: false },
      itemStyle: {
        borderRadius: [2, 2, 0, 0],
        color: getThemeColor('color-primary')
      }
    },
    {
      name: 'Income',
      type: 'bar',
      data: data1,
      barWidth: '6px',
      barGap: '30%',
      label: { show: false },
      z: 10,
      itemStyle: {
        borderRadius: [2, 2, 0, 0],
        color: getThemeColor('color-info-subtle')
      }
    }
  ],
  grid: {
    right: 0,
    left: 0,
    bottom: 0,
    top: '11%',
    outerBoundsMode: 'same',
    outerBoundsContain: 'axisLabel'
  },
  animation: false
});

const SeriesBarChart = () => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
      className="w-full min-h-75"
      style={{ height: 'auto', width: '100%' }}
    />
  );
};
`,I=`
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
        formatter: '{x|{d}%} 
 {y|{b}}',
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
`,U=`
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import dayjs from 'dayjs';
import { getPastDates } from 'helpers/utils';
import { tooltipFormatterDefault } from 'helpers/echart-utils';
import { CallbackDataParams } from 'echarts/types/dist/shared';
echarts.use([TooltipComponent, PieChart]);

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: [
    getThemeColor('color-gray-400'),
    getThemeColor('color-success'),
    getThemeColor('color-info'),
    getThemeColor('color-warning')
  ],
  tooltip: {
    trigger: 'axis',
    backgroundColor: getThemeColor('background-color-default'),
    bordercolor: getThemeColor('background-color-muted'),
    formatter: (params: CallbackDataParams[]) =>
      tooltipFormatterDefault(params),
    axisPointer: {
      shadowStyle: {
        color: 'red'
      }
    }
  },
  legend: {
    bottom: '10',
    data: [
      {
        name: 'Email',
        icon: 'roundRect'
      },
      {
        name: 'Union Ads',
        icon: 'roundRect'
      },
      {
        name: 'Video Ads',
        icon: 'roundRect'
      }
    ],
    itemWidth: 16,
    itemHeight: 8,
    itemGap: 10,
    inactiveColor: getThemeColor('text-color-soft'),
    inactiveBorderWidth: 0,
    textStyle: {
      color: getThemeColor('text-color-default'),
      fontWeight: 600,
      fontSize: 16,
      fontFamily: 'Nunito Sans'
    }
  },
  xAxis: [
    {
      show: true,
      interval: 2,
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: getThemeColor('background-color-highlight')
        }
      },
      axisLabel: {
        color: getThemeColor('text-color-default'),
        formatter: (data: string) => dayjs(data).format('D MMM'),
        interval: 5,
        align: 'left',
        margin: 20,
        fontSize: 12.8
      },
      axisTick: {
        show: true,
        length: 15
      },
      splitLine: {
        interval: 0,
        show: true,
        lineStyle: {
          color: getThemeColor('background-color-highlight'),
          type: 'dashed'
        }
      },
      type: 'category',
      boundaryGap: 0,
      data: getPastDates(15)
    },
    {
      show: true,
      interval: 2,
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        interval: 1,
        show: true,
        lineStyle: {
          color: getThemeColor('background-color-highlight'),
          type: 'solid'
        }
      },
      boundaryGap: 0,
      data: getPastDates(15)
    }
  ],
  yAxis: {
    show: true,
    type: 'value',
    axisLine: {
      lineStyle: {
        type: 'solid',
        color: getThemeColor('background-color-highlight')
      }
    },
    axisLabel: {
      color: getThemeColor('text-color-default'),
      margin: 20,
      fontSize: 12.8,
      interval: 0
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: getThemeColor('background-color-highlight'),
        type: 'solid'
      }
    },
    axisTick: {
      show: true,
      length: 15,
      alignWithLabel: true,
      lineStyle: {
        color: getThemeColor('background-color-highlight')
      }
    }
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    }
  ],
  grid: {
    right: 5,
    left: -3,
    bottom: '15%',
    top: 14,
    outerBoundsMode: 'same',
    outerBoundsContain: 'axisLabel'
  }
});

const StackedLineChart = () => {
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
`,q=()=>t.jsxs("div",{children:[t.jsx(S,{title:"ECharts",description:"A powerful, interactive charting and visualization library for browser.",link:{text:"Documentation for ECharts",url:"https://echarts.apache.org/en/option.html"},children:t.jsxs("p",{className:"mb-2",children:["Charts are rendered with ",t.jsx("code",{children:"echarts-for-react"}),"'s"," ",t.jsx("code",{children:"ReactEChartsCore"})," on top of the tree-shakable"," ",t.jsx("code",{children:"echarts/core"})," build, so each chart registers only the series types, components and renderer it uses. Colours are read from the theme tokens through ",t.jsx("code",{children:"useAppContext().getThemeColor"}),", which resolves a CSS custom property on the document element, so a chart follows the light/dark switch without a second option set."]})}),t.jsxs(L,{children:[t.jsxs(r,{className:"mb-4",children:[t.jsx(r.Header,{title:"Usage",noPreview:!0,children:t.jsxs("p",{className:"mb-0",children:["Import the core module, register the pieces the chart needs with"," ",t.jsx("code",{children:"echarts.use()"}),", then render"," ",t.jsx("code",{children:"ReactEChartsCore"}),". Give the chart element a height — echarts measures its container, the same way the static theme sizes its ",t.jsx("code",{children:".echart-*"})," divs with ",t.jsx("code",{children:"min-h-75"})," ","or ",t.jsx("code",{children:"min-h-80"}),"."]})}),t.jsx(r.Body,{children:t.jsx(D,{code:O})})]}),t.jsx("h3",{className:"mb-6",children:"Examples"}),t.jsxs(T,{className:"g-6",children:[t.jsx(a,{xl:6,children:t.jsxs(r,{children:[t.jsx(r.Header,{title:"Simple line chart",description:"Two line series over a month of dates."}),t.jsx(r.Body,{code:$,hidePreview:!0,children:t.jsx(G,{})})]})}),t.jsx(a,{xl:6,children:t.jsxs(r,{children:[t.jsx(r.Header,{title:"Series bar chart",description:"Two bar series drawn side by side."}),t.jsx(r.Body,{code:H,hidePreview:!0,children:t.jsx(E,{})})]})}),t.jsx(a,{xl:6,children:t.jsxs(r,{children:[t.jsx(r.Header,{title:"Doughnut pie chart",description:"A pie series with an inner radius, labelled on hover."}),t.jsx(r.Body,{code:I,hidePreview:!0,children:t.jsx(A,{})})]})}),t.jsx(a,{xl:6,children:t.jsxs(r,{children:[t.jsx(r.Header,{title:"Stacked line chart",description:"Four line series stacked on a shared total."}),t.jsx(r.Body,{code:U,hidePreview:!0,children:t.jsx(Q,{})})]})})]})]})]});export{q as default};
