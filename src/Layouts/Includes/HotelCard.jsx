import React from "react";
import { FaStar, FaRegStar, FaWifi, FaRegHeart } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import { HiOutlineHome } from "react-icons/hi";
import Rating from "react-rating";
import { Card, CardHeader } from "@/components/ui/card";

const HotelCard = ({
  title,
  heading,
  rating,
  review,
  location,
  bed,
  wifi,
  price,
  image,
}) => {
  return (
    <div className="relative">
      <Card className="p-3 flex  items-start gap-x-3">
        <div className="lg:block hidden">
          <img className="h-28 w-auto rounded-md" src={image} alt="" />
        </div>
        <div className="w-full flex-col justify-between">
          <div>
            <p className="text-sm font-semibold text-purple-500">{title}</p>
            <h1 className="font-sans font-semibold text-slate-800">
              {heading}
            </h1>
          </div>
          {/* review */}
          <div className="flex gap-x-4 items-center pt-5">
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar className="text-yellow-300" />}
              placeholderSymbol={<FaStar className="text-yellow-300" />}
              fullSymbol={<FaStar className="text-yellow-300" />}
              readonly
            />
            <p className="font-bold text-sm">{rating}</p>
            <p className="text-slate-500 text-sm">{review} reviews</p>
          </div>
          {/* card footer */}
          <div className="flex justify-between mt-3">
            {/* features */}
            <div className="flex gap-x-4">
              <div className="flex gap-x-2 items-center text-slate-700 font-semibold">
                <TiLocationOutline className="inline-block" />
                <span className="text-sm">{location}</span>
              </div>
              <div className="lg:flex gap-x-2 items-center text-slate-700 font-semibold   hidden">
                <HiOutlineHome className="inline-block" />
                <span className="text-sm">{bed} Bed</span>
              </div>
              <div className="lg:flex gap-x-2 items-center text-slate-700 font-semibold  hideen">
                <FaWifi className="inline-block" />
                <span className="text-sm">
                  {wifi ? "WiFi" : "Not Available"}
                </span>
              </div>
            </div>
            {/* price */}
            <div>
              <h1 className="text-slate-800 font-bold text-lg">
                ${price}{" "}
                <span className="text-slate-400 font-normal text-xs">
                  AUD total
                </span>
              </h1>
            </div>
          </div>
        </div>
      </Card>
      {/* favourite button */}
      <div className="absolute top-7 right-3">
        <div className="p-2 border border-slate-300 w-fit rounded-lg">
          <FaRegHeart className="text-purple-500" />
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
