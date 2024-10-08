import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * UserRow component that renders a row for a user in a table format.
 * Displays the user's first name, last name, and email.
 * Each row includes a link to the user's details page.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {object} props.user - The user object containing information about the user.
 * @param {string} props.user.id - The unique identifier for the user.
 * @param {string} props.user.firstname - The first name of the user.
 * @param {string} props.user.lastname - The last name of the user.
 * @param {string} props.user.email - The email of the user.
 * @returns {JSX.Element} The rendered user row component.
 */
function UserRow({ user }) {
  return (
    <tr className="hover:bg-gradient-to-r from-pink-100 to-purple-100 transition-colors duration-300">
      <td className="px-6 py-4 whitespace-nowrap">
        <Link to={`/users/${user.id}`} className="block w-full h-full text-sm font-medium text-gray-900">
          {user.firstname}
        </Link>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{user.lastname}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{user.email}</div>
      </td>
    </tr>
  );
}

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserRow;
