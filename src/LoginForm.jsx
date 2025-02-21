import { useContext, useState } from "react";
import { CurrentUserContext } from "./LoggedInUser";

function LoginForm({ users }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [selectedUser, setSelectedUser] = useState("jessjelly");

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentUser(selectedUser);
  };

  return (
    <div className="login-form">
      <h2>Login Here:</h2>
      <form onSubmit={handleSubmit}>
        <select
          aria-label="user dropdown"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          {users.map((user) => {
            return (
              <option value={user.username} key={user.username}>
                {user.username}
              </option>
            );
          })}
        </select>

        <button type="submit" className="login-submit">
          Login
        </button>
      </form>
    </div>
  );
}
export default LoginForm;
