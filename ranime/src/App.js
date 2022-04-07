import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Item } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'
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
      setItems([...items, item])
      setItem("")
    }
  }


  const listItems = items.map(
    (item,i) => <RItem className="slide-in-elliptic-top-fwd" key={i} task={item} handleDelItemMeth={delItem} /> 
  );

  const delItem = (item) => {
    items.filter(i => i != item)
  }  
  

  return (
    <div  className="color-change-5x">
      <Container>
        <Row className="mx-0">
          <Form onSubmit={addItems}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ma todoYiste</Form.Label>
              <>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Saisissez une tâche et appuyez 'Entrer'"
                  className="mb-3"

                // onKeyDown={addItems()}
                >
                  <Form.Control
                    type="text"
                    placeholder="name@example.com"
                    onChange={e => setItem(e.target.value)}
                    value={item}
                  />
                </FloatingLabel>
              </>
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
