import { lazy } from "react";

export const authRoutes = [
    {
      path: "/signup",
      name: "Sign Up",
      exact: true,
      component: lazy(() => import("../components/authform/AuthForm")),
      isPrivate: false,
      restricted: true,
    },
    {
      path: "/signin",
      name: "Sign In",
      exact: true,
      component: lazy(() => import("../components/authform/AuthForm")),
      isPrivate: false,
      restricted: true,
    }
];