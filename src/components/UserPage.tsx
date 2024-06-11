import { useLocation } from "react-router-dom";
import "./userPage.css";

const UserPage = () => {
  const { state } = useLocation();
  return <h1 className="greeting">Welcome User {state}</h1>;
};

export default UserPage;
