import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllJobs from "./AllJobs";
import CatagoryList from "./CatagoryList";

const Home = () => {
  const catagories = useLoaderData();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1484981138541-3d074aa97716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" text-start text-neutral-content">
          <div className="max-w-md absolute bottom-1/4 left-20 right-0">
            <h1 className="mb-5 text-5xl font-bold text-white">
              One Step Closer To Your{" "}
              <span className="bg-gradient-to-r from-purple-200 via-purple-400 to-purple-500 inline-block text-transparent bg-clip-text">
                Dream Job
              </span>
            </h1>
            <p className="mb-5">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="text-center mt-24">
        <h1 className="text-3xl font-bold mb-5 leading-relaxed">
          Job Category List
        </h1>
        <p className=" text-gray-600">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-20 container mx-auto">
        {catagories.map((catagory, index) => (
          <CatagoryList catagory={catagory} key={index}></CatagoryList>
        ))}
      </div>
      <div className="text-center mt-24">
        <h1 className="text-3xl font-bold mb-5 leading-relaxed">
          Featured Jobs
        </h1>
        <p className=" text-gray-600">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20 container mx-auto">
        {jobs.slice(0, 4).map((job) => (
          <AllJobs job={job} key={job.id}></AllJobs>
        ))}
      </div>
      <div className="flex justify-center items-center my-10">
        <button className="btn btn-primary">See All Jobs</button>
      </div>
    </div>
  );
};

export default Home;
