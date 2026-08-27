import EcomProjectionVsActualChart from 'components/charts/e-charts/EcomProjectionVsActualChart';

/** `+EcomCharts` (projection vs actual) in phoenix-tailwind */
const EcomProjectionVsActual = () => {
  return (
    <div className="xl:me-6">
      <div>
        <h3>Projection vs actual</h3>
        <p className="mb-1 text-subtle">Actual earnings vs projected earnings</p>
      </div>
      <EcomProjectionVsActualChart />
    </div>
  );
};

export default EcomProjectionVsActual;
