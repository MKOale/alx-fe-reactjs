import React from "react";

const UserProfile = ({ name, age, bio, image }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-sm hover:scale-110 transition-transform duration-300 ease-in-out">
      <div className="flex flex-col items-center p-6">
        <img
          className="h-32 w-32 rounded-full object-cover"
          src={image}
          alt={`${name}'s profile`}
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800 hover:text-blue-500">
          {name}
        </h2>
        <p className="text-gray-600 hover:text-blue-500">Age: {age}</p>
        <p className="mt-2 text-gray-600 hover:text-blue-500">{bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;
