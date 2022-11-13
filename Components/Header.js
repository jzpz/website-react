import { Container, Row, Col, Button, ButtonGroup, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { changeTheme } from '../Functions/changeTheme';
import { IoIosSettings, IoIosMoon, IoIosSunny, IoMdHome, IoIosBuild } from 'react-icons/io';
import '../App.css';
export const Header = () => {
    return (
        <Navbar collapseOnSelect variant="dark" sticky="top" expand="md" id="top-nav">
            <Container>
                <div className="nav-logo">
                    <NavLink className="link" to={"/"}>
                        <div className="image-button">
                            &lt;<IoMdHome size={40} style={{marginBottom:5}} />/&gt;
                        </div>
                    </NavLink>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav navbarScroll className="me-auto my-2 my-lg-0" style={{alignItems:"center"}}>
                        <Nav.Item>
                            <NavLink to={"/"} end>
                                Home
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to={"projects"}>
                                Projects
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to={"links"}>
                                Links
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className="link" to={"cv"}>
                                CV
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                    <Nav className="quick-options">
                        <NavDropdown
                        title={<IoIosSettings size={30} className="image-button settings-button" />} className="navbar-dropdown">
                            <NavDropdown.Item disabled>Theme</NavDropdown.Item>
                            <NavDropdown.Item>
                                <ButtonGroup>
                                    <Button className="button-transparent text-bold" onClick={() => changeTheme("dark")}>
                                    <IoIosMoon size={30} className="image-button theme-dark" />
                                    </Button>
                                    <Button className="button-transparent text-bold" onClick={() => changeTheme("light")}>
                                    <IoIosSunny size={30} className="image-button theme-light" />
                                    </Button>
                                </ButtonGroup>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item disabled>Language</NavDropdown.Item>
                            <NavDropdown.Item>
                                <ButtonGroup>
                                    <Button className="button-transparent text-bold" >EN</Button>
                                    <Button className="button-transparent text-bold" >FI</Button>
                                </ButtonGroup>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                        title={<IoIosBuild size={30} className="image-button" />} className="navbar-dropdown">
                            <NavDropdown.Item>
                                <Link to={"/admin/signin"} relative="path" className="button-transparent button-underline">Admin panel</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}