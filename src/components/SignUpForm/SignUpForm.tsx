import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "../../routers";
import * as styles from "./styles";
import { useRef, useState } from "react";
import { FormButton, FormInput, Modal } from "../../components";
import { createUser, getUsersSelector, useAppDispatch, useAppSelector } from "store";

export type SignUpFormValue = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUpForm = () => {
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
    <styles.Form onSubmit={handleSubmit(onSubmit)}>
      <styles.FormContainer>
        <styles.Title>Sign Up</styles.Title>
        <styles.InputsContainer>
          <FormInput
            name="name"
            control={control}
            placeholder="Your name"
            label="Name"
            type="text"
            validationType="name"
            errorMessage={errors.name?.message}
          />
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
          <FormInput
            name="confirmPassword"
            control={control}
            placeholder="Confirm password"
            label="Confirm password"
            type="password"
            validationType="password"
            validate={(value) => value === password.current || "The passwords do not match"}
            errorMessage={errors.confirmPassword?.message}
          />
        </styles.InputsContainer>
        {error && <styles.ErrorMessage>{error}</styles.ErrorMessage>}
        <FormButton text="Sign up" isLoading={isLoading} />
      </styles.FormContainer>
      <styles.Span>
        Already have an account?{" "}
        <styles.StyledLink to={`/${ROUTE.SIGN_IN}`}>Sign In</styles.StyledLink>
      </styles.Span>
      <Modal isOpen={isOpen} handleModal={handleModal} />
    </styles.Form>
  );
};
