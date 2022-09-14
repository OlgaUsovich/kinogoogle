import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getUsersSelector, logInUser, useAppDispatch, useAppSelector } from "store";
import { FormButton, Input } from "../../components";
import { ROUTE } from "../../routers";
import * as styles from "./styles";

type SignInFormValue = {
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
          <styles.StyledLabel>
            <styles.LabelText>Email</styles.LabelText>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Enter your email",
                pattern: {
                  value:
                    // eslint-disable-next-line max-len
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              }}
              render={({ field: { value, onChange } }) => {
                return (
                  <Input
                    placeholder="Your email"
                    type="email"
                    value={value}
                    onChange={onChange}
                    error={errors.email?.message}
                  />
                );
              }}
            />
          </styles.StyledLabel>
          {errors.email && <styles.ErrorMessage>{errors.email.message}</styles.ErrorMessage>}

          <styles.StyledLabel>
            <styles.LabelText>Password</styles.LabelText>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Enter your password",
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 sybbols",
                },
              }}
              render={({ field: { value, onChange } }) => {
                return (
                  <Input
                    placeholder="Your password"
                    type="password"
                    value={value}
                    onChange={onChange}
                    error={errors.password?.message}
                  />
                );
              }}
            />
          </styles.StyledLabel>
          {errors.password && <styles.ErrorMessage>{errors.password.message}</styles.ErrorMessage>}
        </styles.InputsContainer>
        {error && <styles.ErrorMessage>{error}</styles.ErrorMessage>}
        <FormButton text="Sign In" isLoading={isLoading} />
      </styles.FormContainer>
      <styles.StyledSpan>
        Don’t have an account?{" "}
        <styles.StyledLink to={`/${ROUTE.SIGN_UP}`}>Sign Up</styles.StyledLink>
      </styles.StyledSpan>
    </styles.StyledForm>
  );
};
