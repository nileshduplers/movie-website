import axios from "axios";
import React, { useEffect, useState } from "react";

function StreamMovie() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <section className="stream-movie py-10">
      <div className="container m-auto">
        <h1 className="text-center text-5xl text-white">
          Stream Latest Movies Now!
        </h1>

        <div className="grid grid-cols-4 gap-4 py-10">
          {data.map((data) => {
            return (
              <div
                key={data.Title}
                className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg w-full"
                    src={data.Poster}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {data.Title}
                    </h5>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StreamMovie;
