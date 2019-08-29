import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTask,
  removeTask,
  toggleTask,
  fetchTasks,
  setTaskTitle,
} from './actions';

const App = () => {
  const { tasks, taskTitle } = useSelector(state => ({
    tasks: state.tasks,
    taskTitle: state.taskTitle,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <>
      <ul>
        {tasks.map(task =>
          <li key={task.id}>
            <input type="checkbox" checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
            />
            {task.title}
            {task.completed && <span>[DONE]</span>}
            <button type="button"
              onClick={() => dispatch(removeTask(task.id))}
            >
              Remove
            </button>
          </li>
        )}
      </ul>
      <div>
        <input type="text" value={taskTitle}
          onChange={e => dispatch(setTaskTitle(e.target.value))}
        />
        <button type="button"
          onClick={() => dispatch(addTask(taskTitle))}
        >
          Add Task
        </button>
      </div>
    </>
  );
}

export default App;
