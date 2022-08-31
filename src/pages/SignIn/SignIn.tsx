import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormButton, Input } from "../../components";
import { ROUTE } from "../../routers";
import { getFirebaseMessageError } from "../../utils";
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

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMesage] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignInFormValue> = ({ email, password }) => {
    setIsLoading(true);
    setErrorMesage(null);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential)
        navigate(`/${ROUTE.ACCOUNT}`, { replace: true });
      })
      .catch(error => {
        setErrorMesage(getFirebaseMessageError(error.code))
      })
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <FormTitleContainer>
        <Title>Sign In</Title>
        <ForgotPassword to={ROUTE.NOT_FOUND}>Forgot Password</ForgotPassword>
        </FormTitleContainer>
        <InputsContainer>
          <StyledLabel>
          <LabelText>Email</LabelText>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Enter your email",
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
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <FormButton text="Sign In" isLoading={isLoading} />
      </FormContainer>
      <StyledSpan>
        Don’t have an account?{" "}
        <StyledLink to={`/${ROUTE.SIGN_UP}`}>Sign Up</StyledLink>
      </StyledSpan>
    </StyledForm>
  );
};
