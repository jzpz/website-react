import { Button, Container, Row, Col, Collapse } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { 
    IoIosArrowForward, 
    IoMdHome, 
    DiJava, 
    IoLogoJavascript, 
    IoLogoReact,  
    DiPhp,
    SiMysql,
    IoLogoFirebase,
    SiSpring,
} from "react-icons/io";
import { ThemeContextValue } from 'react-bootstrap/esm/ThemeProvider';
import { useContext, useEffect, useState, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ProjectCard } from '../Components/ProjectCard';
import { ProjectAPI } from '../Functions/ProjectAPI'

export function Projects() {

    const [projects, setProjects] = useState([]);
    const nodeRef = useRef(null);

    // Get projects from Firebase
    useEffect(() => {
        new ProjectAPI().getProjects()
        .then((data) => setProjects(data))
        .catch(e => console.log("Error fetching projects:", e))

        /*
        getProjects()
        .then(res => {
            setProjects(Object.keys(res))
        })
        .catch(e => console.log(e))
        */
    }, [])

    const ProjectsList = () => {
        const list = projects.map((project, index) => {
            return(
                <div className="pb-3" key={index} ref={nodeRef}>
                    <Col>
                        <ProjectCard project={project} />
                    </Col>
                </div>
            )
        })

        return <>{list}</>
    }

    return(
        <>
        {projects.length > 0 ?
            <div className="app-container" style={{flex:1, height:"100%"}}>
                {/* main container */}
                <Container>
                    <h2 className="big-heading">Projects</h2>
                    <div>
                        <Row className='row-cols-1 row-cols-md-2 row-cols-xl-3 gx-4 gy-2'>
                            <ProjectsList />
                        </Row>
                    </div>
                </Container>
            </div>
        : <Container fluid style={{height:"100%"}}></Container>}
        </>
    )
}

