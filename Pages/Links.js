import { Button, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { IoIosArrowForward, IoMdHome } from "react-icons/io";
import { ThemeContextValue } from 'react-bootstrap/esm/ThemeProvider';
import { useContext } from 'react';
import { getProjects } from '../Firebase/getProjects';
import { Outlet, Link } from "react-router-dom";
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import localization_en from '../Localization/localization_en.json'
import localization_fi from '../Localization/localization_fi.json'
import { LocalizationContext } from '../App';
import { ProjectCard } from '../Components/ProjectCard';
import default2 from '../assets/default2.jpg'

export function Links() {
    
    return(
        <Container>
            <h2 className="big-heading">Links</h2>
            <Row>
                <Col>
                    <div className="content-card custom-card">
                        <div className="content-text">
                            <Row>
                                <Col>
                                    <h4>Welcome</h4>
                                    <hr />
                                    <p>
                                        Welcome to my website! The primary function of this site is to showcase
                                        my projects, but I'm also using it for some other purposes such as
                                        my thesis, learning and testing new things.  
                                        The site still being updated, so everything may not be in place yet.
                                    </p>
                                    <p>
                                        Visit the&nbsp;
                                        <Link to={"projects"} className="highlight" style={{textDecoration:"none"}}>Projects</Link>
                                        &nbsp;page to find information, pictures and GitHub repository links for
                                        some of my projects.
                                    </p>
                                </Col>
                                <Col></Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

