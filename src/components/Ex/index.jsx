import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type_posts, type_todos, type_users } from "../../store/actions";

export default function Ex() {
  const stateData = useSelector((state) => state);
  const dispatch = useDispatch();

  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${stateData.types}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [stateData.types]);

  return (
    <div className="flex flex-col gap-2">
      <h1>Type: {stateData.types}</h1>
      <div className="flex gap-2">
        <button
          className="border-2 rounded-md border-black hover:bg-black hover:text-white hover:border-green-500 transition-all"
          onClick={() => dispatch(type_users())}
        >
          Users
        </button>
        <button
          className="border-2 rounded-md border-black hover:bg-black hover:text-white hover:border-green-500 transition-all"
          onClick={() => dispatch(type_todos())}
        >
          Todos
        </button>
        <button
          className="border-2 rounded-md border-black hover:bg-black hover:text-white hover:border-green-500 transition-all"
          onClick={() => dispatch(type_posts())}
        >
          Posts
        </button>
      </div>
      <pre className="bg-black text-green-500">
        {JSON.stringify(data, null, 1)}
      </pre>
    </div>
  );
}
