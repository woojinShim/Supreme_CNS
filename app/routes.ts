import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("common/pages/home-page.tsx"),
  {
    path: "/company/about",
    file: "common/pages/company/about.tsx",
  },
  {
    path: "/products/manufactured",
    file: "common/pages/products/manufactured.tsx",
  },
  {
    path: "/products/imported",
    file: "common/pages/products/imported.tsx",
  },
  {
    path: "/products/new",
    file: "common/pages/products/new.tsx",
  },
  {
    path: "/support/installation",
    file: "common/pages/support/installation.tsx",
  },
  {
    path: "/support/maintenance",
    file: "common/pages/support/maintenance.tsx",
  },
  {
    path: "/support/training",
    file: "common/pages/support/training.tsx",
  },
  {
    path: "/support/as",
    file: "common/pages/support/as.tsx",
  },
] satisfies RouteConfig;
