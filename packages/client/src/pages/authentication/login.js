import React from 'react';

import AuthWrapper from './authWrapper';
import LoginForm from './forms/loginForm';

function Login() {
  return (
    <AuthWrapper>
      <LoginForm />
    </AuthWrapper>
  );
}

export default Login;
