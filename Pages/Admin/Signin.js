import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { useRouteError, Link } from 'react-router-dom';
import { PathLinks } from '../../Components/Breadcrumb';

export function Signin() {
    return(
        <Container>
            <h2 className="big-heading">Sign in</h2>
            <Row>
                <Col>
                    <div className="content-card custom-card">
                        <div className="content-text">
                            <Row>
                                <Col>
                                    <h4>Sign in to admin panel</h4>
                                    <hr />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <Form style={{width:300}}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Username</Form.Label>
                                                <Form.Control type="email" placeholder="Username" />
                                                <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Check me out" />
                                            </Form.Group>
                                            <Button className="button-primary" type="submit">
                                                Submit
                                            </Button>
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