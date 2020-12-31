import * as React from 'react';
import { usePageContext } from '../../../dist';

const DataLayerOutput = () => {
  const {
    dataLayer,
    deferredEvents: { hasEvents: isPending },
  } = usePageContext();

  return (
    <div>
      <h3>DataLayer</h3>
      <hr />
      <p>
        <strong>status:</strong> {isPending ? <span>Pending...</span> : <span>✅ data sent to google analytics</span>}
      </p>
      <hr />
      <pre>{JSON.stringify(dataLayer, undefined, 4)}</pre>
      <hr />
    </div>
  );
};

export default DataLayerOutput;
