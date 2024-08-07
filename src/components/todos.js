import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TodoContext from '../store/todoContext';

export const Todos = ({ item }) => {
  const { updateTodos } = useContext(TodoContext);

  const finishTodo = () => {
    updateTodos(item);
  };

  return (
    <button
      className={classNames(
        'bg-primary-fade rounded-md p-4 flex items-center w-full',
        {
          'bg-primary-done shadow': item.done,
        }
      )}
      onClick={finishTodo}
    >
      <span
        className={classNames('w-5 h-5 rounded-full mr-4', {
          'bg-white': !item.done,
        })}
      >
        {item.done && <img src="/checkmark.png" alt="checkmark" />}
      </span>
      <p
        className={classNames('text-white', {
          'line-through text-white/50': item.done,
        })}
      >
        {item.todo}
      </p>
    </button>
  );
};

Todos.prototype = {
  item: {
    id: PropTypes.number.isRequired,
    todo: PropTypes.string.isRequired,
    done: PropTypes.bool,
  },
};
