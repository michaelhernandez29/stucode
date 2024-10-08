import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PageWrapper from '../components/wrappers/PageWrapper';
import UserService from '../services/UserService';

/**
 * UserDetail component that fetches and displays detailed information about a specific user.
 *
 * @component
 * @returns {JSX.Element} The rendered user detail page.
 */
function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /**
     * Fetches the user details based on the user ID from the URL.
     * Updates the user state with the retrieved user data.
     *
     * @async
     * @function fetchUser
     * @returns {Promise<void>} A promise that resolves when the user data is fetched and state is updated.
     */
    const fetchUser = async () => {
      const response = await UserService.findById(userId);
      setUser(response.data);
      setLoading(false);
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <PageWrapper title={`${user.firstname} ${user.lastname}`}>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-6">
          <img
            src={user.avatarUrl || '/default-avatar.png'}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border"
          />
          <div>
            <h1 className="text-2xl font-bold">{`${user.firstname} ${user.lastname}`}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p>Miembro desde: {new Date(user.createdAt).toLocaleDateString()}</p>
            <p className="mt-2">{user.job || ''}</p>
          </div>
        </div>

        <div className="mt-6">
          <nav className="flex space-x-4 border-b border-gray-300 pb-2 mb-4">
            <a href="#overview" className="text-blue-500 hover:text-blue-700">
              Biografía
            </a>
            <a href="#articles" className="text-gray-600 hover:text-blue-500">
              Artículos
            </a>
            <a href="#stats" className="text-gray-600 hover:text-blue-500">
              Seguidores
            </a>
            <a href="#activity" className="text-gray-600 hover:text-blue-500">
              Seguidos
            </a>
          </nav>

          <section id="overview" className="mb-6">
            <p>{user.biography}</p>
          </section>
          {/*
          <section id="articles" className="mb-6">
            <h2 className="text-xl font-semibold">Articles</h2>
            {user.articles && user.articles.length > 0 ? (
              <ul className="list-disc list-inside">
                {user.articles.map((article) => (
                  <li key={article.id}>
                    <a href={`/articles/${article.id}`} className="text-blue-500 hover:underline">
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No articles available.</p>
            )}
          </section> */}

          {/* <section id="stats" className="mb-6">
            <h2 className="text-xl font-semibold">Stats</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">{user.followers}</p>
                <p>Followers</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">{user.following}</p>
                <p>Following</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">{user.articles.length}</p>
                <p>Articles</p>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </PageWrapper>
  );
}

export default UserDetail;
