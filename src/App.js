import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch,
  NavLink
} from 'react-router-dom';
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import History from './History'

function App() {
  return (
    <div className="App">
      <div className="container py-5">
        <BrowserRouter>
          <Row>

            <Col md={1}>
              <NavLink exact to="/">
                {/* <Button variant="outline-secondary">Home</Button> */}
                Home
              </NavLink>
            </Col>
            <Col md={2}>
              <NavLink to="/our-history" className='History' activeClassName='active' activeStyle={{
                color: "red"
              }}>
                {/* <Button variant="outline-secondary">Our History</Button> */}
                Our History
              </NavLink>
            </Col>
          </Row>

          <Row>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/our-history'>
                <History />
              </Route>
            </Switch>
          </Row>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
