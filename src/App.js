import { RouterProvider, useNavigate } from "react-router-dom";
import { router } from "./Route";
import { SidebarProvider } from "./SidebarContext";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { setUser } from "./rtk/features/userSlice";
const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(setUser(userAuth));
      } else {
        dispatch(setUser(null));
      }
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <SidebarProvider> <RouterProvider router={router} /></SidebarProvider>

  );
};
export default App;