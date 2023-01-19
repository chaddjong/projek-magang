import React from "react";
import Logo from "../img/logo.png";
import Comments from "../components/Comments";

export default function Home() {
  return (
    <body className="w-screen min-h-screen flex flex-col items-center">
      <div className="w-[95%]">
        <img src={Logo} className="w-[30vw] my-[20px]" />
      </div>
      <div className="w-[95%] border-[1px] border-gray-300 rounded-[5px] pt-[10px] pl-[10px] pr-[10px] pb-[35px] mb-[10px]">
        <p className="font-bold text-[5vw]">My Article</p>
        <p className="text-gray-400 font-semibold text-[3.5vw]">
          18th January 2023
        </p>
        <p className="mt-[2vh]">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <div className="flex flex-col justify-start w-[95%] border-[1px] border-gray-300 rounded-[5px] pt-[10px] pl-[10px] pr-[10px] pb-[35px] mb-[10px]">
        <p className="font-bold text-[5vw]">Add your comment</p>
        <form className="flex flex-col gap-2 mt-[10px]">
          <input
            type="text"
            placeholder="Your name ..."
            className="border-black border-[1px] pl-[5px] w-[40vw]"
          />
          <input
            type="text"
            placeholder="Your comment ..."
            className="border-black border-[1px] pl-[5px] w-[70vw] h-[6vh]"
          />
          <div className="flex flex-row gap-2">
            <input
              type="text"
              placeholder="Captcha ..."
              className="border-black border-[1px] pl-[5px] w-[40vw]"
            />
            <p className="font-bold bg-slate-200 w-[30vw]">What is x + y?</p>
          </div>
          <button
            type="submit"
            className="bg-sky-500 rounded-md text-white w-[15vw] mt-[20px]"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-start w-[95%] border-[1px] border-gray-300 rounded-[5px] pt-[10px] pl-[10px] pr-[10px] pb-[35px]">
        <p className="font-bold text-[5vw] mb-[20px]">Comments (0)</p>
        <Comments />
      </div>
    </body>
  );
}
