import { cn } from '@hummingbirdui/react';

interface ProjectModalProgressProps {
  progress: number;
  barClassName?: string;
  trackClassName?: string;
  className?: string;
}

/** `+Progressbar` in project-management/ProjectDetailsModal.pug */
const ProjectModalProgress = ({
  progress,
  barClassName,
  trackClassName,
  className
}: ProjectModalProgressProps) => (
  <div className={cn('flex items-center', className)}>
    <p className="text-highlight mb-0 me-2">{progress}%</p>
    <div className={cn('progress flex-1', trackClassName)}>
      <div
        role="progressbar"
        className={cn('progress-bar rounded-lg', barClassName)}
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

export default ProjectModalProgress;
