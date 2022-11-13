import { Button, Container, Row, Col, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { 
    IoIosArrowForward,
    IoIosArrowBack,
    IoMdHome, 
    DiJava, 
    IoLogoJavascript, 
    IoLogoReact,  
    DiPhp,
    SiMysql,
    IoLogoFirebase,
    SiSpring,
} from "react-icons/io";
import { useContext, useEffect, useState } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import default1 from '../assets/default.jpg'
import default2 from '../assets/default2.jpg'
import default3 from '../assets/default3.jpg'
import { Breadcrumb } from '../Components/Breadcrumb';
import { ImageCard } from '../Components/ImageCard'
import { getProjectTechnologies } from '../Components/ProjectTechnologies';
import { ProjectAPI } from '../Functions/ProjectAPI'

export function Project() {

    const [project, setProject] = useState([]);
    const [state, setState] = useState({});
    let params = useParams();
    let location = useLocation();
    const navigate = useNavigate();
    const [languages, setLanguages] = useState();
    const [technologies, setTechnologies] = useState();
    let api = new ProjectAPI();

    // Get projects from Firebase
    useEffect(() => {
        let _state = location.state;

        if(_state) {
            setState(_state)
            api.getProjects(_state.body.id)
            .then((data) => {
                setProject(data)
                setLanguages(getProjectTechnologies(data.technologies, "language"))
                setTechnologies(getProjectTechnologies(data.technologies, "other"))
            })
            .catch(e => console.log("Error fetching projects:", e))
        } else {
        /*
            api.getProjects()
            .then((data) => {
                setProject(data)
                setLanguages(getProjectTechnologies(data.technologies, "language"))
                setTechnologies(getProjectTechnologies(data.technologies, "other"))
            })
            .catch(e => console.log("Error fetching project:", e))
            */
        }
    }, [])

    return(
        <div>
            <Container className="base-container">
                <Row className='row-cols-1 row-cols-lg-2'>
                    <Col>
                        <div className="content-text">
                            <Breadcrumb path={window.location.pathname} />
                            <h2 className="big-heading">{params.projectName}</h2>
                            <hr />
                            <table className="table-transparent">
                                <tbody>
                                    {project?.year &&
                                        <tr>
                                            <th>Year</th>
                                            <td><span title="Year when the project was last updated">{project?.year}</span></td>
                                        </tr>
                                    }
                                    {project?.languages &&
                                        <tr>
                                            <th>Languages</th>
                                            <td>{languages}</td>
                                        </tr>
                                    }
                                    {technologies?.length > 0 &&
                                        <tr>
                                            <th>Technologies</th>
                                            <td>{technologies}</td>
                                        </tr>
                                    }
                                    {project?.platform &&
                                        <tr>
                                            <th>Platform</th>
                                            <td><span>{project?.platform}</span></td>
                                        </tr>
                                    }
                                    {project?.description &&
                                        <tr>
                                            <th className="d-flex align-items-start" style={{marginTop:3}}>Description</th>
                                            <td>
                                                <span dangerouslySetInnerHTML={{__html: project?.description}} />
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                            <div className="text-center">
                                <Button className="button-transparent button-underline">View on GitHub</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project-images">
                            <img src={default1} width="100%"></img>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                {/* Heading row */}
                <Row>
                    <Col xs={2} />
                    <Col xs={8}>
                        <Container>
                            <h2 className="big-heading">Gallery</h2>
                        </Container>
                    </Col>
                    <Col xs={2} />
                </Row>
                {/* Gallery row */}
                <Row>
                    <Col xs={2} style={{textAlign:"right", margin:"auto"}}>
                        <IoIosArrowBack className="gallery-arrow" size={60} />
                    </Col>
                    <Col xs={8}>
                        <Container>
                            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 gx-4 gy-4">
                                <Col>
                                    <ImageCard name="Inventory App" image={default2} />
                                </Col>
                                <Col>
                                    <ImageCard name="Shorten" />
                                </Col>
                                <Col>
                                    <ImageCard name="Sport Result Tracker" image={default3}/>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={2} style={{margin:"auto"}}>
                        <IoIosArrowForward className="gallery-arrow" size={60} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
