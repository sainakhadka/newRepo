import React, { useState } from "react";
import { Eye, EyeOff, RefreshCcw, User } from "lucide-react";

const StudentL: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Username</label>
          <div className="flex items-center border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Username"
              className="flex-1 px-3 py-2 outline-none"
            />
            <div className="px-3 text-gray-500">
              <User size={18} />
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="flex items-center border rounded-md overflow-hidden">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="flex-1 px-3 py-2 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="px-3 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* CAPTCHA */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">CAPTCHA</label>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex-1 border rounded-md px-3 py-2 text-center font-bold tracking-widest bg-gray-50">
              XYBPYK
            </div>
            <button
              type="button"
              className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
            >
              <RefreshCcw size={18} />
            </button>
          </div>

          <input
            type="text"
            placeholder="Enter CAPTCHA shown above"
            className="w-full border rounded-md px-3 py-2 outline-none"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-end mb-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>

        {/* Forgot links */}
        <div className="text-sm space-y-1">
          <a href="#" className="text-blue-600 hover:underline block">
            Forgot Password
          </a>
          <a href="#" className="text-blue-600 hover:underline block">
            Forgot LoginId
          </a>
        </div>

      </div>
    </div>
  );
};

export default StudentL;
