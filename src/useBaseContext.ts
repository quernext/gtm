import { useContext } from 'react';
import BaseContext from './BaseContext';

export default function useBaseContext() {
  return useContext(BaseContext);
}
