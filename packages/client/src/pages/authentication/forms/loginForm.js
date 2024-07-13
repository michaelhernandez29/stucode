import React, { useState } from 'react';

import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Alert, Button, IconButton, InputAdornment, TextField } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import UserService from '../../../api/services/userService';
import HttpClient from '../../../api/httpClient';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const initialValues = { email: '', password: '' };
  const validationSchema = Yup.object({
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = async (values) => {
    try {
      const response = await UserService.login(values);
      const token = response.data;
      HttpClient.setAuthorizationToken(token);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
      {(props) => (
        <Form onSubmit={props.handleSubmit}>
          <TextField
            name="email"
            label="Email"
            placeholder="Enter your email"
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
            fullWidth
            required
            variant="standard"
            error={props.touched.email && Boolean(props.errors.email)}
            helperText={props.touched.email && props.errors.email}
            sx={{ mb: 1 }}
          />
          <TextField
            name="password"
            label="Password"
            placeholder="Enter your password"
            type={showPassword ? 'text' : 'password'}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.password}
            fullWidth
            required
            variant="standard"
            error={props.touched.password && Boolean(props.errors.password)}
            helperText={props.touched.password && props.errors.password}
            sx={{ mb: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <Button type="submit" variant="contained" color="secondary" fullWidth disableElevation sx={{ mt: 3 }}>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
