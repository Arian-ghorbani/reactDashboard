import "../public/css/index.css";
import "../public/css/fonts.css";
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
