import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import * as theme from "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline/> */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
