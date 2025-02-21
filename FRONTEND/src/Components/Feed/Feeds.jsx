import React from "react";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import Sidebar from "../Navigation/Sildebar";

const Feeds = () => {
  const data = [
    {
      name: "Yashi Bhatia",
      id: "0832CS201088",
      title: "Consectetur",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Ritesh Kothari",
      id: "0832CS201032",
      title: "Keshathsubs",
      desc: "“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”",
    },
    {
      name: "Devika Namdev",
      id: "0832CS201076",
      title: "De Finibus Bonorum ",
      desc: " labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et ultrices. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Ornare aenean euismod elementum nisi quis eleifend. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Elementum pulvinar etiam non quam lacus suspendisse. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Euismod elementum nisi quis eleifend quam adipiscing vitae. Nibh sit amet commodo nulla facilisi. A iaculis at erat pellentesque adipiscing commodo elit. Posuere morbi leo urna molestie. Viverra nam libero justo laoreet.",
    },
    {
      name: "Kritik Rai",
      id: "0832CS201145",
      title: "Ncididunt",
      desc: "Viverra mauris in aliquam sem fringilla. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Sodales neque sodales ut etiam sit amet nisl purus in. Libero justo laoreet sit amet cursus sit amet dictum. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. At quis risus sed vulputate odio ut. ",
    },
    {
      name: "Saurabh Sharma",
      id: "0832CS201102",
      title: "Honsectetur",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Ishvya Lohain ",
      id: "0832CS201021",
      title: "Clutch & Bold",
      desc: " Viverra mauris in aliquam sem fringilla. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Sodales neque sodales ut etiam sit amet nisl purus in. Libero justo laoreet sit  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis.",
    },
  ];
  return (
    <>
    <Sidebar/>
      <div className="p-6 sm:ml-64">
        {data.map((item) => {
          return (
            <div className="max-w-3xl mx-auto bg-cyan-700 p-5 rounded-md shadow-md  mt-20">
              {/* User Information */}
              <div className="flex items-center mb-4 ">
                {/* <img src={"NicePng_profile-icon-png_2024687.png"} alt="Profile" className="w-10 h-10 rounded-full mr-4" /> */}
                <div className="flex  w-full">
                  <p className="text-lg w-80 text-white font-semibold">
                    {item.name}
                  </p>
                  <p className="text-white w-96 pt-1   flex justify-end ">
                    ID: {item.id}
                  </p>
                </div>
              </div>

              {/* Title and Description Divs */}
              <div className="mb-4 border rounded-md p-4">
                <div className="mb-2">
                  <label
                    htmlFor="title"
                    className="block text-white text-lg font-bold mb-2"
                  >
                    {item.title}
                  </label>
                </div>

                <div>
                  <div className=" p-1 ">
                    <div
                      contentEditable="false"
                      className="placeholder-text text-sm  text-white"
                      placeholder="Enter description..."
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              </div>

              {/* Like and Comment Buttons */}
              {/* <div className="flex">
                                <button className="flex items-center bg-blue-500 text-white py-1 px-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                                <FaThumbsUp className="text-sm mr-1" /> Like
                                </button>
                                <button className="flex items-center bg-gray-500 text-white py-1 px-2 rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray">
                                    <FaComment className="text-sm mr-1" /> Comment
                                </button>
                            </div> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Feeds;
