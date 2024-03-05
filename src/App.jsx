import { Outlet } from "react-router-dom";
import { Button } from "./components/ui/button";
import Map from "./Layouts/Map";
import SideNav from "./Layouts/SideNav";

function App() {
  return (
    <div className="flex">
      <div>
        <SideNav />
      </div>
      <Outlet />
      <div>
        <Map />
      </div>
    </div>
  );
}

export default App;
