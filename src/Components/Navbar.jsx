import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Navbar() {
  const [auth, toggleAuth] = useContext(AuthContext);
  console.log(auth);
  if (auth) {
    return (
      <div style={{ background: "skyblue", padding: "10px" }}>
        <button onClick={toggleAuth}>Logout</button>
      </div>
    );
  } else {
    return (
      <div style={{ background: "skyblue", padding: "10px" }}>
        <button onClick={toggleAuth}>Login</button>
      </div>
    );
  }
}
