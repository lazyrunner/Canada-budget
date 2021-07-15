import { Container, Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './App.css';
import BarGraph from './components/charts/BarGraph/BarGraph';
import AmountInput from './components/AmountInput/AmountInput';

function App() {
  return (
    <Container fluid>
      <Row>
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Row>
      <Row>
          <AmountInput />
        </Row>
      <Row>
        <Col><BarGraph /></Col>
      </Row>
    </Container>
  );
}

export default App;
