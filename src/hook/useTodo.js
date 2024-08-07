import { useState } from 'react';

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const updateTodos = (todo) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            done: !item.done,
          };
        }

        return item;
      });

      return newTodos;
    });
  };

  const addTodo = (todo) => {
    setTodos((prevTodos) => {
      console.log(prevTodos);

      const newTodo = {
        id: prevTodos.length + 1,
        todo,
        done: false,
      };

      return [...prevTodos, newTodo];
    });
  };

  return { todos, updateTodos, addTodo };
};

export default useTodos;
