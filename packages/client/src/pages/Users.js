import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Pagination from '../components/common/Pagination';
import Searcher from '../components/common/Searcher';
import Table from '../components/common/Table';
import UserRow from '../components/user/UserRow';
import PageWrapper from '../components/wrappers/PageWrapper';
import UserService from '../services/UserService';

/**
 * Users component that fetches and displays a list of users with search, sorting, and pagination functionalities.
 *
 * @component
 * @returns {JSX.Element} The rendered Users component.
 */
function Users() {
  const [users, setUsers] = useState([]);
  const [find, setFind] = useState('');
  const [order, setOrder] = useState('a-z');
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    /**
     * Fetches the users based on the current search, sorting, pagination, and limit criteria.
     * Updates the state with the list of users and the total number of pages.
     * If the current page exceeds the total number of pages, it resets to the first page.
     *
     * @function fetchUsers
     * @returns {Promise<void>} A promise that resolves when the users are fetched and the state is updated.
     */
    const fetchUsers = async () => {
      const query = { order, page, limit };
      if (find) {
        query.find = find;
      }

      const response = await UserService.findAndCountAll(query);
      setUsers(response.data);

      setTotalPages(response.count > 0 ? Math.ceil(response.count / limit) : 1);
      if (page >= totalPages && response.count > 0) {
        setPage(0);
      }
    };

    fetchUsers();
  }, [find, order, page, limit, totalPages]);

  return (
    <PageWrapper title="Usuarios">
      <section className="mb-6 flex flex-wrap items-center gap-4">
        <Searcher find={find} onFindChange={setFind} />
        <select
          className="px-4 py-2.5 h-12 border border-gray-300 rounded-md shadow bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="a-z">Ordenar: A-Z</option>
          <option value="z-a">Ordenar: Z-A</option>
        </select>
      </section>
      <section className="overflow-x-auto bg-white shadow-md rounded-lg">
        <Table columns={['Nombre', 'Apellido', 'Email']}>
          {users.length > 0 ? (
            users.map((user) => <UserRow key={user.id} user={user} />)
          ) : (
            <tr>
              <td colSpan="3" className="text-center text-gray-500 py-4">
                No se encontraron usuarios
              </td>
            </tr>
          )}
        </Table>
      </section>
      <Pagination limit={limit} onLimitChange={setLimit} page={page} totalPages={totalPages} onPageChange={setPage} />
    </PageWrapper>
  );
}

Users.propTypes = {
  find: PropTypes.string,
  setFind: PropTypes.func,
  order: PropTypes.string,
  setOrder: PropTypes.func,
  page: PropTypes.number,
  setPage: PropTypes.func,
  limit: PropTypes.number,
  setLimit: PropTypes.func,
  totalPages: PropTypes.number,
  setTotalPages: PropTypes.func,
};

export default Users;
