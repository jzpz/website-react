import { Button, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { IoIosArrowForward, IoMdHome } from "react-icons/io";
import { ThemeContextValue } from 'react-bootstrap/esm/ThemeProvider';
import { useContext } from 'react';
import { getProjects } from '../Firebase/getProjects';
import { Outlet, Link } from "react-router-dom";
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer';

export function Root() {
    return(
        <div id="app-container">
            
            {/* items inside this div are placed on top,
                items outside are placed on bottom (footer) */}
            <div>
                <Header />
                <div id="outlet-container">
                    <Outlet />
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

