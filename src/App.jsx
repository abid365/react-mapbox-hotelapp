import { Outlet } from "react-router-dom";
import { Button } from "./components/ui/button";
import Map from "./Layouts/Map";
import SideNav from "./Layouts/SideNav";

function App() {
  return (
    <div className="grid lg:grid-cols-12 border border-red-400">
      <div className="border-2 border-emerald-400 w-fit h-screen">
        <SideNav />
      </div>
      <div className="col-span-7 scroll-auto w-100 h-auto">
        <Outlet />
      </div>
      <div className="border-2 border-indigo-400 col-span-4 h-screen">
        <Map />
      </div>
    </div>
  );
}

export default App;
