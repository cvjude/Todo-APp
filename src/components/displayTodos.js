import React from 'react';
import { Todos } from './todos';

export const DisplayTodos = ({ title, data = [] }) => {
  return (
    <>
      <h1 className="w-full py-5 text-white/50">{title}</h1>

      <div className="flex flex-col gap-3">
        {data.map((item) => (
          <Todos item={item} />
        ))}
      </div>
    </>
  );
};
