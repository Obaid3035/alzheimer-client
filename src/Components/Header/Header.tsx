import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import MainLogo from "../../Assets/logo.png";
import {Form} from 'react-bootstrap';
import './Header.scss';
import Input from "../Input/Input";
import Button from "../Button/Button";

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand><img src={MainLogo} alt={'main-logo'}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={'justify-content-end'}>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About The ALZ Nexus</Nav.Link>
                        <form style={{marginRight: '20px'}}>
                           <Input onSubmit={() => console.log('hello')}>
                               <Form.Control type="text" placeholder='Search' />
                           </Input>
                        </form>
                        <Button>
                            caregivers join here
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
