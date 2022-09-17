import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getUsersSelector, sendResetEmail, useAppDispatch, useAppSelector } from "store";
import { FormButton, FormInput } from "components";
import { ErrorMessage, FormContainer, InputsContainer, Form, Title } from "./styles";

export type SendEmailFormValue = {
  email: string;
};

export const SendEmailForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<SendEmailFormValue>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });

  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(getUsersSelector);
  const notify = () => toast.success("Reset password message send. Please check your email");

  const onSubmit: SubmitHandler<SendEmailFormValue> = ({ email }) => {
    dispatch(sendResetEmail({ email }));
    reset();
    !error && notify();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
        <ErrorMessage>{error}</ErrorMessage>
        <FormButton text="Send Email" isLoading={isLoading} />
      </FormContainer>
    </Form>
  );
};