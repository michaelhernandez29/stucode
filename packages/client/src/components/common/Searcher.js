import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

/**
 * Searcher component that renders a search input with an icon.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.find - The current value of the search input.
 * @param {Function} props.onFindChange - Callback function called when the search input value changes.
 * @returns {JSX.Element} The rendered searcher component.
 */
function Searcher({ find, onFindChange }) {
  return (
    <div className="relative flex-grow">
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full pl-12 pr-5 py-2.5 h-12 border border-gray-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        value={find}
        onChange={(e) => onFindChange(e.target.value)}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
    </div>
  );
}

Searcher.propTypes = {
  find: PropTypes.string.isRequired,
  onFindChange: PropTypes.func.isRequired,
};

export default Searcher;
