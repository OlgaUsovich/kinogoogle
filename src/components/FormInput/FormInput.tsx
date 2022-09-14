import { Input } from "components";
import { HTMLInputTypeAttribute } from "react";
import { Control, Controller } from "react-hook-form";
import { InputNames } from "types";
import * as styles from "./styles";

interface IProps {
  name: InputNames;
  //   control: Control<ControlType>; //не работает
  control: Control<any>;
  label: string;
  type: HTMLInputTypeAttribute;
  validationType: keyof typeof validateRules;
  placeholder: string;
  errorMessage?: string;
  validate?: (value: string, currentPassword: string) => boolean | string;
}

const validateRules = {
  password: {
    required: "Enter your password",
    minLength: {
      value: 6,
      message: "Password should be at least 6 sybbols",
    },
    maxLength: {
      value: 20,
      message: "Password should be at most 20 sybbols",
    },
  },
  email: {
    required: "Enter your email",
    pattern: {
      value:
        // eslint-disable-next-line max-len
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Please enter a valid email",
    },
  },
  settingsPassword: {
    minLength: {
      value: 6,
      message: "Password should be at least 6 sybbols",
    },
    maxLength: {
      value: 20,
      message: "Password should be at most 20 sybbols",
    },
  },
  name: {
    required: "Enter your name",
    maxLength: {
      value: 15,
      message: "Name should be at most 15 sybbols",
    },
  },
  searchName: {
    required: "Name is required by API",
  },
  year: {
    pattern: {
      value: /^(19|20)\d{2}$/,
      message: "Please enter a year from 1900 to current year",
    },
  },
};

export const FormInput = ({
  placeholder,
  name,
  control,
  label,
  type,
  validationType,
  errorMessage,
  validate,
}: IProps) => {
  return (
    <>
      <styles.Label>
        <styles.LabelText>{label}</styles.LabelText>
        <Controller
          name={name}
          control={control}
          rules={{ ...validateRules[validationType], ...validate }}
          render={({ field: { value, onChange } }) => {
            return (
              <Input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
                error={errorMessage}
              />
            );
          }}
        />
      </styles.Label>
      <styles.ErrorMessage>{errorMessage}</styles.ErrorMessage>
    </>
  );
};
