import { Link,useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const user = JSON.parse( window.localStorage.getItem("user") );
  function handleSelect(e){
    const selected = e.target.value;
    if(selected === "logout"){
      window.localStorage.clear();
      navigate("/");
    }
  }
  return (
    <>
      <div>
  <nav className="nav">
    <div className="nav_elements">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
    <div className="second_nav_elements">
      {user? <>
      <div><select onChange={(e) => handleSelect(e)} ><option></option><option value="logout">logout</option></select></div>
      <div className="user_name">{user.first_name } {user.last_name}</div>
      
       </> :
      <div className="signup_page" id="login_page">
      <Link to="/login" className="login" >
        Login
      </Link>
      </div>
       }
      
      {/* <div className="signup_page" id="login_page"> */}
        {/* {user ? 
        <div style={{ "background-color" : "red"}}>{user.first_name } {user.last_name}</div> :<Link to="/login" className="login" >
        Login
      </Link> } */}
      
      {/* <a href className="logout">
        Logout
      </a> */}
      {/* </div> */}
    </div>
    {/* <div>
      <h1 id="display_name" />
    </div> */}
  </nav>
  <section id="home">
    <h1>Welcome to the world of happiness</h1>
  </section>
 
</div>

    </>
  );
}
