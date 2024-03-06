import { Outlet } from "react-router-dom";
import SideNav from "./Layouts/SideNav";
import MapOpenLayer from "./Layouts/MapOpenLayer";

function App() {
  return (
    <div className="grid lg:grid-cols-12">
      <div className="border-2 border-slate-r-400 w-fit h-screen sticky top-0">
        <SideNav />
      </div>
      <div className="col-span-7 scroll-auto w-100 h-auto sticky top-0">
        <Outlet />
      </div>
      <div className="border-2 border-indigo-400 col-span-4 h-screen sticky top-0">
        <MapOpenLayer />
      </div>
    </div>
  );
}

export default App;
