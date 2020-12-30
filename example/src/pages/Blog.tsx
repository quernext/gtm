import * as React from 'react';
import { withPageTracking } from '../../../dist';
import { DataLayerOutput } from '../components';

const Blog: React.FC<{}> = () => (
  <div>
    <h1>Blog Page</h1>
    <DataLayerOutput />
  </div>
);

export default withPageTracking(Blog, {
  pageName: 'blog',
  pageType: 'my details',
  isVirtualPage: true,
  onTrack: (dataLayer) => {
    console.info('tracked:', dataLayer);
  }
});
