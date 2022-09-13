import { StylesConfig } from "react-select";
import { IGenresOption } from "../../types/types";
import { COLOR } from "../../ui";

export const customStyles: StylesConfig<IGenresOption> = {
  control: (styles, state) => ({
    ...styles,
    borderRadius: "10px",
    height: "56px",
    border: state.isFocused ? `2px solid ${COLOR.PRIMARY}` : 0,
    boxShadow: "0",
    backgroundColor: COLOR.GRAPHITE,

    "&:hover": {
      border: state.isFocused ? `2px solid ${COLOR.PRIMARY}` : 0,
      outlineColor: COLOR.PRIMARY,
    },
  }),

  input: (styles) => ({
    ...styles,
    fontFamily: "Exo 2",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  dropdownIndicator: (styles) => ({
    ...styles,
    color: COLOR.LIGHT,

    "&:hover": {
      color: COLOR.WHITE,
    },
  }),

  indicatorsContainer: (styles) => ({
    ...styles,

    svg: {
      width: 40,
      height: 30,
    },
  }),

  valueContainer: (styles) => ({
    ...styles,
    paddingLeft: "20px",
  }),

  singleValue: (styles) => ({
    ...styles,
    color: COLOR.WHITE,
    backgroundColor: "transparent",
  }),

  option: (styles, state) => ({
    ...styles,
    paddingLeft: "20px",
    color: COLOR.WHITE,
    backgroundColor: state.isFocused
      ? state.isSelected
        ? "transparent"
        : "transparent"
      : "transparent",

    "&:hover": {
      color: COLOR.PRIMARY,
    },

    "&:active": {
      backgroundColor: COLOR.LIGHT,
    },

    "&:first-of-type": {
      borderBottom: `1px solid ${COLOR.DARK}`,
    },

    "&:last-of-type": {
      borderTop: `1px solid ${COLOR.DARK}`,
    },
  }),

  placeholder: (styles) => ({
    ...styles,
    color: COLOR.SECONDARY,
  }),

  menuList: (styles) => ({
    ...styles,
    borderRadius: "10px",
    backgroundColor: COLOR.GRAPHITE,
  }),

  menu: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    color: COLOR.LIGHT,
  }),
};
