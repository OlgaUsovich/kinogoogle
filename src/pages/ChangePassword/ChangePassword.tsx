import { getAuth, updatePassword } from "firebase/auth";
import { useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormButton, Input } from "../../components";
import { getFirebaseMessageError } from "../../utils";
import { ChangePasswordForm, ErrorMessage, FormContainer, InputsContainer, LabelText, StyledLabel, Title } from "./styles";

type ChangePasswordFormValue = {
  password: string;
  confirmPassword: string;
};

export const ChangePassword = () => {
  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch
  } = useForm<ChangePasswordFormValue>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMesage] = useState<string | null>(null);
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit: SubmitHandler<ChangePasswordFormValue> = ({ password }) => {
    setIsLoading(true);

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      updatePassword(user, password)
        .then(() => {
          // Update successful.
        })
        .catch((error) => {
          setErrorMesage(getFirebaseMessageError(error.code));
        })
        .finally(() => {
          setIsLoading(false);
          reset();
        });
    }
  };

  return (
    <ChangePasswordForm>
      <FormContainer>
        <Title>Change Password</Title>
        <InputsContainer>
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

          <StyledLabel>
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
        <FormButton text="Change Password" isLoading={isLoading} />
      </FormContainer>
    </ChangePasswordForm>
  );
};
