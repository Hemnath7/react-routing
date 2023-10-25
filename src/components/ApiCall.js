import axios from "axios";
import { useEffect, useState } from "react";

function ApiCall() {
  const [data, setData] = useState("jffd");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").
    then((res) => {
      console.log(res);
    });
  }, []);
}

export default ApiCall;
