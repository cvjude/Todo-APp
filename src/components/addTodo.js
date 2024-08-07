import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import TodoContext from '../store/todoContext';

export const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (!input) {
      toast.error('Please enter a todo');
      return;
    }
    addTodo(input);
    setInput('');
  };

  return (
    <div className="bg-primary-dark rounded-full px-3 flex justify-between items-center">
      <input
        className="bg-transparent text-white p-2 flex-1"
        placeholder="Add Item"
        value={input}
        onChange={handleChange}
      />

      <button className="w-7 h-7" onClick={handleAddTodo}>
        <img src="/plus.png" alt="Plus" />
      </button>
    </div>
  );
};
