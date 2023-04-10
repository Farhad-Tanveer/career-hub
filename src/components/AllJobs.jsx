import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollar } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate, useNavigate } from "react-router-dom";

const AllJobs = ({ job }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    fulltimeOrParttime,
    salary,
    location,
  } = job;
  return (
    <div>
      <div className="card card-compact bg-white w-full shadow-xl">
        <figure>
          <img className="w-50 h-28 " src={companyLogo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{jobTitle}</h2>
          <p>{companyName}</p>
          <div className="flex gap-3 my-3">
            <a className="btn btn-outline btn-info">{remoteOrOnsite}</a>
            <a className="btn btn-outline btn-info">{fulltimeOrParttime}</a>
          </div>
          <div className="flex gap-4 my-3">
            <div className="flex gap-2  items-center">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>{location}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faDollar} />
              <p>{salary}</p>
            </div>
          </div>
          <div className="card-actions justify-start">
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
