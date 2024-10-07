import { useState } from 'react';
import { Link } from 'react-router-dom';

import AuthWrapper from '../components/wrappers/AuthWrapper';
import AuthService from '../services/AuthService';
import { setAuthToken } from '../services/HttpClient';

/**
 * Login component for user authentication in the StuCode application.
 * It provides a form for users to enter their email and password.
 * The form handles input changes, submission, and displays errors if authentication fails.
 *
 * @component
 * @returns {JSX.Element} The rendered Login component.
 */
function Login() {
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userDataForm, setUserDataForm] = useState({
    email: '',
    password: '',
  });

  /**
   * Handles input changes and updates the userDataForm state with the new values.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   */
  const handleChange = async (e) => {
    e.preventDefault();
    setUserDataForm({ ...userDataForm, [e.target.name]: e.target.value });
  };

  /**
   * Handles the form submission, sending the user data to the login service.
   * Sets error messages and loading states based on the login result.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await AuthService.login(userDataForm);
      setAuthToken(response.data);
      setIsSubmitting(false);
      setError(null);
    } catch (err) {
      setIsSubmitting(false);
      setError(err.response?.data?.message || 'Error al iniciar sesión. Por favor, intenta de nuevo.');
    }
  };

  return (
    <AuthWrapper title="¡Bienvenido de nuevo!" subtitle="Inicia sesión para continuar con tu aprendizaje">
      <form className="space-y-3" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Correo
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={userDataForm.email}
            onChange={handleChange}
          />

          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={userDataForm.password}
            onChange={handleChange}
          />
        </fieldset>
        {error && <div className="text-red-500 text-sm flex justify-center items-center">{error}</div>}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          {isSubmitting ? 'Enviando...' : 'Acceder'}
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          ¿No tienes una cuenta?{' '}
          <Link to="/register" className="text-indigo-600 hover:text-indigo-800">
            Regístrate
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
}

export default Login;
