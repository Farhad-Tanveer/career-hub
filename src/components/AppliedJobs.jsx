import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../utilities/fakedb";
import AppliedJobsDetails from "./AppliedJobsDetails";

const AppliedJobs = () => {
  const [job, setJob] = useState([]);

  // load data from json file
  const productData = useLoaderData();
  // console.log(productData);

  useEffect(() => {
    // get shopping cart from local storage
    const storedJobs = getShoppingCart();
    // console.log(savedJobs);
    let savedJobs = [];
    // iterate local storage object using for in and match with the actual data
    for (const id in storedJobs) {
      const foundJob = productData.find((job) => job.id === parseInt(id));
      if (foundJob) {
        savedJobs.push(foundJob);
      }
    }
    setJob(savedJobs);
  }, [productData]);
  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col p-6 space-y-4 sm:p-10 ">
        <h2 className="text-xl font-semibold"></h2>
        <ul className="flex flex-col gap-3">
          {job.map((singleJob) => (
            <AppliedJobsDetails
              singleJob={singleJob}
              key={singleJob.id}
            ></AppliedJobsDetails>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppliedJobs;
