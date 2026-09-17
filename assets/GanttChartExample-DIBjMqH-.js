import{QH as o,QL as l,X$ as g,Y0 as t,PA as e,PB as p,PC as f,PD as i}from"./index-BFnYjFYJ.js";const u={data:[{id:1,text:"Planning",start_date:"2019-08-01 00:00",duration:3,progress:1.5,task_class:"planning"},{id:2,text:"Research",start_date:"2019-08-02 00:00",duration:4,progress:.5,task_class:"research"},{id:3,text:"Design",start_date:"2019-08-02 00:00",duration:8,progress:.6,task_class:"design"},{id:4,text:"Review",start_date:"2019-08-05 00:00",duration:5,progress:.8,task_class:"review"},{id:5,text:"Develop",start_date:"2019-08-06 00:00",duration:10,progress:.4,open:!0,task_class:"develop"},{id:6,text:"Review II",start_date:"2019-08-10 00:00",duration:5,progress:.02,task_class:"review-2"}],links:[{id:1,source:1,target:2,type:"0"},{id:2,source:1,target:3,type:"0"},{id:3,source:3,target:4,type:"0"},{id:4,source:6,target:5,type:"3"}]},m=()=>{const s=o.useRef(null),{config:{isRTL:c}}=l();return o.useEffect(()=>{if(s.current){g(),t.plugins({tooltip:!0}),t.config.date_format="%Y-%m-%d %H:%i",t.config.scale_height=0,t.config.row_height=36,t.config.bar_height=12,t.config.drag_move=!1,t.config.drag_progress=!1,t.config.drag_resize=!1,t.config.drag_links=!1,t.config.details_on_dblclick=!1;const d={levels:[{name:"month",scales:[{unit:"month",format:"%F, %Y"},{unit:"week",format:"Week #%W"}]},{name:"year",scales:[{unit:"year",step:1,format:"%Y"}]},{name:"week",scales:[{unit:"week",step:1,format:a=>{const n=t.date.date_to_str("%d %M"),r=t.date.add(a,-6,"day");return"#"+t.date.date_to_str("%W")(a)+", "+n(a)+" - "+n(r)}},{unit:"day",step:1,format:"%j %D"}]}]};t.ext.zoom.init(d),t.ext.zoom.setLevel("week"),t.config.columns=[{name:"text",width:56,resize:!0}],t.templates.task_class=(a,n,r)=>r.task_class,t.templates.timeline_cell_class=function(){return"weekend"},t.templates.task_text=()=>"",t.init(s.current),t.parse(u)}return()=>{t.clearAll(),t.resetSkin(),t.resetLayout(),t._events=[]}},[]),o.useEffect(()=>{t.config.rtl=c},[c]),e.jsx("div",{className:"gantt-zero-roadmap",children:e.jsx("div",{ref:s,className:"gantt-zero-roadmap-chart"})})},h=`
import { useEffect, useRef } from 'react';
import { gantt } from 'dhtmlx-gantt';
import { useAppContext } from 'providers/AppProvider';
import { resetGanttConfig } from 'components/charts/dhtmlx/resetGanttConfig';

const tasks = {
  data: [
    {
      id: 1,
      text: 'Planning',
      start_date: '2019-08-01 00:00',
      duration: 3,
      progress: 1.5,
      task_class: 'planning'
    },
    {
      id: 2,
      text: 'Research',
      start_date: '2019-08-02 00:00',
      duration: 4,
      // parent: 1,
      progress: 0.5,
      task_class: 'research'
    },
    {
      id: 3,
      text: 'Design',
      start_date: '2019-08-02 00:00',
      duration: 8,
      // parent: 1,
      progress: 0.6,
      task_class: 'design'
    },
    {
      id: 4,
      text: 'Review',
      start_date: '2019-08-05 00:00',
      duration: 5,
      // parent: 1,
      progress: 0.8,
      task_class: 'review'
    },
    {
      id: 5,
      text: 'Develop',
      start_date: '2019-08-06 00:00',
      duration: 10,
      // parent: 1,
      progress: 0.4,
      open: true,
      task_class: 'develop'
    },
    {
      id: 6,
      text: 'Review II',
      start_date: '2019-08-10 00:00',
      duration: 5,
      // parent: 4,
      progress: 0.02,
      task_class: 'review-2'
    }
  ],
  links: [
    { id: 1, source: 1, target: 2, type: '0' },
    { id: 2, source: 1, target: 3, type: '0' },
    { id: 3, source: 3, target: 4, type: '0' },
    { id: 4, source: 6, target: 5, type: '3' }
  ]
};

const BasicGanttChart = () => {
  const containerRef = useRef(null);
  const {
    config: { isRTL }
  } = useAppContext();

  useEffect(() => {
    if (containerRef.current) {
      resetGanttConfig();
      gantt.plugins({
        tooltip: true
      });

      gantt.config.date_format = '%Y-%m-%d %H:%i';
      gantt.config.scale_height = 0;
      gantt.config.row_height = 36;
      gantt.config.bar_height = 12;
      gantt.config.drag_move = false;
      gantt.config.drag_progress = false;
      gantt.config.drag_resize = false;
      gantt.config.drag_links = false;
      gantt.config.details_on_dblclick = false;
      // gantt.config.click_drag = false;

      const zoomConfig = {
        levels: [
          {
            name: 'month',
            scales: [
              { unit: 'month', format: '%F, %Y' },
              { unit: 'week', format: 'Week #%W' }
            ]
          },

          {
            name: 'year',
            scales: [{ unit: 'year', step: 1, format: '%Y' }]
          },
          {
            name: 'week',
            scales: [
              {
                unit: 'week',
                step: 1,
                format: (date: Date) => {
                  const dateToStr = gantt.date.date_to_str('%d %M');
                  const endDate = gantt.date.add(date, -6, 'day');
                  const weekNum = gantt.date.date_to_str('%W')(date);
                  return (
                    '#' +
                    weekNum +
                    ', ' +
                    dateToStr(date) +
                    ' - ' +
                    dateToStr(endDate)
                  );
                }
              },
              { unit: 'day', step: 1, format: '%j %D' }
            ]
          }
        ]
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      gantt.ext.zoom.init(zoomConfig as any);
      gantt.ext.zoom.setLevel('week');
      // gantt.ext.zoom.attachEvent('onAfterZoom', function (level, config) {
      //   document.querySelector("input[value='" + config.name + "']").checked = true;
      // });

      gantt.config.columns = [{ name: 'text', width: 56, resize: true }];

      gantt.templates.task_class = (_start, _end, task) => task.task_class;

      gantt.templates.timeline_cell_class = function () {
        return 'weekend';
      };

      gantt.templates.task_text = () => '';

      gantt.init(containerRef.current);
      gantt.parse(tasks);
    }
    return () => {
      gantt.clearAll();
      gantt.resetSkin();
      gantt.resetLayout();
      gantt._events = [];
    };
  }, []);

  useEffect(() => {
    gantt.config.rtl = isRTL;
  }, [isRTL]);

  return (
    <div className="gantt-zero-roadmap">
      <div ref={containerRef} className="gantt-zero-roadmap-chart" />
    </div>
  );
};
`,x=()=>e.jsxs("div",{children:[e.jsx(p,{title:"Gantt chart",description:"DHTMLX Gantt is an open source JavaScript Gantt chart library that helps you illustrate and manage a project schedule in a nice-looking diagram.",link:{text:"DHTMLX Gantt",url:"https://github.com/DHTMLX/gantt"},children:e.jsxs("p",{className:"mb-2",children:["The vendor stylesheet is imported once from"," ",e.jsx("code",{children:"src/assets/css/index.css"}),", ahead of the phoenix plugin layer, so the skin in ",e.jsx("code",{children:"css/plugins/gantt-chart.css"})," wins the cascade. That skin is keyed on ",e.jsx("code",{children:".gantt-zero-roadmap"}),", which is why the wrapper below carries it."]})}),e.jsx(f,{children:e.jsxs(i,{className:"mb-4",children:[e.jsx(i.Header,{title:"Example",children:e.jsxs("p",{className:"mb-0",children:[e.jsx("code",{children:"gantt"})," is a singleton, so the component resets the shared config with ",e.jsx("code",{children:"resetGanttConfig()"})," before applying its own, and clears the instance on unmount. Each task carries a"," ",e.jsx("code",{children:"task_class"})," that the skin colours, and the RTL flag follows ",e.jsx("code",{children:"useAppContext()"}),"."]})}),e.jsx(i.Body,{code:h,hidePreview:!0,children:e.jsx(m,{})})]})})]});export{x as default};
