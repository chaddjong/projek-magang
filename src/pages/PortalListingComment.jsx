import React from "react";
import AdminComments from "../components/AdminComments";

export default function PortalListingComment() {
  return (
    <body className="p-[20px]">
      <div className="flex flex-row justify-between text-sky-600 mb-[20px]">
        <p>List of Comments</p>
        <p>Logout</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[95%] border-[1px] border-gray-300 rounded-[5px] pt-[10px] pl-[10px] pr-[10px] pb-[35px] mb-[10px]">
          <p className="font-bold">List of Comments</p>
          <div className="flex flex-col gap-3">
            <AdminComments />
            <AdminComments />
          </div>
        </div>
      </div>
    </body>
  );
}
