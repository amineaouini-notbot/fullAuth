import Nav from "../Nav";
import NotVerified from "./NotVerified";

const Home = ({isVerified}) =>{
    
    return (
        <div style={{height: '100vh'}}>
            <Nav />
            {!isVerified ? (<NotVerified/>) : <div></div>}
            
        </div>
    )
}

export default Home;
