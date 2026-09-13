import { BadgeBg } from 'components/base/Badge';
import { Project } from 'data/project-management/projects';
import { useMemo } from 'react';

/** Literal class strings (Tailwind can't see `bg-${type}`). */
const progressBarClass: Record<BadgeBg, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  success: 'bg-success',
  danger: 'bg-danger',
  warning: 'bg-warning',
  info: 'bg-info'
};

const progressTrackClass: Record<BadgeBg, string> = {
  primary: 'bg-primary-subtle',
  secondary: 'bg-muted',
  success: 'bg-success-subtle',
  danger: 'bg-danger-subtle',
  warning: 'bg-warning-subtle',
  info: 'bg-info-subtle'
};

const useProjectProgress = (project: Project) => {
  const progress = useMemo(() => {
    return Math.ceil((project.progress.min / project.progress.max) * 100);
  }, [project]);

  /** `.progress-bar` colour class (gold `progressBarBg`). */
  const variant = useMemo(
    () => progressBarClass[project.status.type],
    [project]
  );

  /** `.progress` track colour class (gold `progressbarBgColor`). */
  const bgClassName = useMemo(
    () => progressTrackClass[project.status.type],
    [project]
  );

  return { progress, variant, bgClassName };
};

export default useProjectProgress;
