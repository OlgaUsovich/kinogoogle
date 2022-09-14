import { getAuth, updatePassword } from "firebase/auth";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormButton, FormInput } from "../../components";
import { getFirebaseMessageError } from "../../utils";
import {
  ChangePasswordForm,
  ErrorMessage,
  FormContainer,
  InputsContainer,
  Title,
} from "./styles";

export type ChangePasswordFormValue = {
  newPassword: string;
  confirmPassword: string;
};

export const ChangePassword = () => {
  const {
    reset,
    formState: { errors },
    control,
    watch,
  } = useForm<ChangePasswordFormValue>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMesage] = useState<string | null>(null);
  const newPassword = useRef({});
  newPassword.current = watch("newPassword", "");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit: SubmitHandler<ChangePasswordFormValue> = ({ newPassword }) => {
    setIsLoading(true);

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      updatePassword(user, newPassword)
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
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <FormButton text="Change Password" isLoading={isLoading} />
      </FormContainer>
    </ChangePasswordForm>
  );
};
