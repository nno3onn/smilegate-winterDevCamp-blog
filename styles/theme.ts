import { DefaultTheme } from "styled-components";

// colors
interface CustomTheme extends DefaultTheme {
  color: {
    default: string;
    primary: string;
    grey1: string;
  };
  backgroundColor: string;
}

export const theme: CustomTheme = {
  color: {
    default: "#212529",
    primary: "#20c997",
    grey1: "#495057",
  },
  backgroundColor: "rgba(249, 249, 249, 0.85)",
};
