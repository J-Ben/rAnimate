import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FloatingLabel } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import RItem from './components/RItem'  

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/Ranime.css'


function App() {

  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  

  /**
   * Ajout d'un item
   */

  const addItems = (e) => {
   

    e.preventDefault()  
    if (item === "") {
      alert("Entrez une tâche valide")
    }
    else {
      // check if task exist
      const verif = items.includes(item);
      if(!verif) {
        setItems([...items, item])
        setItem("")
      } else {
        alert("Cette tache existe déjà")
      }
    }
  }


  const listItems = items.map(
    (item,i) => <RItem className="slide-in-elliptic-top-fwd"
                      key={i} task={item}
                      remove={delItem}
                      update={updateItem}
                      /> 
  );


  

  function delItem(itemP) {
    setItems(items.filter(i => i !== itemP));
  }  


  function updateItem(oldTask, itemSelected) {
    console.log(oldTask);
    console.log(itemSelected);
    const updatedItem = items.map(itemL => {
      if(itemL === oldTask) {
        return itemSelected;
      }
      return itemL
    })
    
    setItems(updatedItem)
  }
  

  return (
    <div  className="color-change-5x">
      <Container>
        <Row className="mx-0">
          <Form onSubmit={addItems}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label data-testid="titre">Ma todo Liste</Form.Label>
              { <FloatingLabel
                  controlId="floatingInput"
                  label="Saisissez une tâche et appuyez 'Entrer'"
                  className="mb-3"

                // onKeyDown={addItems()}
                >
                  <Form.Control
                    type="text"
                    placeholder=""
                    onChange={e => setItem(e.target.value)}
                    value={item}
                    data-testid="floatingInput"
                  />
                </FloatingLabel>  } 
                
              
              <Form.Text className="text-muted">

                <i>Une tâche ne s'entâche que si l'on paresse</i>
              </Form.Text>
            </Form.Group>
          </Form>
        </Row>
        <Row className="mx-0">
          <ListGroup as="ol">
            {listItems}
          </ListGroup>
        </Row>
        <Row className="mx-0">
           
        </Row>
      </Container>
    </div>
  );
}

export default App;
