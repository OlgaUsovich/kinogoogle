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
import { FormButton, Input, Switcher } from "../../components";
import { ROUTE } from "../../routers";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as styles from "./styles";

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
          <styles.Label>
            <styles.LabelText>Name</styles.LabelText>
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
            {errors.name && <styles.ErrorMessage>{errors.name.message}</styles.ErrorMessage>}
          </styles.Label>

          <styles.Label>
            <styles.LabelText>Email</styles.LabelText>
            <Controller
              name="email"
              control={control}
              rules={{
                pattern: {
                  value:
                    // eslint-disable-next-line max-len
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
            {errors.email && <styles.ErrorMessage>{errors.email.message}</styles.ErrorMessage>}
          </styles.Label>
        </styles.InputsContainer>
      </styles.Block>

      <styles.Block>
        <styles.Title>Password</styles.Title>
        <styles.PasswordInputsContainer>
          <styles.Label>
            <styles.LabelText>Password</styles.LabelText>
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
              <styles.ErrorMessage>{errors.password.message}</styles.ErrorMessage>
            )}
          </styles.Label>

          <styles.Label>
            <styles.LabelText>New Password</styles.LabelText>
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
              <styles.ErrorMessage>{errors.newPassword.message}</styles.ErrorMessage>
            )}
          </styles.Label>

          <styles.Label>
            <styles.LabelText>Confirm Password</styles.LabelText>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                validate: (value) => value === newPassword.current || "The passwords do not match",
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
              <styles.ErrorMessage>{errors.confirmPassword.message}</styles.ErrorMessage>
            )}
          </styles.Label>
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
