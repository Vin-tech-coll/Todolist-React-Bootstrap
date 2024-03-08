import { useState } from 'react';
export default function TodoList() {
  const [todos, setTodos] = useState([
    { task: 'first task', completed: false },
    { task: 'second task', completed: true },
  ]);

  function handleSubmit(event) {
    event.preventDefault();

    const task = event.target.task.value;

    if (!task) {
      alert('Please enter a valid task');
      return;
    }

    setTodos((prevTodos) => [...prevTodos, { task: task, completed: false }]);

    //Reset the form
    event.target.reset();
  }
  function changeTaskStatus(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  function deleteTask(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
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
                <i
                  className={
                    'h5 me-2 ' +
                    (todo.completed ? 'bi bi-check-square' : 'bi bi-square')
                  }
                  style={{ cursor: 'pointer' }}
                  onClick={() => changeTaskStatus(index)}
                ></i>
                <i
                  className="bi bi-trash h5 me-2 text-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={() => deleteTask(index)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
