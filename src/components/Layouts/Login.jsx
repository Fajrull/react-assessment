import React from "react";
import { useForm } from "react-hook-form";
import Login from "../../services/Auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginComponent = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await Login(data);
    if (response.success) {
      const { access_token, expires_at } = response.data.data;
      document.cookie = `access_token=${access_token}; expires=${new Date(
        expires_at
      ).toUTCString()}; path=/; Secure; SameSite=Strict;`;

      Swal.fire({
        title: "Login Successful",
        text: response.message,
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/dashboard");
      });
    } else {
      Swal.fire({
        title: "Login Failed",
        text: response.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <h1 className="font-bold text-center mb-5 text-3xl">Login</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-[350px] w-[500px] bg-[#f8f8f8] p-10 border border-[#a7a7a7] rounded-lg"
      >
        <label htmlFor="email" className="text-[#a7a7a7] font-bold my-3">
          Email
        </label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          className="border border-[#a7a7a7] rounded-md w-[400px] h-[30px] p-3"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <label htmlFor="password" className="text-[#a7a7a7] font-bold my-3">
          Password
        </label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          className="border border-[#a7a7a7] rounded-md w-[400px] h-[30px] p-3"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="flex justify-center items-center mt-8 bg-[#4678f3] text-white rounded-full w-[300px] h-[30px] self-center py-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
