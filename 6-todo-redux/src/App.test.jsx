import { render, screen } from '@testing-library/react';

import ReactRedux from 'react-redux';

import configureMockStore from 'redux-mock-store'

import App from './App';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const store = configureMockStore()({
  counter: jest.fn(),
  tasks: [
    { id: 1, title: 'Hello, world!', completed: false }
  ],
  taskTitle: '',
});

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    jest
      .spyOn(ReactRedux, 'useSelector')
      .mockImplementation(() => store.getState());

    jest
      .spyOn(ReactRedux, 'useDispatch')
      .mockImplementation(() => dispatch);
  });

  it('renders tasks', () => {
    render((
      <App store={store}/>
    ));

    screen.getByText(/Hello, world!/);
  });

  it('calls dispatch function (at useEffect)', () => {
    render((
      <App store={store}/>
    ));

    expect(dispatch).toBeCalled();
  });
});
