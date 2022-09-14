import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "../../routers";
import * as styles from "./styles";
import { useRef, useState } from "react";
import { FormButton, Input, Modal } from "../../components";
import { createUser, getUsersSelector, useAppDispatch, useAppSelector } from "store";

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

  const password = useRef({});
  password.current = watch("password", "");
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(getUsersSelector);

  const [isOpen, toggleModal] = useState<boolean>(false);

  const handleModal = () => {
    toggleModal((isOpen) => !isOpen);
    // navigate(ROUTE.HOME, { replace: true });
  };

  const onSubmit: SubmitHandler<SignUpFormValue> = ({ name, email, password }) => {
    dispatch(createUser({ password, email, name, handleModal }));
    reset();
  };

  return (
    <styles.StyledForm onSubmit={handleSubmit(onSubmit)}>
      <styles.FormContainer>
        <styles.Title>Sign Up</styles.Title>
        <styles.InputsContainer>
          <styles.StyledLabel>
            <styles.LabelText>Name</styles.LabelText>
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
          </styles.StyledLabel>
          {errors.name && <styles.ErrorMessage>{errors.name.message}</styles.ErrorMessage>}

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

          <styles.StyledLabel htmlFor="password">
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

          <styles.StyledLabel htmlFor="confirmPassword">
            <styles.LabelText>Confirm password</styles.LabelText>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Confirm password",
                validate: (value) => value === password.current || "The passwords do not match",
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
          </styles.StyledLabel>
          {errors.confirmPassword && (
            <styles.ErrorMessage>{errors.confirmPassword.message}</styles.ErrorMessage>
          )}
        </styles.InputsContainer>
        {error && <styles.ErrorMessage>{error}</styles.ErrorMessage>}
        <FormButton text="Sign up" isLoading={isLoading} />
      </styles.FormContainer>
      <styles.StyledSpan>
        Already have an account?{" "}
        <styles.StyledLink to={`/${ROUTE.SIGN_IN}`}>Sign In</styles.StyledLink>
      </styles.StyledSpan>
      <Modal isOpen={isOpen} handleModal={handleModal} />
    </styles.StyledForm>
  );
};
