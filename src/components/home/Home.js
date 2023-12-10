import Nav from "../Nav";
import MyBlogs from "./MyBlogs";
import NotVerified from "./NotVerified";

const Home = ({isVerified, myBlogs}) =>{
    
    return (
        <div style={{height: '100vh'}}>
            <Nav />
            {!isVerified ? (<NotVerified/>) : <MyBlogs myBlogs={myBlogs}/>}
            
        </div>
    )
}

export default Home;
