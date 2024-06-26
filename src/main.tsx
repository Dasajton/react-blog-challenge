import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BlogProvider } from "./BlogContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BlogProvider>
    <App />
  </BlogProvider>
);
