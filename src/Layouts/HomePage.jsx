import React from "react";
import data from "../constants/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BsFilter } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FaStar, FaRegStar, FaWifi, FaRegHeart } from "react-icons/fa";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
import HotelCard from "./Includes/HotelCard";

const HomePage = () => {
  return (
    <div className="pr-4">
      <div className="top-0 h-auto sticky z-20 bg-white mt-4 pt-4 pb-5">
        {/* toplevel text area */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">{data.title}</h1>
            <p className="text-sm">{data.desc}</p>
          </div>
          {/* buttons */}
          <div className="flex gap-x-3">
            <Button className="text-sm border border-[#e2e2e2] bg-white text-slate-800 hover:text-white px-4">
              Share
            </Button>
            <Button className="bg-purple-600">
              <FaRegStar className="text-md inline-block mr-2" /> Save search
            </Button>
          </div>
        </div>
        {/* ----------------------------------- */}
        {/* start of action buttons */}
        <div className="pt-5 flex justify-between items-start">
          {/* dropdown actions */}
          <div className="flex gap-x-5 items-center">
            {/* country dropdown */}
            <Select>
              <SelectTrigger className="w-[140px] h-[40px] border border-slate-300">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* date range dropdown */}
            <Select>
              <SelectTrigger className="w-[180px] h-[40px] border border-slate-300">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* pricing dropdown */}
            <Select>
              <SelectTrigger className="w-[120px] h-[40px] border border-slate-300">
                <SelectValue placeholder="$ Any price" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>$5 AUD</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* filter action */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="font-semibold text-sm text-slate-700 border border-slate-400 px-[8px] py-[5px] rounded-md ">
                <BsFilter className="text-lg inline" /> More filters
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {/* ----------------------------------- */}
        {/* search */}
        <div className="pt-3">
          <div className="flex w-full  items-center space-x-2 relative">
            <Input
              type="search"
              className="border border-slate-300"
              placeholder="     Search"
            />
            <IoIosSearch className="absolute text-slate-400" />
            <Button className="bg-white text-slate-700 border border-slate-300 hover:text-white">
              Clear
            </Button>
            <Button
              type="submit"
              className="border border-slate-300 px-5 bg-purple-600"
            >
              Search
            </Button>
          </div>
        </div>
        {/* ----------------------------------- */}
        {/* sort */}
        <div className="pt-6 text-slate-700">
          <Button className="border border-r-0 border-slate-300 text-slate-700 bg-white rounded-r-none h-[34px] shadow-sm hover:text-white">
            Sort by date
          </Button>
          <Button className="border border-l-1 border-slate-300 bg-white text-slate-700 rounded-l-none h-[34px] shadow-sm hover:text-white">
            Sort by price
          </Button>
        </div>
        {/* ---------------------------------- */}
      </div>
      {/* list of hotels */}
      <div className="pt-4 -z-10 grid grid-cols-1 gap-y-2">
        {data.apartments.map((item, i) => (
          <HotelCard
            key={i}
            title={item.highlight}
            heading={item.title}
            rating={item.rating}
            review={item.reviews}
            bed={item.bed}
            location={item.location}
            wifi={item.wifi}
            price={item.price}
            image={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
