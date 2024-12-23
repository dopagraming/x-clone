import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import XSvg from "../../../components/svgs/X.jsx";
import {
  setFormData,
  toggleCreateAccountModal,
  toggleSignInModal,
  setAuthenticated,
} from "../../../rtk/features/authSlice";
import SignInModal from "./SignInModal";
import CreateAccountModal from "./CreateAccountModal";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase.js";
import { setUser } from "../../../rtk/features/userSlice.js";
const SignUpPage = () => {
  const [authPage, setAuthPage] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    dispatch(setFormData({ [e.target.name]: e.target.value }));
  };
  const isCreateAccountModalOpen = useSelector(
    (state) => state.auth.isCreateAccountModalOpen
  );
  const isSignInModalOpen = useSelector(
    (state) => state.auth.isSignInModalOpen
  );
  const signWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(setUser(result.user));
        // localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/");
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="bg-black">
      <div className="max-w-screen-xl mx-auto flex h-screen px-10 bg-black">
        <div className="flex-1 hidden lg:flex items-center justify-center">
          <XSvg className="lg:w-2/3 fill-white" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Happening now
          </h1>
          <br />
          <h1 className="text-3xl font-extrabold text-white text-left">
            Join today.
          </h1>
          <div className="flex flex-col lg:w-2/3 gap-4 mt-8">
            <button
              className="btn rounded-full bg-white text-black p-2 w-full flex items-center justify-center gap-2 hover:bg-gray-200 transition duration-200"
              onClick={() => signWithGoogle()}
            >
              <FcGoogle className="w-6 h-6" />
              Sign in with Google
            </button>

            <button className="btn rounded-full bg-black text-white py-4 w-full flex items-center justify-center gap-2">
              <FaApple className="w-6 h-6" />
              Sign up with Apple
            </button>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-gray-400">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <button
              className="btn rounded-full bg-blue-500 text-white py-2 w-full hover:bg-blue-600 transition duration-200"
              onClick={() => dispatch(toggleCreateAccountModal())}
            >
              Create Account
            </button>
          </div>
          <div className="flex flex-col lg:w-2/3 gap-2 mt-4 text-center">
            <p className="text-white text-lg">Already have an account?</p>
            <button
              className="btn rounded-full text-blue-500 btn-outline w-full"
              onClick={() => dispatch(toggleSignInModal())}
            >
              Sign In
            </button>
          </div>
        </div>
        <CreateAccountModal
          isOpen={isCreateAccountModalOpen}
          onClose={() => dispatch(toggleCreateAccountModal())}
          formData={formData}
          handleInputChange={handleInputChange}
        />
        <SignInModal
          isOpen={isSignInModalOpen}
          onClose={() => dispatch(toggleSignInModal())}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default SignUpPage;
