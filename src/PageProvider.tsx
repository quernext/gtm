import React from 'react';
import PageContext from './PageContext';
import useDataLayer from './useDataLayer';
import useDeferredEvents from './useDeferredEvents';
import { PageProviderProps, DeferredEventDoneFn } from './types';

const PageProvider: React.FC<PageProviderProps> = ({
  children,
  initialDataLayerState,
  initialDeferredEvents,
  baseContext,
  isVirtualPage,
  onTrack,
}) => {
  const isTrackedOnce = React.useRef<boolean>(false);
  const [dataLayer, updateDataLayer] = useDataLayer(initialDataLayerState);

  const onDone = React.useCallback<DeferredEventDoneFn>(
    (_, args) => updateDataLayer(args),
    [updateDataLayer]
  );

  const deferredEvents = useDeferredEvents(initialDeferredEvents, {
    onDone,
  });

  const hasDeferredEvents =
    baseContext.deferredEvents.hasEvents || deferredEvents.hasEvents;

  React.useEffect(() => {
    baseContext.setKeepPageAsVirtual(Boolean(isVirtualPage));
  }, [isVirtualPage]);

  React.useEffect(() => {
    if (
      typeof window === 'undefined' ||
      isTrackedOnce.current ||
      hasDeferredEvents
    ) {
      return;
    }

    (window.dataLayer = window.dataLayer || []).push(dataLayer);

    if (onTrack) {
      onTrack(dataLayer);
    }

    isTrackedOnce.current = true;
  }, [hasDeferredEvents, dataLayer, onTrack]);

  return (
    <PageContext.Provider
      value={{
        dataLayer,
        updateDataLayer,
        deferredEvents,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
