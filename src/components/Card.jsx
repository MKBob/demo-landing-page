import React from "react";
import frame1 from "../components/images/frame1.png";
import frame2 from "../components/images/frame2.png";
import frame3 from "../components/images/frame3.png";

const features = [
  {
    img: frame1,
    title: "Collaboration Teams",
    desc: "Here you can handle projects together with your team virtually.",
  },
  {
    img: frame3,
    title: "Cloud Storage",
    desc: "Secure cloud storage to manage and save your work easily.",
  },
  {
    img: frame2,
    title: "Daily Analytics",
    desc: "Get insights every day to track project performance.",
  },
];

const Card = () => {
  return (
    <div className="px-6 sm:px-12 lg:px-32 py-14">

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <p className="text-5xl font-bold">
          Our Features <br /> you can get
        </p>

        <p className="text-sm sm:text-base text-[#A6A6A6] max-w-md">
        We offer a variety of interesting features that you can <br />
         help increase yor productivity at work and manage <br />
          your projrct esaly
        </p>

        <button className="px-7 py-4 bg-[#54BD95] text-white rounded-full w-fit">
          Get Started
        </button>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-16">
        {features.map((item, index) => (
          <div key={index} className="text-center sm:text-left">
            <img src={item.img} alt={item.title} className="mx-auto sm:mx-0" />
            <p className="py-5 text-2xl font-bold text-gray-900">
              {item.title}
            </p>
            <p className="text-[#A6A6A6]">{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Card;
