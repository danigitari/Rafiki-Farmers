import TableComponent from "../components/TableComponent";
import { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputElement } from "../components";
import Navbar from "./Navbar";
        

function RegisterFarm() {
  useEffect(() => {
    feather.replace();
  });
  const [value , setValue ] = useState()

      const [visible, setVisible] = useState(false);
          const footerContent = (
            <div>
              <button className="bg-green-500 rounded-full text-white px-4 py-2 text-lg shadow-md">
                <p className="flex items-center">
                  {" "}
                   Create
                </p>
              </button>
            </div>
          );

  return (
    <div className="w-full bg-gray-100 flex flex-col h-screen">
      <div className="bg-white w-full">
        {" "}
        <Navbar />
      </div>
      <div className="flex justify-between w-full px-10 py-5">
        <div className="flex py-2  text-gray-600 text-[20px]">
          {" "}
          Registered Farms{" "}
        </div>
        <button
          className="flex px-4 py-1 items-center rounded-full text-white bg-green-500 shadow-lg"
          onClick={() => setVisible(true)}
        >
          <i data-feather="plus" className=""></i>{" "}
          <p className="pl-1 pr-2"> Add New Farm</p>
        </button>
      </div>{" "}
      <TableComponent
        name={"Farms"}
        columns={[
          "name",
          "size",
          "county",
          "ward",
          "nearestShoppingCenter",
          "Preview"
        ]}
      />
      <Dialog
        header="Add New Farm"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        footer={footerContent}
      >
        <div className="grid grid-cols-6">
          <div className="col-span-3 p-5">
            <InputElement
              type="text"
              label="Farm Title"
              placeHolder="Farm Title"
              required={true}
              onChange={(e) => setFarmTitle(e.target.value)}
            />
          </div>

          <div className="col-span-3 p-5">
            <InputElement
              type="text"
              label="Size "
              placeHolder="size in Acerage"
              required={true}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
          <div className="col-span-3 p-5">
            <InputElement
              type="text"
              label="County"
              placeHolder="county of origin "
              required={true}
              onChange={(e) => setFarmTitle(e.target.value)}
            />
          </div>
          <div className="col-span-3 p-5">
            <InputElement
              type="text"
              label="Ward"
              placeHolder="ward"
              required={true}
              onChange={(e) => setFarmTitle(e.target.value)}
            />
          </div>
          <div className="col-span-3 p-5">
            <InputElement
              type="text"
              label="Nearest Shopping Center"
              placeHolder="Nearest Shopping Center"
              required={true}
              onChange={(e) => setFarmTitle(e.target.value)}
            />
          </div>
          <div className="col-span-3 p-5">
            <InputElement
              type="text"
              label="Location"
              placeHolder="location"
              required={true}
              onChange={(e) => setFarmTitle(e.target.value)}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default RegisterFarm;