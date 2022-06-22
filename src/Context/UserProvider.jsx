import UserContext from "./UserContext";
import React, { useReducer } from "react";

const initialState = {
  users: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER": {
      const updatedUsers = state.users.concat(action.payload);
      console.log("Updated Users::", updatedUsers);
      return {
        users: updatedUsers,
      };
    }
    case "REMOVE_USER":
      return;
    case "APPLY_GREEN_PASS": {
      const userExistIndex = state.users.findIndex(
        (item) => item.id === action.payload
      );
      const userData = state.users[userExistIndex];
      let updatedUsers;
      const updateUser = {
        ...userData,
        greenPass: "Requested",
      };
      updatedUsers = [...state.users];
      updatedUsers[userExistIndex] = updateUser;
      console.log("Users::", updatedUsers);
      return { users: updatedUsers };
    }
    case "ACCEPT_GREEN_PASS": {
      const userExistIndex = state.users.findIndex(
        (item) => item.id === action.payload
      );
      const userData = state.users[userExistIndex];
      let updatedUsers;
      const updateUser = {
        ...userData,
        greenPass: "Accepted",
      };
      updatedUsers = [...state.users];
      updatedUsers[userExistIndex] = updateUser;
      return {
        users: updatedUsers,
      };
    }
    case "REJECT_GREEN_PASS": {
      const userExistIndex = state.users.findIndex(
        (item) => item.id === action.payload
      );
      const userData = state.users[userExistIndex];
      let updatedUsers;
      const updateUser = {
        ...userData,
        greenPass: "Rejected",
      };
      updatedUsers = [...state.users];
      updatedUsers[userExistIndex] = updateUser;
      return {
        users: updatedUsers,
      };
    }
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onAddUser = (user) => {
    dispatch({ type: "ADD_USER", payload: user });
  };
  const onRemoveUser = (id) => {
    dispatch({ type: "REMOVE_USER", payload: id });
  };

  const onApplyForGreenPass = (id) => {
    dispatch({ type: "APPLY_GREEN_PASS", payload: id });
  };
  const onAcceptGreenPass = (id) => {
    dispatch({ type: "ACCEPT_GREEN_PASS", payload: id });
  };
  const onRejectGreenPass = (id) => {
    dispatch({ type: "REJECT_GREEN_PASS", payload: id });
  };

  const userContext = {
    users: state.users,
    addUser: onAddUser,
    removeUser: onRemoveUser,
    applyForGreenPass: onApplyForGreenPass,
    acceptGreenPass: onAcceptGreenPass,
    rejectGreenPass: onRejectGreenPass,
  };

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
