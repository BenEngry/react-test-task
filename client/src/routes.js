import { LIST_ROUTE, USER_ROUTE } from "./components/utils/consts";
import { List } from "./components/List/List";
import { User } from "./components/User/User";

export const  userRoutes = [
    {
        path: LIST_ROUTE,
        Component: List
    },
    {
        path: USER_ROUTE + '/:id',
        Component: User
    }
]