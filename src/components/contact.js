import { useParams } from "react-router-dom";
import CardDetails from "./cardDetails";
import { useEffect, useState } from "react";
import axios from "axios";

function Contact() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  }, []);

  return (
    <div>
      <h1>Contact page {id}</h1>
      <CardDetails Id={data.id} Name={data.name} UserName={data.username} Email={data.email}/>
    </div>
  );
}

export default Contact;
