import Card from "./card";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Welcome to Home page</h1>
      {data.map((ele) => (
        <Card Id={ele.id} Name={ele.name} key={ele.id} />
      ))}
    </div>
  );
}

export default Home;
