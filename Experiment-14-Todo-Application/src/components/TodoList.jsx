import TodoItem from "./TodoItem";

function TodoList({
  todos = [],
  toggleTodo,
  deleteTodo,
  editTodo,
  toggleEdit,
}) {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="empty">No tasks yet</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleEdit={toggleEdit}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
