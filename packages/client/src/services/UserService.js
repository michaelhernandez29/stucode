import Endpoints from './Endpoints';
import HttpClient from './HttpClient';

/**
 * Retrieves a paginated list of users with optional query parameters for filtering and sorting.
 *
 * @param {object} [query={}] - The query parameters for filtering, pagination, and sorting.
 * @param {number} [query.page=0] - The page number for pagination (default is 0).
 * @param {number} [query.limit=20] - The number of users to return per page (default is 20).
 * @param {string} [query.find=''] - A search term to filter the users.
 * @param {string} [query.order='a-z'] - The sorting order of the results, either 'a-z' or 'z-a'.
 * @returns {Promise<object>} A promise that resolves to the response data containing the users list.
 */
const findAndCountAll = async (query = {}) => {
  return HttpClient.get(Endpoints.USERS, { params: query });
};

export default { findAndCountAll };
