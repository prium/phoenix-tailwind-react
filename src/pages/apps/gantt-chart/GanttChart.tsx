import { gantt } from 'dhtmlx-gantt';
import { useEffect, useRef, useState } from 'react';
import GanttChartActions from 'components/modules/gantt/GanttActions';
import GanttOffcanvas from 'components/modules/gantt/GanttOffcanvas';
import GanttDeleteLinkModal from 'components/modules/gantt/GanttDeleteLinkModal';
import { ganttData as tasks } from 'data/ganttData';
import {
  ganttConfigColumnsData,
  taskTextHandler
} from 'components/modules/gantt/layoutConfig';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { useAppContext } from 'providers/AppProvider';
import { useGanttChartGridWidth } from 'hooks/useGanttChartGridWidth';
import { resetGanttConfig } from 'components/charts/dhtmlx/resetGanttConfig';

const weekScaleTemplate = (date: Date): string => {
  const dateToStr = gantt.date.date_to_str('%M %d');
  const endDate = gantt.date.add(date, 7 - date.getDay(), 'day');
  return `${dateToStr(date)} - ${dateToStr(endDate)}`;
};

const Views = {
  DAYS: 'days',
  WEEKS: 'weeks',
  MONTHS: 'months',
  YEARS: 'years'
};

export type ViewType = (typeof Views)[keyof typeof Views];
export type ViewKey = keyof typeof Views;

/* eslint-disable @typescript-eslint/no-explicit-any */
const scales: Record<ViewType, any> = {
  days: [
    { unit: 'week', step: 1, format: '%W' },
    { unit: 'day', step: 1, format: '%d %M' }
  ],
  weeks: [
    { unit: 'month', step: 1, format: '%F' },
    { unit: 'week', step: 1, format: weekScaleTemplate }
  ],
  months: [
    { unit: 'year', step: 1, format: '%Y' },
    { unit: 'month', step: 1, format: '%F' }
  ],
  years: [
    {
      unit: 'year',
      step: 3,
      format: (date: Date) => {
        const dateToStr = gantt.date.date_to_str('%Y');
        const endDate = gantt.date.add(date, 3, 'year');
        return `${dateToStr(date)} - ${dateToStr(endDate)}`;
      }
    },
    { unit: 'year', step: 1, format: '%Y' }
  ]
};

/**
 * `apps/gantt-chart.pug` — `+GanttChartActions` plus
 * `.gantt-app-container.scrollbar > #gantt-app.size-full`. The dhtmlx-gantt
 * engine and its config mirror `src/js/theme/ganttchart/gantt-chart.js`; the
 * task data is fully date-pinned (see data/ganttData.ts), so both sides always
 * render the same Apr–Aug 2023 window regardless of the current date.
 */
const GanttChart = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const [currentView, setCurrentView] = useState<ViewType>(Views.MONTHS);
  const { setContentClass } = useMainLayoutContext();
  const ganttWidth = useGanttChartGridWidth();
  const {
    config: { isRTL }
  } = useAppContext();

  useEffect(() => {
    setContentClass('gantt-content');
    return () => {
      setContentClass('');
    };
  }, [setContentClass]);

  useEffect(() => {
    if (!containerRef.current || !ganttWidth) return;
    resetGanttConfig();
    gantt.plugins({});
    gantt.config.scales = scales[currentView];
    gantt.config.row_height = 48;
    gantt.config.scale_height = 70;
    gantt.config.bar_height = 16;
    gantt.config.sort = true;
    gantt.config.grid_resizer = true;
    gantt.config.min_column_width = 130;
    gantt.config.columns = ganttConfigColumnsData;
    gantt.config.rtl = false;
    gantt.config.scroll_size = 7;

    const gridConfig = {
      width: ganttWidth,
      rows: [
        {
          view: 'grid',
          scrollX: 'gridScroll',
          scrollable: true,
          scrollY: 'scrollVer'
        },
        { view: 'scrollbar', id: 'gridScroll' }
      ]
    };
    const timelineConfig = {
      rows: [
        { view: 'timeline', scrollX: 'scrollHor', scrollY: 'scrollVer' },
        { view: 'scrollbar', id: 'scrollHor' }
      ]
    };

    const scrollbarConfig = { view: 'scrollbar', id: 'scrollVer' };
    const resizerConfig = { resizer: true, width: 1 };

    gantt.config.layout = {
      css: 'gantt_container',
      cols: [gridConfig, resizerConfig, timelineConfig, scrollbarConfig]
    };

    if (isRTL) {
      gantt.config.rtl = true;
      gantt.config.layout = {
        css: 'gantt_container',
        cols: [scrollbarConfig, timelineConfig, resizerConfig, gridConfig]
      };
    }

    taskTextHandler(isRTL);

    gantt.init(containerRef.current);
    gantt.parse(tasks);

    gantt.templates.grid_header_class = columnName =>
      columnName === 'assignee' ? 'sort-btn-none' : '';
    gantt.render();
    // the gold re-inits once from its resize handler right after parsing, which
    // undoes dhtmlx's `initial_scroll` jump to the first task; React sizes the
    // grid before the first init, so scroll back explicitly instead.
    gantt.scrollTo(0, 0);
    initialized.current = true;

    return () => {
      initialized.current = false;
      gantt.clearAll();
      gantt.resetLayout();
      gantt.resetSkin();
      gantt._events = [];
    };
  }, [ganttWidth, isRTL]);

  useEffect(() => {
    gantt.config.scales = scales[currentView];
    gantt.render();
  }, [currentView]);

  // dhtmlx measures its layout once at init() and only recomputes on an
  // explicit render(), so it keeps whatever size the container had at that
  // moment. `.gantt-app-container` is sized by `.gantt-content` on `.content`,
  // which this page sets through the layout provider — a parent state update
  // that only lands after this component's effects have run, so dhtmlx can
  // measure the container before it has its final height. Watching the box
  // itself re-renders on any such change (late class, fonts, devtools docking,
  // navbar collapse), instead of only on a window resize.
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const observer = new ResizeObserver(() => {
      if (initialized.current) {
        gantt.render();
      }
    });
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <GanttChartActions setCurrentView={setCurrentView} />
      <div className="gantt-app-container scrollbar" ref={wrapperRef}>
        <div className="size-full" id="gantt-app" ref={containerRef} />
      </div>
      <GanttOffcanvas />
      <GanttDeleteLinkModal />
    </>
  );
};

export default GanttChart;
