import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";

// import { useEffect } from "react";
// import { api } from "../services/api";
import { USER_ROLE } from "./../utils/roles";
import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";
import { CustomerRoutes } from "./customer.routes";

export function Routes() {
  const { signOut, user } = useAuth();
  console.log("user :>> ", user);
  function AccessRoute() {
    if (!user) return <AuthRoutes />;
    console.log("first");
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
    }
  }

  // useEffect(() => {
  //   api.get(`/users/validated`).catch(() => {
  //     signOut();
  //   });
  // }, [signOut]);

  return <BrowserRouter>{<AccessRoute />}</BrowserRouter>;
}
