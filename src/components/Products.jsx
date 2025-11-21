import React from "react";
import { Star, TrendUp, ChartPieSlice, Graph } from "@phosphor-icons/react";

const ratings = [
  { score: "4.9 / 5 rating", brand: "Databricks", filled: 4, empty: 0 },
  { score: "4.8 / 5 rating", brand: "Chainalysis", filled: 3, empty: 1 },
];

const features = [
  {
    icon: TrendUp,
    title: "Publishing",
    desc: "Plan, collaborate, and publish your content that drives meaningful engagement and brand growth.",
  },
  {
    icon: ChartPieSlice,
    title: "Analytics",
    desc: "Analyze your performance and create beautiful reports effortlessly.",
  },
  {
    icon: Graph,
    title: "Engagement",
    desc: "Quickly navigate and engage with your audience in real-time.",
  },
];

const Products = () => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row items-start justify-between px-6 sm:px-12 lg:px-32 py-14 bg-[#F9F8FE]">

      {/* LEFT CONTENT */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="mt-7 text-3xl sm:text-4xl font-bold leading-tight text-gray-900 pb-8">
          How we support our <br className="hidden lg:block" />Pratner all over the world
        </h1>

        <p className="text-sm sm:text-base text-[#A6A6A6] max-w-xl pb-12 mx-auto lg:mx-0">
        SaaS become a common delivery model for many business application, including office software,
         messaging software, payroll processing software, DBMS software, management software
        </p>

        {/* Ratings */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
          {ratings.map((item, i) => (
            <div key={i} className="text-center sm:text-left">
              <div className="flex justify-center sm:justify-start pt-4">
                {[...Array(item.filled)].map((_, i) => (
                  <Star key={i} size={28} weight="fill" className="text-amber-400" />
                ))}
                {[...Array(item.empty)].map((_, i) => (
                  <Star key={i} size={28} weight="fill" className="text-[#BBBBBB]" />
                ))}
              </div>

              <p className="py-5 text-lg font-semibold text-gray-900">{item.score}</p>
              <p className="text-[#A6A6A6]">{item.brand}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex flex-col gap-6 pt-10">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="flex gap-4 items-start pb-10">
            <div className="bg-[#FFFFFF] p-5">
            <Icon size={28} className="text-[#54BD95] " />

            </div>
            <div>
              <h2 className="font-bold text-2xl pb-3">{title}</h2>
              <p className="text-[#A6A6A6]">{desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Products;
