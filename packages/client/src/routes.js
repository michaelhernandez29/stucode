import Login from './pages/Login';
import Register from './pages/Register';
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
    path: '/users',
    element: <Users />,
  },
];
