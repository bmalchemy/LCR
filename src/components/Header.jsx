import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
const facebook = require('../media/images/facebook.png');
const lcrLogo = require('../media/images/LCR_logo_white-50pct.png');

var style0 = {
    width: 35,
    height: 35,
    marginLeft: 10,
}

var style1 = {
    backgroundColor: "#7FB3D5",
    height: 16,
    marginTop: -5,
    marginLeft: 0
}
var style2 = {
    color: "#000",
    fontSize: 10,
    marginLeft: 10,
    marginTop: -2
}

export default function Header() {
    return (
        <div id="top">
            {/*     <nav class="navbar navbar-inverse navbar-fixed-top cbp-af-header" role="navigation">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <Link to='/'><img src={lcrLogo} alt="lcrLogo" /></Link>
                        <a href="https://www.facebook.com/pages/Lutheran-Church-of-the-Resurrection/721494127926960" target="new">
                            <img src={facebook} style={style0} alt="facebook" />
                        </a>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling */}
            {/*           <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/connect'>Connect</Link>
                            </li>
                            <li>
                                <Link to='/keepup'>Keep Up</Link>
                            </li>

                            <li>
                                <Link to='/contactus'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
    </nav> */}

            <Navbar inverse collapseOnSelect fixedTop>
                <div style={style1}>
                    <div style={style2} align="left">(512) 847-3386 &nbsp; <a href="mailto:office@welcomtonewlife.org"> lcr info</a></div>
                </div>

                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'><img src={lcrLogo} style={style0} alt="lcrLogo" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem>
                            <Link to='/'>Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/about'>About</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/connect'>Connect</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/keepup'>Keep Up</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/contactus'>Contact Us</Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}