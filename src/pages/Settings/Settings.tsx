import { useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormButton, Input } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  Block,
  ButtonsBlock,
  CancelButton,
  ErrorMessage,
  InputsContainer,
  Label,
  LabelText,
  PasswordInputsContainer,
  SettingsForm,
  ThemaInfo,
  ThemaName,
  Title,
} from "./styles";

type SettingsFormValue = {
  name: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
  theme: "light" | "dark" | "default";
};

export const Settings = () => {
  const dispatch = useAppDispatch();
  const { result, isLoading, error } = useAppSelector(
    (state) => state.persistedReducer.users
  );
  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
  } = useForm<SettingsFormValue>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      name: result?.displayName ? result.displayName : "",
      email: result?.email ? result?.email : "",
      password: "",
      newPassword: "",
      confirmPassword: "",
      theme: "default",
    },
  });

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit: SubmitHandler<SettingsFormValue> = () => {
    reset();
  };

  return (
    <SettingsForm>
      <Block>
        <Title>Profile</Title>
        <InputsContainer>
          <Label>
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
          </Label>
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

          <Label>
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
          </Label>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputsContainer>
        </Block>

        
        <Block>
        <Title>Password</Title>
        <PasswordInputsContainer>
          <Label>
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
          </Label>
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

          <Label>
            <LabelText>New Password</LabelText>
            <Controller
              name="newPassword"
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
                    placeholder="New password"
                    type="password"
                    value={value}
                    onChange={onChange}
                    error={errors.password?.message}
                  />
                );
              }}
            />
          </Label>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <Label>
            <LabelText>Confirm Password</LabelText>
            <Controller
              name="confirmPassword"
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
                    placeholder="Confirm password"
                    type="password"
                    value={value}
                    onChange={onChange}
                    error={errors.password?.message}
                  />
                );
              }}
            />
          </Label>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </PasswordInputsContainer>
        </Block>

        <Block>
        <Title>Color mode</Title>
        <InputsContainer>
              <ThemaName>Dark</ThemaName>
              <ThemaInfo>Use dark thema</ThemaInfo>
        </InputsContainer>
      </Block>
      <ButtonsBlock>
      <CancelButton to={'/'}>Cancel</CancelButton>
      <FormButton text='Save' isLoading={false}/>
      </ButtonsBlock>
    </SettingsForm>
  );
};
