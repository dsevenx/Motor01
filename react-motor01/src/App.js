import "./App.css";
import useLocalStorage from "./basis_typen/useLocalStorage";
import {
  Container,
  Button,
  Alert,
  DropdownButton,
  Dropdown,
  Breadcrumb,
  Card,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [pollfnr, setPollfnr] = useLocalStorage("init");
  const [dropdown, setDropdown] = useLocalStorage("nothing");

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Motor 01 {pollfnr} {dropdown}
        </p>
        <Container fluid>
          <Form>
            <Row>
              <DropdownButton
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item onClick={() => setDropdown("Another action")}>
                  Another action
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setDropdown("Something else here")}
                >
                  Something else here
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setDropdown("Separated link")}>
                  Separated link
                </Dropdown.Item>
              </DropdownButton>
            </Row>
            <Row>
              <Col md>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group>
                  <Form.Control type="text" placeholder="Hans Wurts" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="idemail">
                  <Form.Label>Email-Adress</Form.Label>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="idemail">
                  <Form.Control type="email" placeholder="info@web.de" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <Card className="mb-3" style={{ color: "#000000" }}>
            <Card.Img src="https://picsum.photos/200/300"></Card.Img>
            <Card.Body>
              <Card.Title>Card Titel</Card.Title>
              <Card.Text>Card Text</Card.Text>
              <Button variant="primary">Card Button</Button>
            </Card.Body>
          </Card>
          <p>
            <Breadcrumb>
              <Breadcrumb.Item>Test Breadcrump 1</Breadcrumb.Item>
              <Breadcrumb.Item active>Test Breadcrump 2</Breadcrumb.Item>
              <Breadcrumb.Item>Test Breadcrump 3</Breadcrumb.Item>
            </Breadcrumb>
          </p>
          <p>
            <Button>Test</Button>
          </p>
          <p>
            <Alert variant="success">Alert Button</Alert>
          </p>
          <p>
            <input
              type="text"
              value={pollfnr}
              onChange={(e) => setPollfnr(e.target.value)}
            />
          </p>
        </Container>
      </header>
    </div>
  );
}

export default App;
