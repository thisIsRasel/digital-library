import {createBrowserRouter, redirect} from "react-router-dom";
import Root from "./pages";
import Books from "./pages/Library";
import ViewBook from "./pages/Library/ViewBook.tsx";
import CreateBook from "./pages/Library/CreateBook.tsx";
import UpdateBook from "./pages/Library/UpdateBook.tsx";

const ROUTES = {
    HOME: "/",
    BOOKS: "/books",
    VIEW_BOOK: "/books/:id",
    CREATE_BOOK: "/books/create",
    UPDATE_BOOK: "/books/update/:id",
};

const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <Root />,
        errorElement: <div>404</div>,
        children: [
            {
                index: true,
                loader: () => redirect(ROUTES.BOOKS),
            },
            {
                path: ROUTES.BOOKS,
                element: <Books />,
            },
            {
                path: ROUTES.VIEW_BOOK,
                element: <ViewBook />,
            },
            {
                path: ROUTES.CREATE_BOOK,
                element: <CreateBook />,
            },
            {
                path: ROUTES.UPDATE_BOOK,
                element: <UpdateBook />,
            }
        ]
    },
])

export default router;