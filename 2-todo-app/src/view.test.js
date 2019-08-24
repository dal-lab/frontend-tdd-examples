import { render } from './view';

test('render', () => {
  const state = {
    tasks: [
      { id: 1, title: 'Sleep', completed: false },
      { id: 2, title: 'Wake up', completed: false },
    ],
  };

  const html = render(state);

  expect(html).toMatch('<ul');
  expect(html).toMatch('Sleep');
  expect(html).toMatch('Wake up');
  expect(html).toMatch('Add Task');
});
