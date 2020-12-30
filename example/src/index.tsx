import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import { BaseProvider } from '../../dist';
import store from './store';

import Account from './pages/Account';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => (
  <Provider store={store}>
    <BaseProvider>
      <React.Fragment>
        <Router>
          <nav>
            <ul className="menu">
              <li className="menu__item">
                <a href="/">Home</a>
              </li>
              <li className="menu__item">
                <Link to="/account">Account</Link>
              </li>
              <li className="menu__item">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/account" component={Account} />
          <Route path="/blog" component={Blog} />
        </Router>
      </React.Fragment>
    </BaseProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
