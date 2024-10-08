import PropTypes from 'prop-types';

/**
 * Row component that represents a table cell.
 * It displays a styled table cell with a given name.
 *
 * @component
 * @param {object} props - The props object.
 * @param {string} props.name - The name or content to be displayed in the table cell.
 * @returns {JSX.Element} The rendered Row component.
 */
function Row({ name }) {
  return <td className="px-6 py-4 whitespace-nowrap">{name}</td>;
}

Row.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Row;
