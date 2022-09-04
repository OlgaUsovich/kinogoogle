import { getAuth } from "firebase/auth";
import { Spinner } from "../../components";
import { useAuth } from "../../hooks/useAuth";
import { Key, Title, Value, Wrapper } from "./styles";

export const Account = () => {
  const [loading] = useAuth();

  if (!loading) {
    const auth = getAuth();
    const userData = {
      name: auth.currentUser?.displayName,
      email: auth.currentUser?.email,
    };

    return (
      <>
        <Title>Welcome to KINOGOOGLE, {userData.name}!</Title>
        <Wrapper>
          <Key>Your email is:</Key>
          <Value>{userData.email}</Value>
        </Wrapper>
      </>
    );
  }
  return <Spinner />;
};
