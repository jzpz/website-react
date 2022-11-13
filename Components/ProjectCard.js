import placeholder from '../assets/default.jpg'
import { IoIosArrowForward } from 'react-icons/io'
import { Card, Button, Placeholder } from 'react-bootstrap'
import '../App.css';
import { useNavigate, Link } from 'react-router-dom'

export const ProjectCard = (props) => {
    const navigate = useNavigate()
    return(
        <Link 
            className="card-link" 
            to={"/projects/" + props.project.title}
            state={{
                from:'card', 
                body: props.project
            }}
        >
            <Card className="content-card hoverable" > 
                <Card.Body>
                    <Card.Title>
                        {props.project?.title}
                    </Card.Title>
                </Card.Body>
                <div style={{overflow: "hidden", borderBottomLeftRadius:5, borderBottomRightRadius:5}}>
                    <Card.Img 
                        className={`image ${props.image === null ? "default-image" : ""}`} 
                        variant="bottom" src={props.image ?? placeholder} 
                    />
                </div>
            </Card>
        </Link>
    )
}



    /*
    <div className="content content-box hoverable" style={{padding:0}}>
        <div className="content-title-container mb-3" style={{display:"inline-flex", margin: 20}}>
            <h3 className="content-title">{name}</h3>
            <IoIosArrowForward style={{marginLeft:5, marginBottom:2}} />
        </div>
        <img width={"100%"} style={{borderBottomRightRadius:5, borderBottomLeftRadius:5}} src={placeholder} />
    </div>
)*/

