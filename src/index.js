import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchingEngine from "./SearchingEngine";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SearchingEngine />
    <App />
  </StrictMode>
);
