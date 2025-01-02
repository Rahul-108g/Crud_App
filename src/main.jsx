import { StrictMode } from "react";

import App from "./routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
import { Store } from "./Store/Store.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Form from "./Component/Form.jsx";
import PostList from "./Component/PostList.jsx";
import Update from "./Component/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Form /> },
      { path: "/post", element: <PostList /> },
      { path: "/edit/:id", element: <Update /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
