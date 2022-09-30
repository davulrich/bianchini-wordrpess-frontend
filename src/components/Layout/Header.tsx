import React from 'react'
import styled from 'styled-components'
import {
  Navbar as NavbarBS,
  Container,
  Nav,
  NavLink as NavLinkBS,
} from 'react-bootstrap'
import Logo from './logo.svg'
import {Link} from 'gatsby'

const menuItems = [
  {
    id: 1,
    href: '#1',
    text: 'Item1',
  },
  {
    id: 2,
    href: '#2',
    text: 'Item2',
  },
  {
    id: 3,
    href: '#3',
    text: 'Item3',
  },
  {
    id: 4,
    href: '#4',
    text: 'Item3',
  },
  {
    id: 5,
    href: '#5',
    text: 'Item4',
  },
]

const Navbar = styled(NavbarBS)`
  grid-column: 1 / -1;
  grid-row: 1 / 1;

  border-bottom: 1px solid #ffffff36;
  padding-left: var(--sidebar-width);
  background-color: var(--c-primary);
`

const NavLink = styled(NavLinkBS)`
  font-size: 0.7rem;
  font-family: var(--ff-secondary);
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  line-height: 1;
  position: relative;

  &.active::before {
    content: '';
    position: absolute;
    top: -1.3rem;
    width: 100%;
    height: 5px;
    background: #ffffff36;
    left: 0;
  }
`

const Header: React.FC = () => (
  <Navbar forwardedAs="header" expand="lg" sticky="top" variant="dark">
    <Container fluid as="nav" className="justify-content-between ps-0">
      <Navbar.Brand as={Link} to="/" className="p-0">
        <Logo alt="Bianchini logo" width={130} />
      </Navbar.Brand>
      <Navbar.Toggle id="main-nav" />
      <Navbar.Collapse aria-controls="main-nav">
        <Nav className="justify-content-end w-100">
          {menuItems.map(({id, href, text}) => (
            <NavLink
              key={id}
              as={Link}
              to={href}
              className="nav-link"
              activeClassName="active"
            >
              {text}
            </NavLink>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
export default Header
