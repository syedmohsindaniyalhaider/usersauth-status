import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

const UserForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const userCtx = useContext(UserContext);

  const userDetails = {
    id: Math.random(),
    name,
    age,
    greenPass: "",
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    userCtx.addUser(userDetails);
    setName("");
    setAge("");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          style={{ marginLeft: "10px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="name" style={{ marginLeft: "10px" }}>
          Age
        </label>
        <input
          type="text"
          placeholder="Enter Age"
          style={{ marginLeft: "10px" }}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button style={{ marginLeft: "10px" }}>Add</button>
      </form>
    </div>
  );
};

export default UserForm;
