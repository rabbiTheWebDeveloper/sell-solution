import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import LoginBanner from "../../components/LoginBanner/LoginBanner";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import userManage from "../../hook/userManage";
const axios = require("axios");

const Register = () => {
  const {registerUser} =userManage()
  const [user, setUser] = useState("");
  const [registerData, setRegisterData] = useState({});
  const [nameErr, setNameErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [emailErr, setEmailErr] = useState(" ");
  const [passwordErr, setPasswordErr] = useState("");
  const [passwordConfErr, setPasswordConfErr] = useState("");
  const [showPass, setShowPass] = useState("");
  const [showCoPass, setCoShowPass] = useState(" ");
  let history = useHistory();
  const handelOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegData = { ...registerData };
    newRegData[field] = value;
    setRegisterData(newRegData);
    // console.log(registerData);
  };
  const handelRegSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: registerData.name,
      email: registerData.email,
      password: registerData.password,
      password_confirmation: registerData.password_confirmation,
    };
    console.log(data);

    if (
      !registerData.name &&
      !registerData.password &&
      !registerData.phone &&
      !registerData.rePassword
    ) {
      // setEmailErr("Enter your Email Address");
      setNameErr("Enter Your Name");
      setPhoneErr("Enter Your Phone");
      setEmailErr("Enter Your Email");
      setPasswordErr("Enter your Password");
      setPasswordConfErr("Enter your Confirm Password");
    } else if (!registerData.name) {
      // setNameErr("");
      // setPhoneErr("");
      // setEmailErr("Enter Your Email");
      // setPasswordErr("Enter your Password");
      // setPasswordConfErr("Enter your Confirm Password");

      setNameErr("Enter Your Name");
      setPhoneErr("Enter Your Phone");
      setEmailErr("Enter Your Email");
      setPasswordErr("Enter your Password");
      setPasswordConfErr("Enter your Confirm Password");

      setNameErr("Enter Your name");
    } else if (!registerData.phone) {
      setNameErr("");
      setPhoneErr("Enter Your Phone");
      setEmailErr("Enter Your Email");
      setPasswordErr("Enter your Password");
      setPasswordConfErr("Enter your Confirm Password");
    } else if (!registerData.email) {
      setNameErr("");
      setPhoneErr("");
      setEmailErr("Enter Your Email");
      setPasswordErr("Enter your Password");
      setPasswordConfErr("Enter your Confirm Password");
    } else if (!registerData.password) {
      setNameErr("");
      setPhoneErr("");
      setEmailErr("");
      setPasswordErr("Enter your Password");
      setPasswordConfErr("Enter your Confirm Password");
    } else if (!registerData.confirm_password) {
      setNameErr("");
      setPhoneErr("");
      setEmailErr("");
      setPasswordErr("");
      setPasswordConfErr("Enter your Confirm Password");
    } else {
      setNameErr("");
      setPhoneErr("");
      setEmailErr("");
      setPasswordErr("");
      setPasswordConfErr("");
    }

    
    registerUser(data)

    // axios.defaults.withCredentials = true;
    // axios.get("http://10.10.10.252/sanctum/csrf-cookie");

    // axios.post("http://10.10.10.252/api/register", data).then((res) => {
    //   // history.push("/dashboard");
    //   setUser(res.data);

    //   let tokenFrom = response.data.data.token;
    //   let userName = response.data.data.name;
    //   localStorage.setItem("users", userName);
    //   // const { token } = res.data;
    //   // localStorage.setItem("token", res.data.token);
    //   console.log(res.data);
    //   console.log(tokenFrom);
    // });

    // axios.defaults.withCredentials = true;
    // const response = axios
    //   .get(apiUrl("sanctum/csrf-cookie", "backend-non-api-route"))
    //   .then((response) => {
    //     axios.post(
    //       apiUrl("http://10.10.10.252/api/register", "backend-non-api-route"),
    //       registerData.name,
    //       registerData.email,
    //       registerData.password,
    //       registerData.password_confirmation,
    //       {
    //         xsrfHeaderName: "X-XSRF-TOKEN", // change the name of the header to "X-XSRF-TOKEN" and it should works
    //         withCredentials: true,
    //       }
    //     );
    //   });
    // console.log(response);

    // axios
    //   .post(
    //     "http://10.10.10.252/api/register",
    //     registerData.name,
    //     registerData.email,
    //     registerData.password,
    //     registerData.password_confirmation
    //   )
    //   .then(({ data }) => {
    //     if (data.status === "success") {
    //       console.log(data);
    //     } else {
    //       console.log("error");
    //     }
    //   });
  };
  const handelPasswordShow = () => {
    setShowPass(!showPass);

    // setCoShowPass(!showCoPass)
  };
  const handelConfirmPasswordShow = () => {
    setCoShowPass(!showCoPass);
  };
  return (
    <section id="login">
      <div className="container">
        <div className="row d_flex d_justify">
          {/* left */}
          <div className="col-lg-6">
            <div className="left_login register">
              <div className="img">
                <img src="frontend_assets/images/login_logo.png" alt="" />
              </div>
              <div className="text">
                <h3>Welcome To </h3>
                <p>
                  The Best Business 360 Solution For Your Business, Just Login
                  &amp; You’re Ready To Go !
                </p>
                <div className="form_part">
                  <form onSubmit={handelRegSubmit}>
                    {/* Full Name */}
                    <div className="custome_input">
                      <label>
                        Full Name <span className="text-danger">*</span>{" "}
                      </label>
                      <input
                        onChange={handelOnChange}
                        type="text"
                        name="name"
                        placeholder="Enter full name here"
                      />
                      <p className="text-danger float-start">{nameErr}</p>
                    </div>
                    {/* Phone Number  */}
                    <div className="custome_input">
                      <label>
                        Phone Number <span className="text-danger">*</span>{" "}
                      </label>
                      <input
                        onChange={handelOnChange}
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                      />
                      <p className="text-danger float-start">{phoneErr}</p>
                    </div>
                    {/* //Email */}
                    <div className="custome_input">
                      <label>
                        Email <span className="text-danger">*</span>{" "}
                      </label>
                      <input
                        onChange={handelOnChange}
                        type="email"
                        placeholder="Enter your Email"
                        name="email"
                      />
                      <p className="text-danger float-start">{emailErr}</p>
                    </div>
                    {/* Password */}
                    <div className="custome_input">
                      <label>
                        Password <span className="text-danger">*</span>{" "}
                      </label>
                      <input
                        onChange={handelOnChange}
                        type={showPass ? "text" : "password"}
                        placeholder="Enter Password here"
                        name="password"
                      />
                      {showPass ? (
                        <div onClick={handelPasswordShow} className="eye">
                          <AiFillEye />
                        </div>
                      ) : (
                        <div onClick={handelPasswordShow} className="eye">
                          <AiFillEyeInvisible />
                        </div>
                      )}
                      <p className="text-danger float-start">{passwordErr}</p>
                    </div>
                    {/* E-mail Address  */}
                    <div className="custome_input">
                      <label>
                        Confirm Password <span className="text-danger">*</span>{" "}
                      </label>
                      <input
                        onChange={handelOnChange}
                        type={showCoPass ? "text" : "password"}
                        placeholder="Rewrite Password here"
                        name="password_confirmation"
                      />
                      {showCoPass ? (
                        <div
                          onClick={handelConfirmPasswordShow}
                          className="eye"
                        >
                          <AiFillEye />
                        </div>
                      ) : (
                        <div
                          onClick={handelConfirmPasswordShow}
                          className="eye"
                        >
                          <AiFillEyeInvisible />
                        </div>
                      )}
                      <p className="text-danger float-start">
                        {passwordConfErr}
                      </p>
                    </div>
                    {/* Submit */}
                    <div className="custome_input">
                      <button type="submit">Login</button>
                      <Link to="#" className="forgate_pass">
                        Forgot Password ?
                      </Link>
                    </div>
                    {/* Submit */}
                  </form>
                  <div className="custome_input">
                    <p>
                      Already Have An Account ?<a href="/login">Log In</a>
                    </p>
                    <p className="logInSocial">Login With Social Media</p>
                    <div className="logInSocialLink">
                      <Link to="#">
                        <svg
                          width={55}
                          height={55}
                          viewBox="0 0 55 55"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M54.0386 27.0194C54.0386 12.097 41.9417 8.7738e-05 27.0193 8.7738e-05C12.0969 8.7738e-05 0 12.097 0 27.0194C0 40.5055 9.88057 51.6835 22.7975 53.7104V34.8297H15.9372V27.0194H22.7975V21.0667C22.7975 14.295 26.8313 10.5545 33.0031 10.5545C35.9593 10.5545 39.0513 11.0822 39.0513 11.0822V17.7315H35.6443C32.2878 17.7315 31.2411 19.8143 31.2411 21.951V27.0194H38.7347L37.5368 34.8297H31.2411V53.7104C44.158 51.6835 54.0386 40.5055 54.0386 27.0194Z"
                            fill="#1877F2"
                          />
                          <path
                            d="M37.5366 34.8295L38.7345 27.0193H31.2409V21.9509C31.2409 19.8141 32.2876 17.7314 35.6441 17.7314H39.0512V11.0821C39.0512 11.0821 35.9591 10.5544 33.003 10.5544C26.8312 10.5544 22.7974 14.2949 22.7974 21.0666V27.0193H15.937V34.8295H22.7974V53.7103C24.173 53.9262 25.5829 54.0386 27.0191 54.0386C28.4554 54.0386 29.8653 53.9262 31.2409 53.7103V34.8295H37.5366Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                      <Link to="#">
                        <svg
                          width={52}
                          height={52}
                          viewBox="0 0 52 52"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M50.7133 26.7138C50.7133 24.8791 50.5486 23.115 50.2428 21.4214H25.874V31.43H39.7991C39.1992 34.6643 37.3763 37.4046 34.636 39.2393V45.7314H42.998C47.8906 41.2269 50.7133 34.5937 50.7133 26.7138Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M25.8741 52.0001C32.8601 52.0001 38.7171 49.6832 42.9981 45.7315L34.636 39.2394C32.3191 40.7919 29.3553 41.7092 25.8741 41.7092C19.135 41.7092 13.4309 37.1577 11.3963 31.042H2.75195V37.7458C7.00944 46.2019 15.7596 52.0001 25.8741 52.0001Z"
                            fill="#34A853"
                          />
                          <path
                            d="M11.3964 31.0418C10.8789 29.4894 10.5849 27.8311 10.5849 26.1257C10.5849 24.4204 10.8789 22.7621 11.3964 21.2096V14.5059H2.75208C0.94088 18.1114 -0.00159626 22.0908 2.02945e-06 26.1257C2.02945e-06 30.3009 0.999687 34.2526 2.75208 37.7456L11.3964 31.0418Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M25.8741 10.5423C29.6729 10.5423 33.0836 11.8478 35.7651 14.4117L43.1863 6.99052C38.7053 2.81536 32.8484 0.251465 25.8741 0.251465C15.7596 0.251465 7.00944 6.04964 2.75195 14.5058L11.3963 21.2096C13.4309 15.0939 19.135 10.5423 25.8741 10.5423Z"
                            fill="#EA4335"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-lg-6">
            <LoginBanner></LoginBanner>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
