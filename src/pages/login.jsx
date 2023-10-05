import { Link , useNavigate} from "react-router-dom";
import { useState } from "react";
import user from "../services/user";
export default function Login() {
  const navigate = useNavigate()
  const [siginField, setSignInField] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, updateErrorMessage] = useState({ message: "" });
  async function handleSubmit(e) {
    e.preventDefault();
    if (siginField.user_name == "") {
      updateErrorMessage((prev) => {
        return { message: "please enter your First Name" };
      });
      return;
    } else if (siginField.password == "") {
      updateErrorMessage((prev) => {
        return { message: "please enter your Last Name" };
      });
      return;
    } else {
      const result = await  user.loginVerify(siginField)
      if(result.verified){
        window.localStorage.setItem("user",JSON.stringify(result.finduser))
        navigate("/");
      }else{
        window.confirm(result.message)
      }
    
    }
  }
  function handleSignin(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    const newSignInField = { ...siginField };
    newSignInField[name] = value;
    setSignInField((prev) => newSignInField);
  }
  return (
    <>
      <nav class="nav">
        <div class="nav_elements">
          <Link to="/">Home</Link>
          <a>About</a>
          <a>Contact</a>
        </div>
      </nav>

      <main class="main">
        <h1 class="login_heading">Login</h1>
        <div class="signup">
          <form id="login_form" method="post" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label for="username">username :</label>
              <br />
              <input
                id="username"
                name="username"
                type="text"
                onChange={(e) => handleSignin(e)}
              />
            </div>
            <div>
              <label for="password">Password :</label>
              <br />
              <input
                id="password"
                name="password"
                type="text"
                onChange={(e) => handleSignin(e)}
              />
            </div>
            <div>
              <button id="login_btn" type="submit">
                Login
              </button>
            </div>
            <div>
              <p style={{ color: "green" }}>{errorMessage.message}</p>
            </div>
            <div>
              <p>
                Do not have an account, <Link to="/signup">Sign Up here</Link>
              </p>
            </div>
          </form>
          <div class="signinDiv"></div>
          <div class="g-signin2" data-onsuccess="onSignIn"></div>
        </div>
      </main>
    </>
  );
}
