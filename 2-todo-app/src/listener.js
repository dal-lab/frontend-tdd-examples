import { addTask, removeTask, toggleTask } from './services';

export const bindEvents = (state, methods) => {
  bindAddTask(state, methods);
  bindRemoveTask(state, methods);
  bindCheckbox(state, methods);
};

const bindAddTask = (state, { bind, getValue, update }) => {
  bind('button-add-task', 'click', () => {
    const title = getValue('input-task-title');
    addTask(title);
    update();
  });
};

const bindRemoveTask = (state, { bind, getValue, update }) => {
  const { tasks } = state;

  tasks.forEach(task => {
    const { id } = task;
    bind(`button-remove-task-${id}`, 'click', () => {
      removeTask(id);
      update();
    });
  });
};

const bindCheckbox = (state, { bind, getValue, update }) => {
  const { tasks } = state;

  tasks.forEach(task => {
    const { id } = task;
    bind(`checkbox-task-${id}`, 'click', () => {
      toggleTask(id);
      update();
    });
  });
};
