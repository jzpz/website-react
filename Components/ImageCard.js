import placeholder from '../assets/default.jpg'
import { IoIosArrowForward } from 'react-icons/io'
import { Card, Button, Di } from 'react-bootstrap'
import '../App.css';
import { useNavigate } from 'react-router-dom'

export const ImageCard = (props) => {
    const navigate = useNavigate()
    return(
        <Card className="image-card hoverable">
            <Card.Img 
                className={`image ${props.image === null ? "default-image" : ""}`} 
                variant="top" src={props.image ?? placeholder} 
            />
        </Card>
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

