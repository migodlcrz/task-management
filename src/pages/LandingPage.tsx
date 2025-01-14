import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

interface LogForm {
  email: string;
  password: string;
}

const LandingPage = () => {
  const navigate = useNavigate();

  const login = useLogin();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginForm, setLoginForm] = useState<LogForm>({
    email: "",
    password: "",
  });

  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="flex flex-col w-2/3 h-full bg-blue-100 items-start justify-start p-10">
        <h1 className="text-blue-500 font-bold text-8xl">FocusFlow</h1>
        <h2 className="text-black-700 text-md">
          Stay on top of your tasks, effortlessly.
        </h2>
      </div>
      <div className="flex flex-col w-1/3 h-full bg-white items-center justify-center">
        <div className="flex flex-col w-[75%] items-start justify-center space-y-4">
          <div className="flex flex-col items-start justify-center bg-white w-full p-6 rounded-sm space-y-4 shadow-lg">
            <h1 className="text-black font-bold text-2xl">Sign In</h1>
            <input
              className="border border-gray-300 w-full p-2 rounded-sm"
              type="text"
              placeholder="Email"
            />
            <div className="relative w-full">
              <input
                className="border border-gray-300 w-full p-2 rounded-sm"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <h2 className="text-blue-500 font-semibold hover:text-blue-300 transition-all duration-200">
                    Hide
                  </h2>
                ) : (
                  <h2 className="text-blue-500 font-semibold hover:text-blue-300 transition-all duration-200">
                    Show
                  </h2>
                )}
              </button>
            </div>
            <button className="text-blue-500 hover:text-blue-300 transition-all duration-300">
              Forgot Password?
            </button>
            <button className="w-full bg-blue-500 text-white py-3 rounded-full font-semibold hover:bg-blue-300 transition-all duration-200">
              Sign In
            </button>
          </div>
          <h2 className="text-black">
            New to TaskMe?{" "}
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="text-blue-500 hover:text-blue-300 transition-all duration-300"
            >
              Join now!
            </button>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
