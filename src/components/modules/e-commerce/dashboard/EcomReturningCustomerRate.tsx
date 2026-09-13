import EcomReturningCustomerRateChart from 'components/charts/e-charts/EcomReturningCustomerRateChart';

/** `+EcomCharts` (returning customer rate) in phoenix-tailwind */
const EcomReturningCustomerRate = () => {
  return (
    <>
      <div>
        <h3>Returning customer rate</h3>
        <p className="mb-1 text-subtle">
          Rate of customers returning to your shop over time
        </p>
      </div>
      <EcomReturningCustomerRateChart />
    </>
  );
};

export default EcomReturningCustomerRate;
