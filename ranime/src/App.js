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
import RListItem from './components/RListItem'


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const myItems = ["Cuisiner du riz", "Vendre du poisson", "Nettoyer le WC", "Faire les courses", "Poster vidéo"];
  const listItems = myItems.map(
    (item) => <RListItem task={item} />
  );
  return (
    <div>
      <Container>
        <Row className="mx-0">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ma todoYiste</Form.Label>
              <>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Saisissez une tâche et appuyez 'Entrer'"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="name@example.com" />
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
      </Container> 
    </div>
  );
}

export default App;
