import React, { useReducer } from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap'

function InputZone() {


  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
  {
    task: ""
  })

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(userInput.task)
    /* const newTodo = { id: uuid(), task: userInput.task, completed: false };
    createTodo(newTodo);*/
    setUserInput({ task: "" }); 
    
  };

  const handleChange = e => {
    setUserInput({ [e.target.name] : e.target.value });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel
      controlId="floatingInput"
      label="Saisissez une tâche et appuyez 'Entrer'"
      className="mb-3"
    >
      <Form.Control type="text" 
        placeholder="task"
        value={userInput.task} 
        onChange={handleChange}
        name="task"/>

    </FloatingLabel>

    <Button type='submit'>Ajouter</Button>
  </Form>
  )
}

export default InputZone