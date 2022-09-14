import { Routes, Route } from "react-router-dom";
import { ROUTE } from "./routes";
import { MainTemplate, RequireAuth } from "../components";
import * as pages from "../pages";
import { AuthMainTemplate } from "../components/AuthMainTemplate";
import { LogOut } from "../pages/LogOut";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<pages.Home />} />
        <Route path={ROUTE.TRENDS} element={<pages.Trends />} />
        <Route element={<RequireAuth />}>
          <Route path={ROUTE.FAVORITES} element={<pages.Favourits />} />
          <Route path={ROUTE.SETTINGS} element={<pages.Settings />} />
        </Route>
        <Route path={ROUTE.MOVIE} element={<pages.Movie />} />
        <Route path={ROUTE.NOT_FOUND} element={<pages.NotFound />} />
      </Route>
      <Route path={ROUTE.HOME} element={<AuthMainTemplate />}>
        <Route path={ROUTE.SIGN_UP} element={<pages.SignUp />} />
        <Route path={ROUTE.SIGN_IN} element={<pages.SignIn />} />
        <Route path={ROUTE.LOG_OUT} element={<LogOut />} />
        <Route
          path={`${ROUTE.SIGN_IN}/${ROUTE.CHANGE_PASSWORD}`}
          element={<pages.ChangePassword />}
        />
        <Route
          path={`${ROUTE.SIGN_IN}/${ROUTE.SEND_EMAIL_CHANGE_PASSWORD}`}
          element={<pages.SendEmail />}
        />
      </Route>
    </Routes>
  );
};
