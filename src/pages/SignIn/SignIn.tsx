import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormButton, Input } from "../../components";
import { ROUTE } from "../../routers";
import {
  ErrorMessage,
  FormContainer,
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
    register,
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
  const [errorMessage, setErrorMesage] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignInFormValue> = ({ email, password }) => {
    setIsLoading(true);
  };

  return (
    <StyledForm>
      <FormContainer>
        <Title>Sign In</Title>
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
        <FormButton text="Sign up" />
      </FormContainer>
      <StyledSpan>
        Don’t have an account?{" "}
        <StyledLink to={`/${ROUTE.SIGN_UP}`}>Sign Up</StyledLink>
      </StyledSpan>
    </StyledForm>
  );
};
