export const addTask = (state, title) => {
  const { counter, tasks } = state;
  return {
    ...state,
    tasks: [...tasks, { id: counter(), title, completed: false }],
  };
};

export const removeTask = (state, taskId) => {
  const { tasks } = state;
  return {
    ...state,
    tasks: tasks.filter(task => task.id !== taskId),
  };
};

export const toggleTask = (state, taskId) => {
  const { tasks } = state;
  return {
    ...state,
    tasks: tasks.map(task =>
      task.id !== taskId ? task : { ...task, completed: !task.completed }
    ),
  };
};
