import { Navigate, Outlet } from "react-router-dom";

const PrivatRoute = () => {
  const logg = true;

  return logg ? <Outlet /> : <Navigate to="/" />;
};
export default PrivatRoute;
