import { createContext } from "react";

const initialContext = {
  users: [],
  addUser: (user) => {},
  removeUser: (id) => {},
  applyForGreenPass: (id) => {},
  acceptGreenPass: (id) => {},
  rejectGreenPass: (id) => {},
};

const UserContext = createContext(initialContext);

export default UserContext;
