import {createBrowserRouter} from "react-router-dom";
import Home from './pages/home';
import Project from './pages/project';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/project/:id",
        element: <Project />,

    },
]);

export default router