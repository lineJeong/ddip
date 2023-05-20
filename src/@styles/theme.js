const fontSize = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  base: "1rem", // 16px
  md: "1.125rem", // 18px
  lg: "1.25rem", // 20px
  xl: "1.5rem", // 24px
  "2xl": "1.75rem", // 28px
  "3xl": "2rem", // 32px
  "4xl": "2.25rem" // 36px
};

const fontWeight = {
  semiBold: 500,
  bold: 700
};

const palette = {
  mainViolet: "#5F32E4",
  mainMauve: "#E5E2F6",
  mainNavy: "#3B3486",
  black: "black",
  white: "white",
  gray1: "#EDEDED",
  gray2: "#E0E0E0",
  gray3: "#999999",
  gray4: "#8A8A8A",
  gray5: "#757575",
  gray6: "#555555",
  gray7: "#333333",
  statusRed: "#FF5934",
  statusYellow: "#FFAE34",
  statusGreen: "#539165",
  statusGray: "#555555",
  errorRed: "#E64138",
  successGreen: "#539165"
};

const theme = { fontSize, fontWeight, palette };

export default theme;
