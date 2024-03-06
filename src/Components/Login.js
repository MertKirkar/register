import "bootstrap/dist/css/bootstrap.min.css"
import {useNavigate} from "react-router-dom"
import TextInput from './TextInputs';


function Login() {

  const navigate = useNavigate ()
  return (
    <div className="d-flex justify-content-center align-items-center signBody">
    <div className="d-flex" > 
    <div className="d-flex flex-column left-side justify-content-center ps-5">
    <h3>Sign In</h3>
      <div className="mt-3">
        <TextInput placeholder="Username" className="w-75 mt-2" label="Username" type="text" id="Username"/>
        <TextInput placeholder="Password" className="w-75 mt-2" label="Password" type="password" id="Password"/>
        <button className="w-75 mt-3 rounded-3 border-0 btn btn-primary">Sign In</button>
    </div>

    <div className="d-flex justify-content-between w-75 mt-4">
      <div>
        <input type="checkbox"/>
        <span className="ms-3">Remember Me</span>
      </div>
      <span>Forgot Password ?</span>


    </div>
    </div>
    <div className="rightSight d-flex flex-column justify-content-center align-items-center">
      <h3 className="mb-3">Welcome To Login</h3>
      <span>Don't have account ?</span>
      <button onClick={()=> navigate("/signup")} className="rigtButton mt-4">Sign Up</button>
    </div>
    </div>

    
        


    </div>
  );
}

export default Login;
