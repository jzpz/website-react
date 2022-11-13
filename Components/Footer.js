import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

export const Footer = () => (
    <footer className="app-footer">
        <Container className="footer-content">
            <Row>
                <Col>
                    <p>2022</p>
                    <p>Website built with create-react-app and React Bootstrap</p>
                </Col>
            </Row>
        </Container>
    </footer>
)