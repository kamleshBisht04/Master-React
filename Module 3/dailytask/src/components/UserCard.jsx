import React from "react";

function UserCard({ name, qulification }) {
  return (
    <div>
      <h4>Name : {name}</h4>
      <p>qulification : {qulification}</p>
    </div>
  );
}

export default UserCard;
