import { Row } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import RListItem from './components/RListItem'
import InputZone from './components/InputZone'
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo'
import TodoList from './components/TodoList'


function App() {
  const myItems = ["Cuisiner du riz", "Vendre du poisson", "Nettoyer le WC", "Faire les courses", "Poster vidéo"];
  const listItems = myItems.map(
    (item) => <RListItem task={item} />
  );
  return (
    <div>
      <Container>
        <Row className="mx-0">
          <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ma todoYiste</Form.Label>
             <InputZone />
              <Form.Text className="text-muted">
                <i>Une tâche ne s'entâche que si l'on paresse</i>
              </Form.Text>
            </Form.Group>
          </>
        </Row>
        <Row className="mx-0">
          <ListGroup as="ol">
            {listItems}
          </ListGroup>
        </Row>
        <TodoList />
      </Container> 
    </div>
  );
}

export default App;
