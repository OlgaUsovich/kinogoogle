import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormButton, Input } from "../../components";
import {
  ErrorMessage,
  FormContainer,
  InputsContainer,
  LabelText,
  SendEmailForm,
  StyledLabel,
  Title,
} from "./styles";

type SendEmailFormValue = {
  email: string;
};

export const SendEmail = () => {
  const {
    handleSubmit,
    reset,
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
  const [errorMessage, setErrorMesage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<SendEmailFormValue> = ({ email }) => {
    setIsLoading(true);

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(() => {
        setIsLoading(false);
      }
      );
  };

  return (
    <SendEmailForm onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Title>Enter Email</Title>

        <InputsContainer>
          <StyledLabel>
            <LabelText>Email</LabelText>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Enter your email",
                pattern: {
                  value:
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
          </StyledLabel>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputsContainer>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <FormButton text="Send Email" isLoading={isLoading} />
      </FormContainer>
    </SendEmailForm>
  );
};
