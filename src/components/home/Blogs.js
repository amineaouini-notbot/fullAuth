import { Link } from "react-router-dom";
import './Blogs.css'
const Blogs = (props) =>{
    const {title} = props.blog
    return (
        <Link className="myBlogs">
            <p style={{color: 'black', marginTop: '10px'}}>{title}</p>
        </Link>
    )
}

export default Blogs;