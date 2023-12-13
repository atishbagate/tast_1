import { useEffect } from "react";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser,selectUser,resetUser } from "./features/user/userSlice";
import { Toaster } from 'react-hot-toast';

export default function App() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
  useEffect(() => {
  
    const data = {
      userId: id,
      token: token,
    };
    if (id !== null) dispatch(setUser(data));
  },[]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}
