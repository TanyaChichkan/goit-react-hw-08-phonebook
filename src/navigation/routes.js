import { lazy } from "react";

export const mainRoutes = [
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
    },

    {
      path: "/",
      name: "Home",
      exact: true,
      component: lazy(() => import("../pages/Homepage")),
      isPrivate: false,
      restricted: false,
    },

    {
      path: "/contacts",
      name: "Contacts",
      exact: true,
      component: lazy(() => import("../pages/ContactsPage")),
      isPrivate: true,
      restricted: false,
    }

    
]