import Blogs from "./Blogs"

const MyBlogs = ({myBlogs}) =>{

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{display: "grid", gridAutoColumns: '25vw 25vw', gridAutoFlow: 'column', columnGap: '20px'}}>
                {myBlogs.map((blog, i) => (<Blogs key={i} blog={blog}/>))}
            </div>
        </div>

    )
}

export default MyBlogs