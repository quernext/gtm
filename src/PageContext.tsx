import { createContext } from 'react';
import { PageContextState } from './types';
import { baseContextState } from './utils';

const PageContext = createContext<PageContextState>(baseContextState);

export default PageContext;
