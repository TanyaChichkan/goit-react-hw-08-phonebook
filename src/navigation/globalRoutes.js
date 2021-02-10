import { lazy } from "react";

export const globalRoutes = [
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