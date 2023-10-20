import { createTheme, responsiveFontSizes } from "@mui/material";
import { blue, purple, red, green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: red[500],
    },
    success: {
      main: "#679d11",
      contrastText: "#fff",
    },
  },
  components: {
    MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            boxShadow: "none",
            textTransform: "none",
          },
        },
      },
    MuiFab: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === "large" && {
            width: 100,
            height: 100,
          }),
        }),
      },
      defaultProps: {
        size: "medium",
      },
      variants: [
        {
          props: { variant: "square" },
          style: {
            borderRadius: 10,
          },
        },
      ],
    },
  },
});

export default responsiveFontSizes(theme);
