import {Link} from 'react-router-dom';

const SignUp = ({onSubmitHandler, values, onChangeHandler, errors}) => {
  
    return (  
        <form onSubmit={onSubmitHandler} className="container">
             <h1>SignUp</h1>
            <div>
                <input type="text" 
                onChange={onChangeHandler} 
                placeholder="Username..."
                name="username" 
                value={values.username}/>

                {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div>
                <input type="text" 
                onChange={onChangeHandler} 
                placeholder="Email..." 
                name="email" 
                value={values.email} />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
                <input type="password" 
                onChange={onChangeHandler} 
                placeholder="Password..." 
                name="password" 
                value={values.password}/>
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div>
            <input type="password"
                onChange={onChangeHandler} 
                placeholder="Confirm Password..." 
                name="confirmPassowrd" 
                value={values.confirmPassword}/>
                {errors.confirmPassword &&<p className="error">{errors.confirmPassword}</p>}
            </div>
            <button className="btn" >SignUp</button>
            <div className="links">
                <Link to="/">SignIn</Link>
            </div>
        </form>
    );
}
 
export default SignUp;