import Login from './pages/Login';
import Register from './pages/Register';
import UserDetail from './pages/UserDetail';
import Users from './pages/Users';

export default [
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/users/:userId',
    element: <UserDetail />,
  },
  {
    path: '/users',
    element: <Users />,
  },
];
