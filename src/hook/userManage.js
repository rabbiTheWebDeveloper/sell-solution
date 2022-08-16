import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
const axios = require("axios");

const userManage = () => {
  const history = useHistory();
  const [user, setUser] = useState();

  console.log(history);

  const registerUser = (data) => {
    axios.defaults.withCredentials = true;
    axios.get("http://10.10.10.252/sanctum/csrf-cookie");

    axios.post("http://10.10.10.252/api/register", data).then((res) => {
      history.push("/dashboard");
      // setUser(res.data.data);

      if (res.data.success == true) {
        let tokenFrom = res.data.data.token;
        let userName = res.data.data.name;
        localStorage.setItem("token", tokenFrom);
        localStorage.setItem("token_name", userName);
        // const { token } = res.data;
        // localStorage.setItem("token", res.data.token);
        setUser(res.data.data);
        swal({
          title: res.data.message,
          // text: res.data.message,
          icon: "success",
        });
      } else {
        swal({ title: res.data.message, icon: "success" });
      }
    });
  };
  // const loginUser = (data) => {
  //   axios.defaults.withCredentials = true;
  //   axios.get("http://10.10.10.252/sanctum/csrf-cookie");
  //   axios.post("http://10.10.10.252/api/login", data).then((res) => {
  //     if ((res.data.success = true)) {
  //       let tokenFrom = res.data.data.token;
  //       let userName = res.data.data.name;
  //       localStorage.setItem("token", tokenFrom);
  //       localStorage.setItem("token_name", userName);
  //       // console.log(history);
  //       history.push("/dashboard")
  //       swal({
  //         title: res.data.message,
  //         // text: res.data.message,
  //         icon: "success",
  //       });

  //       return res.data;
  //     } else {
  //       swal({
  //         title: res.data.message,
  //         // text: res.data.message,
  //         icon: "success",
  //       });
  //     }

  //     // setUser(res.data.data);
  //   });
  // };
  // console.log(user)

  return {
    user,
    registerUser,
   
    
  };
};

export default userManage;
