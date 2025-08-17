import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-6 rounded-2xl shadow-md bg-white border border-gray-200 cursor-pointer 
            transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Company Info */}
      <div className="flex flex-col">
        <h2 className="text-gray-800 font-semibold text-sm tracking-wide uppercase">
          {job?.company?.name}
        </h2>
        <p className="text-xs text-gray-500">📍 India</p>
      </div>

      {/* Job Title & Description */}
      <div className="mt-3">
        <h1 className="text-lg font-bold text-gray-900">{job?.title}</h1>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {job?.description}
        </p>
      </div>

      {/* Job Details Badges */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge
          className="bg-blue-100 text-blue-700 font-medium rounded-full"
          variant="ghost"
        >
          {job?.position} Positions
        </Badge>
        <Badge
          className="bg-red-100 text-red-700 font-medium rounded-full"
          variant="ghost"
        >
          {job?.jobType}
        </Badge>
        <Badge
          className="bg-purple-100 text-purple-700 font-medium rounded-full"
          variant="ghost"
        >
          {job?.salary} LPA
        </Badge>
      </div>

      {/* Call to Action */}
      <div className="flex items-center gap-1 mt-5 text-blue-600 font-semibold text-sm">
        <span>View Details</span>
        <ArrowRight size={16} />
      </div>
    </div>
  );
};

export default LatestJobCards;
