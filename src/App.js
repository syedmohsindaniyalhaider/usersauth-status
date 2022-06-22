import logo from "./logo.svg";
import "./App.css";
import User from "./Components/User";
import UserProvider from "./Context/UserProvider";
import Admin from "./Components/Admin";

function App() {
  return (
    <>
      <div className="App">
        <p>New Project</p>
        <UserProvider>
          <h3>Users</h3>
          <User />
          <h3>Admin</h3>
          <Admin />
        </UserProvider>
      </div>
    </>
  );
}

export default App;
