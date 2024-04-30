import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Login = () => {
  const default_data = {
    username: "",
    password: "",
  };
  // const { storeToken } = useAuth();
  const { token, setToken, setauthUser, setauthDetails } = useAuth();
  const [data, setData] = useState(default_data);
  const [fieldsFilled, setFieldsFilled] = useState(false);
  const navigate = useNavigate();
  const [isClick, setClick] = useState(false);
  const handleDataChange = (name) => (e) => {
    setData({
      ...data,
      [name]: e.target.value,
    });

    if (name === "username" || name === "password") {
      const fieldsFilled = data.username != "" && data.password != "";
      setFieldsFilled(fieldsFilled);
    }
  };

  const SubmitContact = async (e) => {
    const fetchOptions = {
      method: "POST", // Specify the HTTP method as 'POST'
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(data), // Convert the data object to a JSON string
    };

    e.preventDefault();
    if (data.username != "" && data.password != "") {
      fetch(`${import.meta.env.VITE_APP_FETCH_URL}/users/login`, fetchOptions)
        .then((response) => {
          if (!response.ok) {
            setClick((isClick) => !isClick);
            throw new Error("Wrong Password");
          }
          return response.json();
        })
        .then((data) => {
          setToken(data.data.accessToken);
          setauthUser(data.data.user._id.trim());
          localStorage.setItem("authDetails", JSON.stringify(data.data));
          setauthDetails(JSON.stringify(data.data));
          localStorage.setItem("accessToken", data.data.accessToken);
          localStorage.setItem("authUser", data.data.user._id.trim());
          setData(default_data);
          toast.success("Login Successfull");
          navigate("/");
        })
        .catch((error) => {
          console.error("Fetching Error: ", error);
          toast.error(`${error} or Wrong Username`);
        });
    } else {
      toast("Please fill all the details");
      // alert("Please complete the whole procedure");
    }
  };

  useEffect(() => {
    if (token) {
      setTimeout(() => {
        navigate("/"); // Assuming '/' is your home route
      }, 1000); // Redirects after 3000 milliseconds
    }
  }, [token, navigate]);

  return (
    <>
      {token ? (
        <div className="mx-auto w-full max-w-lg flex h-screen justify-center items-center">
          <h1 className="text-3xl font-bold">You Have Already Logged In!</h1>
        </div>
      ) : (
        <div className=" w-full flex flex-col items-center bg-cover bg-orange-600">
          <div className="flex flex-col items-center w-full max-sm:h-[40vh] md:h-[50vh]  drop-shadow-2xl p-6 bg-orange-100  relative top-[20vh]">
            <div className="flex justify-center items-center">
              <form onSubmit={SubmitContact}>
                <div className="flex flex-col gap-3 w-full mt-6 lg:w-[20vw]">
                  <div className="text-[3vw] md:text-[2xl] font-extralight mt-6 flex justify-center">
                    WRITE.CONNECT.ACHIEVE
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.5,
                      stiffness: 500,
                      damping: 300,
                    }}
                    className="flex justify-center  shadow-xl font-extralight mt-6 rounded-3xl"
                  >
                    <input
                      type="text"
                      value={data.username}
                      onChange={handleDataChange("username")}
                      placeholder="Email/Username"
                      className=" p-2 outline-none border-none w-full rounded-3xl"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.5,
                      stiffness: 500,
                      damping: 300,
                    }}
                    className="flex justify-center rounded-3xl shadow-lg font-extralight mt-6"
                  >
                    <input
                      type="password"
                      value={data.password}
                      onChange={handleDataChange("password")}
                      placeholder="Password"
                      className=" p-2 outline-none border-none w-full rounded-3xl"
                    />
                  </motion.div>
                  <div className="flex justify-center rounded-3xl  font-extralight mt-6 ">
                    <button
                      type="submit"
                      className="max-sm:w-[20vw] lg:w-[10vw] text-xl shadow-xl flex justify-center bg-orange-400 hover:bg-orange-200 rounded-md p-2 transition-all ease-in duration-300 text-white hover:text-orange-500"
                    >
                      LOGIN
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="text-sm font-extralight mt-2">
              Not a user?{" "}
              <span className="cursor-pointer  text-red-500 font-bold">
                <Link to="/register">Click Here</Link>
              </span>{" "}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
