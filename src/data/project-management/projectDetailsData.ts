/** `+WorkLoads` legends in mixins/project-management/ProjectDetails.pug */
export interface WorkLoadLegend {
  label: string;
  value: string;
  /** literal bullet class (Tailwind can't see `bg-${x}`) */
  bulletClass: string;
}

export const workLoadLegends: WorkLoadLegend[] = [
  { label: 'Shantinan Mekalan', value: '72%', bulletClass: 'bg-primary' },
  { label: 'Makena Zikonn', value: '18%', bulletClass: 'bg-primary-lighter' },
  { label: 'Meena Kumari', value: '10%', bulletClass: 'bg-info' }
];

/** `+MembersTags` badges */
export const projectTags = [
  'Unused_brain',
  'Machine',
  'Coding',
  'Meseeks',
  'Smithpeople',
  'Rick',
  'Biology',
  'Neurology',
  'Brainlessness',
  'Stupidity',
  'Jerry',
  'Not _the_mouse'
];
