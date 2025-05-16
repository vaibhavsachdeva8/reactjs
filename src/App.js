import React, { useEffect, useState } from "react";
import { api } from "./apiex";
import Blogs from "./Blogs";

const App = () => {
  useEffect(() => {
    api().then((blog) => {
      setData(blog);
    });
  }, []);
  const [data, setData] = useState(null);
  return (
    <div>
      <h1>API Fetch asdas d</h1>
      {data ? (
        data.map((arr) => <Blogs Blogtitle={arr.title} BlogDesc={arr.body} />)
      ) : (
        <h1>Data not found</h1>
      )}
    </div>
  );
};

export default App;
