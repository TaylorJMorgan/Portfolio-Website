import React from 'react';

import classes from './Navigation.module.css';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navigation = (props) => {
  return (
    <Navbar
      collapseOnSelect
      fixed='top'
      as='header'
      expand='lg'
      variant='dark'
      className={`${classes['navbar--custom']}`}
    >
      <Container>
        <Navbar.Toggle
          aria-controls='navbar'
          className={classes['navbar-toggle--custom']}
        />
        <Navbar.Collapse
          id='navbar'
          className={classes['navbar-collapse--custom']}
        >
          <Nav
            className='mx-auto'
            activeKey={props.active}
            onSelect={(selectedKey) => props.setActive(selectedKey)}
          >
            <Nav.Link
              as={Link}
              to='/'
              className={classes['nav-item--custom']}
              eventKey='home'
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/about'
              className={classes['nav-item--custom']}
              eventKey='about'
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/projects'
              className={classes['nav-item--custom']}
              eventKey='projects'
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/contact'
              className={classes['nav-item--custom']}
              eventKey='contact'
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
