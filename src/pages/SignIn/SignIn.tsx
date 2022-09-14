import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getUsersSelector, logInUser, useAppDispatch, useAppSelector } from "store";
import { FormButton, FormInput } from "../../components";
import { ROUTE } from "../../routers";
import * as styles from "./styles";

export type SignInFormValue = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<SignInFormValue>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(getUsersSelector);

  const onSubmit: SubmitHandler<SignInFormValue> = ({ email, password }) => {
    dispatch(logInUser({ password, email }));
    reset();
    navigate(`/${ROUTE.SETTINGS}`);
  };

  return (
    <styles.StyledForm onSubmit={handleSubmit(onSubmit)}>
      <styles.FormContainer>
        <styles.FormTitleContainer>
          <styles.Title>Sign In</styles.Title>
          <styles.ForgotPassword to={ROUTE.SEND_EMAIL_CHANGE_PASSWORD}>
            Forgot Password
          </styles.ForgotPassword>
        </styles.FormTitleContainer>
        <styles.InputsContainer>
          <FormInput
            name="email"
            control={control}
            placeholder="Your email"
            label="Email"
            type="email"
            validationType="email"
            errorMessage={errors.email?.message}
          />
          <FormInput
            name="password"
            control={control}
            placeholder="Your password"
            label="Password"
            type="password"
            validationType="password"
            errorMessage={errors.password?.message}
          />
        </styles.InputsContainer>
        {error && <styles.ErrorMessage>{error}</styles.ErrorMessage>}
        <FormButton text="Sign In" isLoading={isLoading} />
      </styles.FormContainer>
      <styles.Span>
        Don’t have an account?{" "}
        <styles.StyledLink to={`/${ROUTE.SIGN_UP}`}>Sign Up</styles.StyledLink>
      </styles.Span>
    </styles.StyledForm>
  );
};
