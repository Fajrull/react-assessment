import React, { useEffect, useState } from "react";
import Sidebar from "../Fragments/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { getShipping } from "../../services/Shipping";
import { useNavigate } from "react-router-dom";

const ShipingCompsContent = () => {
  const [shippingData, setShippingData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const data = await getShipping();
      setShippingData(data);
      setFilteredData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = () => {
    navigate("/add-shiping");
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearch(searchValue);

    const filtered = shippingData.filter((item) => {
      return item.name.toLowerCase().includes(searchValue);
    });

    setFilteredData(filtered);
  };

  const handleRowClick = (id) => {
    navigate(`/edit-shiping?id=${id}`);
  };
  return (
    <>
      <div className="flex h-screen bg-[#a7a7a7] ">
        <Sidebar />
        <main className="w-[80%]">
          <div className="bg-[#f8f8f8] w-auto h-auto p-10 m-10 rounded-lg">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <h1 className="font-bold text-3xl">Shipping Comps</h1>
                <FontAwesomeIcon
                  onClick={handleAdd}
                  icon={faPlus}
                  className="text-xl bg-[#4678f3] p-2 rounded-full cursor-pointer text-white"
                />
              </div>
              <input
                type="text"
                placeholder="Cari"
                value={search}
                onChange={handleSearch}
                className="w-[250px] h-[30px] p-3 border-2 border-[#dedede] rounded-lg hover:outline-none "
              />
            </div>
            <div className="mt-5">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nama</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr
                      key={item.id}
                      onClick={() => handleRowClick(item.id)}
                      className="cursor-pointer hover:bg-gray-200"
                    >
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ShipingCompsContent;
