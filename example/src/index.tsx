import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BaseProvider } from '../../dist';
import './index.css';

import Account from './pages/Account';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => (
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
);

ReactDOM.render(<App />, document.getElementById('root'));
