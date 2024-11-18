import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { router } from "./Routes/Routes";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </div>
    </HelmetProvider>
  </StrictMode>
);
