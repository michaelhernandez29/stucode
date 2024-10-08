import PropTypes from 'prop-types';

/**
 * Column component that represents a table header column.
 * It displays a styled header cell with a given name.
 *
 * @component
 * @param {object} props - The props object.
 * @param {string} props.name - The name to be displayed in the column header.
 * @returns {JSX.Element} The rendered Column component.
 */
function Column({ name }) {
  return (
    <th className="w-1/3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{name}</th>
  );
}

Column.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Column;
