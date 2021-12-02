import React from "react";

export default function Users({ users }) {
  return (
    <>
      {users.map((u, i) => (
        <>
          <span key={i}>
            {u.name} {u.lastname}
          </span>
        </>
      ))}
    </>
  );
}
