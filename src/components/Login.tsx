import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const userDB = {
    "John Doe": {
      type: "admin",
      password: "johndoe@123",
    },
    Nick: {
      type: "user",
      password: "Nick@123",
    },
    guest: {
      type: "user",
      password: "guest@123",
    },
  };

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("guest");

  const navigate = useNavigate();

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (!user || !password || !userType) {
      alert("Fill all the Field");
      return;
    }
    if (!userDB[user]) {
      alert("user not found");
      return;
    }
    if (userDB[user].password !== password) {
      console.log("user : ", password);
      alert("password is incorrect");
      return;
    }
    if (userDB[user].type !== userType) {
      alert("user type mismatch");
      return;
    }
    navigate("/user", { state: user });
  };

  return (
    <div className="outer-box">
      <div className="inner-box">
        <header className="login-header">
          <h1>Login </h1>
        </header>

        <main className="login-body">
          <form onSubmit={(e) => submitHandler(e)}>
            <div>
              <label htmlFor="user"> User Name</label>
              <input
                type="user"
                id="user"
                placeholder="user name"
                onChange={(e) => setUser(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="Password"> Password</label>
              <input
                type="password"
                id="password"
                placeholder="At least 8 character"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="user-type">
              <label htmlFor="userType"> User Type: </label>
              <select
                name="userType"
                id="userType"
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="guest"> Guest</option>
                <option value="admin"> Admin</option>
                <option value="user"> User</option>
              </select>
            </div>
            <div>
              <input type="submit" id="submit" value="Login" />
            </div>
          </form>
        </main>
        <footer className="login-footer">
          Don't have an Account? <a href="#"> Sign Up</a>
        </footer>
      </div>
      <div className="circle c1"> </div>
      <div className="circle c2"> </div>
    </div>
  );
};

export default Login;
