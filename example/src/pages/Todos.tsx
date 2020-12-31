import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePageContext, withPageTracking } from '../../../dist';
import { DataLayerOutput } from '../components';
import {
  loadTodos,
  selectIsCompletedState,
  selectTodosItems,
} from '../features/todos';

const Todos: React.FC<{}> = () => {
  const {
    deferredEvents: { done },
  } = usePageContext();

  const dispatch = useDispatch();
  const todos = useSelector(selectTodosItems);
  const isLoadingCompleted = useSelector(selectIsCompletedState);

  React.useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  React.useEffect(() => {
    if (isLoadingCompleted) {
      done('todos', { todos });
    }
  }, [done, todos, isLoadingCompleted]);

  return (
    <div>
      <h1>Todos</h1>
      <DataLayerOutput />
    </div>
  );
};

export default withPageTracking(Todos, {
  pageName: 'todos',
  pageType: 'todos',
  deferredEvents: ['todos'],
  isVirtualPage: true,
});
