import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'  



function RItem({task, remove, update}) {
    
    const handlDelItem = (e) => {
        remove(e.target.id)
    }

    const handleModifItem = (e) => {
        update(e.target.id)
    }

    return (
            <ListGroup.Item
                as="li"
                className="slide-in-elliptic-top-fwd d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">

                    <div className="fw-bold">
                        <Form.Check type="switch" id="custom-switch" label={task} />
                    </div>
                </div>
               
                <Badge bg="" pill>

                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                             
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item
                            onClick={handleModifItem}
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