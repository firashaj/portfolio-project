import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarSection, Logo, ListItem, LogoText, Anchor, UlList } from './style.js'


const Navbar = () => {
  const Homestyle = {
    textDecoration: "none",
    fontWeight: "bold",
    color: "#222",
  }

  return (
    <NavbarSection>

      <div className="container">

        <Logo>
          <LogoText>PORTFOLIO</LogoText>
        </Logo>
        <UlList>
          <ListItem><Link to="/" style={Homestyle}>Home</Link></ListItem>
          <ListItem><Anchor href="#Work">Work</Anchor></ListItem>
          <ListItem><Anchor href="#Portfolio">Portfolio</Anchor></ListItem>
          <ListItem><Anchor href="#Resume">Resume</Anchor></ListItem>
          <ListItem><Link to="/contact" style={Homestyle}>Contact</Link></ListItem>
        </UlList>

      </div>

    </NavbarSection>
  )
}

export default Navbar



