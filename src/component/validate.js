
const Validation = (values) => {
    let errors ={}
    if(!values.username){
        errors.username="Username is required";
    }
    if(!values.email){
        errors.email="Email is required";
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email ="Email is invalid.";
    }
    if(!values.password){
        errors.password="Password is required";
    }else if(values.password < 5){
        errors.password="Password must be  more than five characters";
    }
    if(!values.confirmPassword){
        errors.password="Confirm Password is required";
    }else if(values.password !== values.confirmPassword){
        errors.password="Confirm password must be  same as password";
    }
    return errors;
}
 
export default Validation;