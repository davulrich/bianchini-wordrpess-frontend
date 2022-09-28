import React from 'react'
import styled from 'styled-components'
import {Navbar as NavbarBS, Container, Nav, NavLink} from 'react-bootstrap'

const menuItems = [
  {
    id: 1,
    href: '#',
    text: 'Item1',
  },
  {
    id: 2,
    href: '#',
    text: 'Item2',
  },
  {
    id: 3,
    href: '#',
    text: 'Item3',
  },
  {
    id: 4,
    href: '#',
    text: 'Item3',
  },
  {
    id: 5,
    href: '#',
    text: 'Item4',
  },
]

const Navbar = styled(NavbarBS)`
  grid-column: 1 / -1;
  grid-row: 1 / 1;

  border-bottom: 1px solid #ffffff36;
  padding-left: var(--footer-width);
  background-color: var(--c-primary);
`

const Header: React.FC = () => (
  <Navbar forwardedAs="header" expand="lg" sticky="top" variant="dark">
    <Container fluid="xxl" as="nav" className="justify-content-between ps-0">
      <Navbar.Brand href="#shingles-aware">Logo</Navbar.Brand>
      <Navbar.Toggle id="main-nav" />
      <Navbar.Collapse aria-controls="main-nav">
        <Nav className="justify-content-end w-100">
          {menuItems.map(({id, href, text}) => (
            <NavLink key={id} href={href}>
              {text}
            </NavLink>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
export default Header
