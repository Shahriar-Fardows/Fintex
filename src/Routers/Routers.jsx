import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/Home";
import About from "../Page/About";

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about-us",
                element: <About />,
            },
        ],
    },
]);

export default Routers;