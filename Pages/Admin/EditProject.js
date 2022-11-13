import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import { useEffect, useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { PathLinks } from '../../Components/Breadcrumb';
import { ProjectAPI } from '../../Functions/ProjectAPI';
import { Breadcrumb } from '../../Components/Breadcrumb';

const TechnologiesList = ({technologies, editTechnologies, removeTechnology}) => {
    const list = technologies.map((technology, index) =>
        <tr key={index} style={{borderTop: "1px solid #303030"}}>
            <td>
                <Form.Group key={technologies[index]}>
                    <Form.Control 
                        disabled={technology?.remove ? true : false}
                        style={technology?.remove ? {textDecoration:"line-through"} : {}}
                        type="text" 
                        name="name"
                        placeholder="Name" 
                        value={technologies[index].name ? technologies[index].name : ""}
                        onChange={(event) => editTechnologies(event, index)}
                    />
                </Form.Group>
            </td>
            <td>
                <Form.Group>
                    <Form.Control 
                        disabled={technology?.remove ? true : false}
                        style={technology?.remove ? {textDecoration:"line-through"} : {}}
                        type="text" 
                        name="type"
                        placeholder="Type" 
                        value={technologies[index].type ? technologies[index].type : ""}
                        onChange={(event) => editTechnologies(event, index)}
                    />
                </Form.Group>
            </td>
            <td>
                <Button 
                    className="button-transparent color-error" 
                    onClick={() => removeTechnology(index)}
                >
                    {technology?.remove ? "Cancel" : "Remove"}
                </Button>
            </td>
        </tr>
    )

    return <>{list}</>
}

export function EditProject() {
    const [project, setProject] = useState({title: "", year: new Date().getFullYear(), rating: "", description: "", url: ""})
    const [technologies, setTechnologies] = useState([])
    let loaded = false
    const navigate = useNavigate()
    let location = useLocation()
    let api = new ProjectAPI()

    const submit = (event) => {
        event.preventDefault();
        // update project
        api.addProject(project, location.state?.body.id)
        .then(res => {})
        .catch(e => console.log(e))
        let _length = technologies.length

        technologies.forEach((technology, index) => {
            // update changed fields
            if(technology?.remove === true && location?.state?.body?.id != null) {
                
                api.deleteTechnology(technology.id, location?.state?.body?.id) // Remove from project
                .then(_res => console.log("Deleted", technology.name))
                .catch(e => console.log(e))

            } else if(technology?.edited === true) {

                // remove unneeded information
                let _technology = {
                    name: technology.name,
                    type: technology.type
                }
                if(technology?.id) {
                    _technology = {..._technology, id: technology.id}
                }
                console.log("put", _technology)
                api.addTechnology(_technology, location.state?.body.id, technology?.id)
                .then(res => console.log("Added", technology.name))
                .catch(e => console.log(e))
            }
        })
        navigate("/admin/panel")
    }

    const deleteProject = () => {
        api.deleteProject(location?.state.body.id)
        navigate("/admin/panel")
    }

    useEffect(() => {
        let params = location?.state?.body;
        if(params && !loaded) {
            loaded = true
            setTechnologies(params.technologies)
            setProject({
                title: params.title,
                year: params.year,
                rating: params.rating,
                description: params.description,
                url: params.url,
                platform: params.platform
            })
        }
    }, [location])

    const editTechnologies = (event, index) => {
        event.preventDefault();
        let _technologies = [...technologies]
        // Change the name or type
        _technologies[index][event.target.name] = event.target.value
        _technologies[index].edited = true
        setTechnologies(_technologies)
    }

    const removeTechnology = (index) => {
        let _technologies = [...technologies]
        _technologies[index].remove = !_technologies[index].remove
        setTechnologies(_technologies)
    }

    useEffect(() => {
        console.log(technologies)
    }, [technologies])

    return(
        <Container>
            <h2 className="big-heading">Admin panel</h2>
            <Row>
                <Col>
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
                                    <h4>Project editor</h4>
                                    <hr />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="center">
                                    <div>
                                        <Form onSubmit={submit}>
                                            <Row className="row-cols-1 row-cols-md-2">
                                                <Col>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label onClick={() => console.log(technologies)}>Project title</Form.Label>
                                                        <Form.Control 
                                                            type="text" 
                                                            placeholder="Project title" 
                                                            name="title"
                                                            value={project.title ? project.title : ""}
                                                            onChange={(event) => setProject({title: event.target.value})}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Year created</Form.Label>
                                                        <Form.Control 
                                                            type="number" 
                                                            placeholder="Year created" 
                                                            name="year"
                                                            value={project.year ? project.year : ""}
                                                            onChange={(event) => setProject({...project, year: parseInt(event.target.value)})}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Rating</Form.Label>
                                                        <Form.Control 
                                                            type="number" 
                                                            placeholder="Rating" 
                                                            name="rating" 
                                                            value={project.rating ? project.rating : ""}
                                                            onChange={(event) => setProject({...project, rating: event.target.value})}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>URL</Form.Label>
                                                        <Form.Control 
                                                            type="text" 
                                                            placeholder="URL" 
                                                            name="url" 
                                                            value={project.url ? project.url : ""}
                                                            onChange={(event) => setProject({...project, url: event.target.value})}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Platform</Form.Label>
                                                        <Form.Control 
                                                            type="text" 
                                                            placeholder="Platform" 
                                                            name="url" 
                                                            value={project.platform ? project.platform : ""}
                                                            onChange={(event) => setProject({...project, platform: event.target.value})}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Description</Form.Label>
                                                        <Form.Control 
                                                            as="textarea"
                                                            rows={12} 
                                                            type="text" 
                                                            placeholder="Description" 
                                                            name="description"
                                                            value={project.description ? project.description : ""}
                                                            onChange={(event) => setProject({...project, description: event.target.value})}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            {location?.state?.body?.id && <>
                                                <Row className="mt-4">
                                                    <Col>
                                                        <p>Project technologies</p>
                                                    </Col>
                                                </Row>
                                                {/* project table */}
                                                {technologies.length > 0 &&
                                                    <Row>
                                                        <Col>
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Type</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <TechnologiesList 
                                                                    technologies={technologies} 
                                                                    editTechnologies={editTechnologies}
                                                                    removeTechnology={removeTechnology}
                                                                />
                                                            </tbody>
                                                        </table>
                                                        </Col>
                                                    </Row>
                                                }
                                                <Row>
                                                    <Col className="d-flex justify-content-end">
                                                        <Button 
                                                            className="button-primary" 
                                                            onClick={() => setTechnologies(
                                                                [...technologies, {name: "", type: ""}]
                                                            )}
                                                        >
                                                            New row
                                                        </Button>
                                                    </Col>
                                                    <Col />
                                                </Row>
                                            </>}   
                                            <Row>
                                                <Col className="d-flex justify-content-start">
                                                    <Link to={"/admin/panel"} className="m-2 button-transparent button-underline">
                                                        Go back
                                                    </Link>
                                                </Col>
                                                <Col className="d-flex justify-content-end">
                                                    {location?.state?.body?.id && 
                                                        <Button variant="danger" className="m-2" onClick={deleteProject}>
                                                            Delete
                                                        </Button>
                                                    }
                                                    <Button className="m-2 button-primary" type="submit">
                                                        Submit
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}