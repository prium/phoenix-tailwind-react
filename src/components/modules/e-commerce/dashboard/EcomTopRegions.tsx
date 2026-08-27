import EcomTopRegionsTable from 'components/tables/EcomTopRegionsTable';
import React from 'react';

const EcomTopRegions = () => {
  return (
    <>
      <div className="mb-8 mt-12">
        <h3> Top regions by revenue</h3>
        <p className="text-subtle">
          {' '}
          Where you generated most of the revenue
        </p>
      </div>
      <EcomTopRegionsTable />
    </>
  );
};

export default EcomTopRegions;
