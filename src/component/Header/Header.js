import React, {Component} from 'react';
import {Navbar, NavbarBrand, NavItem, Nav, NavbarToggler, Collapse,NavLink} from 'reactstrap';
//import { NavLink } from 'react-router-dom';
import Logo  from './KRIYATIVE_LOGO.png';
import './Header.css';


class Header extends Component {

    constructor(props){
        super(props);
        this.state= {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render(){
        return(
            <>
                <Navbar className="nav"  expand="md">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="nav-logo">
                        <img src={Logo} height="70" width="146" alt="Kriyative" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/" className="nav-link" style={{color:'#75BE17'}} >
                                    Learning Pathways
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" style={{color:'#75BE17'}}>
                                    KRIYA Methodology
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" style={{color:'#75BE17'}}>
                                    About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" style={{color:'#75BE17'}}>
                                    Resources
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" style={{color:'#75BE17'}}>
                                    News
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" style={{color:'#75BE17'}}>
                                    Buy
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" style={{color:'#75BE17'}}>
                                    Partner
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" style={{color:'#75BE17'}}>
                                    Contact
                                </NavLink>
                            </NavItem>
                        </Nav>  
                    </Collapse>
                </Navbar>
            </>
        );
    }
}

export default Header;