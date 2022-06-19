import "./user-item.styles.scss";

/*
{
    "id": "938f1c3e4526aac169e463c55713fe157b419f1f",
    "username": "bdullard0",
    "firstName": "Benito",
    "lastName": "Dullard",
    "email": "bdullard0@home.pl",
    "country": "GM",
    "gender": "Male",
    "age": 64,
    "avatarUrl": "https://robohash.org/enimassumendaharum.png?size=75x75&set=set1",
    "creditCardNumber": "3545689564610182",
    "creditCardType": "jcb"
}

*/

function UserItem({ user, style }) {
  const {
    username,
    firstName,
    lastName,
    age,
    email,
    gender,
    country,
    avatarUrl,
  } = user;

  return (
    <div style={style} className="user-item">
      <div className="avatar">
        <img src={avatarUrl} height={50} width={50} alt={username} />
      </div>
      <div className="content">
        <div className="details">
          <div className="name">
            {username}{" "}
            <span className="fst-italic">({`${lastName}, ${firstName}`})</span>,{" "}
            {country}
          </div>
          <div className="email">{email}</div>
        </div>
        <div className="flags-controls">
          <div className="controls">
            <button className="btn btn-link fw-bold">Edit</button>
            <button className="btn btn-sm btn-danger">Add</button>
          </div>
          <div className="flags">
            <span className="badge bg-primary">{gender}</span>
            <span className="badge bg-success">Age: {age}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
