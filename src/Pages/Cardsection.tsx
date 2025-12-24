import React from "react";
import { Link } from "react-router-dom";
import studentImg from "../assets/student.png";
import mentorImg from "../assets/mentor.png";
import studentL from "../assets/studentl.png";
import mentorL from "../assets/mentorl.png";
import adminL from "../assets/adminl.png";

const CardsSection: React.FC = () => {
  // Register cards
  const cards = [
    {
      title: "As Student",
      color: "text-blue-600",
      img: studentImg,
      path: "/register/student",
    },
    {
      title: "As Mentor",
      color: "text-blue-600",
      img: mentorImg,
      path: "/register/mentor",
    },
  ];

  // Login cards 
  const loginCards = [
    { title: "As Student", color: "text-blue-600", img: studentL },
    { title: "As Mentor", color: "text-blue-600", img: mentorL },
    { title: "As Admin", color: "text-blue-600", img: adminL },
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Register Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#154D71]">
          Register
        </h2>

        {/* Register Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-items-center mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white rounded-lg shadow-sm px-4 py-3 w-full max-w-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="w-14 h-14 rounded-md overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <h3 className={`text-lg font-semibold ${card.color}`}>
                {card.title}
              </h3>

              {/* Arrow Link */}
              <Link
                to={card.path}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-[#FFF9AF] rounded-full hover:bg-[#FFE066] transition-colors cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#154D71]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12h12"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Login Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#154D71]">
          Login
        </h2>

        {/* Login Cards */}
         {/* Login Cards */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 justify-items-center">
  {loginCards.map((card, index) => {
    // Define path for each login card
    let path = "";
    if (card.title === "As Student") path = "/login/student";
    else if (card.title === "As Mentor") path = "/login/mentor";
    else if (card.title === "As Admin") path = "/login/admin";

    return (
      <div
        key={index}
        className="flex items-center justify-between bg-white rounded-lg shadow-sm px-4 py-3 w-full max-w-sm hover:shadow-md transition-shadow duration-300"
      >
        {/* Image */}
        <div className="w-14 h-14 rounded-md overflow-hidden">
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <h3 className={`text-lg font-semibold ${card.color}`}>
          {card.title}
        </h3>

        {/* Arrow Link */}
        <Link
          to={path}
          target="_blank" // remove if you want it in the same tab
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center bg-[#FFF9AF] rounded-full hover:bg-[#FFE066] transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#154D71]"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12h12"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default CardsSection;
