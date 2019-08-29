import axios from 'axios';

const TASKS_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTasks = async () => {
  const { data } = await axios.get(TASKS_URL);
  return data;
};
