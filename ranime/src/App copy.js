import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import RItem from "./components/RItem";
import AlertModal from "./components/AlertModal";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/Ranime.css";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(["un", "deux", "trois"]);

  const [title, setTitle] = useState("");
  const [textTitle, setTextTitle] = useState("");
  const [text, setText] = useState("");
  // Modale useState
  const [modalShow, setModalShow] = useState(false);

  /**
   * Message d'alert
   */
  const alertme = (title, textTitle, text) => {
    setTitle(title)
    setTextTitle(textTitle)
    setText(text)
  };

  /**
   * Ajout d'un item
   */

  const addItems = (e) => {
    e.preventDefault();
    if (item === "") { 
      alertme("Attention !","Tâche vide", "Vous devez entrer une tâche avec du joli texte :-) ")
      setModalShow(true);
    } else {
      // check if task exist
      const verif = items.includes(item);
      if (!verif) {
        setItems([...items, item]);
        setItem("");
      } else {
        // Tache existe deja
        alertme("Attention !","Texte déjà saisie.", "Il semble que cette tâche a déjà été saisie. Veuillez saisir une nouvelle. ")
        setModalShow(true);
      }
    }
  };

  const listItems = items.map((item, i) => (
    <RItem
      className="slide-in-elliptic-top-fwd"
      key={i}
      task={item}
      remove={delItem}
      update={updateItem}
    />
  ));

  function delItem(itemP) {
    setItems(items.filter((i) => i !== itemP));
  }

  function updateItem(oldTask, itemSelected) {
    console.log(oldTask);
    console.log(itemSelected);
    const updatedItem = items.map((itemL) => {
      if (itemL === oldTask) {
        return itemSelected;
      }
      return itemL;
    });

    setItems(updatedItem);
  }

  return (
    <>
      <Container fluid>
        <Row className="mx-0 color-change-5x">
          <Form onSubmit={addItems}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Ma todoYiste </Form.Label>
              {
                <FloatingLabel
                  controlId="floatingInput"
                  label="Saisissez une tâche et appuyez 'Entrer'"
                  className="mb-3"

                  // onKeyDown={addItems()}
                >
                  <Form.Control
                    type="text"
                    placeholder="name@example.com"
                    onChange={(e) => setItem(e.target.value)}
                    value={item}
                  />
                </FloatingLabel>
              }
              <Form.Text className="text-muted">
                <i> Une tâche ne s 'entâche que si l' on paresse </i>
              </Form.Text>
            </Form.Group>
          </Form>
        </Row>
      </Container>
      <Container fluid>
        <Row className="mx-0">
          <ListGroup as="ol"> {listItems} </ListGroup>
        </Row>
        <Row className="mx-0"> </Row>
      </Container>
      <Container>
        <AlertModal
          title={title}
          textTitle={textTitle}
          text={text}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </>
  );
}

export default App;
