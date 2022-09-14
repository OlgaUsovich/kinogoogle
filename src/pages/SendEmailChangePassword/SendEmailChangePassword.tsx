import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormButton, FormInput } from "../../components";
import {
  ErrorMessage,
  FormContainer,
  InputsContainer,
  SendEmailForm,
  Title,
} from "./styles";

export type SendEmailFormValue = {
  email: string;
};

export const SendEmail = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SendEmailFormValue>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<SendEmailFormValue> = ({ email }) => {
    setIsLoading(true);

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {})
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // ..
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <SendEmailForm onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Title>Enter Email</Title>

        <InputsContainer>
          <FormInput
            name="email"
            control={control}
            placeholder="Your email"
            label="Email"
            type="email"
            validationType="email"
            errorMessage={errors.email?.message}
          />
        </InputsContainer>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <FormButton text="Send Email" isLoading={isLoading} />
      </FormContainer>
    </SendEmailForm>
  );
};
