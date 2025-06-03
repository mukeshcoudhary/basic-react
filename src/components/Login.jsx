import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Tost from "./Tost";

const username1 = "mukesh";
const userpassword = 12345;

function Login({ setToken }) {
  const [Username, setname] = useState("");
  const [Userpass, setpass] = useState("");
  const [err, seterr] = useState("");

  const showerr = (msg) => {
    seterr(msg);
    setTimeout(() => {
      seterr(null);
    }, 3000);
  };

  // const notify1 = () => toast.success("Welcome!", { autoClose: 1000 });
  // const notify2 = () => toast.error("Check Name And Password", { autoClose: 1000 });

  function getusername(e) {
    setname(e.target.value);
  }

  function getuserpass(e) {
    setpass(e.target.value);
  }

  function submitvalue(e) {
    e.preventDefault();

    setname("");
    setpass("");

    if (Username == username1 && Userpass == userpassword) {
      // notify1();
      // props.setToastMsg("Login Successfull")
      setToken(true);
      // props.setlogin(!props.isLoggin)
    } else {
      // notify2();
      showerr("Plese check your password and name");
    }
  }

  return (
    <>
      {err && <Tost err={err} />}
      <div className="flex w-100 h-[100px] justify-center align-middle mt-40">
        <div className="bg-gray-800 flex justify-center p-5 w-50 m-auto mt-40 rounded-4 shadow-emerald-800 shadow-lg">
          <form>
            <label className="text-white" htmlFor="">
              {" "}
              <h6>User Name :-</h6>
            </label>
            <br />
            <input
              className="outline-0 border-2 ps-2 rounded-2 text-white"
              onChange={getusername}
              value={Username}
              type="text"
              placeholder="Enter Your Name"
            />
            <br />

            <label className="text-white" htmlFor="">
              {" "}
              <h6>Password :-</h6>
            </label>
            <br />
            <input
              className="outline-0 border-2 ps-2 rounded-2 text-white"
              onChange={getuserpass}
              value={Userpass}
              type="password"
              placeholder="Enter Your Password"
            />
            <br />

            <button
              className="bg-white p-1 mt-3 rounded-1"
              onClick={submitvalue}
            >
              Login <i className="fa-solid fa-right-to-bracket"></i>{" "}
              {/* ✅ class → className */}
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
