import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile Page</h2>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="details" style={{ marginRight: "10px" }}>Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
