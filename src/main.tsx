import { createRoot } from "react-dom/client";
import "@fontsource-variable/rethink-sans";
import "@fontsource-variable/jetbrains-mono";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
