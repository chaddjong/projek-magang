import React from "react";
import { useState } from "react";

export default function EditComment() {
  const [user, setUser] = useState("Faisal");
  const [comment, setComment] = useState(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, sunt."
  );
  const changeUser = (event) => {
    setUser(event.target.value);
  };
  const changeComment = (event) => {
    setComment(event.target.value);
  };

  return (
    <body className="p-[20px]">
      <div className="flex flex-row justify-between text-sky-600 mb-[20px]">
        <p>List of Comments</p>
        <p>Logout</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[95%] border-[1px] border-gray-300 rounded-[5px] pt-[10px] pl-[10px] pr-[10px] pb-[35px] mb-[10px]">
          <p className="font-bold text-[5vw]">Edit Comment</p>
          <div className="flex flex-col gap-3">
            <form className="flex flex-col gap-2 mt-[10px]">
              <input
                onChange={changeUser}
                value={user}
                className="border-black border-[1px] pl-[5px] w-[40vw]"
              />
              <input
                onChange={changeComment}
                value={comment}
                className="border-black border-[1px] pl-[5px] w-[70vw] h-[6vh]"
              />
              <button
                type="submit"
                className="bg-sky-600 rounded-md text-white w-[15vw] mt-[20px] font-bold"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}
