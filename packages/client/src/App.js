import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

const router = createBrowserRouter(routes);

/**
 * App component.
 *
 * This is the root component of the application. It renders the main
 * application container with the CSS class `App`. This component serves
 * as the entry point for the application and contains the overall structure
 * for the app's layout.
 *
 * @component
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
