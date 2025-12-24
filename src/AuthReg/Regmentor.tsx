
import React, { useState } from "react";

function MentorRegister() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    course: "",
    linkedin: "",
    github: "",
    resume: "",
    experience: "",
    status: "",
    organization: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mentor Registration Data:", formData);
    alert(
      "Registration submitted successfully!\n\n(This is frontend only. Backend integration required to send email & save Excel.)"
    );

    // Reset form
    setFormData({
      name: "",
      contact: "",
      course: "",
      linkedin: "",
      github: "",
      resume: "",
      experience: "",
      status: "",
      organization: "",
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
        className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 sm:p-10 space-y-5"
      >
        <h2 className="text-3xl font-bold text-[#154D71] text-center mb-6">
          Mentor Registration
        </h2>

        {/* Row 1: Name & Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#154D71] focus:border-[#154D71] transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Contact</label>
            <input
              type="tel"
              name="contact"
              required
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter contact number"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#154D71] focus:border-[#154D71] transition"
            />
          </div>
        </div>

        {/* Row 2: Interested Course & LinkedIn */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="relative">
            <label className="block text-sm font-medium mb-2">
              Interested Course
            </label>
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
                />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">LinkedIn</label>
            <input
              type="url"
              name="linkedin"
              placeholder="https://linkedin.com/in/username"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#154D71] focus:border-[#154D71] transition"
            />
          </div>
        </div>

        {/* Row 3: GitHub & Resume */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2">GitHub</label>
            <input
              type="url"
              name="github"
              placeholder="https://github.com/username"
              value={formData.github}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#154D71] focus:border-[#154D71] transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Resume</label>
            <input
              type="text"
              name="resume"
              placeholder="Link to your resume"
              value={formData.resume}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#154D71] focus:border-[#154D71] transition"
            />
          </div>
        </div>

        {/* Row 4: Experience & Current Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2">Experience</label>
            <input
              type="text"
              name="experience"
              placeholder="Years of experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#154D71] focus:border-[#154D71] transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Current Status</label>
            <input
              type="text"
              name="status"
              placeholder="Employed / Student / Freelancer"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#154D71] focus:border-[#154D71] transition"
            />
          </div>
        </div>

        {/* Row 5: Previous Organization & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Previous Organization
            </label>
            <input
              type="text"
              name="organization"
              placeholder="Your previous company/organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#154D71] focus:border-[#154D71] transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#154D71] focus:border-[#154D71] transition"
            />
          </div>
        </div>

        {/* Send Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-[#FFF9AF] text-[#154D71] py-3 font-semibold text-lg  active:scale-95 transition transform shadow-md mt-3"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default MentorRegister;
