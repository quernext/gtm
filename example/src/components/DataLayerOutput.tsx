import * as React from 'react';
import { usePageContext } from '../../../dist';

const DataLayerOutput = () => {
  const pageContext = usePageContext();

  return (
    <div>
      <strong>Current page DataLayer</strong>
      <pre>{JSON.stringify(pageContext.dataLayer, undefined, 4)}</pre>
    </div>
  )
};

export default DataLayerOutput;
