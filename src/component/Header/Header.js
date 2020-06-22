import React, {Component} from 'react';
import {Navbar, NavbarBrand, NavItem, Nav, NavbarToggler, Collapse} from 'reactstrap';
import { Link } from 'react-router-dom';
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
        });
    }

    render(){
        return(
            <>
                <Navbar dark expand="md">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="nav-logo" href="/">
                        <img src={Logo} height="70" width="146" alt="Kriyative" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link className="nav-link" style={{color:'#75BE17'}} to="/pathways">
                                    Learning Pathways
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" style={{color:'#75BE17'}} to="/metho">
                                    KRIYA Methodology
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" style={{color:'#75BE17'}} to="/about">
                                    About Us
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" style={{color:'#75BE17'}}>
                                    Resources
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" style={{color:'#75BE17'}}>
                                    News
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" style={{color:'#75BE17'}}>
                                    Buy
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" style={{color:'#75BE17'}}>
                                    Partner
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" style={{color:'#75BE17'}} to="/contactus">
                                    Contact
                                </Link>
                            </NavItem>
                        </Nav>  
                    </Collapse>
                </Navbar>
            </>
        );
    }
}

export default Header;