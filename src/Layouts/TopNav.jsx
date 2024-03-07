import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { RiHome6Line, RiCheckboxMultipleLine } from "react-icons/ri";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { RxLayers } from "react-icons/rx";
import { PiFlagBannerBold } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { LiaLifeRing } from "react-icons/lia";
import { FiSettings } from "react-icons/fi";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

const TopNav = () => {
  return (
    <div className="pt-2 px-3">
      <div className="flex justify-between items-center">
        {/* brand logo */}
        <div className="flex gap-x-2 items-center">
          <div className="border border-[#e2e2e2] rounded-xl p-1 relative lg:block md:block ">
            <img className="h-7 w-7" src="/round.png" alt="" />
            <div className="absolute h-[50%] w-full bg-indigo-400 rounded-b-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 bottom-0 left-0"></div>
          </div>
          <p className="text-xl font-bold">Untitled Ui</p>
        </div>
        <div>
          <Sheet>
            <SheetTrigger>
              <CiMenuFries />
            </SheetTrigger>
            <SheetContent className="w-[260px] pb-[10px]">
              <div className="pt-5 flex flex-col justify-between items-start min-h-[100vh] pb-5">
                {/* upper navigations */}
                <div className="px-3 flex flex-col items-center gap-y-6">
                  <RiHome6Line className="text-2xl" />
                  <HiOutlineChartSquareBar className="text-2xl" />
                  <RxLayers className="text-2xl" />
                  <RiCheckboxMultipleLine className="text-2xl" />
                  <PiFlagBannerBold className="text-2xl" />
                  <FiUsers className="text-2xl" />
                </div>
                {/* loweer navigations */}
                <div className="px-3 flex flex-col justify-between items-center gap-y-5 pb-5 mt-auto">
                  <LiaLifeRing className="text-2xl" />
                  <FiSettings className="text-xl" />

                  {/* avatar */}
                  <Avatar className="h-10 w-10 border rounded-full">
                    <AvatarImage
                      className="border rounded-full"
                      src="https://github.com/shadcn.png"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
