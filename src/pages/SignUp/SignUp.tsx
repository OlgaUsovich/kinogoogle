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

  const onSubmit: SubmitHandler<SignUpFormValue> = ({
    name,
    email,
    password,
    confirmPassword,
  }) => {
    const auth = getAuth();
    console.log(name, email, password, confirmPassword);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(name, email, password, confirmPassword);
        console.log(userCredential);
        // const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    // console.log(name, email, password, confirmPassword);
    reset();
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
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 sybbols",
                },
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
              rules={{ required: "Enter your password" }}
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
        <FormButton text="Sign up" />
      </FormContainer>
      <StyledSpan>
        Already have an account?{" "}
        <StyledLink to={ROUTE.SIGN_IN}>Sign In</StyledLink>
      </StyledSpan>
    </StyledForm>
  );
};
