import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { MainTemplate } from "../components";
import { Favourits, Home, Movie, NotFound, Settings, SignIn, SignUp, Trends } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path={routes.TRENDS} element={<Trends />} />
        <Route path={routes.FAVOURITS} element={<Favourits />} />
        <Route path={routes.SETTINGS} element={<Settings />} />
        <Route path={routes.MOVIE} element={<Movie />} />
        <Route path={routes.SIGN_IN} element={<SignIn />} />
        <Route path={routes.SIGN_UP} element={<SignUp />} />
        <Route path={routes.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
};
