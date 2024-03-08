import { useState } from 'react';
export default function TodoList() {
  const [todos, setTodos] = useState([
    { task: 'first task', completed: false },
    { task: 'second task', completed: true },
  ]);

  function handleSubmit(event) {
    event.preventDefault();

    const task = event.target.task.value;

    alert(`New task added:${task}`);

    //Reset the form
    event.target.reset();
  }
  return (
    <div className="container my-5">
      <div
        className="mx-auto rounded border p-4"
        style={{ width: '600px', backgroundColor: '#08618d' }}
      >
        <h2 className="text-white text-center mb-5">My todo-list</h2>
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            name="task"
            placeholder="New Task"
          />
          <button className="btn btn-outline-light" type="submit">
            Add
          </button>
        </form>

        {todos.map((todo, index) => {
          return (
            <div
              key={index}
              className="rounded mt-4 p-2 d-flex"
              style={{
                backgroundColor: todo.completed ? '#87fc68' : 'LightGray',
              }}
            >
              <div className="me-auto">{todo.task}</div>
              <div>
                <i className="bi bi-check square"></i>
                <i className="bi bi-trash"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
