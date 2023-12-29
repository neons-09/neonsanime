const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-white text-2xl">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="hover:text-red-500 transition all border border-red-500 p-1"
        >
          Prev Page
        </button>
      )}
      <p>
        {page} of {lastPage}
      </p>

      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="hover:text-red-500 transition all border border-red-500 p-1"
        >
          Next Page
        </button>
      )}
    </div>
  );
};

export default Pagination;
