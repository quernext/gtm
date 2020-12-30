import React from 'react';
import BaseContext from './BaseContext';
import PageProvider from './PageProvider';
import { WithPageTrackingOptions } from './types';
import { baseDataLayer, VIRTUAL_PAGE_VIEW } from './utils';

const withPageTracking = <P extends {}>(
  WrappedComponent: React.ComponentType<P>,
  {
    pageName,
    pageType,
    deferredEvents,
    isVirtualPage,
    onTrack,
  }: WithPageTrackingOptions
) => {
  return function WithPageTracking(props: P) {
    return (
      <BaseContext.Consumer>
        {baseContext => (
          <PageProvider
            baseContext={baseContext}
            initialDataLayerState={{
              ...baseDataLayer,
              event:
                isVirtualPage || baseContext.isKeepPageAsVirtual
                  ? VIRTUAL_PAGE_VIEW
                  : baseDataLayer.event,
              pageName,
              pageType,
            }}
            initialDeferredEvents={deferredEvents}
            isVirtualPage={isVirtualPage}
            onTrack={onTrack}
          >
            <WrappedComponent {...props} />
          </PageProvider>
        )}
      </BaseContext.Consumer>
    );
  };
};

export default withPageTracking;
