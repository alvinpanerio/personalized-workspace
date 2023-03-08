import { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import Home from "./Home";
import LoadingProvider from "../context/LoadingContext";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:4000/forgot", {
          email,
        })
        .then((res) => {
          if (res.status === 200) {
            setMessage(
              "Forgot email has been sent successfully, please check your mail!"
            );
          }
        })
        .catch((err) => {
          setError(`${err.response.data.error}`);
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setMessage("");
    setError("");
  };

  return (
    <div className="pr-20 flex flex-wrap justify-between pt-40 container mx-auto">
      <div className="-mt-40 w-[96px]">
        <Home addClass={"ml-[300px] mt-36"} />
      </div>
      <Card>
        <form
          onSubmit={handleSubmit}
          className="text-[#102c54] text-lg font-medium"
        >
          <p className="text-[#102c54] text-3xl font-bold mb-3">
            Forgot Password
          </p>
          <div className="flex flex-col">
            <label htmlFor="email" className="my-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmail}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          {error && <div className="text-red-600 mt-3">{error}</div>}
          {message && <div className="text-green-600 mt-3">{message}</div>}
          <button
            type={"submit"}
            className="inline-flex items-center text-white 
              bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-base px-5 py-2.5 text-center w-full mt-3 flex justify-center"
          >
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
}

export default ForgotPassword;
