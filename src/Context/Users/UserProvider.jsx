import UserContext from "./UserContext";
import React, { useReducer } from "react";

const initialState = {
  users: [],
};

// some changes

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGGED_IN": {
      return state.users;
    }
    case "ADD_USER": {
      const updatedUsers = state.users.concat(action.payload);
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
      userData.greenPass = "Requested";
      userData.greenPassApplied = true;
      let updatedUsers;
      updatedUsers = [...state.users];
      updatedUsers[userExistIndex] = userData;
      console.log("Users::", updatedUsers);
      return { users: updatedUsers };
    }
    case "ACCEPT_GREEN_PASS": {
      const userExistIndex = state.users.findIndex(
        (item) => item.id === action.payload
      );
      const userData = state.users[userExistIndex];
      userData.greenPass = "Accepted";
      userData.greenPassStatus = true;
      let updatedUsers;
      updatedUsers = [...state.users];
      updatedUsers[userExistIndex] = userData;
      return {
        users: updatedUsers,
      };
    }
    case "REJECT_GREEN_PASS": {
      const userExistIndex = state.users.findIndex(
        (item) => item.id === action.payload
      );
      const userData = state.users[userExistIndex];
      userData.greenPass = "Rejected";
      userData.greenPassStatus = true;
      let updatedUsers;
      updatedUsers = [...state.users];
      updatedUsers[userExistIndex] = userData;
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
