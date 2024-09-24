import React, { useEffect } from "react";
import Sidebar from "../Fragments/Sidebar";

const DashboardContent = () => {
  useEffect(() => {
    const access_token = document.cookie.replace(
      /(?:(?:^|.*;\s*)access_token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    if (!access_token) {
      window.location.href = "/";
    }
  }, []);
  return (
    <>
      <div className="flex h-screen bg-[#a7a7a7] ">
        <Sidebar />
        <main className="w-[80%]">
          <div className="bg-[#f8f8f8] w-auto h-auto p-10 m-10 rounded-lg">
            <h1 className="font-bold text-3xl">Dashboard</h1>
            <div className="flex flex-col items-center justify-center bg-[#bdbdbd] w-auto h-[400px] p-10 m-10 rounded-lg">
              <h1 className="text-grey font-medium font-bold text-3xl">
                Selamat Datang
              </h1>
              <h1 className="text-xl">Tony Stark</h1>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardContent;
