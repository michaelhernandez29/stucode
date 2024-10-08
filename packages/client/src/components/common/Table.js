import PropTypes from 'prop-types';
import Column from './Column';

/**
 * Table component that renders a table with a dynamic set of columns and rows.
 * It accepts column names and child components for table rows.
 *
 * @component
 * @param {object} props - The props object.
 * @param {string[]} props.columns - An array of column names to be displayed in the table header.
 * @param {React.ReactNode} props.children - The child components or elements representing the table rows.
 * @returns {JSX.Element} The rendered Table component.
 */
function Table({ columns, children }) {
  return (
    <table className="min-w-full table-fixed">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((name) => (
            <Column key={name} name={name} />
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
    </table>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

export default Table;
