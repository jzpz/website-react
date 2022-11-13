import { Button, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { useRouteError, Link } from 'react-router-dom';
import { Breadcrumb } from '../Components/Breadcrumb';

export function ErrorPage() {
    return(
        <Container fluid className="center-container text-center">
            <h2>Page not found</h2>
            <hr />
            <Link to={"/"} >
                <Button className="button-transparent button-underline">Back to Home</Button>
            </Link>
        </Container>
    )
}