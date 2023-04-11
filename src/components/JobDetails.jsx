import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faDollar,
  faPhone,
  faMailBulk,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    const matchJob = jobs.find((job) => job.id === parseInt(id));
    if (matchJob) {
      setJob(matchJob);
    }
  }, []);

  const handleAddToCart = (id) => {
    addToDb(id);
  };

  const {
    jobTitle,
    salary,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    phone,
    email,
    location,
  } = job;

  return (
    <div>
      <h1 className="text-3xl text-center my-10">Specifics of the Position</h1>
      <div className="grid lg:grid-cols-3 container mx-auto space-x-10 mt-16 text-sm leading-loose">
        <div className="col-span-2 space-y-5">
          <h1>
            <span className="font-bold">Job Description: </span>
            <p>{jobDescription}</p>
          </h1>
          <h1>
            <span className="font-bold">Job Responsibility: </span>
            <p>{jobResponsibility}</p>
          </h1>
          <h1>
            <p className="font-bold">Educational Requirements: </p>
            <p>{educationalRequirements}</p>
          </h1>
          <h1>
            <p className="font-bold">Experiences: </p>
            <p>{experiences}</p>
          </h1>
        </div>
        <div>
          <div className="flex flex-col bg-purple-100 rounded-md gap-3 px-6 py-6 w-80">
            <h1 className="font-bold">Job details</h1>
            <hr className="border border-gray-400 w-full" />
            <div className="flex gap-2 justify-start">
              <FontAwesomeIcon className=" text-purple-400" icon={faDollar} />
              <p className="text-sm ">
                <span className=" font-medium text-sm">Salary</span>: {salary}
              </p>
            </div>
            <div className="flex gap-2 justify-start">
              <FontAwesomeIcon className=" text-purple-400" icon={faBook} />
              <p className="text-sm ">
                <span className="font-medium  text-sm">Job Title</span>:{" "}
                {jobTitle}
              </p>
            </div>
            <h1 className="font-bold">Contact Information</h1>
            <hr className="border border-gray-400 w-full" />
            <div className="flex gap-2 justify-start">
              <FontAwesomeIcon className=" text-purple-400" icon={faPhone} />
              <p className="text-sm ">
                <span className=" font-medium text-sm">Phone</span>: {phone}
              </p>
            </div>
            <div className="flex gap-2 justify-start">
              <FontAwesomeIcon className=" text-purple-400" icon={faMailBulk} />
              <p className="text-sm ">
                <span className=" font-medium text-sm">Email</span>: {email}
              </p>
            </div>
            <div className="flex gap-2 justify-start">
              <FontAwesomeIcon
                className=" text-purple-400"
                icon={faLocationDot}
              />
              <p className="text-sm ">
                <span className=" font-medium text-sm">Location</span>:{" "}
                {location}
              </p>
            </div>
          </div>
          <button
            onClick={() => handleAddToCart(id)}
            className="btn btn-primary w-80 mt-1"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
