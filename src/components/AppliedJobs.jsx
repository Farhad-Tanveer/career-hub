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

  // handle remote jobs
  const handleRemoteJobs = (job) => {
    const remoteJob = job.filter(
      (remote) => remote.remoteOrOnsite === "Remote"
    );
    setJob(remoteJob);
  };
  const handleOnsiteJobs = (job) => {
    const onsiteJob = job.filter(
      (onsite) => onsite.remoteOrOnsite === "Onsite"
    );
    setJob(onsiteJob);
  };

  return (
    <>
      <div className=" w-full pt-10 pb-6">
        <h1 className="text-3xl text-center bg-base-100">Applied Jobs</h1>
      </div>
      <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
        <div className="flex flex-col p-6 space-y-4 sm:p-10 ">
          <ul className="flex flex-col gap-3">
            <div className="flex justify-center gap-2 text-white ">
              <button
                onClick={() => handleRemoteJobs(job)}
                className="btn btn-info text-white"
              >
                Show Remote Jobs
              </button>
              <button
                onClick={() => handleOnsiteJobs(job)}
                className="btn btn-success text-white"
              >
                Show Onsite Jobs
              </button>
            </div>
            {job.map((singleJob) => (
              <AppliedJobsDetails
                singleJob={singleJob}
                key={singleJob.id}
              ></AppliedJobsDetails>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;
