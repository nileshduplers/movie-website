import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "../usePagination";

function StreamMovie() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <section className="stream-movie py-10">
      <div className="container m-auto px-5">
        <h1 className="text-center text-5xl text-white">
          Stream Latest Movies Now!
        </h1>
        <div className="filter-data py-10">
          <ul className="flex items-center justify-center text-3xl">
            <li className="mx-5"></li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
          {currentRecords.map((data) => {
            return (
              <div
                key={data.id}
                className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg w-full"
                    src={data.thumbnailUrl}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {data.title}
                    </h5>
                  </a>
                </div>
                <div className="year p-5 py-2">
                  <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.Year}
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        ;
      </div>
    </section>
  );
}

export default StreamMovie;
