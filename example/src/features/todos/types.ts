export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodosState = {
  items: Todo[];
  isPending: boolean;
  isSucceeded: boolean;
  isErrored: boolean;
};
