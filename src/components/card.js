import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Card(props) {
  //   const { id } = useParams();
  return (
    <Link to={`/contact/${props.Id}`}>
      <div className="card" key={props.Id}>
        <h2>{props.Id}</h2>
        <h3>{props.Name}</h3>
      </div>
    </Link>
  );
}

export default Card;
