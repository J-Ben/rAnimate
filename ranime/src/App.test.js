import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';
import RItem from './components/RItem';

test('renders learn react link', () => {
  const { getByTestId } = render(<App />);
  const headerEl = getByTestId("titre");
  
  expect(headerEl.textContent).toBe("Ma todo Liste");
});


test("Changer la valeur de l'input", () => {
   
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

/* test("Ajout de taches", () => {


  const container = render(<App />)
  container.ge

  expect().toBe('slide-in-elliptic-top-fwd')
}) */
