import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormButton, Input } from "../../components";
import { ROUTE } from "../../routers";
import { logInUser } from "../../store/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  ErrorMessage,
  ForgotPassword,
  FormContainer,
  FormTitleContainer,
  InputsContainer,
  LabelText,
  StyledForm,
  StyledLabel,
  StyledLink,
  StyledSpan,
  Title,
} from "./styles";

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
  const { isLoading, error } = useAppSelector((state) => state.persistedReducer.users);

  const onSubmit: SubmitHandler<SignInFormValue> = ({ email, password }) => {
    dispatch(logInUser({ password, email }));
    reset();
    navigate(`/${ROUTE.ACCOUNT}`);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <FormTitleContainer>
          <Title>Sign In</Title>
          <ForgotPassword to={ROUTE.SEND_EMAIL_CHANGE_PASSWORD}>
            Forgot Password
          </ForgotPassword>
        </FormTitleContainer>
        <InputsContainer>
          <StyledLabel>
            <LabelText>Email</LabelText>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Enter your email",
                pattern: {
                  value:
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
          </StyledLabel>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <StyledLabel>
            <LabelText>Password</LabelText>
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
          </StyledLabel>
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </InputsContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <FormButton text="Sign In" isLoading={isLoading} />
      </FormContainer>
      <StyledSpan>
        Don’t have an account?{" "}
        <StyledLink to={`/${ROUTE.SIGN_UP}`}>Sign Up</StyledLink>
      </StyledSpan>
    </StyledForm>
  );
};
