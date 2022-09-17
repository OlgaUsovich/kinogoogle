import { AppRouter } from "routers";
import { changeTheme, useAppDispatch } from "store";

const App = () => {
  const dispatch = useAppDispatch();
  dispatch(changeTheme());
  return <AppRouter />;
};

export default App;
