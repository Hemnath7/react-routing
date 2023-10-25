function CardDetails(props) {
  return (
    <div className="card">
      <h2>{props.Id}</h2>
      <h3>{props.Name}</h3>
      <h4>{props.UserName}</h4>
      <a>{props.Email}</a>
      <p>dummy</p>
    </div>
  );
}

export default CardDetails;
