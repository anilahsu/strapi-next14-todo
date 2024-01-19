
import { useState } from "react";
function AddTodo({ addTodo, addTodo2 }: { addTodo: FunctionStringCallback, addTodo2: any }) {
  const [todo, setTodo] = useState<string>("");
  return (
    <>
      <div className="addTodoContainer">
        <input
          className="todoInputText"
          type="text"
          placeholder="Add new todo here..."
          id="todoText"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              addTodo(todo);
              // another way to add todo  
              // addTodo2({ variables: { todoText: todo } })
              setTodo("");
            }
          }}
        />
        <input
          className="todoInputButton"
          type="button"
          value="Add Todo"
          onClick={() => {
            addTodo(todo);
            // another way to add todo  
            // addTodo2({ variables: { todoText: todo } })
            setTodo("");
          }}
        />
      </div>
    </>
  );
}
export default AddTodo;