import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
const RequierAuth = ({ children }) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!loading && user === null) {
            navigate("/signup");
        }
    }, [user, loading, navigate]);

    if (loading) return <div>Loading...</div>;

    return children;
};

export default RequierAuth;