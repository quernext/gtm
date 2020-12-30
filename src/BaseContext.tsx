import { createContext } from 'react';
import { BaseContextState } from './types';
import { baseContextState } from './utils';

const BaseContext = createContext<BaseContextState>(baseContextState);

export default BaseContext;
