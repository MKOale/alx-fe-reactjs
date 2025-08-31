// src/components/UserProfile.jsx

export default function UserProfile({ name, age, bio }) {
  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
    </div>
  );
}
