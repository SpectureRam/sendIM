import Signin from "../components/SignIn/Login";
import Signup from "../components/Signup/SignUp2";

const authRoutes = [
    {
        id:1,
        path:'/login',
        element: <Signin />,
    },
    {
        id:2,
        path:'/signup',
        element: <Signup />,
    },
];

export default authRoutes;