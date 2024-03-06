import { Outlet } from "react-router-dom";
import SideNav from "./Layouts/SideNav";
import MapOpenLayer from "./Layouts/MapOpenLayer";

function App() {
  return (
    <div className="grid lg:grid-cols-12">
      <div className="border-r border-[#e2e2e2] w-fit h-screen sticky top-0">
        <SideNav />
      </div>
      <div className="col-span-7 scroll-auto w-100 h-auto sticky top-0 bg-white">
        <Outlet />
      </div>
      <div className="border-l pl-2 border-[#e2e2e2] col-span-4 h-screen sticky top-0  object-cover overflow-hidden">
        <MapOpenLayer />
      </div>
    </div>
  );
}

export default App;
