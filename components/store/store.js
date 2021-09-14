import makeStore from './makeStore';

const [TodoProvider, useTodo, useSetTodo] = makeStore();

export { TodoProvider, useTodo, useSetTodo };
