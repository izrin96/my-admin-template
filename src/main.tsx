import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "next-themes";

import "@fontsource/inter/greek.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider enableSystem={false} defaultTheme="light">
    <App />
  </ThemeProvider>
);
