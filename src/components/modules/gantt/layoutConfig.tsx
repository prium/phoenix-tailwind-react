import { gantt, Task } from 'dhtmlx-gantt';

interface Assignee {
  name: string;
  img: string;
}

/*
 * dhtmlx column templates are plain HTML strings, so the gold's `span.uil`
 * webfont glyphs (unicons is a CDN stylesheet in the static template, not a
 * dependency here) are inlined as the same @iconscout paths the React `Unicon`
 * component renders, inside the 1lh line box `Unicon lineBox` produces.
 */
const uilSvg = (path: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="${path}"/></svg>`;

const UIL_CALENDAR_ALT =
  'M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z';
const UIL_CLOCK =
  'M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z';

/** `span.uil.uil-calendar-alt.text-soft.text-base.me-1` in layout-config.js */
const calendarIcon = `<span class="uil uil-calendar-alt text-soft text-base me-1 inline-flex items-center h-lh">${uilSvg(
  UIL_CALENDAR_ALT
)}</span>`;
/** `span.uil.uil-clock.me-1.text-base.text-quaternary` in layout-config.js */
const clockIcon = `<span class="uil uil-clock me-1 text-base text-quaternary inline-flex items-center h-lh">${uilSvg(
  UIL_CLOCK
)}</span>`;

/** Literal so Tailwind sees them — the gold builds `text-${color}` at runtime. */
const priorityColorClass: Record<string, string> = {
  urgent: 'text-danger',
  high: 'text-warning',
  medium: 'text-success',
  low: 'text-info'
};

const assigneeTemplate = (task: Task): string => {
  if (task.type === gantt.config.types.project) return '';

  const owners: Assignee[] = task.assignee || [];
  if (!owners.length) return 'Unassigned';

  const items = owners
    .map((assignee, idx) => {
      if (owners.length > 4 && idx === 3) {
        return `
                <a href='#!' data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                  class='avatar avatar-xs'>
                  <div class='avatar-name rounded-full border border-subtle'>
                    <span>+${owners.length - 3}</span>
                  </div>
                </a>
                <ul class="dropdown-menu dropdown-menu-end py-2">
                  ${owners
                    .map(
                      owner =>
                        `<div class='dropdown-item py-2 px-4 flex gap-2 items-center'>
                          <div class='avatar avatar-xs'>
                            <img class="rounded-full" src="${
                              owner.img
                            }" alt="${owner.name || 'assignee'}"
                              />
                          </div>
                          <a href="#" class='font-bold text-default no-underline leading-none'>${
                            owner.name
                          }</a>
                        </div>`
                    )
                    .join('')}
                </ul>
              `;
      }

      if (idx <= 3) {
        return `
                 <div data-bs-toggle='dropdown' data-bs-auto-close='outside' class='avatar avatar-xs'>
                      <img class="rounded-full" src="${assignee.img}" alt="${
                        assignee.name || 'assignee'
                      }"
                        />
                </div>
                <ul class="dropdown-menu dropdown-menu-end py-0">
                  <div class='dropdown-item py-0 px-4 flex gap-4 items-center'>
                          <div class='avatar avatar-xs'>
                            <img class="rounded-full" src="${
                              assignee.img
                            }" alt="${assignee.name || 'assignee'}"
                              />
                          </div>
                          <a href="#" class='font-bold text-default no-underline leading-none py-4'>${
                            assignee.name
                          }</a>
                        </div>
                </ul>
              `;
      }
      return '';
    })
    .join('');

  return `<div class="avatar-group ms-2">${items}</div>`;
};

export const formatDate = (date: Date | undefined): string =>
  date
    ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    : '';

/** `ganttConfigColumnsData` in src/js/theme/ganttchart/layout-config.js */
export const ganttConfigColumnsData = [
  {
    name: 'text',
    label: 'PROJECT NAME',
    tree: true,
    width: 410,
    min_width: 80,
    template(task: Task) {
      const subTasks = gantt.getChildren(task.id).length;
      return `<div class='gantt-task-title-wrapper'>
          <span class='gantt-task-title'>${task.text} </span>
          ${subTasks ? `<span class="badge bg-primary">${subTasks}</span>` : ''}
          <button data-gantt-add-subtask id=${
            task.id
          } class='btn btn-subtle-info  gantt-task-title-btn'><span class='fa-solid fa-plus'/></button>
        </div>`;
    }
  },
  {
    name: 'assignee',
    label: 'ASSIGNEE',
    width: 160,
    template: assigneeTemplate,
    sort: false
  },
  {
    name: 'Priority',
    label: 'PRIORITY',
    width: 160,
    min_width: 50,
    template(task: Task) {
      const label = task.priority?.toLowerCase();
      const color = priorityColorClass[label] ?? priorityColorClass.low;
      return `<div class='text-default'><span class='fa-solid fa-circle ${color} me-1 text-sm'></span>${
        task.priority || 'Low'
      }</div>`;
    },
    sort(a: Task, b: Task) {
      const priorityA = a.priority.toLowerCase();
      const priorityB = b.priority.toLowerCase();

      if (priorityA < priorityB) return -1;
      if (priorityA > priorityB) return 1;
      return 0;
    }
  },
  {
    name: 'start_date',
    label: 'START DATE',
    align: 'start',
    width: 160,
    template(task: Task) {
      return `
         ${calendarIcon} ${formatDate(task.start_date)}
      `;
    }
  },
  {
    name: 'end_date',
    label: 'END DATE',
    align: 'start',
    width: 160,
    template(task: Task) {
      return `
       ${calendarIcon} ${formatDate(task.end_date)}
    `;
    }
  },
  {
    name: 'duration',
    label: 'DURATION',
    align: 'start',
    width: 160,
    template(task: Task) {
      return `
        ${clockIcon}
        ${task.duration} days
    `;
    }
  }
];

export const taskTextHandler = (isRtl: boolean) => {
  gantt.config.font_width_ratio = 7;

  const getTaskFitValue = (task: Task) => {
    if (!task.start_date || !task.end_date) return 'center'; // default fallback

    const position1 = gantt.posFromDate(task.start_date);
    const position2 = gantt.posFromDate(task.end_date);
    const taskStartPos = isRtl ? position2 : position1;
    const taskEndPos = isRtl ? position1 : position2;
    const width = taskEndPos - taskStartPos;
    const textWidth = (task.text || '').length * gantt.config.font_width_ratio;

    if (width < textWidth) {
      const ganttLastDate = gantt.getState().max_date;
      const ganttEndPos = gantt.posFromDate(ganttLastDate);
      if (ganttEndPos - taskEndPos < textWidth) {
        return 'left';
      }
      return 'right';
    }
    return 'center';
  };

  gantt.templates.leftside_text = (_start, _end, task) =>
    getTaskFitValue(task) === 'left' ? task.text : '';

  gantt.templates.rightside_text = (_start, _end, task) =>
    getTaskFitValue(task) === 'right' ? task.text : '';

  gantt.templates.task_text = (_start, _end, task) =>
    getTaskFitValue(task) === 'center' ? task.text : '';
};
