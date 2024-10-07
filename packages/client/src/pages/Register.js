import { useState } from 'react';

import AuthWrapper from '../components/wrappers/AuthWrapper';
import AuthService from '../services/AuthService';

/**
 * Register component for user registration in the StuCode application.
 * It provides a form for users to enter their details such as first name, last name, email, and password.
 * The form handles input changes and submission with validation and error handling.
 *
 * @component
 * @returns {JSX.Element} The rendered Register component.
 */
function Register() {
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userDataForm, setUserDataForm] = useState({
    firstname: '',
    lastname: '',
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
   * Handles the form submission, sending the user data to the registration service.
   * Sets error messages and loading states based on the registration result.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await AuthService.register(userDataForm);
      setIsSubmitting(false);
      setError(null);
    } catch (err) {
      setIsSubmitting(false);
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <AuthWrapper title="Join StuCode" subtitle="Collaborate, Learn, and Grow with Fellow Developers">
      <form className="space-y-3" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            autoFocus
            value={userDataForm.firstname}
            onChange={handleChange}
          />
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Apellido
          </label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={userDataForm.lastname}
            onChange={handleChange}
          />
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
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
          {isSubmitting ? 'Enviando...' : 'Crear cuenta'}
        </button>
      </form>
    </AuthWrapper>
  );
}

export default Register;
