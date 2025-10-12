import React from "react";
import { Outlet, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Profile;
