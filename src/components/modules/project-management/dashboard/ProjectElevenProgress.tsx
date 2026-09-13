import ProjectElevenProgressChart from 'components/charts/e-charts/ProjectElevenProgressChart';

/** `+ElevenProgressChart` in mixins/dashboard/project-management/ElevenProgressChart.pug */
const ProjectElevenProgress = () => {
  return (
    <>
      <h3 className="mb-1">Project: eleven Progress</h3>
      <p className="text-subtle mb-0 xl:mb-4">Deadline &amp; progress</p>
      <ProjectElevenProgressChart />
    </>
  );
};

export default ProjectElevenProgress;
