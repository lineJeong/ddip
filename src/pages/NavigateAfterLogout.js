import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useAuthValue } from "../@store/use-auth";

function NavigateAfterLogout() {
  const { isLoggedIn } = useAuthValue();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return <Outlet />;
}

export default NavigateAfterLogout;
