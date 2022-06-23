import React, { useContext, useState } from "react";
import UserContext from "../../Context/Users/UserContext";
import UserForm from "./UserForm";

const User = () => {
  const userCtx = useContext(UserContext);

  const onApplyHandler = (id) => {
    userCtx.applyForGreenPass(id);
  };

  return (
    <>
      <UserForm />
      <table style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px" }}>Name</th>
            <th style={{ padding: "10px" }}>Age</th>
            <th style={{ padding: "10px" }}>Green Pass</th>
          </tr>
        </thead>
        <tbody>
          {userCtx.users.map((item) => (
            <tr key={item.id}>
              <td style={{ padding: "10px" }}>{item.name || "-"}</td>
              <td style={{ padding: "10px" }}>{item.age || "-"}</td>
              <td style={{ padding: "10px" }}>
                {!item.greenPassApplied && (
                  <button onClick={() => onApplyHandler(item.id)}>Apply</button>
                )}
                {item.greenPassApplied && item.greenPass}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default User;
