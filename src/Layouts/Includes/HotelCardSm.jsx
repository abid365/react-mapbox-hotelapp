import React from "react";
import Rating from "react-rating";
import { FaStar, FaRegStar, FaWifi, FaRegHeart } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import { BsLightbulb } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";

const HotelCardSm = ({
  price,
  heading,
  titlle,
  rating,
  review,
  location,
  image,
  rare,
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden border border-[#e2e2e2] relative">
      <img className="w-full" src={image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="text-sm mb-2 text-slate-400">
          <span className="font-bold text-slate-700 text-xl">${price}</span> AUD
          total
        </div>
        <p className="text-sm text-purple-400 font-semibold">{heading}</p>
        <h1 className="font-bold text-slate-500">{titlle}</h1>
        {/* review */}
        <div className="flex gap-x-4 items-center pt-3">
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
      </div>

      <div className="px-6 pt-2 pb-4">
        <div className="flex gap-x-2 items-center text-slate-700 font-semibold">
          <TiLocationOutline className="inline-block" />
          <span className="text-sm">{location}</span>
        </div>
      </div>
      {/* favourite button */}
      <div className="absolute top-44 right-4  bg-purple-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50">
        <div className="p-2 border border-slate-300 w-fit rounded-lg">
          <FaRegHeart className="text-white font-bold" />
        </div>
      </div>
      <div className="absolute top-44 left-4">
        {rare ? (
          <Badge className="px-3 rounded-2xl border border-[#e2e2e2]bg-clip-padding backdrop-filter backdrop-blur-sm bg-white text-sm  text-purple-400 font-semibold">
            <BsLightbulb className="inline" /> Rare Find
          </Badge>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default HotelCardSm;
