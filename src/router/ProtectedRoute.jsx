import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import LoadingSpin from "../components/shared/LoadingSpin";

const ProtectedRoute = () => {
  const { user, isLoading } = useSelector((state) => state.auth);
  console.log(isLoading);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isLoading) {
      navigate("/login");
    }
  }, [isLoading, navigate, user]);

  return isLoading ? (
    <LoadingSpin className="flex justify-center items-center h-screen " />
  ) : (
    <Outlet />
  );
};

export default ProtectedRoute;
