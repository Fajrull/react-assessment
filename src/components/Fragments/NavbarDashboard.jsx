import React from "react";

const NavbarDashboard = () => {
  return (
    <div className="flex justify-between px-10 py-3 bg-[#4678f3] text-white">
      <h1 className="font-bold">KLEDO TEST ADMIN</h1>
      <div className="flex gap-3 align-middle cursor-pointer">
        <img
          src="../../public/tony.jpeg"
          alt="profile"
          className="w-[30px] h-[30px] rounded-full"
        />
        <h1>Tony Stark</h1>
      </div>
    </div>
  );
};

export default NavbarDashboard;
