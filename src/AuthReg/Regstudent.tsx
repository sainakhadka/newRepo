import React, { useState } from "react";

function StudentRegister() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    course: "",
    linkedin: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Student Registration Data:", formData);
    alert(
      "Registration submitted successfully!\n\n(This is frontend only. Backend integration required to send email & save Excel.)"
    );
    setFormData({
      name: "",
      contact: "",
      course: "",
      linkedin: "",
      email: "",
    });
  };

  const courses = [
    "Web Development",
    "UI/UX Design",
    "Data Science",
    "AI / ML",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 sm:p-10"
      >
        <h2 className="text-3xl font-bold text-[#154D71] text-center mb-8">
          Student Registration
        </h2>

        {/* Name */}
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#154D71] focus:border-[#154D71] transition"
          />
        </div>

        {/* Contact */}
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">Contact</label>
          <input
            type="tel"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact number"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#154D71] focus:border-[#154D71] transition"
          />
        </div>

        {/* Interested Course - Custom Dropdown */}
        <div className="mb-5 relative">
          <label className="block text-sm font-medium mb-2">
            Interested Course
          </label>
          <div className="relative">
            <select
              name="course"
              required
              value={formData.course}
              onChange={handleChange}
              className="w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#154D71] focus:border-[#154D71] transition"
            >
              <option value="">Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
            {/* Custom arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">
            LinkedIn Profile
          </label>
          <input
            type="url"
            name="linkedin"
            placeholder="https://linkedin.com/in/username"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#154D71] focus:border-[#154D71] transition"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#154D71] focus:border-[#154D71] transition"
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-[#FFF9AF] text-[#154D71] py-3 font-semibold text-lg  active:scale-95 transition transform shadow-md"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default StudentRegister;

