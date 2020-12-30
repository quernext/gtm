import * as React from 'react';
import { withPageTracking, usePageContext } from '../../../dist';
import { DataLayerOutput } from '../components';

const Home: React.FC<{}> = () => {
  const {
    deferredEvents: { done },
  } = usePageContext();

  React.useEffect(() => {
    done(0, { bar: 'x' });

    const t1 = setTimeout(() => done(1, { foo: 'y' }), 1500);
    const t2 = setTimeout(() => done(2, { baz: 'z' }), 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [done]);

  return (
    <div>
      <h1>Home Page</h1>
      <DataLayerOutput />
    </div>
  );
};

export default withPageTracking(Home, {
  pageName: 'home',
  pageType: 'my details',
  deferredEvents: [0, 1, 2],
  onTrack: dataLayer => {
    console.info('tracked:', dataLayer);
  },
});
