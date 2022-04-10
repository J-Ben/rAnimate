import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'  
import { FloatingLabel } from 'react-bootstrap'


function RItem({task, remove, update}) {
    
    const [modif, setModif] = useState(task)
    const [isEditing, setIsEditing] = useState(false);

    const handlDelItem = (e) => {
        remove(e.target.id)
    }

    const changeView = () => {
        setIsEditing(!isEditing)
    }

    const handleUpdate = evt => {
        evt.preventDefault();
        update(task, modif)
        setIsEditing(!isEditing)
      };

    return (
            <ListGroup.Item
                as="li"
                className="slide-in-elliptic-top-fwd d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">

                    <div className="fw-bold">
                      {(!isEditing) ?  <Form.Check type="switch" id="custom-switch" label={task} />
                                : <Form onSubmit={handleUpdate}><FloatingLabel
                  controlId="floatingModif"
                  
                  className="mb-3"

                // onKeyDown={addItems()}
                >
                  <Form.Control
                    type="text"
                    onChange={e => setModif(e.target.value)}
                    value={modif}
                  />
                </FloatingLabel></Form> }

                        
                    </div>
                </div>
               
                <Badge bg="" pill>

                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                             
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item
                            onClick={changeView}
                            id={task}
                            >Modifier</Dropdown.Item>
                            <Dropdown.Item 
                            onClick={handlDelItem}
                            id={task}
                            >
                            Supprimer
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Badge>
            </ListGroup.Item>
    )
}

export default RItem