import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Body() {
  const [auth] = useContext(AuthContext);
  const [token, setToken] = useState("");
  const getToken = () => {
    var data = JSON.stringify({
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    });

    var config = {
      method: "post",
      url: "https://reqres.in/api/login",
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        const { data } = response;
        setToken(data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  if (auth) {
    getToken();
    return <div>Logged in. Your token is {token}</div>;
  } else {
    return <div>Please Log in</div>;
  }
}
