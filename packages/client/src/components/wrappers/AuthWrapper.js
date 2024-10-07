import PropTypes from 'prop-types';

/**
 * A wrapper component for authentication pages, providing a consistent layout and style.
 * This component displays a title, a subtitle, and wraps any children elements within a styled container.
 *
 * @param {object} props - The props object.
 * @param {string} props.title - The main title to be displayed at the top of the wrapper.
 * @param {string} props.subtitle - The subtitle text to be displayed below the title.
 * @param {React.ReactNode} props.children - The child components or elements to be rendered inside the wrapper.
 * @returns {JSX.Element} The styled authentication wrapper component.
 */
function AuthWrapper({ title, subtitle, children }) {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-white">{title}</h1>
        <p className="mt-2 text-center text-white">{subtitle}</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">{children}</div>
      </div>
    </div>
  );
}

AuthWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AuthWrapper;
