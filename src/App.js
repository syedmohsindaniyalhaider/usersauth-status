import "./App.css";
import Register from "./Components/Registration/Registration";
import UserProvider from "./Context/Users/UserProvider";
import RegistrationLayout from "./Components/Layouts/Registration/Registration";
import SignIn from "./Components/Registration/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Components/Layouts/Main/Main";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<RegistrationLayout />}>
          <Route index element={<Register />} />
        </Route>
        <Route path="/users" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      {/* <UserProvider>
          <h3>Users</h3>
          <User />
          <Admin />
          <h3>Admin</h3>
          <Registration />
        </UserProvider> */}
    </>
  );
}

export default App;
