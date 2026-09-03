import { useEffect, useRef } from 'react';
import { gantt } from 'dhtmlx-gantt';
import { useAppContext } from 'providers/AppProvider';
import { resetGanttConfig } from '../resetGanttConfig';

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

/**
 * The gold's `modules/components/dhtmlx-gantt` page only prints the markup and
 * the vendor script tags; this renders the same chart live. `.gantt-zero-roadmap`
 * is the phoenix skin for a gantt in a card (`css/plugins/gantt-chart.css`) —
 * it replaced the old bootstrap `.gantt-chart-example` selector.
 */
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

export default BasicGanttChart;
