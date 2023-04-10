import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faDollar,
  faPhone,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    const matchJob = jobs.find((job) => job.id === parseInt(id));
    if (matchJob) {
      console.log(matchJob);
      setJob(matchJob);
    }
  }, []);
  const {
    jobTitle,
    salary,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    contactInformation,
  } = job;

  return (
    <div className="grid lg:grid-cols-3 container mx-auto space-x-10 mt-20">
      <div className=" col-span-2">
        <h1>
          <span className="font-bold">Job Description:</span>
          {jobDescription}
        </h1>
        <h1>
          <span className="font-bold">Job Responsibility:</span>
          {jobResponsibility}
        </h1>
        <h1>
          <p className="font-bold">Educational Requirements:</p>
          {educationalRequirements}
        </h1>
        <h1>
          <p className="font-bold">Experiences:</p>
          {experiences}
        </h1>
      </div>
      <div className=" w-64 border border-purple-300">
        <h1>Job details</h1>
        <hr className="border border-gray-400 w-28" />
        <div>
          <FontAwesomeIcon icon={faDollar} />
          <p>
            <span>Salary</span>:{salary}
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faDollar} />
          <p>
            <span>Job Title</span>:{jobTitle}
          </p>
        </div>
        <h1>Contact Information</h1>
        <hr className="border border-gray-400 w-20" />
        {/* <div>
          <FontAwesomeIcon icon={faPhone} />
          <p>
            <span>Phone</span>:{location}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default JobDetails;
