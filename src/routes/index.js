// Layout
import { HeaderOnly } from "~/components/Layout";

import RoutesConfig from "~/config/routes";
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

const publicRoutes = [
  { path: RoutesConfig.home, component: Home },
  { path: RoutesConfig.following, component: Following },
  { path: RoutesConfig.profile, component: Profile },
  { path: RoutesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: RoutesConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
