import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { getShipping } from "../../services/Shipping";
import { updateShipping } from "../../services/Shipping";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteShipping } from "../../services/Shipping";

const AddFormShiping = () => {
  const [name, setName] = useState("");
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataById = async () => {
      if (id) {
        try {
          const allData = await getShipping();
          const selectedItem = allData.find((item) => item.id === parseInt(id));
          if (selectedItem) {
            setName(selectedItem.name);
          }
        } catch (error) {
          console.error("Error fetching data by ID:", error);
        }
      }
    };

    fetchDataById();
  }, [id]);

  const EditFormShiping = async () => {
    try {
      await updateShipping(id, { name });
      Swal.fire({
        title: "Sukses!",
        text: "Shipping berhasil diupdate",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/shipping-comps");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda tidak dapat mengembalikan data ini setelah dihapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      try {
        await deleteShipping(id);
        Swal.fire("Dihapus!", "Data telah berhasil dihapus.", "success");
        navigate("/shipping-comps");
      } catch (error) {
        console.error("Error deleting data:", error);
        Swal.fire("Gagal!", "Terjadi kesalahan saat menghapus data.", "error");
      }
    }
  };

  return (
    <>
      <div className="flex h-screen bg-[#a7a7a7] ">
        <Sidebar />
        <main className="w-[80%]">
          <div className="bg-[#f8f8f8] w-auto h-[600px] p-10 m-10 rounded-lg">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-3xl">Edit Shipping Comps</h1>
              <FontAwesomeIcon
                onClick={() => handleDelete(id)}
                icon={faTrash}
                className="text-xl bg-red-500 p-2 rounded-full cursor-pointer text-white"
              />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="nama">Nama</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-[250px] h-[30px] p-3 border-2 border-[#dedede] rounded-lg hover:outline-none "
              />
              <button
                onClick={EditFormShiping}
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
