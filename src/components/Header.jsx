import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import facade from "apiFacade";
import matchesFacade from "MatchesFacade";

const Header = ({ logout }) => {
    
    let isAdmin = false;
  let checkIfAdmin = () => {
    facade.fetchData();
    const userType = facade.getUserType();
    if (userType === "admin") {
      isAdmin = true;
    }
  };
  checkIfAdmin();

  return (
    <div>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "white !important" }}
        className={"m-auto w-50"}
      >
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto m-auto">
            {isAdmin && (
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            )}
            {isAdmin && (
              <LinkContainer to="/matches">
                <Nav.Link>Matches</Nav.Link>
              </LinkContainer>
            )}
            {isAdmin && (
              <LinkContainer to="/players">
                <Nav.Link>Players</Nav.Link>
              </LinkContainer>
            )}
            {isAdmin && (
              <LinkContainer to="/addowner">
                <Nav.Link>Add owner</Nav.Link>
              </LinkContainer>
            )}

            {!isAdmin && (
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            )}
            {!isAdmin && (
              <LinkContainer to="/matches">
                <Nav.Link>Matches</Nav.Link>
              </LinkContainer>
            )}

            <Button className="populate" onClick={matchesFacade.populate} />

            <Button className="logout" onClick={logout}>
              Log out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Header;
