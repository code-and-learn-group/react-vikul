import {Link} from 'react-router-dom';
const ForgotPassword = () => {
    return ( 
        <form className="container">
            <input type="email" placeholder=" Regsitered Email" />
            <button className="btn">
                <Link to="/sent">Send Link</Link>
            </button>   
        </form>
     );
}
 
export default ForgotPassword;