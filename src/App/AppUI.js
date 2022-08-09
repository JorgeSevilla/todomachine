import React from "react";

import { CreateTodoButtom } from "../CreateTodoButtom/index";
import { TodoContext } from "../TodoContext/index";
import { TodoCounter } from "../TodoCounter/index";
import { TodoItem } from "../TodoItem/index";
import { TodoList } from "../TodoList/index";
import { TodoSearch } from "../TodoSearch/index";
import { Modal } from "../Modal/index";
import { TodoForm } from "../TodoForm/index";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButtom 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
