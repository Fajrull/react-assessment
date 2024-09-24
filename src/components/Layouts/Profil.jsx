import React from "react";

const Profil = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <h1 className="font-bold text-center mb-5 text-3xl">Profile</h1>
        </div>
        <div className="flex flex-col h-[420px] w-[620px] bg-[#f8f8f8] p-10 border border-[#a7a7a7] rounded-lg">
          <div className="flex flex-row-reverse">
            <img
              src="../../public/tony.jpeg"
              alt="profile"
              className="w-[120px] h-[100px] rounded-full"
            />
            <div>
              <div className="my-3">
                <h1 className="text-[#a7a7a7] font-medium">Nama</h1>
                <h1 className="font-bold">Muhammad Fajrul Khaq</h1>
              </div>
              <div className="my-3">
                <h1 className="text-[#a7a7a7] font-medium">Alamat</h1>
                <h1 className="font-bold">Semail Bangunharjo Sewon Bantul</h1>
              </div>
              <div className="my-3">
                <h1 className="text-[#a7a7a7] font-medium">No.HP</h1>
                <h1 className="font-bold">088226946694</h1>
              </div>
              <div className="my-3">
                <h1 className="text-[#a7a7a7] font-medium">Email</h1>
                <h1 className="font-bold">fajrulm05@gmail.com</h1>
              </div>
              <div className="my-3">
                <h1 className="text-[#a7a7a7] font-medium">Motto</h1>
                <h1 className="font-bold">
                  The best thing about boolean is even if you are wrong, you are
                  only off by a bit.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
