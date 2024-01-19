// src/app/page.tsx
"use client";
import { useEffect, useState } from "react";
import AddTodo from "@/app/containers/AddTodo";
import TodoList from "@/app/containers/TodoList";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { ADDMUT, DELETEMUT, GETQUERY, GETQUERY2, UPDATEMUT } from "@/query/schema";
import { useMutation } from "@apollo/client";

export default function Home() {
  const [todos, setTodos] = useState<[]>([]);
  const [createTodo] = useMutation(ADDMUT);
  const [updateTodo] = useMutation(UPDATEMUT);
  const [deleteMUT] = useMutation(DELETEMUT);

  const todoText = "snowboarding";

  const { loading, error, data } = useQuery(TEST, {
    fetchPolicy: "no-cache",
    variables: {
      // todoText, //Passing the todo text
    },
  }); 
  console.log("data", data);

  useEffect(() => {
    setTodos(data?.todos?.data);
  }, [data]);

  // -------------------------------------------------------------------------------------------------------------
  const addTodo = async (todoText: string) => {
    await createTodo({
      variables: {
        todoText: todoText, //Passing the todo text
      },
    }).then(({ data }: any) => {
      setTodos([...todos, data?.createTodo?.data] as any); //Adding the new todo to the list
    });
  };

  // another way to add todo  
  const [addTodo2] = useMutation(ADDMUT)

  // -------------------------------------------------------------------------------------------------------------
  const editTodoItem = async (todo: any) => {
    const newTodoText = prompt("Enter new todo text or description:");
    if (newTodoText != null) {
      await updateTodo({
        //updating the todo
        variables: {
          id: todo.id,
          todoText: newTodoText,
        },
      }).then(({ data }: any) => {
        const moddedTodos: any = todos.map((_todo: any) => {
          if (_todo.id === todo.id) {
            return data?.updateTodo?.data;
          } else {
            return _todo;
          }
        });
        setTodos(moddedTodos);
      });
    } 
   };
  // -------------------------------------------------------------------------------------------------------------

  const deleteTodoItem = async (todo: any) => {
    if (confirm("Do you really want to delete this item?")) {
      await deleteMUT({
        //Deleting the todo
        variables: {
          id: todo.id,
        },
      }).then(({ data }: any) => {
        const newTodos = todos.filter((_todo: any) => _todo.id !== todo.id);
        setTodos(newTodos as any);
      });
    }
  };

  return (
    <div>
      <main className="main">
        <AddTodo addTodo={addTodo} addTodo2={addTodo2} />
        <TodoList
          todos={todos}
          deleteTodoItem={deleteTodoItem}
          editTodoItem={editTodoItem}
        />
      </main>
    </div>
  );
}