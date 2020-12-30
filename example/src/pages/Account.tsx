import * as React from 'react';
import { withPageTracking } from '../../../dist';
import { DataLayerOutput } from '../components';

const Account: React.FC<{}> = () => (
  <div>
    <h1>Account Page</h1>
    <DataLayerOutput />
  </div>
);

export default withPageTracking(Account, {
  pageName: 'account',
  pageType: 'my details',
  isVirtualPage: true,
  onTrack: (dataLayer) => {
    console.info('tracked:', dataLayer);
  }
});
