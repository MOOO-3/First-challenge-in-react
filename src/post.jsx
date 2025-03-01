export function Post({ name, age, bio }) {
  return (
    <div>
      <div className="content">
        <h1>{name}</h1>
        <hr />
        <p> i'm {age}</p>
        <div className="bio">
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
}
