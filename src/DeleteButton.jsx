import { deleteComment } from "./api";
function DeleteButton({ commentId, setToBeDeleted, setDeleteErr }) {
  const handleDelete = () => {
    setToBeDeleted(true);
    deleteComment(commentId).catch((err) => {
      setDeleteErr(true);
      setToBeDeleted(false);
    });
  };

  return (
    <button className="delete-button" onClick={handleDelete}>
      Delete
    </button>
  );
}
export default DeleteButton;
