import { AddTodo } from './components/addTodo';
import { DisplayTodos } from './components/displayTodos';
import TodoContext from './store/todoContext';
import useTodos from './hook/useTodo';

function App() {
  const { todos, addTodo, updateTodos } = useTodos();

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodos }}>
      <div className="h-screen w-screen flex justify-center pt-40">
        <div className="shadow-2xl w-4/5 min-h-96 h-fit rounded-xl bg-primary p-5">
          <AddTodo />

          <div className="border-t border-white/10 mt-5">
            <DisplayTodos
              title="TO DO"
              data={todos?.filter((item) => !item.done)}
            />

            <DisplayTodos
              title="COMPLETED"
              data={todos?.filter((item) => item.done)}
            />
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
