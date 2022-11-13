import '../App.css';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

// Returns the path of page as links, 
// for example: Home > Projects > Name
export const Breadcrumb = () => {
    let array = window.location.pathname.split('/');

    if(array.at(-1) === "") array.pop();

    let currentPath = "";
    let elements = [];
    array.forEach((el, index) =>{
        currentPath += (array[index]+ "/")
        
        if(index != 0) {
            elements.push(
                <IoIosArrowForward key={el} className="link-arrow" />
            )
        }
        elements.push(
            <Link key={index} className="link" to={currentPath}>
                {index === 0 
                ? "Home" 
                // Capitalize first letter + decode
                : decodeURI(array[index].charAt(0).toUpperCase() + array[index].slice(1))}
            </Link>
        )
                       
    })
    return(elements)
}

/*
<Link className="link" to="/">Home</Link>
<IoIosArrowForward className="link-arrow" />
<Link className="link" to="/projects">Projects</Link>
<IoIosArrowForward className="link-arrow" />
<Link className="link" to=".">{params.projectName}</Link>
*/