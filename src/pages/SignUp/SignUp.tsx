import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FormButton } from "../../components/FormButton";
import { Input } from "../../components/Input";
import { ROUTE } from "../../routers";
import {
  ErrorMessage,
  FormContainer,
  InputsContainer,
  StyledForm,
  StyledLabel,
  StyledLink,
  StyledSpan,
  Title,
} from "./styles";
import { useState } from "react";
import { getFirebaseMessageError } from "../../utils"
import { useNavigate } from "react-router-dom";

type SignUpFormValue = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<SignUpFormValue>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMesage] = useState<string>('');
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignUpFormValue> = ({
    name,
    email,
    password,
    confirmPassword,
  }) => {
    setIsLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate(ROUTE.HOME, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMesage(getFirebaseMessageError(errorCode))
      })
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Title>Sign Up</Title>
        <InputsContainer>
          <StyledLabel htmlFor="name">
            Name{" "}
            <Controller
              name="name"
              control={control}
              rules={{ required: "Enter your name" }}
              render={({ field: { value, onChange } }) => {
                return (
                  <Input
                    placeholder="Your name"
                    type="text"
                    value={value}
                    onChange={onChange}
                  />
                );
              }}
            />
          </StyledLabel>
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

          <StyledLabel htmlFor="email">
            Email{" "}
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
                  />
                );
              }}
            />
          </StyledLabel>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <StyledLabel htmlFor="password">
            Password{" "}
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
                  />
                );
              }}
            />
          </StyledLabel>
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}

          <StyledLabel htmlFor="confirmPassword">
            Confirm password{" "}
            <Controller
              name="confirmPassword"
              control={control}
              rules={{ required: "Confirm password" }}
              render={({ field: { value, onChange } }) => {
                return (
                  <Input
                    placeholder="Confirm password"
                    type="password"
                    value={value}
                    onChange={onChange}
                  />
                );
              }}
            />
          </StyledLabel>
          {errors.confirmPassword && (
            <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
          )}
        </InputsContainer>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <FormButton text="Sign up" />
      </FormContainer>
      <StyledSpan>
        Already have an account?{" "}
        <StyledLink to={`/${ROUTE.SIGN_IN}`}>Sign In</StyledLink>
      </StyledSpan>
    </StyledForm>
  );
};
