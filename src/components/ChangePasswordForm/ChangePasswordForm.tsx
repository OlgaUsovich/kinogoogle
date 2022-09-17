import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { getUsersSelector, resetPassword, useAppDispatch, useAppSelector } from "store";
import { FormButton, FormInput } from "components";
import { Form, ErrorMessage, FormContainer, InputsContainer, Title } from "./styles";

export type ChangePasswordFormValue = {
  newPassword: string;
  confirmPassword: string;
};

export const ChangePasswordForm = () => {
  const {
    reset,
    formState: { errors },
    control,
    handleSubmit,
    watch,
  } = useForm<ChangePasswordFormValue>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword = useRef({});
  newPassword.current = watch("newPassword", "");
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(getUsersSelector);

  const onSubmit: SubmitHandler<ChangePasswordFormValue> = ({ newPassword }) => {
    dispatch(resetPassword({ newPassword }));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Title>Change Password</Title>
        <InputsContainer>
          <FormInput
            name="newPassword"
            control={control}
            placeholder="New password"
            label="New Password"
            type="password"
            validationType="settingsPassword"
            errorMessage={errors.newPassword?.message}
          />
          <FormInput
            name="confirmPassword"
            control={control}
            placeholder="Confirm password"
            label="Confirm Password"
            type="password"
            validationType="settingsPassword"
            validate={(value) => value === newPassword.current || "The passwords do not match"}
            errorMessage={errors.confirmPassword?.message}
          />
        </InputsContainer>
        <ErrorMessage>{error}</ErrorMessage>
        <FormButton text="Change Password" isLoading={isLoading} />
      </FormContainer>
    </Form>
  );
};