import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VQStore from "./VQStore";
import { LoginPage } from "./LoginPage";
import { OffersPage } from "./OffersPage";
import { PrivateRoute } from "../constants/PrivateRoute";
import { AuthButton } from "./AuthButton";
import HomePage from "./HomePage";
export function NavContainer() {
  return (<Router>
    <Container>
      <div>
        <Navbar style={{ marginBottom: '30px' }} bg="light" expand="lg">
          <Navbar.Brand href="/">VodQA-Bookstore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/public">Offers</Nav.Link>
              <Nav.Link href="/shopbook">Shop</Nav.Link>
            </Nav>
            <Nav>
              <AuthButton />
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        
        <Switch>
          <Route path="/public">
            <OffersPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/shopbook">
            <VQStore />
          </PrivateRoute>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Container>
  </Router>);
}

export default NavContainer;