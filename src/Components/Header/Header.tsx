import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {NavLink, useNavigate} from "react-router-dom";
import MainLogo from "../../Assets/logo.png";
import {Form} from 'react-bootstrap';
import './Header.scss';
import Input from "../Input/Input";
import Button from "../Button/Button";

const Header = () => {
    const navigate = useNavigate();

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand><NavLink to={'/'}> <img src={MainLogo} alt={'main-logo'}/> </NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={'justify-content-end'}>
                    <Nav className="mr-auto">
                        <NavLink to={'/'} className={'nav-link'}>Home</NavLink>
                        <NavLink to={'/about'} className={'nav-link'}>About The ALZ Nexus</NavLink>
                        <form style={{marginRight: '20px'}}>
                           <Input>
                               <Form.Control type="text" placeholder='Search' />
                           </Input>
                        </form>
                        <Button type="button" onClick={() => navigate('/caregiver/register')}>
                            caregivers join here
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
