import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

const Header = ({logout}) => {
    const userType = localStorage.getItem("userType");
    let isAdmin = false;
    if(userType === "admin"){
        isAdmin = true;
    }


    return (
        <div>
            <Navbar expand="lg" style={{backgroundColor:"white !important" }} className={"m-auto w-50"}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto m-auto">
                        {
                            isAdmin &&
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                        }
                        {
                            isAdmin &&

                            <LinkContainer to="/adminboats">
                                <Nav.Link>Boats</Nav.Link>
                            </LinkContainer>

                        }
                        {
                            isAdmin &&
                            <LinkContainer to="/addboat">
                                <Nav.Link>Add boat</Nav.Link>
                            </LinkContainer>
                        }
                        {
                            isAdmin &&
                            <LinkContainer to="/addowner">
                                <Nav.Link>Add owner</Nav.Link>
                            </LinkContainer>
                        }


                        {
                            !isAdmin &&

                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>

                        }
                        {
                            !isAdmin &&

                            <LinkContainer to="/matches">
                                <Nav.Link>Matches</Nav.Link>
                            </LinkContainer>

                        }
                       

                        <Button className="float-end" onClick={logout}>Log out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Outlet/>
        </div>
    );
};

export default Header;