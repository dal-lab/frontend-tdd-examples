import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as ReactRedux from 'react-redux';
import configureMockStore from 'redux-mock-store'
import App from './App';

Enzyme.configure({ adapter: new Adapter() })

const store = configureMockStore()({
  counter: jest.fn(),
  tasks: [
    { id: 1, title: 'Hello, world!', completed: false }
  ],
  taskTitle: '',
});

beforeEach(() => {
  jest
    .spyOn(ReactRedux, 'useSelector')
    .mockImplementation(() => store.getState());

  jest
    .spyOn(ReactRedux, 'useDispatch')
    .mockImplementation(() => action => { throw JSON.stringify(action) });
});

it('renders tasks', () => {
  const wrapper = render(<App store={store}/>);
  expect(wrapper.text()).toMatch('Hello, world!');
});
