const UserCard = ({ name, email, phone }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <h4>{email}</h4>
      <p>{phone}</p>
    </div>
  );
};

export default UserCard;
