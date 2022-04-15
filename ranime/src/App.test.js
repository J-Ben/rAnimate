import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';
import RItem from './components/RItem';

test('renders learn react link', () => {
  const { getByTestId } = render(<App />);
  const headerEl = getByTestId("titre");
  
  expect(headerEl.textContent).toBe("Ma todo Liste");
});


test("Changer la valeur de l'input lors de la saisie", () => {
   
  const { getByTestId } = render(<App />);
  const inputTask = getByTestId("floatingInput")

  fireEvent.change(inputTask, {
    target : {
      value: "manger"
    }
  })
console.log(inputTask.value)
  expect(inputTask.value).toBe("manger");
})

test("Ajout de taches", () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<App onSubmit={onSubmit} />);
  const todoList = getByTestId('todosList');
  const todoInputElement = getByTestId('titre');
  
  todoInputElement.value = 'Add something';
  fireEvent.change(todoInputElement);
  fireEvent.submit(getByTestId('titre'))
  expect(todoList.children.length).toBe(3); 

})
