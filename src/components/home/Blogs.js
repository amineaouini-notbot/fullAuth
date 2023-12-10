import { Link } from "react-router-dom";
import './Blogs.css'
const Blogs = (props) =>{
    const {title, id} = props.blog
    return (
        <Link to={`/blog/${id}`} className="myBlogs">
            <p style={{color: 'black', marginTop: '10px'}}>{title}</p>
        </Link>
    )
}

export default Blogs;