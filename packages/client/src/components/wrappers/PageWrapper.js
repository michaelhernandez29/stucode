import PropTypes from 'prop-types';

/**
 * PageWrapper component that serves as a layout wrapper for different pages.
 * It provides a consistent structure and style with a title and content section.
 *
 * @component
 * @param {object} props - The props object.
 * @param {string} props.title - The title to be displayed at the top of the page.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the wrapper.
 * @returns {JSX.Element} The rendered PageWrapper component.
 */
function PageWrapper({ title, children }) {
  return (
    <main className="min-h-screen bg-white relative">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <header className="mb-20 relative">
          <h1 className="text-5xl font-extrabold text-gray-800 relative z-10">{title}</h1>
          <div className="absolute inset-0 z-0">
            <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-purple-400 opacity-40">
              {title}
            </h1>
          </div>
        </header>
        {children}
      </section>
    </main>
  );
}

PageWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
