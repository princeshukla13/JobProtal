import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="flex flex-col gap-6 my-10">
        {/* Tagline */}
        <span className="mx-auto px-5 py-2 rounded-full bg-gray-100 text-[blue] font-medium shadow-sm">
          No. 1 Job Hunt Website
        </span>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-gray-800 leading-snug">
          Welcome Back! <br />
          <span className="text-[#6A38C2]">Find Your Dream Job</span> Today
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover thousands of opportunities from top companies and take the
          next step in your career journey.
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-xl shadow-lg border border-gray-200 pl-4 rounded-full items-center gap-3 mx-auto bg-white">
          <input
            type="text"
            placeholder="Search jobs by title, company, or skills..."
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full text-gray-700 placeholder-gray-400 text-base"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-[#6A38C2] hover:bg-[#5a2fad] transition-all px-6 py-5"
          >
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
