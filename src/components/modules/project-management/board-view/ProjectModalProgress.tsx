import { Progress, cn } from '@hummingbirdui/react';

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
    <Progress value={progress} className={cn('flex-1', trackClassName)}>
      <Progress.Bar className={cn('rounded-lg', barClassName)} />
    </Progress>
  </div>
);

export default ProjectModalProgress;
