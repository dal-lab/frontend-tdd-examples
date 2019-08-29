import { getTasks } from './task';

test('getTasks', async () => {
  const tasks = await getTasks();

  expect(tasks[0].id).toBe(1);
});
