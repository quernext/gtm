import { useState, useCallback } from 'react';
import { DataLayer, DataLayerUpdateFn } from './types';
import { baseDataLayer } from './utils';

export default function useDataLayer(
  initialState: DataLayer = baseDataLayer
): [DataLayer, DataLayerUpdateFn] {
  const [dataLayer, setDataLayer] = useState<DataLayer>(initialState);

  const updateDataLayer = useCallback<DataLayerUpdateFn>(
    newDataLayer =>
      newDataLayer
        ? setDataLayer(prevDataLayer => ({ ...prevDataLayer, ...newDataLayer }))
        : undefined,
    []
  );

  return [dataLayer, updateDataLayer];
}
