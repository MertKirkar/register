import React from "react";
import TextInput from "./TextInputs";
import { useNavigate } from "react-router";
export default function SignUp() {

const navigate = useNavigate();

  return (
    <div>
      <div className="signBody d-flex justify-content-center align-items-center">
        <div className="d-flex ">
          <div className="d-flex flex-column justify-content-center align-items-center left-side">
            <h3 className="mt-3">Are You Ready To Register ?</h3>
            <span className="mt-3">Do you have existing account ?</span>
            <button className="w-25 mt-4 btn btn-danger border-0" onClick={()=>navigate("/login")}>Sign In</button>
          </div>
          <div className="d-flex flex-column rightSight d-flex justify-content-center ps-5">
          <TextInput placeholder="Username"  className="d-flex flex-column mt-2 w-75" label="Username" id="Username" type="text" />
          <TextInput placeholder="E-mail" className="d-flex flex-column mt-2 w-75" label="E-mail" id="email" type="email" />
          <TextInput placeholder="*****" className="d-flex flex-column mt-2 w-75" label="Password" id="password" type="password" />
          <TextInput placeholder="*****" className="d-flex flex-column mt-2 w-75" label="Password Confirm" id="password" type="password" />
          <button className="w-75 mt-5 rigtButton">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
