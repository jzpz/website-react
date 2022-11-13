import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { useRouteError, Link } from 'react-router-dom';
import { Breadcrumb, PathLinks } from '../../Components/Breadcrumb';
import { ProjectAPI } from '../../Functions/ProjectAPI';
import { useState, useEffect } from 'react';

export function AdminPanel() {
    const [projects, setProjects] = useState([]);

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
                <tr key={project.id} style={{borderTop: "1px solid #303030"}}>
                    <td>{project.title}</td>
                    <td>{project.year}</td>
                    <td>{project.rating}</td>
                    <td>{project.description?.slice(0, 20)}</td>
                    <td>{project.url}</td>
                    <td>
                        <Link 
                            to={"/admin/edit/"}
                            state={{
                                from:'adminpanel', 
                                body: project
                            }}
                            className="button-transparent button-underline"
                        >
                            Edit
                        </Link>
                    </td>
                </tr>
            )
        })

        return <>{list}</>
    }


    return(
        <Container>
            <h2 className="big-heading">Admin panel</h2>
            <div className="content-card custom-card">
                <div className="content-text">
                    {/* breadcrumb */}
                    <Row>
                        <Col>
                        <Breadcrumb />
                        </Col>
                    </Row>
                    {/* text content */}
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    {/* project table heading */}
                                    <Row>
                                        <Col xs={8}>
                                            <h4>Projects</h4>
                                        </Col>
                                        <Col xs={4}>
                                            <Link 
                                                to={"/admin/edit/"}
                                            >
                                                <Button className="button-primary" style={{width:"100%"}}>
                                                    New project
                                                </Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            {/* project table */}
                            <Row>
                                <table className="table-striped">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Year</th>
                                            <th>Rating</th>
                                            <th>Description</th>
                                            <th>URL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <ProjectsList />
                                    </tbody>
                                </table>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}