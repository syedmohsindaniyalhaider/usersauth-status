import "./App.css";
import Registration from "./Components/Registration/Registration";
import User from "./Components/Users/User";
import UserProvider from "./Context/Users/UserProvider";
import Admin from "./Components/Admin/Admin";

function App() {
  return (
    <>
      <div className="App">
        <p>New Project</p>
        <UserProvider>
          <h3>Users</h3>
          <User />
          <Admin />
          <h3>Admin</h3>
          <Registration />
        </UserProvider>
      </div>
    </>
  );
}

export default App;
