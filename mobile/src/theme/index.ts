import { RFValue } from "react-native-responsive-fontsize";

const standardPhoneScreen = 812;
const responsiveValue = RFValue(1, standardPhoneScreen);

export const theme = {
  colors: {
    gray100: "#F2F2F2",
    gray200: "#D9D9D9",
    gray300: "#808080",
    gray400: "#333333",
    gray500: "#262626",
    gray600: "#1A1A1A",
    gray700: "#0D0D0D",
    purple: "#8284FA",
    purpleDark: "#5E60CE",
    blue: "#4EA8DE",
    blueDark: "#1E6F9F",
    danger: "#E25858",
  },

  fonts: {
    family: {
      bold: "Inter_700Bold",
      regular: "Inter_400Regular",
    },
    
    sizes: {
      sm: responsiveValue * 12,
      md: responsiveValue * 14,
      lg: responsiveValue * 16,
    },
  },

  lineHeight: '140%'
};
