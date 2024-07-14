import Login from './pages/authentication/login.js';
import Register from './pages/authentication/register.js';
import Users from './pages/users/users.js';
import UserDetail from './pages/users/userDetail/userDetail.js';

const routes = [
  {
    path: '/users',
    element: <Users />,
    errorElements: <Users />,
  },
  {
    path: '/users/:userId',
    element: <UserDetail />,
    errorElements: <Users />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default routes;
