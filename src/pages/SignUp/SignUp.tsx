import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FormButton } from "../../components/FormButton";
import { Input } from "../../components/Input";
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
import { useRef, useState } from "react";
import { getFirebaseMessageError } from "../../utils";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components";

type SignUpFormValue = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUp = () => {
  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
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
  const [errorMessage, setErrorMesage] = useState<string>("");
  const navigate = useNavigate();
  const password = useRef({});
  password.current = watch("password", "");

  const [isOpen, toggleModal] = useState<boolean>(false);

  const handleModal = () => {
    toggleModal((isOpen) => !isOpen);
    // navigate(ROUTE.HOME, { replace: true });
  };

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
        handleModal();
        // navigate(ROUTE.HOME, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMesage(getFirebaseMessageError(errorCode));
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
          <StyledLabel>
            <LabelText>Name</LabelText>
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
                    error={errors.name?.message}
                  />
                );
              }}
            />
          </StyledLabel>
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

          <StyledLabel htmlFor="email">
            <LabelText>Email</LabelText>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Enter your email",
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email',
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

          <StyledLabel htmlFor="password">
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

          <StyledLabel htmlFor="confirmPassword">
            <LabelText>Confirm password</LabelText>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Confirm password",
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              }}
              render={({ field: { value, onChange } }) => {
                return (
                  <Input
                    placeholder="Confirm password"
                    type="password"
                    value={value}
                    onChange={onChange}
                    error={errors.confirmPassword?.message}
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
        <FormButton text="Sign up" isLoading={isLoading} />
      </FormContainer>
      <StyledSpan>
        Already have an account?{" "}
        <StyledLink to={`/${ROUTE.SIGN_IN}`}>Sign In</StyledLink>
      </StyledSpan>
      <Modal isOpen={isOpen} handleModal={handleModal} />
    </StyledForm>
  );
};
