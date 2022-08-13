import { useState } from "react";
import { useHistory } from "react-router-dom";
const axios = require("axios");


const userManage = () => {
  const [user, setUser] = useState({});
  let history = useHistory();


  const registerUser = (data) => {
    axios.defaults.withCredentials = true;
    axios.get("http://10.10.10.252/sanctum/csrf-cookie");

    axios.post("http://10.10.10.252/api/register", data).then((res) => {
      history.push("/dashboard");
      setUser(res.data.data);

      let tokenFrom = res.data.data.token;
      let userName = res.data.data.name;
      localStorage.setItem("token",tokenFrom);
      localStorage.setItem("user",res.data.data);
      // const { token } = res.data;
      // localStorage.setItem("token", res.data.token);
      // console.log(res.data);
      // console.log(tokenFrom);
    });
  };
  const loginUser = (data) => {
    axios.defaults.withCredentials = true;
    axios.get("http://10.10.10.252/sanctum/csrf-cookie");
    axios.post("http://10.10.10.252/api/login", data).then((res) => {
      // history.push("/dashboard");
      let tokenFrom = res.data.data.token;
      let userName = res.data.name;
      // localStorage.setItem("token", tokenFrom);
      // localStorage.setItem("user",res.data.data);
  
      setUser(res.data.data);
      console.log(res.data.data);
      
    });
  };

  return {
    user,
    registerUser,
    loginUser,
  };
};

export default userManage;
