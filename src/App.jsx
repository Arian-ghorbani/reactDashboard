import "./css/index.css";
import "./css/fonts.css";
import router from "./routes";
import { RouterProvider, ScrollRestoration } from "react-router";

function App() {
  return (
    <RouterProvider router={router}>
      <ScrollRestoration />
    </RouterProvider>
  );
}

export default App;
