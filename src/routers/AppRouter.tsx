import { Routes, Route } from "react-router-dom";
import { ROUTE } from "./routes";
import { MainTemplate, RequireAuth } from "../components";
import {
  Account,
  ChangePassword,
  Favourits,
  Home,
  Movie,
  NotFound,
  SendEmail,
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
        <Route element={<RequireAuth />}>
          <Route path={ROUTE.FAVORITES} element={<Favourits />} />
          <Route path={ROUTE.ACCOUNT} element={<Account />} />
        </Route>
        <Route path={ROUTE.SETTINGS} element={<Settings />} />
        <Route path={ROUTE.MOVIE} element={<Movie />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
      </Route>
      <Route path={ROUTE.HOME} element={<AuthMainTemplate />}>
        <Route path={ROUTE.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTE.SIGN_IN} element={<SignIn />} />
        <Route path={`${ROUTE.SIGN_IN}/${ROUTE.CHANGE_PASSWORD}`} element={<ChangePassword />} />
        <Route path={`${ROUTE.SIGN_IN}/${ROUTE.SEND_EMAIL_CHANGE_PASSWORD}`} element={<SendEmail />} />
      </Route>
    </Routes>
  );
};
