import { Container, Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './App.scss';
import BarGraph from './components/charts/BarGraph/BarGraph';
import AmountInput from './components/AmountInput/AmountInput';
import AproxMonthlyTable from './components/AproxMonthlyTable/AproxMonthlyTable';
import MonthlyPercentTable from './components/MonthlyPercentTable/MonthlyPercentTable';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'


function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Navbar bg="dark" variant="dark">
            <Container fluid>
              <Navbar.Brand >Monthly Planner</Navbar.Brand>
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link>Amount</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/percent">
                  <Nav.Link>Percentage</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
              </Nav>
            </Container>
          </Navbar>
        </Row>
        <Row>
          <Switch>
            <Route path="/percent">
              <Row>
                <AmountInput />
              </Row>
              <Row>
                <Col lg={6} ><MonthlyPercentTable /></Col>
                <Col lg={6} ><BarGraph /></Col>
              </Row>

            </Route>
            <Route path="/about">
              <Row>
                <Col>
                  <h3>
                    Its about time I did something !
                  </h3>
                </Col>

              </Row>

            </Route>
            <Route path="/">
              <Row>
                <AmountInput />
              </Row>
              <Row>
                <Col lg={6} ><AproxMonthlyTable /></Col>
                <Col lg={6} ><BarGraph /></Col>
              </Row>
            </Route>
          </Switch>
        </Row>

      </Container>
    </Router>
  );
}

export default App;
