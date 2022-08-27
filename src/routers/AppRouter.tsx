import { Routes, Route } from "react-router-dom";
import { ROUTE } from "./routes";
import { MainTemplate } from "../components";
import {
  Favourits,
  Home,
  Movie,
  NotFound,
  Settings,
  SignIn,
  SignUp,
  Trends,
} from "../pages";
import { AuthMainTemplate } from "../components/AuthMainTemplate";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path={ROUTE.TRENDS} element={<Trends />} />
        <Route path={ROUTE.FAVORITES} element={<Favourits />} />
        <Route path={ROUTE.SETTINGS} element={<Settings />} />
        <Route path={ROUTE.MOVIE} element={<Movie />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
      </Route>
      <Route path={ROUTE.SIGN_UP} element={<AuthMainTemplate />}>
        <Route index element={<SignUp />} />
        <Route path={ROUTE.SIGN_IN} element={<SignIn />} />
      </Route>
    </Routes>
  );
};
