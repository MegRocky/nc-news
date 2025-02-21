function PageButtons({ page, setPage, totalCount, limit }) {
  return (
    <>
      <button
        className="previous-page"
        onClick={() => setPage((currentPage) => currentPage - 1)}
        disabled={page === 1}
      >
        Previous Page
      </button>
      <button
        className="next-page"
        onClick={() => setPage((currentPage) => currentPage + 1)}
        disabled={limit * page >= totalCount}
      >
        Next Page
      </button>
    </>
  );
}
export default PageButtons;
