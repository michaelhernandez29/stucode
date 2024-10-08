import PropTypes from 'prop-types';

/**
 * Pagination component that renders controls for navigating through pages and selecting the number of results per page.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {number} props.limit - The current limit of results per page.
 * @param {Function} props.onLimitChange - Callback function called when the limit of results per page changes.
 * @param {number} props.page - The current page number (zero-based index).
 * @param {number} props.totalPages - The total number of pages available.
 * @param {Function} props.onPageChange - Callback function called when the page number changes.
 * @returns {JSX.Element} The rendered pagination component.
 */
function Pagination({ limit, onLimitChange, page, totalPages, onPageChange }) {
  return (
    <section className="mt-4">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <label htmlFor="limit" className="mr-2 text-sm text-gray-700">
            Resultados por página:
          </label>
          <select
            id="limit"
            className="px-2 py-1 border border-gray-300 rounded-md shadow bg-white text-gray-700"
            value={limit}
            onChange={(e) => onLimitChange(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              page === 0
                ? 'text-gray-400 border-gray-400 cursor-not-allowed'
                : 'text-blue-500 border-blue-500 hover:text-blue-600 hover:border-blue-600'
            }`}
            disabled={page === 0}
            onClick={() => onPageChange(page - 1)}
          >
            Anterior
          </button>
          <span className="text-sm text-gray-700">
            Página {page + 1} de {totalPages}
          </span>
          <button
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              page + 1 === totalPages
                ? 'text-gray-400 border-gray-400 cursor-not-allowed'
                : 'text-blue-500 border-blue-500 hover:text-blue-600 hover:border-blue-600'
            }`}
            disabled={page + 1 === totalPages}
            onClick={() => onPageChange(page + 1)}
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
}

Pagination.propTypes = {
  limit: PropTypes.number.isRequired,
  onLimitChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
