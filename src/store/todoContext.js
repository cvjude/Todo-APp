import { createContext } from 'react';

const TodoContext = createContext([
  {
    id: 1,
    todo: 'Wash cloths',
    done: true,
  },
]);

export default TodoContext;
