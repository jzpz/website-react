import '../App.css';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

/**
 * @param {*} list list of technologies
 * @param {*} type types of technologies to list: language/other
 * @returns JSX element of technologies
 */
export const getProjectTechnologies = (list, type) => {
    let elements = [];

    list.forEach((element, index) => {
        if(type === "language" && element.type === "language") {
            if(elements.length > 0) 
                elements.push(<span key={`${index}-space`} className="spacer" style={{marginRight:"5px"}} />)
            
            elements.push(<Badge pill bg="dark" key={index} className="text-badge"><span>{element.name}</span></Badge>)
            
        } else if(type !== "language" && element.type !== "language") {
            if(elements.length > 0) 
                elements.push(<span key={`${index}-space`} className="spacer" style={{marginRight:"5px"}} />)
           
            elements.push(<Badge pill bg="dark" key={index} className="text-badge"><span>{element.name}</span></Badge>)
        }
    })
    return(elements)
}