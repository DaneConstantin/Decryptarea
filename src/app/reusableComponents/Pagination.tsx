
interface PaginationProps {
  totalArticles: number;
  articlesPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalArticles, articlesPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-4 py-2 mx-1 rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200 hover:text-black'}`}
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-4 py-2 mx-1 font-semibold  rounded-lg text-black ${currentPage === index + 1 ? '  bg-yellow-400 ' : 'bg-gray-300 hover:bg-gray-200'}`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 mx-1 rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200 hover:text-black'}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
