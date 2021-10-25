import {Link} from 'react-router-dom';
import { useState } from 'react';
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signInHandler =(e)=>{
        console.log(email);
        console.log(password);
    }
    const EmailOnChangeHandler =(e)=>{
        setEmail(e.target.value);
       
    }
    const PasswordOnChangeHandler =(e)=>{
        setPassword(e.target.value);
    }
    return ( 
        <form className="container">
            <h1>SignIn</h1>
            <input  onChange={EmailOnChangeHandler} type="email" placeholder="Email..." />
            <input onChange={PasswordOnChangeHandler} type="Password" placeholder="Password..." />
            <button className="btn" onClick={signInHandler}>SignIn</button>
            <div className="links">
            <Link to="/forgetpassword">Forgot Password</Link>
            <Link to="/signup">Sign Up</Link>
          
            </div>
        </form>
     );
}
 
export default SignIn;