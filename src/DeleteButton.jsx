import { deleteComment } from "./api";
function DeleteButton({ commentId, setToBeDeleted, setDeleteErr }) {
  const handleDelete = () => {
    setToBeDeleted(true);
    deleteComment(commentId).catch((err) => {
      console.log(err);
      setDeleteErr(true);
      setToBeDeleted(false);
    });
  };

  return <button onClick={handleDelete}>Delete</button>;
}
export default DeleteButton;
