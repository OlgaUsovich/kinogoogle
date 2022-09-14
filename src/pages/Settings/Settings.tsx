import { useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  changeEmail,
  changeName,
  changePassword,
  changeTheme,
  getUsersSelector,
  setTheme,
} from "store";
import { FormButton, FormInput, Switcher } from "../../components";
import { ROUTE } from "../../routers";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as styles from "./styles";

export type SettingsFormValue = {
  name: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
  theme: boolean;
};

export const Settings = () => {
  const dispatch = useAppDispatch();
  const { result, isLoading, error, isDarkTheme } = useAppSelector(getUsersSelector);
  const {
    handleSubmit,
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
  const navigate = useNavigate();
  const notify = () => toast.success("Settings saved");

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
    dirtyFields.newPassword && dispatch(changePassword({ currentPassword: password, newPassword }));
    dispatch(setTheme(theme));
    dispatch(changeTheme());
    notify();
    navigate(`${ROUTE.HOME}`);
  };

  return (
    <styles.SettingsForm onSubmit={handleSubmit(onSubmit)}>
      <styles.Block>
        <styles.Title>Profile</styles.Title>
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
        </styles.InputsContainer>
      </styles.Block>

      <styles.Block>
        <styles.Title>Password</styles.Title>
        <styles.PasswordInputsContainer>
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
        </styles.PasswordInputsContainer>
      </styles.Block>

      <styles.Block>
        <styles.Title>Color mode</styles.Title>
        <styles.ThemeInputContainer>
          <styles.Text>
            <styles.ThemaName>{isDarkTheme ? "Dark" : "Light"}</styles.ThemaName>
            <styles.ThemaInfo>Use {isDarkTheme ? "dark" : "light"} thema</styles.ThemaInfo>
          </styles.Text>
          <Controller
            name="theme"
            control={control}
            render={({ field: { value, onChange } }) => {
              return <Switcher value={value} onChange={onChange} />;
            }}
          />
        </styles.ThemeInputContainer>
      </styles.Block>
      {error && <styles.ErrorMessage>{error}</styles.ErrorMessage>}
      <styles.ButtonsBlock>
        <styles.CancelButton to={"/"}>Cancel</styles.CancelButton>
        <FormButton text="Save" isLoading={isLoading} />
      </styles.ButtonsBlock>
    </styles.SettingsForm>
  );
};
