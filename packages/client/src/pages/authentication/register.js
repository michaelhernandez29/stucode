import React from 'react';

import AuthWrapper from './authWrapper';
import RegisterForm from './forms/registerForm';

function Register() {
  return (
    <AuthWrapper>
      <RegisterForm />
    </AuthWrapper>
  );
}

export default Register;
