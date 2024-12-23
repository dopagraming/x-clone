import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { setUser } from "../rtk/features/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const SignWithGoogle = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    signInWithPopup(auth, provider)
        .then((result) => {
            dispatch(setUser(result.user));
            localStorage.setItem("user", JSON.stringify(result.user));
            navigate("/");
        })
        .catch((error) => alert(error));
    return;
};
