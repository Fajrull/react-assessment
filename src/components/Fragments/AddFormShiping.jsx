import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { createShipping as createShippingService } from "../../services/Shipping";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddFormShiping = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleCreateShipping = async () => {
    if (!name.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Nama shipping tidak boleh kosong.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const data = { name };
      await createShippingService(data);
      Swal.fire({
        title: "Sukses!",
        text: "Shipping berhasil ditambahkan",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/shipping-comps");
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "Terjadi kesalahan saat menambah shipping",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <div className="flex h-screen bg-[#a7a7a7] ">
        <Sidebar />
        <main className="w-[80%]">
          <div className="bg-[#f8f8f8] w-auto h-[600px] p-10 m-10 rounded-lg">
            <h1 className="font-bold text-3xl">Tambah Shipping Comps</h1>
            <div className="flex flex-col mt-5">
              <label htmlFor="nama">Nama</label>
              <input
                type="text"
                className="w-[250px] h-[30px] p-3 border-2 border-[#dedede] rounded-lg hover:outline-none "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                onClick={handleCreateShipping}
                className="w-[100px] h-[30px] border-2 border-[#dedede] rounded-lg mt-3"
              >
                Simpan
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AddFormShiping;
