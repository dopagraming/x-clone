import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import XSvg from "../../../components/svgs/X";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthenticated, setUser } from "../../../rtk/features/authSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase";

const SignInModal = ({ isOpen, onClose, formData, handleInputChange }) => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(setUser(result.user));
        localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/");
      })
      .catch((error) => alert(error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const identifier = formData.identifier;
      let res;
      if (identifier.includes("@")) {
        res = await axios.get(
          `https://jsonplaceholder.typicode.com/users?email=${identifier}`
        );
      } else if (/^\d+$/.test(identifier)) {
        res = await axios.get(
          `https://jsonplaceholder.typicode.com/users?phone=${identifier}`
        );
      } else {
        res = await axios.get(
          `https://jsonplaceholder.typicode.com/users?username=${identifier}`
        );
      }
      const data = res.data;
      if (data.length === 0) {
        setError("Email, phone number, or username not found");
        return;
      }
      const user = data[0];
      toast.success("Signed in successfully");
      localStorage.setItem("authToken", "mockToken");
      localStorage.setItem("userProfile", JSON.stringify(user));
      dispatch(setAuthenticated(true));
      dispatch(setUser(user));
      navigate("/");
      onClose();
    } catch (error) {
      toast.error("Failed to sign in");
    }
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-[#5b708366] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-lg h-auto">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-white hover:text-gray-300">
            &times;
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <XSvg className="w-12 h-12 fill-current text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Sign in to X
        </h2>
        <button
          className="btn rounded-full bg-white text-black py-2 w-full flex items-center justify-center gap-2 mb-4"
          onClick={() => signWithGoogle()}
        >
          <FcGoogle className="w-6 h-6" />
          Sign in with Google
        </button>
        <button className="btn rounded-full bg-black text-white py-2 w-full flex items-center justify-center gap-2 mb-4">
          <FaApple className="w-6 h-6" />
          Sign in with Apple
        </button>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-600" />
          <span className="mx-4 text-gray-400">or</span>
          <hr className="flex-grow border-t border-gray-600" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className={`w-full border ${
              error ? "border-red-500" : "border-white"
            } rounded-lg px-3 py-4 outline-none bg-black text-white`}
            placeholder="Phone, email, or username"
            name="identifier"
            onChange={(e) => {
              handleInputChange(e);
              setError("");
            }}
            value={formData.identifier}
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="rounded-full w-full bg-blue-500 text-white py-2 hover:bg-blue-600 transition duration-200"
          >
            Next
          </button>
          <button
            type="button"
            className="rounded-full w-full bg-black text-white border border-white py-2 hover:bg-gray-800 transition duration-200"
          >
            Forgot password?
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
