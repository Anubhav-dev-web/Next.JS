const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="max-w-md text-center p-8 bg-white rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-gray-800">Review not found</h1>
        <p className="text-gray-600 mt-4">
          The page you're looking for could not be found. It might be
          unavailable temporarily, or it might have moved.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="/products"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go to products
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
