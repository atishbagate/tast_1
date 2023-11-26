import { Outlet } from "react-router-dom";

export default function MainLayoutRenderOutlet() {
  return (
    <div className="ml-[15%] mt-[4%] p-2">
        <Outlet />
    </div>
  )
}
