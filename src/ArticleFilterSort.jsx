import { useState } from "react";

function ArticleFiterSort({ setSearchParams, searchParams, setPage }) {
  const [selectedOrder, setSelectedOrder] = useState("Decending");
  const [selectedSortBy, setSelectedSortBy] = useState("Date Posted");

  const handleSubmit = (event) => {
    event.preventDefault();
    setPage(1);
    const orderDirection = selectedOrder === "Ascending" ? "asc" : "desc";
    let sortColumn;
    switch (selectedSortBy) {
      case "Date Posted":
        sortColumn = "created_at";
        break;
      case "Comment Count":
        sortColumn = "comment_count";
        break;
      case "Votes":
        sortColumn = "votes";
        break;
    }
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", orderDirection);
    newParams.set("sorted_by", sortColumn);
    setSearchParams(newParams);
  };

  return (
    <section>
      <form className="sort-form" onSubmit={handleSubmit}>
        <label>
          Sort by{" "}
          <select
            name="sorted_by"
            onChange={(event) => setSelectedSortBy(event.target.value)}
            value={selectedSortBy}
          >
            <option>Date Posted</option>
            <option>Comment Count</option>
            <option>Votes</option>
          </select>
        </label>
        <label>
          {" "}
          Sort Direction{" "}
          <select
            name="order"
            onChange={(event) => setSelectedOrder(event.target.value)}
            value={selectedOrder}
          >
            <option>Ascending</option>
            <option>Decending</option>
          </select>
        </label>
        <button type="submit">Apply Sort</button>
      </form>
    </section>
  );
}
export default ArticleFiterSort;
