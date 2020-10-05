import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter() });


const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper,'component-app');
  expect(appComponent.length).toBe(1);
});

test("renders button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper,'increment-button');
  expect(button.length).toBe(1);
});

test("renders decrement button", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  expect(decrementButton.length).toBe(1);
})

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper,'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("clicking on button increments counter", () => {
  const wrapper = setup();

  const button = findByTestAttr(wrapper, "increment-button");

  button.simulate('click');

  const count = findByTestAttr(wrapper, "count").text();

  expect(count).toBe("1");
});

test("clicking on decrement button increments counter", () => {
  const wrapper = setup();

  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate('click');
  const decrementButton = findByTestAttr(wrapper, "decrement-button");

  decrementButton.simulate('click');

  const count = findByTestAttr(wrapper, "count").text();

  expect(count).toBe("0");
});

test("counter is 0 and decrement is clicked", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate('click');

  const errorDiv = findByTestAttr(wrapper, "error-message");
  const errorHasHiddenClass = errorDiv.hasClass('hidden');
  expect(errorHasHiddenClass).toBe(false);
});

test("clicking the increment clears the error", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate('click');
  const incButton = findByTestAttr(wrapper, "increment-button");
  incButton.simulate('click');

  const errorDiv = findByTestAttr(wrapper, "error-message");
  const errorHasHiddenClass = errorDiv.hasClass('hidden');
  expect(errorHasHiddenClass).toBe(true);

})
