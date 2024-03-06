import React from "react";
import data from "../constants/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BsFilter } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FaStar, FaRegStar, FaWifi } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import { HiOutlineHome } from "react-icons/hi";
import Rating from "react-rating";
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

const HomePage = () => {
  return (
    <div className="pt-5 pr-4">
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
      {/* list of hotels */}
      <div className="pt-4">
        <Card className="p-3 flex items-start gap-x-3 relative">
          <div>
            <img
              className="h-32 w-auto rounded-md"
              src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/01/hotelmemo.jpg"
              alt=""
            />
          </div>
          <div className="w-full flex-col justify-between">
            <div>
              <p className="text-sm font-semibold text-purple-500">
                Entire apartment rental in collingwood
              </p>
              <h1 className="font-sans font-semibold text-slate-800">
                A stylish 32 sqrft apartment with lala
              </h1>
            </div>
            {/* review */}
            <div className="flex gap-x-4 items-center pt-5">
              <Rating
                placeholderRating={4.5}
                emptySymbol={<FaRegStar className="text-yellow-300" />}
                placeholderSymbol={<FaStar className="text-yellow-300" />}
                fullSymbol={<FaStar className="text-yellow-300" />}
                readonly
              />
              <p className="font-bold text-sm">4.5</p>
              <p className="text-slate-500 text-sm">202 reviews</p>
            </div>
            {/* card footer */}
            <div className="flex justify-between mt-3">
              {/* features */}
              <div className="flex gap-x-4">
                <div className="flex gap-x-2 items-center text-slate-700 font-semibold">
                  <TiLocationOutline className="inline-block" />
                  <span className="text-sm">Collingwood VC</span>
                </div>
                <div className="flex gap-x-2 items-center text-slate-700 font-semibold">
                  <HiOutlineHome className="inline-block" />
                  <span className="text-sm">1 Bed</span>
                </div>
                <div className="flex gap-x-2 items-center text-slate-700 font-semibold">
                  <FaWifi className="inline-block" />
                  <span className="text-sm">WiFI</span>
                </div>
              </div>
              {/* price */}
              <div>
                <h1 className="text-slate-800 font-bold text-lg">
                  $540{" "}
                  <span className="text-slate-400 font-normal text-xs">
                    AUD total
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
