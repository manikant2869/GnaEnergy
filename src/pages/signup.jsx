import { Link , useNavigate} from "react-router-dom";
import { useState } from "react";
import user from "../services/user";
export default function SignUp() {
   const navigate = useNavigate();
  const [signupField,setSignUpField] = useState({
    first_name : "",
    last_name : "",
    username : "",
    password : ""
  })
  function handleSignup(e){
    const target = e.target
    const name = target.name
    const value = target.value
    const newSignUpField = {...signupField}
    newSignUpField[name] = value;
    console.log(newSignUpField);
    setSignUpField(prev => newSignUpField)
  }
  const [errorMessage,updateErrorMessage] = useState({message : ""}); 
  function handleSignUpSubmit(e){
    e.preventDefault();
    if(signupField.first_name == ""){
      updateErrorMessage(prev =>  { return { "message" :  "please enter your First Name" } })
      return;
    }else if(signupField.last_name == ""){
      updateErrorMessage(prev =>{ return { "message" :  "please enter your Last Name" } })
      return;
    }else if(signupField.username == ""){
      updateErrorMessage(prev => {return { "message" :  "please enter your UserName" }})
      return;
    }else if(signupField.password == ""){
      updateErrorMessage(prev => {return { "message" :  "please enter your Password" }});
      return;
    }else{
      user.add(signupField) 
      navigate("/login")
    }
   
  }
  
  return (
    <>
     <div>
  <nav className="nav">
    <div className="nav_elements">
      <Link to="/" >Home </Link>
      <a>About</a>
      <a>Contact</a>
    </div>
  </nav>
  <main className="main">
    <h1 className="signup_heading">Sign Up</h1>
    <div className="signup">
      <form id="signup_form" method="post" onSubmit={(e)=>handleSignUpSubmit(e)}>
        <div>
          <label for="first_name">First Name :</label>
          <br />
          <input id="first_name" name="first_name" type="text" onChange={(e)=> handleSignup(e)} />
        </div>
        <div>
          <label for="last_name">Last Name :</label>
          <br />
          <input id="last_name" name="last_name" type="text" onChange={(e)=> handleSignup(e)} />
        </div>
        <div>
          <label for="username">username :</label>
          <br />
          <input id="username" name="username" type="text" onChange={(e)=> handleSignup(e)} />
        </div>
        <div>
          <label for="password">Password :</label>
          <br />
          <input id="password" name="password" type="password" onChange={(e)=> handleSignup(e)} />
        </div>
        <div>
          <button id="signup_btn" type="submit">
            Sign Up
          </button>
        </div>
        <div>
          <p style={{"color" : "green"}}>
            {errorMessage.message}
          </p>
        </div>
        <div>
          <p>
            Already have an account, <Link to="/login" >login here </Link>
          </p>
        </div>
      </form>
    </div>
  </main>
</div>

    </>
  );
}
