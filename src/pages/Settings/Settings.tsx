import { useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormButton, Input, Switcher } from "../../components";
import {
  changeEmail,
  changeName,
  changePassword,
  changeTheme,
  checkCurrentPassword,
  setTheme,
} from "../../store/features/userSlice";
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
  Text,
  ThemeInputContainer,
} from "./styles";

type SettingsFormValue = {
  name: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
  theme: boolean;
};

export const Settings = () => {
  const dispatch = useAppDispatch();
  const { result, isLoading, error, checkedPassword, isDarkTheme } =
    useAppSelector((state) => state.persistedReducer.users);
  const {
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
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
      theme: isDarkTheme,
    },
  });

  const newPassword = useRef({});
  newPassword.current = watch("newPassword", "");

  const onSubmit: SubmitHandler<SettingsFormValue> = ({
    email,
    name,
    password,
    newPassword,
    theme,
  }) => {
    dirtyFields.name && dispatch(changeName(name));
    dirtyFields.email && dispatch(changeEmail(email));
    if (dirtyFields.newPassword) {
      dispatch(checkCurrentPassword(password));
      checkedPassword && dispatch(changePassword(newPassword));
    }
    dispatch(setTheme(theme));
    dispatch(changeTheme());
    reset();
  };

  return (
    <SettingsForm onSubmit={handleSubmit(onSubmit)}>
      <Block>
        <Title>Profile</Title>
        <InputsContainer>
          <Label>
            <LabelText>Name</LabelText>
            <Controller
              name="name"
              control={control}
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
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </Label>

          <Label>
            <LabelText>Email</LabelText>
            <Controller
              name="email"
              control={control}
              rules={{
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
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </Label>
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
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </Label>

          <Label>
            <LabelText>New Password</LabelText>
            <Controller
              name="newPassword"
              control={control}
              rules={{
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 symbols",
                },
              }}
              render={({ field: { value, onChange } }) => {
                return (
                  <Input
                    placeholder="New password"
                    type="password"
                    value={value}
                    onChange={onChange}
                    error={errors.newPassword?.message}
                  />
                );
              }}
            />
            {errors.newPassword && (
              <ErrorMessage>{errors.newPassword.message}</ErrorMessage>
            )}
          </Label>

          <Label>
            <LabelText>Confirm Password</LabelText>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                validate: (value) =>
                  value === newPassword.current || "The passwords do not match",
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
            {errors.confirmPassword && (
              <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
            )}
          </Label>
        </PasswordInputsContainer>
      </Block>

      <Block>
        <Title>Color mode</Title>
        <ThemeInputContainer>
          <Text>
            <ThemaName>{isDarkTheme ? "Dark" : "Light"}</ThemaName>
            <ThemaInfo>Use {isDarkTheme ? "dark" : "light"} thema</ThemaInfo>
          </Text>
          <Controller
            name="theme"
            control={control}
            render={({ field: { value, onChange } }) => {
              return <Switcher value={value} onChange={onChange} />;
            }}
          />
        </ThemeInputContainer>
      </Block>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ButtonsBlock>
        <CancelButton to={"/"}>Cancel</CancelButton>
        <FormButton text="Save" isLoading={isLoading} />
      </ButtonsBlock>
    </SettingsForm>
  );
};
