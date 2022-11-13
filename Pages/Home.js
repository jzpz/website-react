import { Button, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { IoIosArrowForward, IoMdHome, IoLogoLinkedin, IoLogoGithub, IoMdMail } from "react-icons/io";
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

export function Home() {
    
    return(
        <Container>
            <h2 className="big-heading">About</h2>
            <Row>
                <Col>
                    <div className="content-card custom-card">
                        <div className="content-text">
                            <Row>
                                <Col>
                                    <h4>Welcome</h4>
                                    <hr />
                                </Col>
                            </Row>
                            <Row >
                                <Col className="text-paragraph">
                                    <p>
                                        Welcome to my website! The primary function of this site is to showcase
                                        my projects, but I'm also using it for some other purposes such as
                                        my thesis, learning and testing new things.  
                                    </p>
                                </Col>
                                <Col className="text-paragraph">
                                    <p>
                                        The site still being updated, so everything may not be in place yet.
                                    </p>
                                    <p>
                                        Visit the&nbsp;
                                        <Link to={"projects"} className="highlight" style={{textDecoration:"none", fontSize:"1em"}}>Projects</Link>
                                        &nbsp;page to find information, pictures and GitHub repository links for
                                        some of my projects.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4} />
                                <Col md={4} className="text-center">
                                    <Row>
                                        <Col xs={4}>
                                            <IoLogoGithub className="image-button" size={40} />
                                        </Col>
                                        <Col xs={4}>
                                            <IoLogoLinkedin className="image-button" size={40} />
                                        </Col>
                                        <Col xs={4}>
                                            <IoMdMail className="image-button" size={40} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={4} />
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
            <div style={{display:"inline-flex"}}>
                <h2 className="big-heading">Projects</h2>
                <div className="big-heading-spacer" />
                <Link className="link big-heading-link arrow-link" to={"projects"}>
                    <span className="link-text">View more</span>
                    <IoIosArrowForward className="link-arrow" style={{marginLeft:3, marginBottom:2}} />
                </Link>

            </div>
            <div>
                <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 gx-4">
                    <Col><ProjectCard project={{title: "Inventory App"}} image={default2} /></Col>
                    <Col><ProjectCard project={{title: "Shorten"}} /></Col>
                    <Col><ProjectCard project={{title: "Sport Result Tracker"}} /></Col>
                </Row>
            </div>
        </Container>
    )
}

