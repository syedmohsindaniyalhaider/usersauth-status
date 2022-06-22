import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";

const Admin = () => {
  const userCtx = useContext(UserContext);
  const onAcceptHandler = (id) => {
    userCtx.acceptGreenPass(id);
  };
  const onRejectHandler = (id) => {
    userCtx.rejectGreenPass(id);
  };
  return (
    <>
      <table style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px" }}>Name</th>
            <th style={{ padding: "10px" }}>Age</th>
            <th style={{ padding: "10px" }}>Status</th>
            <th style={{ padding: "10px" }}>Green Pass</th>
          </tr>
        </thead>
        <tbody>
          {userCtx.users.map((item) => (
            <tr key={item.id}>
              <td style={{ padding: "10px" }}>{item.name || "-"}</td>
              <td style={{ padding: "10px" }}>{item.age || "-"}</td>
              <td style={{ padding: "10px" }}>
                {(item.greenPassStatus && item.greenPass) || "-"}
              </td>
              <td style={{ padding: "10px" }}>
                {(!item.greenPassStatus && item.greenPassApplied && (
                  <>
                    <button onClick={() => onAcceptHandler(item.id)}>
                      Accept
                    </button>
                    <button
                      onClick={() => onRejectHandler(item.id)}
                      style={{ marginLeft: "5px" }}
                    >
                      Reject
                    </button>
                  </>
                )) ||
                  "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Admin;
