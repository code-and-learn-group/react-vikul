import './App.scss';
import SignIn from './Components/signIn';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUp from './Components/signup';
import ForgotPassword from './Components/forgot';
import Sent from './Components/sent';
import {useState} from "react";
import Validation from './Components/validate';



function App() {

// web form handler
  const [values,setValues] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassowrd:""
  })

  const onChangeHandler =(e)=>{
    setValues({
      ...values,
      [e.target.name] : e.target.value,
    });
  }

  const[errors, setErrors] = useState({})
  const onSubmitHandler =(e)=>{
    e.preventDefault();
    setErrors(Validation(values));
};


  return (
   <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <SignIn/>
        </Route>
        <Route exact path="/signup">
          <SignUp onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} errors={errors }values={values}/>
        </Route>
        <Route exact path="/forgetpassword">
          <ForgotPassword/>
        </Route>
        <Route exact path="/sent">
          <Sent/>
        </Route>
      </Switch>
      </div>
   </Router>
  );
}

export default App;
