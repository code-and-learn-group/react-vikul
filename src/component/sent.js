import {Link} from 'react-router-dom'
const Sent = () => {
    return ( 
        <form className="container">
            <h1>Sent!</h1>
            <p>Kindly check your email</p>
            <Link to="/" >Sign In</Link>
           
        </form>
     );
}
 
export default Sent;