import { AppRouter } from "./routers";
import { changeTheme } from "./store/features/userSlice";
import { useAppDispatch } from "./store/hooks";

const App = () => {
  const dispatch = useAppDispatch();
  dispatch(changeTheme());
  return <AppRouter />;
};

export default App;
