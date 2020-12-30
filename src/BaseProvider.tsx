import React from 'react';
import BaseContext from './BaseContext';
import useDataLayer from './useDataLayer';
import useDeferredEvents from './useDeferredEvents';
import { BaseProviderProps } from './types';

const BaseProvider: React.FC<BaseProviderProps> = ({
  children,
  initialDataLayerState,
  initialDeferredEvents,
}) => {
  const [isKeepPageAsVirtual, setKeepPageAsVirtual] = React.useState<boolean>(false);
  const [dataLayer, updateDataLayer] = useDataLayer(initialDataLayerState);
  const deferredEvents = useDeferredEvents(initialDeferredEvents);

  return (
    <BaseContext.Provider
      value={{
        dataLayer,
        updateDataLayer,
        deferredEvents,
        isKeepPageAsVirtual,
        setKeepPageAsVirtual,
      }}
    >
      {children}
    </BaseContext.Provider>
  );
};

export default BaseProvider;
